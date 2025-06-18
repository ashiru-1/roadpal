'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { quizQuestions, careerWeights } from '../data/quiz';
import { careerPaths } from '../data/careers';
import { QuizAnswer, QuizResult, CareerPath } from '../types/career';

interface CareerQuizProps {
  onComplete: (result: QuizResult) => void;
  onBack: () => void;
}

export default function CareerQuiz({ onComplete, onBack }: CareerQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [progress, setProgress] = useState(0);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswer = (answer: string | number | string[]) => {
    const newAnswers = [...answers];
    const existingIndex = newAnswers.findIndex(a => a.questionId === currentQuestion.id);
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex].answer = answer;
    } else {
      newAnswers.push({ questionId: currentQuestion.id, answer });
    }
    
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setProgress(((currentQuestionIndex + 1) / quizQuestions.length) * 100);
    } else {
      // Calculate results
      const result = calculateResults(answers);
      onComplete(result);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setProgress(((currentQuestionIndex - 1) / quizQuestions.length) * 100);
    }
  };

  const getCurrentAnswer = () => {
    const answer = answers.find(a => a.questionId === currentQuestion.id);
    return answer?.answer;
  };

  const calculateResults = (userAnswers: QuizAnswer[]): QuizResult => {
    const careerScores: { [key: string]: number } = {};
    
    // Initialize scores
    careerPaths.forEach(career => {
      careerScores[career.id] = 0;
    });

    // Calculate scores based on answers
    userAnswers.forEach(answer => {
      const question = quizQuestions.find(q => q.id === answer.questionId);
      if (!question) return;

      Object.keys(careerWeights).forEach(careerId => {
        const weights = careerWeights[careerId as keyof typeof careerWeights];
        const questionWeights = weights[answer.questionId as keyof typeof weights];
        
        if (questionWeights) {
          let score = 0;
          
          if (Array.isArray(questionWeights)) {
            // Scale question
            const scaleValue = answer.answer as number;
            score = questionWeights[scaleValue] || 0;
          } else if (typeof questionWeights === 'object') {
            // Multiple choice or checkbox
            if (Array.isArray(answer.answer)) {
              // Checkbox
              (answer.answer as string[]).forEach(option => {
                score += (questionWeights as Record<string, number>)[option] || 0;
              });
            } else {
              // Multiple choice
              score = (questionWeights as Record<string, number>)[answer.answer as string] || 0;
            }
          }
          
          careerScores[careerId] += score;
        }
      });
    });

    // Normalize scores and find top careers
    const maxScore = Math.max(...Object.values(careerScores));
    const normalizedScores = Object.keys(careerScores).map(careerId => ({
      careerId,
      score: maxScore > 0 ? careerScores[careerId] / maxScore : 0
    }));

    normalizedScores.sort((a, b) => b.score - a.score);

    // Get top careers
    const primaryCareer = careerPaths.find(c => c.id === normalizedScores[0].careerId)!;
    primaryCareer.matchScore = normalizedScores[0].score;
    
    const secondaryCareers = normalizedScores.slice(1, 4).map(item => {
      const career = careerPaths.find(c => c.id === item.careerId)!;
      career.matchScore = item.score;
      return career;
    });

    // Generate strengths and recommendations
    const strengths = generateStrengths(userAnswers, primaryCareer);
    const recommendations = generateRecommendations(userAnswers, primaryCareer);

    return {
      primaryCareer,
      secondaryCareers,
      answers: userAnswers,
      strengths,
      recommendations,
      totalQuestions: quizQuestions.length,
      completedAt: new Date()
    };
  };

  const generateStrengths = (userAnswers: QuizAnswer[], career: CareerPath): string[] => {
    const strengths: string[] = [];
    
    // Analyze answers to find strengths
    userAnswers.forEach(answer => {
      const question = quizQuestions.find(q => q.id === answer.questionId);
      if (!question) return;

      if (question.id === 'programming-experience' && answer.answer !== 'No experience') {
        strengths.push('Programming experience');
      }
      
      if (question.id === 'math-comfort' && (answer.answer as number) >= 3) {
        strengths.push('Strong mathematical foundation');
      }
      
      if (question.id === 'tech-interests' && Array.isArray(answer.answer)) {
        const interests = answer.answer as string[];
        if (interests.includes('Artificial Intelligence & Machine Learning')) {
          strengths.push('Interest in AI/ML');
        }
        if (interests.includes('Data & Analytics')) {
          strengths.push('Data-driven mindset');
        }
      }
    });

    return strengths.length > 0 ? strengths : ['Adaptable learner', 'Problem-solving mindset'];
  };

  const generateRecommendations = (userAnswers: QuizAnswer[], career: CareerPath): string[] => {
    const recommendations: string[] = [];
    
    // Check for areas that need improvement
    const programmingExp = userAnswers.find(a => a.questionId === 'programming-experience');
    if (programmingExp?.answer === 'No experience') {
      recommendations.push('Start with foundational programming courses');
    }
    
    const mathComfort = userAnswers.find(a => a.questionId === 'math-comfort');
    if (mathComfort && (mathComfort.answer as number) < 3) {
      recommendations.push('Strengthen mathematical and statistical skills');
    }
    
    const timeAvailability = userAnswers.find(a => a.questionId === 'time-availability');
    if (timeAvailability?.answer === 'Less than 5 hours') {
      recommendations.push('Consider dedicating more time to learning for faster progress');
    }

    recommendations.push('Build a portfolio of projects to showcase your skills');
    recommendations.push('Network with professionals in your target field');
    
    return recommendations;
  };

  const renderQuestion = () => {
    const currentAnswer = getCurrentAnswer();

    switch (currentQuestion.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-4">
            {currentQuestion.options?.map((option, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleAnswer(option)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                  currentAnswer === option
                    ? 'border-purple-500 bg-purple-50 text-black'
                    : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50 text-black'
                }`}
              >
                {option}
              </motion.button>
            ))}
          </div>
        );

      case 'checkbox':
        const selectedOptions = (currentAnswer as string[]) || [];
        return (
          <div className="space-y-3">
            {currentQuestion.options?.map((option, index) => (
              <motion.label
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:bg-gray-50 text-black"
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={(e) => {
                    const newSelection = e.target.checked
                      ? [...selectedOptions, option]
                      : selectedOptions.filter(item => item !== option);
                    handleAnswer(newSelection);
                  }}
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <span className="text-black">{option}</span>
              </motion.label>
            ))}
          </div>
        );

      case 'scale':
        return (
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <span>Not at all</span>
              <span>Very much</span>
            </div>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <motion.button
                  key={value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: value * 0.1 }}
                  onClick={() => handleAnswer(value)}
                  className={`flex-1 py-3 rounded-lg border-2 transition-all duration-200 ${
                    currentAnswer === value
                      ? 'border-purple-500 bg-purple-500 text-white'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                  }`}
                >
                  {value}
                </motion.button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <div className="text-right">
            <div className="text-sm text-gray-600">
              Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {Math.round(progress)}% Complete
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <motion.div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {currentQuestion.question}
            </h2>
            {renderQuestion()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${
              currentQuestionIndex === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!getCurrentAnswer()}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${
              !getCurrentAnswer()
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
            }`}
          >
            {currentQuestionIndex === quizQuestions.length - 1 ? (
              <>
                Get Results
                <CheckCircle className="w-5 h-5" />
              </>
            ) : (
              <>
                Next
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
} 
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Database, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette,
  ArrowRight
} from 'lucide-react';
import CareerQuiz from './components/CareerQuiz';
import CareerResult from './components/CareerResult';
import { QuizResult } from './types/career';

export default function TechCareerExplorer() {
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const handleQuizComplete = (result: QuizResult) => {
    setQuizResult(result);
    setCurrentStep('result');
  };

  const handleStartOver = () => {
    setCurrentStep('intro');
    setQuizResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {currentStep === 'intro' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-5xl font-bold text-white mb-4">
                RoadPal
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover your perfect tech niche through our intelligent career assessment
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              {[
                { icon: Brain, title: 'AI/ML Engineer', color: 'from-purple-500 to-pink-500' },
                { icon: Code, title: 'Full Stack Developer', color: 'from-blue-500 to-cyan-500' },
                { icon: Database, title: 'Data Engineer', color: 'from-green-500 to-emerald-500' },
                { icon: Shield, title: 'Cybersecurity Expert', color: 'from-red-500 to-orange-500' },
                { icon: Smartphone, title: 'Mobile Developer', color: 'from-indigo-500 to-purple-500' },
                { icon: Globe, title: 'DevOps Engineer', color: 'from-yellow-500 to-orange-500' },
                { icon: BarChart3, title: 'Data Scientist', color: 'from-teal-500 to-blue-500' },
                { icon: Palette, title: 'UX/UI Designer', color: 'from-pink-500 to-rose-500' },
              ].map((career, index) => (
                <motion.div
                  key={career.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`bg-gradient-to-br ${career.color} p-6 rounded-xl text-white text-center hover:scale-105 transition-transform cursor-pointer`}
                >
                  <career.icon className="w-12 h-12 mx-auto mb-3" />
                  <h3 className="font-semibold">{career.title}</h3>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onClick={() => setCurrentStep('quiz')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Start Your Career Assessment
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-gray-400"
            >
              <p className="text-sm">
                ✓ Personalized career recommendations based on your skills and interests
              </p>
              <p className="text-sm">
                ✓ Detailed roadmaps with learning resources and salary insights
              </p>
              <p className="text-sm">
                ✓ Export your results as PDF or share with others
              </p>
            </motion.div>
          </motion.div>
        )}

        {currentStep === 'quiz' && (
          <CareerQuiz onComplete={handleQuizComplete} onBack={() => setCurrentStep('intro')} />
        )}

        {currentStep === 'result' && quizResult && (
          <CareerResult result={quizResult} onStartOver={handleStartOver} />
        )}
      </div>
    </div>
  );
}

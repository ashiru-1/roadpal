'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Share2, 
  ArrowLeft, 
  Star, 
  DollarSign, 
  Clock, 
  BookOpen,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Users,
  Building
} from 'lucide-react';
import { QuizResult } from '../types/career';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface CareerResultProps {
  result: QuizResult;
  onStartOver: () => void;
}

export default function CareerResult({ result, onStartOver }: CareerResultProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'roadmap' | 'resources' | 'jobs'>('overview');
  const resultRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = async () => {
    if (!resultRef.current) return;

    try {
      const canvas = await html2canvas(resultRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`tech-career-explorer-${result.primaryCareer.title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Tech Career Recommendation',
          text: `I got recommended as a ${result.primaryCareer.title} from Tech Career Explorer!`,
          url: window.location.href
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: () => React.JSX.Element } = {
      Brain: () => <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">🧠</div>,
      Code: () => <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">💻</div>,
      Database: () => <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white">🗄️</div>,
      Shield: () => <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white">🛡️</div>,
      Smartphone: () => <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white">📱</div>,
      Globe: () => <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white">🌐</div>,
      BarChart3: () => <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center text-white">📊</div>,
      Palette: () => <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white">🎨</div>
    };
    return icons[iconName] || icons.Code;
  };

  const IconComponent = getIconComponent(result.primaryCareer.icon);

  return (
    <div className="max-w-6xl mx-auto">
      <div ref={resultRef} className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className={`bg-gradient-to-br ${result.primaryCareer.color} p-8 text-white`}>
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onStartOver}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Start Over
            </button>
            <div className="flex gap-3">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button
                onClick={handleExportPDF}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Download className="w-4 h-4" />
                Export PDF
              </button>
            </div>
          </div>

          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <IconComponent />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold mb-4"
            >
              {result.primaryCareer.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 mb-6"
            >
              {result.primaryCareer.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="text-lg font-semibold">
                  {Math.round(result.primaryCareer.matchScore * 100)}% Match
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex">
            {[
              { id: 'overview', label: 'Overview', icon: Star },
              { id: 'roadmap', label: 'Learning Roadmap', icon: TrendingUp },
              { id: 'resources', label: 'Resources', icon: BookOpen },
              { id: 'jobs', label: 'Job Opportunities', icon: Building }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {/* Strengths */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Strengths</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {result.strengths.map((strength, index) => (
                      <motion.div
                        key={strength}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{strength}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Salary Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Salary Range</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { level: 'Entry Level', salary: result.primaryCareer.salary.entry, icon: DollarSign },
                      { level: 'Mid Level', salary: result.primaryCareer.salary.mid, icon: TrendingUp },
                      { level: 'Senior Level', salary: result.primaryCareer.salary.senior, icon: Star }
                    ].map((item, index) => (
                      <motion.div
                        key={item.level}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-gray-50 rounded-lg text-center"
                      >
                        <item.icon className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">{item.level}</div>
                        <div className="text-lg font-bold text-purple-600">{item.salary}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Key Skills */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.primaryCareer.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommendations</h3>
                  <div className="space-y-3">
                    {result.recommendations.map((rec, index) => (
                      <motion.div
                        key={rec}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{rec}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Alternative Careers */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Alternative Career Paths</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {result.secondaryCareers.map((career, index) => (
                      <motion.div
                        key={career.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-4 rounded-lg border-2 ${career.color.replace('from-', 'border-').replace(' to-', '-')}`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          {getIconComponent(career.icon)()}
                          <div>
                            <div className="font-semibold text-gray-900">{career.title}</div>
                            <div className="text-sm text-gray-600">{Math.round(career.matchScore * 100)}% match</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{career.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'roadmap' && (
              <motion.div
                key="roadmap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Learning Roadmap</h3>
                {result.primaryCareer.roadmap.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-4 border-purple-500 pl-6 py-4"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {step.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{step.description}</p>
                    <div className="mb-3">
                      <div className="text-sm font-medium text-gray-900 mb-2">Skills to learn:</div>
                      <div className="flex flex-wrap gap-2">
                        {step.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    {step.resources.length > 0 && (
                      <div>
                        <div className="text-sm font-medium text-gray-900 mb-2">Recommended resources:</div>
                        <div className="space-y-2">
                          {step.resources.map((resource) => (
                            <a
                              key={resource.title}
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
                            >
                              <BookOpen className="w-4 h-4" />
                              <span className="text-sm">{resource.title}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'resources' && (
              <motion.div
                key="resources"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Learning Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {result.primaryCareer.resources.map((resource, index) => (
                    <motion.div
                      key={resource.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-purple-600" />
                          <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">
                            {resource.type}
                          </span>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          resource.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                          resource.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {resource.difficulty}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h4>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium transition-colors"
                      >
                        Access Resource
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'jobs' && (
              <motion.div
                key="jobs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Job Opportunities</h3>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Common Job Titles</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {result.primaryCareer.jobTitles.map((title, index) => (
                      <motion.div
                        key={title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <Users className="w-5 h-5 text-purple-600" />
                        <span className="text-gray-700">{title}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Top Companies Hiring</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {result.primaryCareer.companies.map((company, index) => (
                      <motion.div
                        key={company}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <Building className="w-5 h-5 text-purple-600" />
                        <span className="font-medium text-gray-900">{company}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 
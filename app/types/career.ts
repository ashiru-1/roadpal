export interface CareerPath {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  salary: {
    entry: string;
    mid: string;
    senior: string;
  };
  skills: string[];
  roadmap: RoadmapStep[];
  resources: Resource[];
  jobTitles: string[];
  companies: string[];
  matchScore: number;
}

export interface RoadmapStep {
  title: string;
  description: string;
  duration: string;
  skills: string[];
  resources: Resource[];
}

export interface Resource {
  title: string;
  type: 'course' | 'book' | 'website' | 'certification';
  url: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'scale' | 'checkbox';
  options?: string[];
  category: 'technical' | 'interests' | 'work-style' | 'goals';
}

export interface QuizAnswer {
  questionId: string;
  answer: string | number | string[];
}

export interface QuizResult {
  primaryCareer: CareerPath;
  secondaryCareers: CareerPath[];
  answers: QuizAnswer[];
  strengths: string[];
  recommendations: string[];
  totalQuestions: number;
  completedAt: Date;
} 
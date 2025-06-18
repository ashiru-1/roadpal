import { QuizQuestion } from '../types/career';

export const quizQuestions: QuizQuestion[] = [
  // Technical Skills & Experience
  {
    id: 'programming-experience',
    question: 'What is your current programming experience level?',
    type: 'multiple-choice',
    options: ['No experience', 'Beginner (1-6 months)', 'Intermediate (6 months - 2 years)', 'Advanced (2+ years)'],
    category: 'technical'
  },
  {
    id: 'preferred-languages',
    question: 'Which programming languages are you most comfortable with?',
    type: 'checkbox',
    options: ['Python', 'JavaScript', 'Java', 'C++', 'Swift', 'Kotlin', 'R', 'Go', 'Rust', 'None yet'],
    category: 'technical'
  },
  {
    id: 'math-comfort',
    question: 'How comfortable are you with mathematics and statistics?',
    type: 'scale',
    category: 'technical'
  },
  {
    id: 'problem-solving',
    question: 'How do you prefer to approach problem-solving?',
    type: 'multiple-choice',
    options: ['Analytical and data-driven', 'Creative and visual', 'Systematic and structured', 'Experimental and iterative'],
    category: 'technical'
  },

  // Interests & Passions
  {
    id: 'tech-interests',
    question: 'Which of these technology areas interest you most?',
    type: 'checkbox',
    options: ['Artificial Intelligence & Machine Learning', 'Web Development', 'Mobile Apps', 'Data & Analytics', 'Cybersecurity', 'Cloud & Infrastructure', 'User Experience Design', 'Game Development'],
    category: 'interests'
  },
  {
    id: 'industry-focus',
    question: 'What type of industry or application area appeals to you?',
    type: 'multiple-choice',
    options: ['Healthcare & Biotech', 'Finance & Fintech', 'E-commerce & Retail', 'Entertainment & Media', 'Education & EdTech', 'Social Impact & Non-profit', 'Startups & Innovation', 'Enterprise & Corporate'],
    category: 'interests'
  },
  {
    id: 'creative-vs-analytical',
    question: 'Do you prefer creative/design work or analytical/logical work?',
    type: 'scale',
    category: 'interests'
  },
  {
    id: 'impact-desire',
    question: 'What kind of impact do you want to make?',
    type: 'multiple-choice',
    options: ['Solve complex technical problems', 'Create beautiful user experiences', 'Protect systems and data', 'Build scalable infrastructure', 'Drive business decisions with data', 'Innovate with cutting-edge technology'],
    category: 'interests'
  },

  // Work Style & Environment
  {
    id: 'team-size',
    question: 'What team size do you prefer working in?',
    type: 'multiple-choice',
    options: ['Solo/Independent work', 'Small teams (2-5 people)', 'Medium teams (6-15 people)', 'Large teams (15+ people)'],
    category: 'work-style'
  },
  {
    id: 'work-environment',
    question: 'What work environment suits you best?',
    type: 'multiple-choice',
    options: ['Fast-paced startup', 'Stable corporate environment', 'Remote/flexible work', 'Research/academic setting', 'Consulting/client-facing'],
    category: 'work-style'
  },
  {
    id: 'learning-style',
    question: 'How do you prefer to learn new technologies?',
    type: 'multiple-choice',
    options: ['Hands-on projects', 'Structured courses', 'Reading documentation', 'Collaborating with others', 'Trial and error'],
    category: 'work-style'
  },
  {
    id: 'stress-tolerance',
    question: 'How do you handle high-pressure situations?',
    type: 'scale',
    category: 'work-style'
  },

  // Career Goals & Timeline
  {
    id: 'career-timeline',
    question: 'What is your timeline for transitioning into a tech career?',
    type: 'multiple-choice',
    options: ['Immediate (within 3 months)', 'Short-term (3-12 months)', 'Medium-term (1-2 years)', 'Long-term (2+ years)'],
    category: 'goals'
  },
  {
    id: 'salary-priority',
    question: 'How important is salary in your career decision?',
    type: 'scale',
    category: 'goals'
  },
  {
    id: 'growth-opportunities',
    question: 'What growth opportunities are most important to you?',
    type: 'checkbox',
    options: ['Technical skill development', 'Leadership roles', 'Industry recognition', 'Entrepreneurial opportunities', 'Work-life balance', 'International opportunities'],
    category: 'goals'
  },
  {
    id: 'work-life-balance',
    question: 'How important is work-life balance to you?',
    type: 'scale',
    category: 'goals'
  },

  // Additional Context
  {
    id: 'current-background',
    question: 'What is your current educational/professional background?',
    type: 'multiple-choice',
    options: ['Computer Science/Engineering', 'Other STEM field', 'Business/Finance', 'Arts/Design', 'Humanities/Social Sciences', 'No formal education', 'Other'],
    category: 'technical'
  },
  {
    id: 'time-availability',
    question: 'How much time can you dedicate to learning per week?',
    type: 'multiple-choice',
    options: ['Less than 5 hours', '5-10 hours', '10-20 hours', '20+ hours'],
    category: 'goals'
  },
  {
    id: 'risk-tolerance',
    question: 'How comfortable are you with career risk and uncertainty?',
    type: 'scale',
    category: 'work-style'
  }
];

export const careerWeights = {
  'ai-ml-engineer': {
    'programming-experience': [0, 0.3, 0.7, 1],
    'math-comfort': [0, 0.2, 0.5, 0.8, 1],
    'tech-interests': { 'Artificial Intelligence & Machine Learning': 1, 'Data & Analytics': 0.8 },
    'problem-solving': { 'Analytical and data-driven': 1, 'Experimental and iterative': 0.8 },
    'impact-desire': { 'Solve complex technical problems': 1, 'Innovate with cutting-edge technology': 0.9 },
    'current-background': { 'Computer Science/Engineering': 1, 'Other STEM field': 0.8 }
  },
  'full-stack-developer': {
    'programming-experience': [0, 0.4, 0.8, 1],
    'preferred-languages': { 'JavaScript': 1, 'Python': 0.8, 'Java': 0.7 },
    'tech-interests': { 'Web Development': 1, 'Mobile Apps': 0.6 },
    'problem-solving': { 'Systematic and structured': 1, 'Analytical and data-driven': 0.8 },
    'learning-style': { 'Hands-on projects': 1, 'Structured courses': 0.8 }
  },
  'data-engineer': {
    'programming-experience': [0, 0.3, 0.7, 1],
    'preferred-languages': { 'Python': 1, 'SQL': 1, 'Java': 0.7 },
    'tech-interests': { 'Data & Analytics': 1, 'Cloud & Infrastructure': 0.8 },
    'problem-solving': { 'Systematic and structured': 1, 'Analytical and data-driven': 0.9 },
    'work-environment': { 'Stable corporate environment': 0.8, 'Fast-paced startup': 0.7 }
  },
  'cybersecurity-expert': {
    'programming-experience': [0, 0.4, 0.8, 1],
    'tech-interests': { 'Cybersecurity': 1, 'Cloud & Infrastructure': 0.7 },
    'problem-solving': { 'Analytical and data-driven': 1, 'Systematic and structured': 0.9 },
    'impact-desire': { 'Protect systems and data': 1, 'Solve complex technical problems': 0.8 },
    'stress-tolerance': [0, 0.3, 0.6, 0.8, 1],
    'risk-tolerance': [0, 0.2, 0.5, 0.8, 1]
  },
  'mobile-developer': {
    'programming-experience': [0, 0.4, 0.8, 1],
    'preferred-languages': { 'Swift': 1, 'Kotlin': 1, 'JavaScript': 0.8 },
    'tech-interests': { 'Mobile Apps': 1, 'Web Development': 0.6 },
    'creative-vs-analytical': [0, 0.3, 0.6, 0.8, 1],
    'impact-desire': { 'Create beautiful user experiences': 0.9, 'Solve complex technical problems': 0.7 }
  },
  'devops-engineer': {
    'programming-experience': [0, 0.3, 0.7, 1],
    'preferred-languages': { 'Python': 1, 'Go': 0.8, 'Bash': 1 },
    'tech-interests': { 'Cloud & Infrastructure': 1, 'Cybersecurity': 0.7 },
    'problem-solving': { 'Systematic and structured': 1, 'Analytical and data-driven': 0.8 },
    'work-environment': { 'Fast-paced startup': 0.8, 'Stable corporate environment': 0.7 }
  },
  'data-scientist': {
    'programming-experience': [0, 0.3, 0.7, 1],
    'preferred-languages': { 'Python': 1, 'R': 1, 'SQL': 0.9 },
    'math-comfort': [0, 0.2, 0.5, 0.8, 1],
    'tech-interests': { 'Data & Analytics': 1, 'Artificial Intelligence & Machine Learning': 0.8 },
    'problem-solving': { 'Analytical and data-driven': 1, 'Experimental and iterative': 0.8 },
    'impact-desire': { 'Drive business decisions with data': 1, 'Solve complex technical problems': 0.8 }
  },
  'ux-ui-designer': {
    'programming-experience': [0, 0.2, 0.5, 0.8],
    'creative-vs-analytical': [0, 0.2, 0.5, 0.8, 1],
    'tech-interests': { 'User Experience Design': 1, 'Web Development': 0.6 },
    'problem-solving': { 'Creative and visual': 1, 'Experimental and iterative': 0.8 },
    'impact-desire': { 'Create beautiful user experiences': 1, 'Drive business decisions with data': 0.6 },
    'current-background': { 'Arts/Design': 1, 'Humanities/Social Sciences': 0.7 }
  }
}; 
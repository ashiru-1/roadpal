import { CareerPath } from '../types/career';

export const careerPaths: CareerPath[] = [
  {
    id: 'ai-ml-engineer',
    title: 'AI/ML Engineer',
    description: 'Build intelligent systems and machine learning models that solve complex problems',
    icon: 'Brain',
    color: 'from-purple-500 to-pink-500',
    salary: {
      entry: '$80,000 - $120,000',
      mid: '$120,000 - $180,000',
      senior: '$180,000 - $300,000+'
    },
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'Statistics', 'Data Analysis', 'MLOps'],
    roadmap: [
      {
        title: 'Foundation (3-6 months)',
        description: 'Learn Python programming and basic mathematics',
        duration: '3-6 months',
        skills: ['Python', 'Linear Algebra', 'Calculus', 'Statistics'],
        resources: [
          {
            title: 'Python for Data Science',
            type: 'course',
            url: 'https://www.coursera.org/specializations/python-data-science',
            description: 'Comprehensive Python course for data science',
            difficulty: 'beginner'
          }
        ]
      },
      {
        title: 'Machine Learning Basics (6-12 months)',
        description: 'Learn fundamental ML algorithms and techniques',
        duration: '6-12 months',
        skills: ['Scikit-learn', 'Supervised Learning', 'Unsupervised Learning', 'Feature Engineering'],
        resources: [
          {
            title: 'Machine Learning by Andrew Ng',
            type: 'course',
            url: 'https://www.coursera.org/learn/machine-learning',
            description: 'Classic ML course from Stanford',
            difficulty: 'intermediate'
          }
        ]
      },
      {
        title: 'Deep Learning (6-12 months)',
        description: 'Master neural networks and deep learning frameworks',
        duration: '6-12 months',
        skills: ['Neural Networks', 'TensorFlow', 'PyTorch', 'Computer Vision', 'NLP'],
        resources: [
          {
            title: 'Deep Learning Specialization',
            type: 'course',
            url: 'https://www.coursera.org/specializations/deep-learning',
            description: 'Comprehensive deep learning course',
            difficulty: 'advanced'
          }
        ]
      }
    ],
    resources: [
      {
        title: 'Hands-On Machine Learning',
        type: 'book',
        url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/',
        description: 'Practical ML book with code examples',
        difficulty: 'intermediate'
      },
      {
        title: 'Fast.ai',
        type: 'website',
        url: 'https://www.fast.ai/',
        description: 'Free deep learning courses',
        difficulty: 'intermediate'
      }
    ],
    jobTitles: ['Machine Learning Engineer', 'AI Engineer', 'ML Scientist', 'Deep Learning Engineer'],
    companies: ['Google', 'OpenAI', 'Microsoft', 'Meta', 'Amazon', 'Netflix'],
    matchScore: 0
  },
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    description: 'Build complete web applications from frontend to backend',
    icon: 'Code',
    color: 'from-blue-500 to-cyan-500',
    salary: {
      entry: '$60,000 - $90,000',
      mid: '$90,000 - $140,000',
      senior: '$140,000 - $200,000+'
    },
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'AWS'],
    roadmap: [
      {
        title: 'Frontend Fundamentals (3-6 months)',
        description: 'Learn HTML, CSS, and JavaScript',
        duration: '3-6 months',
        skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        resources: [
          {
            title: 'The Complete Web Developer Bootcamp',
            type: 'course',
            url: 'https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/',
            description: 'Complete web development course',
            difficulty: 'beginner'
          }
        ]
      },
      {
        title: 'Frontend Framework (3-6 months)',
        description: 'Master React or Vue.js',
        duration: '3-6 months',
        skills: ['React', 'State Management', 'Component Architecture', 'Hooks'],
        resources: [
          {
            title: 'React - The Complete Guide',
            type: 'course',
            url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
            description: 'Comprehensive React course',
            difficulty: 'intermediate'
          }
        ]
      },
      {
        title: 'Backend Development (6-12 months)',
        description: 'Learn server-side programming and databases',
        duration: '6-12 months',
        skills: ['Node.js', 'Express', 'SQL', 'NoSQL', 'APIs', 'Authentication'],
        resources: [
          {
            title: 'Node.js API Masterclass',
            type: 'course',
            url: 'https://www.udemy.com/course/nodejs-api-masterclass/',
            description: 'Build RESTful APIs with Node.js',
            difficulty: 'intermediate'
          }
        ]
      }
    ],
    resources: [
      {
        title: 'Eloquent JavaScript',
        type: 'book',
        url: 'https://eloquentjavascript.net/',
        description: 'Free JavaScript book',
        difficulty: 'intermediate'
      },
      {
        title: 'freeCodeCamp',
        type: 'website',
        url: 'https://www.freecodecamp.org/',
        description: 'Free coding curriculum',
        difficulty: 'beginner'
      }
    ],
    jobTitles: ['Full Stack Developer', 'Web Developer', 'Software Engineer', 'Frontend Developer'],
    companies: ['Netflix', 'Airbnb', 'Uber', 'Spotify', 'Shopify', 'Stripe'],
    matchScore: 0
  },
  {
    id: 'data-engineer',
    title: 'Data Engineer',
    description: 'Build and maintain data infrastructure and pipelines',
    icon: 'Database',
    color: 'from-green-500 to-emerald-500',
    salary: {
      entry: '$70,000 - $100,000',
      mid: '$100,000 - $150,000',
      senior: '$150,000 - $220,000+'
    },
    skills: ['Python', 'SQL', 'Apache Spark', 'Kafka', 'AWS', 'Docker', 'Kubernetes'],
    roadmap: [
      {
        title: 'Data Fundamentals (3-6 months)',
        description: 'Learn SQL and basic data concepts',
        duration: '3-6 months',
        skills: ['SQL', 'Database Design', 'Data Modeling', 'ETL'],
        resources: [
          {
            title: 'SQL for Data Science',
            type: 'course',
            url: 'https://www.udemy.com/course/sql-for-data-science/',
            description: 'SQL fundamentals for data work',
            difficulty: 'beginner'
          }
        ]
      },
      {
        title: 'Big Data Technologies (6-12 months)',
        description: 'Master distributed computing and data processing',
        duration: '6-12 months',
        skills: ['Apache Spark', 'Hadoop', 'Kafka', 'Airflow', 'Data Lakes'],
        resources: [
          {
            title: 'Apache Spark with Python',
            type: 'course',
            url: 'https://www.udemy.com/course/apache-spark-with-python/',
            description: 'Learn Spark for big data processing',
            difficulty: 'intermediate'
          }
        ]
      },
      {
        title: 'Cloud & DevOps (6-12 months)',
        description: 'Learn cloud platforms and infrastructure',
        duration: '6-12 months',
        skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
        resources: [
          {
            title: 'AWS Certified Solutions Architect',
            type: 'certification',
            url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
            description: 'AWS cloud certification',
            difficulty: 'intermediate'
          }
        ]
      }
    ],
    resources: [
      {
        title: 'Designing Data-Intensive Applications',
        type: 'book',
        url: 'https://dataintensive.net/',
        description: 'Essential book for data engineers',
        difficulty: 'advanced'
      },
      {
        title: 'DataCamp',
        type: 'website',
        url: 'https://www.datacamp.com/',
        description: 'Data science and engineering courses',
        difficulty: 'beginner'
      }
    ],
    jobTitles: ['Data Engineer', 'Big Data Engineer', 'ETL Developer', 'Data Infrastructure Engineer'],
    companies: ['Netflix', 'Uber', 'Airbnb', 'Spotify', 'Databricks', 'Snowflake'],
    matchScore: 0
  },
  {
    id: 'cybersecurity-expert',
    title: 'Cybersecurity Expert',
    description: 'Protect systems and networks from digital threats and attacks',
    icon: 'Shield',
    color: 'from-red-500 to-orange-500',
    salary: {
      entry: '$70,000 - $100,000',
      mid: '$100,000 - $150,000',
      senior: '$150,000 - $250,000+'
    },
    skills: ['Network Security', 'Penetration Testing', 'Incident Response', 'Cryptography', 'Compliance'],
    roadmap: [
      {
        title: 'Security Fundamentals (3-6 months)',
        description: 'Learn basic security concepts and networking',
        duration: '3-6 months',
        skills: ['Network Security', 'Security Principles', 'Threat Modeling', 'Risk Assessment'],
        resources: [
          {
            title: 'CompTIA Security+',
            type: 'certification',
            url: 'https://www.comptia.org/certifications/security',
            description: 'Entry-level security certification',
            difficulty: 'beginner'
          }
        ]
      },
      {
        title: 'Penetration Testing (6-12 months)',
        description: 'Learn ethical hacking and vulnerability assessment',
        duration: '6-12 months',
        skills: ['Penetration Testing', 'Vulnerability Assessment', 'Metasploit', 'Wireshark'],
        resources: [
          {
            title: 'Offensive Security Certified Professional',
            type: 'certification',
            url: 'https://www.offensive-security.com/pwk-oscp/',
            description: 'Hands-on penetration testing certification',
            difficulty: 'advanced'
          }
        ]
      },
      {
        title: 'Security Operations (6-12 months)',
        description: 'Master incident response and security monitoring',
        duration: '6-12 months',
        skills: ['SIEM', 'Incident Response', 'Forensics', 'Threat Intelligence'],
        resources: [
          {
            title: 'SANS SEC504',
            type: 'course',
            url: 'https://www.sans.org/courses/hacker-techniques-exploits-incident-handling/',
            description: 'Advanced incident handling course',
            difficulty: 'advanced'
          }
        ]
      }
    ],
    resources: [
      {
        title: 'The Web Application Hacker\'s Handbook',
        type: 'book',
        url: 'https://www.wiley.com/en-us/The+Web+Application+Hacker%27s+Handbook%3A+Finding+and+Exploiting+Security+Flaws%2C+2nd+Edition-p-9781118026472',
        description: 'Comprehensive web security guide',
        difficulty: 'advanced'
      },
      {
        title: 'TryHackMe',
        type: 'website',
        url: 'https://tryhackme.com/',
        description: 'Hands-on cybersecurity labs',
        difficulty: 'intermediate'
      }
    ],
    jobTitles: ['Security Engineer', 'Penetration Tester', 'Security Analyst', 'CISO'],
    companies: ['CrowdStrike', 'Palo Alto Networks', 'FireEye', 'Rapid7', 'Mandiant'],
    matchScore: 0
  },
  {
    id: 'mobile-developer',
    title: 'Mobile Developer',
    description: 'Create apps for iOS and Android platforms',
    icon: 'Smartphone',
    color: 'from-indigo-500 to-purple-500',
    salary: {
      entry: '$60,000 - $90,000',
      mid: '$90,000 - $140,000',
      senior: '$140,000 - $200,000+'
    },
    skills: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Mobile UI/UX', 'App Store'],
    roadmap: [
      {
        title: 'iOS Development (6-12 months)',
        description: 'Learn Swift and iOS development',
        duration: '6-12 months',
        skills: ['Swift', 'UIKit', 'SwiftUI', 'Xcode', 'iOS Design Patterns'],
        resources: [
          {
            title: 'iOS App Development Bootcamp',
            type: 'course',
            url: 'https://www.udemy.com/course/ios-13-app-development-bootcamp/',
            description: 'Complete iOS development course',
            difficulty: 'beginner'
          }
        ]
      },
      {
        title: 'Android Development (6-12 months)',
        description: 'Learn Kotlin and Android development',
        duration: '6-12 months',
        skills: ['Kotlin', 'Android SDK', 'Jetpack Compose', 'Android Studio'],
        resources: [
          {
            title: 'Android App Development Masterclass',
            type: 'course',
            url: 'https://www.udemy.com/course/android-app-development-masterclass/',
            description: 'Complete Android development course',
            difficulty: 'intermediate'
          }
        ]
      },
      {
        title: 'Cross-Platform (3-6 months)',
        description: 'Learn React Native or Flutter',
        duration: '3-6 months',
        skills: ['React Native', 'Flutter', 'Cross-Platform Development'],
        resources: [
          {
            title: 'React Native - The Practical Guide',
            type: 'course',
            url: 'https://www.udemy.com/course/react-native-the-practical-guide/',
            description: 'React Native development course',
            difficulty: 'intermediate'
          }
        ]
      }
    ],
    resources: [
      {
        title: 'iOS Programming: The Big Nerd Ranch Guide',
        type: 'book',
        url: 'https://www.bignerdranch.com/books/ios-programming-the-big-nerd-ranch-guide-7th-edition/',
        description: 'Comprehensive iOS development guide',
        difficulty: 'intermediate'
      },
      {
        title: 'Ray Wenderlich',
        type: 'website',
        url: 'https://www.raywenderlich.com/',
        description: 'Mobile development tutorials',
        difficulty: 'intermediate'
      }
    ],
    jobTitles: ['iOS Developer', 'Android Developer', 'Mobile App Developer', 'React Native Developer'],
    companies: ['Apple', 'Google', 'Uber', 'Instagram', 'TikTok', 'Snapchat'],
    matchScore: 0
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    description: 'Bridge development and operations with automation and infrastructure',
    icon: 'Globe',
    color: 'from-yellow-500 to-orange-500',
    salary: {
      entry: '$70,000 - $100,000',
      mid: '$100,000 - $150,000',
      senior: '$150,000 - $220,000+'
    },
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Monitoring', 'Linux'],
    roadmap: [
      {
        title: 'Linux & Scripting (3-6 months)',
        description: 'Master Linux administration and scripting',
        duration: '3-6 months',
        skills: ['Linux', 'Bash Scripting', 'Python', 'System Administration'],
        resources: [
          {
            title: 'Linux Administration Bootcamp',
            type: 'course',
            url: 'https://www.udemy.com/course/linux-administration-bootcamp/',
            description: 'Complete Linux administration course',
            difficulty: 'beginner'
          }
        ]
      },
      {
        title: 'Containerization (3-6 months)',
        description: 'Learn Docker and container orchestration',
        duration: '3-6 months',
        skills: ['Docker', 'Kubernetes', 'Container Orchestration', 'Microservices'],
        resources: [
          {
            title: 'Docker & Kubernetes: The Practical Guide',
            type: 'course',
            url: 'https://www.udemy.com/course/docker-kubernetes-the-practical-guide/',
            description: 'Docker and Kubernetes course',
            difficulty: 'intermediate'
          }
        ]
      },
      {
        title: 'Cloud & Infrastructure (6-12 months)',
        description: 'Master cloud platforms and infrastructure as code',
        duration: '6-12 months',
        skills: ['AWS', 'Terraform', 'CI/CD', 'Monitoring', 'Security'],
        resources: [
          {
            title: 'AWS Certified DevOps Engineer',
            type: 'certification',
            url: 'https://aws.amazon.com/certification/certified-devops-engineer-professional/',
            description: 'AWS DevOps certification',
            difficulty: 'advanced'
          }
        ]
      }
    ],
    resources: [
      {
        title: 'The Phoenix Project',
        type: 'book',
        url: 'https://www.oreilly.com/library/view/the-phoenix-project/9781457191350/',
        description: 'DevOps culture and practices',
        difficulty: 'intermediate'
      },
      {
        title: 'Kubernetes.io',
        type: 'website',
        url: 'https://kubernetes.io/docs/tutorials/',
        description: 'Official Kubernetes tutorials',
        difficulty: 'intermediate'
      }
    ],
    jobTitles: ['DevOps Engineer', 'Site Reliability Engineer', 'Platform Engineer', 'Infrastructure Engineer'],
    companies: ['Netflix', 'Google', 'Amazon', 'Microsoft', 'GitLab', 'HashiCorp'],
    matchScore: 0
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Extract insights from data to drive business decisions',
    icon: 'BarChart3',
    color: 'from-teal-500 to-blue-500',
    salary: {
      entry: '$80,000 - $120,000',
      mid: '$120,000 - $180,000',
      senior: '$180,000 - $250,000+'
    },
    skills: ['Python', 'R', 'Statistics', 'Machine Learning', 'SQL', 'Data Visualization'],
    roadmap: [
      {
        title: 'Statistics & Mathematics (3-6 months)',
        description: 'Build strong foundation in statistics and math',
        duration: '3-6 months',
        skills: ['Statistics', 'Probability', 'Linear Algebra', 'Calculus'],
        resources: [
          {
            title: 'Statistics with Python',
            type: 'course',
            url: 'https://www.coursera.org/specializations/statistics-with-python',
            description: 'Statistics course using Python',
            difficulty: 'intermediate'
          }
        ]
      },
      {
        title: 'Data Analysis (6-12 months)',
        description: 'Learn data manipulation and analysis',
        duration: '6-12 months',
        skills: ['Pandas', 'NumPy', 'SQL', 'Data Cleaning', 'Exploratory Data Analysis'],
        resources: [
          {
            title: 'Data Analysis with Python',
            type: 'course',
            url: 'https://www.coursera.org/learn/data-analysis-with-python',
            description: 'Data analysis fundamentals',
            difficulty: 'intermediate'
          }
        ]
      },
      {
        title: 'Machine Learning (6-12 months)',
        description: 'Apply ML algorithms to solve business problems',
        duration: '6-12 months',
        skills: ['Scikit-learn', 'Model Evaluation', 'Feature Engineering', 'Business Intelligence'],
        resources: [
          {
            title: 'Applied Data Science with Python',
            type: 'course',
            url: 'https://www.coursera.org/specializations/data-science-python',
            description: 'Applied data science course',
            difficulty: 'advanced'
          }
        ]
      }
    ],
    resources: [
      {
        title: 'Python for Data Analysis',
        type: 'book',
        url: 'https://www.oreilly.com/library/view/python-for-data/9781491957653/',
        description: 'Essential Python data analysis book',
        difficulty: 'intermediate'
      },
      {
        title: 'Kaggle',
        type: 'website',
        url: 'https://www.kaggle.com/',
        description: 'Data science competitions and datasets',
        difficulty: 'intermediate'
      }
    ],
    jobTitles: ['Data Scientist', 'Analytics Manager', 'Business Intelligence Analyst', 'Quantitative Analyst'],
    companies: ['Google', 'Netflix', 'Spotify', 'Airbnb', 'Uber', 'Facebook'],
    matchScore: 0
  },
  {
    id: 'ux-ui-designer',
    title: 'UX/UI Designer',
    description: 'Create user-centered digital experiences and interfaces',
    icon: 'Palette',
    color: 'from-pink-500 to-rose-500',
    salary: {
      entry: '$50,000 - $80,000',
      mid: '$80,000 - $130,000',
      senior: '$130,000 - $180,000+'
    },
    skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping', 'Design Systems'],
    roadmap: [
      {
        title: 'Design Fundamentals (3-6 months)',
        description: 'Learn design principles and tools',
        duration: '3-6 months',
        skills: ['Design Principles', 'Color Theory', 'Typography', 'Figma', 'Adobe XD'],
        resources: [
          {
            title: 'UI/UX Design Bootcamp',
            type: 'course',
            url: 'https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/',
            description: 'Complete UI/UX design course',
            difficulty: 'beginner'
          }
        ]
      },
      {
        title: 'User Research (3-6 months)',
        description: 'Master user research and testing methods',
        duration: '3-6 months',
        skills: ['User Research', 'Usability Testing', 'Personas', 'User Journey Mapping'],
        resources: [
          {
            title: 'User Experience Research & Design',
            type: 'course',
            url: 'https://www.coursera.org/specializations/user-experience-research-design',
            description: 'UX research and design specialization',
            difficulty: 'intermediate'
          }
        ]
      },
      {
        title: 'Advanced Design (6-12 months)',
        description: 'Learn advanced prototyping and design systems',
        duration: '6-12 months',
        skills: ['Advanced Prototyping', 'Design Systems', 'Accessibility', 'Design Leadership'],
        resources: [
          {
            title: 'Advanced UI/UX Design',
            type: 'course',
            url: 'https://www.udemy.com/course/advanced-ui-ux-design/',
            description: 'Advanced design techniques',
            difficulty: 'advanced'
          }
        ]
      }
    ],
    resources: [
      {
        title: 'Don\'t Make Me Think',
        type: 'book',
        url: 'https://www.sensible.com/dont-make-me-think/',
        description: 'Classic usability book',
        difficulty: 'beginner'
      },
      {
        title: 'Dribbble',
        type: 'website',
        url: 'https://dribbble.com/',
        description: 'Design inspiration and community',
        difficulty: 'intermediate'
      }
    ],
    jobTitles: ['UX Designer', 'UI Designer', 'Product Designer', 'Interaction Designer'],
    companies: ['Apple', 'Google', 'Airbnb', 'Figma', 'Adobe', 'Spotify'],
    matchScore: 0
  }
]; 
# Roadpal 🚀

A comprehensive career assessment tool that helps users discover their perfect tech niche through an intelligent quiz system. Get personalized career recommendations, learning roadmaps, salary insights, and job opportunities.

## ✨ Features

### 🎯 **Smart Career Assessment**
- **Comprehensive Quiz**: 15+ questions covering technical skills, interests, work style, and career goals
- **Intelligent Matching**: Advanced algorithm that matches your profile to 8 different tech career paths
- **Personalized Results**: Get your strengths, recommendations, and alternative career options

### 📊 **Detailed Career Insights**
- **Salary Information**: Entry, mid, and senior level salary ranges for each career
- **Learning Roadmaps**: Step-by-step learning paths with timeframes and skills
- **Resource Library**: Curated courses, books, websites, and certifications
- **Job Opportunities**: Common job titles and top companies hiring

### 🎨 **Beautiful User Experience**
- **Modern UI**: Stunning gradient designs and smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Interactive Elements**: Engaging quiz interface with progress tracking
- **Smooth Transitions**: Framer Motion animations throughout the app

### 📱 **Export & Share**
- **PDF Export**: Download your complete career report as a professional PDF
- **Social Sharing**: Share your results with friends and colleagues
- **Printable Results**: Clean, formatted output perfect for printing

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **PDF Generation**: jsPDF + html2canvas
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd roadpal
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Career Paths

The app currently supports 8 major tech career paths:

1. **AI/ML Engineer** 🤖
   - Machine learning, deep learning, neural networks
   - Python, TensorFlow, PyTorch, statistics

2. **Full Stack Developer** 💻
   - Web development, frontend & backend
   - JavaScript, React, Node.js, databases

3. **Data Engineer** 🗄️
   - Data infrastructure, pipelines, big data
   - Python, SQL, Apache Spark, cloud platforms

4. **Cybersecurity Expert** 🛡️
   - Security, penetration testing, incident response
   - Network security, ethical hacking, compliance

5. **Mobile Developer** 📱
   - iOS/Android app development
   - Swift, Kotlin, React Native, Flutter

6. **DevOps Engineer** 🌐
   - Infrastructure, automation, cloud platforms
   - Docker, Kubernetes, AWS, CI/CD

7. **Data Scientist** 📊
   - Data analysis, machine learning, business intelligence
   - Python, R, statistics, visualization

8. **UX/UI Designer** 🎨
   - User experience, interface design, research
   - Figma, Adobe Creative Suite, prototyping

## 🎯 How It Works

### 1. **Take the Quiz**
Answer 15+ carefully crafted questions about:
- Your technical experience and skills
- Interests and passions in technology
- Preferred work environment and style
- Career goals and timeline

### 2. **Get Your Results**
Receive a comprehensive analysis including:
- **Primary Career Match**: Your best-fit tech career
- **Match Score**: Percentage compatibility
- **Alternative Careers**: Other good options to consider
- **Personal Strengths**: What makes you a great fit
- **Recommendations**: Actionable next steps

### 3. **Explore Your Path**
Dive deep into your recommended career with:
- **Learning Roadmap**: Step-by-step path to success
- **Salary Information**: Realistic compensation expectations
- **Required Skills**: Technical and soft skills needed
- **Job Opportunities**: Companies and roles to target
- **Learning Resources**: Courses, books, and certifications

### 4. **Export & Share**
- Download your complete report as a PDF
- Share your results with friends and mentors
- Save for future reference and planning

## 🎨 Customization

### Adding New Career Paths
1. Add career data to `app/data/careers.ts`
2. Update quiz weights in `app/data/quiz.ts`
3. Add corresponding icons and colors

### Modifying Quiz Questions
1. Edit questions in `app/data/quiz.ts`
2. Update the career weights accordingly
3. Test the matching algorithm

### Styling Changes
- Modify Tailwind classes in components
- Update color schemes in career data
- Customize animations in Framer Motion

## 📱 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
The app is built with Next.js and can be deployed to:
- Netlify
- Railway
- DigitalOcean App Platform
- Any platform supporting Node.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Career data sourced from industry research and job market analysis
- Learning resources curated from top educational platforms
- Salary data based on current market research
- Icons provided by Lucide React

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Check the documentation
- Reach out to me

---

**Built with ❤️ by Cypher for the tech community**

# SecureAI Academy - Training Platform

A comprehensive web-based training platform for learning secure AI and LLM usage practices. This application provides interactive modules covering critical security topics for working with AI language models safely and responsibly.

## Features

### 🎓 Training Modules
- **Module 1: Prompt Injection Attacks** - Learn about direct and indirect injection attacks and defense strategies
- **Module 2: Data Privacy & Confidentiality** - Best practices for protecting sensitive information
- **Module 3: Model Security & Integrity** - Understanding model poisoning, adversarial attacks, and integrity verification
- **Module 4: API Security & Access Control** - Secure API key management and authentication
- **Module 5: Output Validation & Filtering** - Implementing robust validation mechanisms
- **Module 6: Security Best Practices** - Comprehensive framework for secure AI workflows

### ✅ Interactive Features
- Progress tracking with local storage persistence
- Completion badges for each module
- Comprehensive assessment quiz (20 questions)
- Real-time score tracking
- Certificate eligibility (80% passing score)

### 🎨 Modern UI/UX
- Beautiful gradient-based design
- Fully responsive layout (mobile, tablet, desktop)
- Smooth animations and transitions
- Dark theme optimized for readability
- Accessible navigation

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or dependencies required - runs entirely in the browser

### Installation

1. Navigate to the application directory:
```bash
cd /Users/brycekunz/Documents/GitHub/AI_Augmented_Cybersecurity/test/new_webapp
```

2. Open `index.html` in your web browser:
```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Alternatively, you can use a simple HTTP server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server -p 8000
```

Then visit `http://localhost:8000` in your browser.

## Usage Guide

### Navigation
- **Home** - Overview and progress dashboard
- **Training Modules** - Access all six security modules
- **Assessment** - Test your knowledge with a comprehensive quiz
- **Resources** - Additional learning materials and tools

### Completing Modules
1. Click "Start Module" on any module card
2. Read through the comprehensive content
3. Study the examples and best practices
4. Click "Mark as Complete" to track your progress

### Taking the Assessment
1. Navigate to the Assessment section
2. Complete all six training modules first (recommended)
3. Click "Start Assessment"
4. Answer all 20 multiple-choice questions
5. Achieve 80% or higher to pass
6. Retake as needed to improve your score

### Progress Tracking
Your progress is automatically saved to browser local storage:
- Completed modules are tracked
- Overall completion percentage is calculated
- Module badges update to show completion status

## Technical Details

### File Structure
```
new_webapp/
├── index.html      # Main HTML structure
├── styles.css      # Comprehensive styling and responsive design
├── app.js          # JavaScript functionality and interactivity
└── README.md       # This documentation file
```

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and gradients
- **Vanilla JavaScript** - No frameworks or dependencies
- **Local Storage API** - Progress persistence
- **Google Fonts** - Inter font family

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Module Content Overview

### 1. Prompt Injection Attacks
- Types of injection attacks (direct, indirect, system prompt leakage)
- Real-world examples and demonstrations
- Defense strategies and secure prompt design
- Input validation techniques

### 2. Data Privacy & Confidentiality
- Understanding data privacy risks with AI
- What never to share (passwords, PII, trade secrets)
- Anonymization and data minimization techniques
- Compliance considerations (GDPR, CCPA, HIPAA)

### 3. Model Security & Integrity
- Model poisoning and adversarial attacks
- Model theft and backdoor attacks
- Defense mechanisms and integrity verification
- Incident response procedures

### 4. API Security & Access Control
- API key management best practices
- Secure storage (environment variables, secrets managers)
- Authentication and authorization methods
- Rate limiting and monitoring

### 5. Output Validation & Filtering
- Understanding AI output risks (hallucinations, harmful content)
- Content filtering strategies
- Multi-layer validation pipeline
- Code generation security

### 6. Security Best Practices
- Organizational policies and governance
- Security-by-design principles
- Development lifecycle security
- Training, monitoring, and compliance

## Security Features

The application itself demonstrates secure web development practices:
- No external API calls or data transmission
- Client-side only (no server vulnerabilities)
- No cookies or third-party tracking
- Local storage only for user progress
- Content Security Policy friendly

## Customization

### Modifying Content
Edit `app.js` and update the `moduleContent` object to customize module content:

```javascript
const moduleContent = {
    1: {
        title: "Your Module Title",
        content: `Your HTML content here`
    },
    // ... more modules
};
```

### Updating Quiz Questions
Modify the `quizQuestions` array in `app.js`:

```javascript
const quizQuestions = [
    {
        question: "Your question?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correct: 0  // Index of correct answer (0-based)
    },
    // ... more questions
];
```

### Styling Changes
Edit `styles.css` to customize colors, fonts, or layout. CSS custom properties are defined in the `:root` selector for easy theming:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --background: #0f0f1e;
    --text-primary: #ffffff;
    /* ... more variables */
}
```

## Future Enhancements

Potential additions for future versions:
- Export completion certificate as PDF
- Additional modules on emerging AI security topics
- Interactive code examples with live validation
- Integration with LMS platforms (SCORM)
- Multi-language support
- Accessibility improvements (WCAG AAA)
- Dark/light theme toggle
- Social sharing of achievements

## Contributing

This is an educational project. To suggest improvements:
1. Document the enhancement or issue
2. Ensure it aligns with the educational mission
3. Test thoroughly across different browsers
4. Maintain the existing code style and structure

## License

Part of the AI Augmented Cybersecurity training repository.
See the repository's LICENSE file for details.

## Support

For issues or questions:
- Check the main repository documentation
- Review module content for technical questions
- Ensure browser compatibility for technical issues

## Acknowledgments

Built as part of the AI Augmented Cybersecurity training program to help developers, security professionals, and AI practitioners understand and implement secure AI practices.

---

**Educational Purpose**: This application is designed for training and educational purposes. Always consult your organization's security policies and compliance requirements when implementing AI systems in production environments.


# 🚀 Portfolio Website

![Portfolio Preview](https://res.cloudinary.com/dnkjgw2ti/image/upload/v1778048338/Screenshot_2026-05-06_at_11.47.03_rx3la6.png)

## 🌟 Overview

This is my personal portfolio website, showcasing my projects, resume, and information about me. It serves as a central hub for recruiters, clients, and collaborators to explore my work, skills, and experience.

## 🛠️ Features

- **Projects Section**: Displays my best work with descriptions, tech stack, and links.
- **Resume**: Provides easy access to my latest resume with both standard and enhanced views.
- **About Me**: Shares my background, experience, and interests.
- **Contact Page**: Easy way to get in touch.
- **3D Animations**: Interactive Three.js background with floating shapes and particles.
- **Responsive Design**: Fully optimized for desktop and mobile devices.
- **Smooth Animations**: Interactive UI powered by Framer Motion for an engaging user experience.
- **Theme Support**: Dark/Light mode with adaptive 3D elements and context-based theme management.
- **Lazy Loading**: Optimized performance with code-splitting for faster initial load.

## 🚧 Tech Stack

- **Frontend**: React 18, React Router v6
- **Styling**: Styled Components with theme support
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **State Management**: React Context API
- **Performance**: Lazy loading with React Suspense
- **Hosting**: Vercel

## 📂 Project Structure

```
portfolio-website/
│── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│── src/
│   ├── assets/           # Images and resume PDF
│   │   ├── coder.jpeg
│   │   ├── logo.jpeg
│   │   ├── programmer.jpeg
│   │   └── resume.pdf
│   ├── components/       # Reusable UI components
│   │   ├── Animate/      # Animation wrapper component
│   │   ├── Footer/       # Footer component
│   │   ├── Header/       # Navigation header
│   │   ├── Layout/       # App layout wrapper
│   │   ├── Spinner/      # Loading spinner
│   │   └── Three/        # 3D components
│   │       ├── Scene3D/
│   │       ├── floatingShapes.jsx
│   │       ├── particleField.jsx
│   │       └── simplifiedParticles.jsx
│   ├── contexts/         # React Context API
│   │   └── ThemeContext.js
│   ├── data/             # Portfolio data
│   │   ├── aboutData.js
│   │   └── projectsData.js
│   ├── hooks/            # Custom React hooks
│   │   ├── useIntersectionObserver.js
│   │   └── useIsMobile.js
│   ├── pages/            # Portfolio pages
│   │   ├── Home/         # Landing page
│   │   ├── About/        # About me page
│   │   ├── Projects/     # Projects showcase
│   │   ├── Resume/       # Standard resume view
│   │   ├── EnhancedResume/ # Enhanced resume view
│   │   ├── Contact/      # Contact page
│   │   └── NotFound/     # 404 page
│   ├── styles/           # Global styles and themes
│   │   ├── GlobalStyles.js
│   │   ├── animations.js
│   │   ├── darkTheme.js
│   │   ├── lightTheme.js
│   │   ├── mixins.js
│   │   └── theme.js
│   ├── App.jsx           # Main app component
│   ├── index.js          # Entry point
│   └── index.css         # Base styles
│── package.json
│── craco.config.js       # Create React App configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- EmailJS account (for contact form)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/munvar021/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:

   ```sh
   cp .env.example .env
   ```

   Edit `.env` and add your EmailJS credentials:
   - Get your credentials from [EmailJS Dashboard](https://dashboard.emailjs.com/)
   - Update `REACT_APP_EMAILJS_SERVICE_ID`
   - Update `REACT_APP_EMAILJS_TEMPLATE_ID`
   - Update `REACT_APP_EMAILJS_PUBLIC_KEY`

4. Run the development server:

   ```sh
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Add environment variables in Vercel project settings
4. Deploy automatically on push to `main` branch

### Docker (Alternative)

```sh
# Build and run with Docker Compose
docker-compose up -d

# Access at http://localhost:3000
```

### Manual Build

```sh
npm run build
# Deploy the 'build' folder to your hosting provider
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🔧 DevOps & CI/CD

- **Automated Testing**: GitHub Actions runs tests on every PR
- **Continuous Deployment**: Auto-deploy to Vercel on merge to main
- **Security Headers**: Configured for production security
- **Performance**: Optimized caching and compression
- **Health Checks**: `/health.json` endpoint for monitoring

## 📬 Contact

- **[Portfolio](https://portfolio-beta-eight-29.vercel.app)**
- **[LinkedIn](https://www.linkedin.com/in/munvar-khajavali-shaik)**
- **[Email](mailto:munvar021@gmail.com)**

---

⭐ Star this repository if you like it! 😊

# GrowTrack - Smart Habit Tracker Landing Page

A responsive, single-page website built with Next.js and Tailwind CSS. It serves as the primary public-facing portal for the Smart Habit Tracker (GrowTrack) mobile app—an app designed to help users build, manage, and maintain healthy habits with ease.

GrowTrack leverages modern mobile features such as push notifications, progress visualisation charts, and gamification elements like badges and points to keep users motivated and engaged on their journey toward consistent habit formation.

The landing page explains the app’s value, showcases its key features, and builds trust among new users, returning users, and prospective users. Structured into clear sections—Navbar, Hero, Features, How It Works, Testimonials, Ready to Build Better Habits, and Footer—the site is optimized for performance, clarity, and responsiveness across devices.

## 🚀 Features

- ⚡ Next.js 14+ with App Router
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- 🧩 Modular component architecture
- 🎯 Optimized for performance and SEO
- 🔔 Mobile app features: notifications, progress tracking, gamification

## 📁 Folder Structure
```
SMART-HABIT-FE/
└─ growtrack/
   ├─ .gitignore
   ├─ eslint.config.mjs
   ├─ jest.config.mjs
   ├─ jest.setup.js
   ├─ jsconfig.json
   ├─ next.config.mjs
   ├─ package-lock.json
   ├─ package.json
   ├─ postcss.config.mjs
   ├─ README.md
   ├─ .next/                 # Auto-generated Next.js build output
   ├─ node_modules/          # Installed dependencies
   ├─ public/                # Static assets (images, icons)
   │  ├─ logo.png
   │  ├─ Hero.jpg
   │  ├─ features-image.png
   │  └─ ... (other assets)
   ├─ app/
   │  ├─ favicon.ico
   │  ├─ globals.css         # Tailwind base styles
   │  ├─ layout.js           # Root layout component
   │  └─ page.js             # Main landing page
   ├─ components/            # Reusable UI components for sections
   │  ├─ Navbar.jsx
   │  ├─ HeroSlider.jsx
   │  ├─ Features.jsx
   │  ├─ HowItWorks.jsx
   │  ├─ Testimonials.jsx
   │  ├─ CTASection.jsx
   │  ├─ ContactSection.jsx
   │  └─ Footer.jsx
   ├─ __tests__/             # Jest unit tests
   │  ├─ ContactSection.test.jsx
   │  ├─ CTASection.test.jsx
   │  ├─ Features.test.jsx
   │  ├─ Footer.test.jsx
   │  ├─ HeroSlider.test.jsx
   │  ├─ HowItWorks.test.jsx
   │  ├─ Navbar.test.jsx
   │  └─ Testimonials.test.jsx
   └─ cypress/               # E2E testing with Cypress
      └─ e2e/
         └─ smoke.cy.ts      # Basic smoke test
```
      


## 🛠️ Installation & Setup

1. **Clone and run the project**

 ```bash
 git clone https://github.com/kodecampteam/smart-habit-fe.git
 cd growtrack
 npm install
 npm run dev
 ```

2. **Visit the application**  
 Open your browser and go to [http://localhost:3000/](http://localhost:3000/).

## 📋 Available Scripts

This project includes several npm scripts to help with development, testing, and deployment:

### Development Scripts

- **`npm run dev`** - Starts the development server with Turbopack for faster builds
  - Runs the Next.js development server on http://localhost:3000
  - Includes hot reloading for instant updates during development

### Build & Production Scripts

- **`npm run build`** - Creates an optimized production build
  - Compiles and optimizes your Next.js application for production
  - Uses Turbopack for faster build times
  - Generates static files in the `.next` directory
  - Run this before deploying to production

- **`npm run start`** - Starts the production server
  - Serves the built application in production mode
  - Requires running `npm run build` first
  - **Why use it?** 
    - Tests your production build locally before deployment
    - Simulates how your app will run in production
    - Helps catch production-only issues early
    - Essential for validating the build process

### Code Quality Scripts

- **`npm run lint`** - Runs ESLint to check code quality and style
  - Analyzes your code for potential errors, bugs, and style issues
  - Helps maintain consistent coding standards across the project
  - Should be run regularly during development

### Testing Scripts

- **`npm test`** - Runs Jest unit tests
  - Executes all test files in the `__tests__` directory
  - Provides code coverage and test results
  - Essential for ensuring code reliability and catching regressions

### E2E Testing with Cypress

Cypress is configured for end-to-end testing to verify the complete user experience:

- **`npm run cypress:open`** - Opens the Cypress Test Runner GUI
  - Interactive interface to run and debug tests
  - Shows real-time test execution in a browser
  - Best for development and debugging tests
  - **Usage**: `npm run cypress:open` then select your test file

- **`npm run cypress:run`** - Runs Cypress tests in headless mode
  - Executes all tests in Chrome browser without GUI
  - Perfect for CI/CD pipelines and automated testing
  - **Usage**: `npm run cypress:run`

#### Cypress Test Structure
- Test files are located in `cypress/e2e/`
- Current test: `smoke.cy.ts` - Basic smoke test that verifies homepage loads and navbar exists
- Tests verify critical user journeys and functionality

#### Running Cypress Tests Step by Step:

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start your development server** (in one terminal):
   ```bash
   npm run dev
   ```

3. **Run Cypress tests** (in another terminal):

   **Option A - Interactive Mode (Recommended for development):**
   ```bash
   npm run cypress:open
   ```
   - Cypress GUI will open
   - Click on "smoke.cy.ts" or any other test file
   - Watch tests run in real-time

   **Option B - Headless Mode (For CI/CD):**
   ```bash
   npm run cypress:run
   ```
   - Tests run automatically in Chrome
   - Results displayed in terminal

## 🧪 Testing Strategy

The project uses a comprehensive testing approach:

- **Unit Tests** (`npm test`) - Test individual components and functions
- **E2E Tests** (`npm run cypress:*`) - Test complete user workflows
- **Linting** (`npm run lint`) - Ensure code quality and consistency

## 🚀 Deployment Checklist

Before deploying to production:

1. Run `npm run lint` to check code quality
2. Run `npm test` to ensure all tests pass
3. Run `npm run cypress:run` to verify E2E functionality
4. Run `npm run build` to create production build
5. Test production build locally with `npm run start`

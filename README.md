# Rehab Institution Platform

A comprehensive, secure web application designed for physical therapy, occupational therapy, and addiction recovery workflows. This platform provides a unified interface for managing patient care, tracking progress, and streamlining institutional operations.

## 🚀 Features

- **Clinical Dashboard**: Real-time overview of metrics and institutional workflows.
- **Architecture Visualization**: Insights into the system's structural design and data flow.
- **Database Management**: Secure management of patient records and institutional data.
- **API Integration**: Interactive documentation and testing for system APIs, featuring Google Generative AI integration.
- **Calendar & Scheduling**: Centralized scheduling for therapy sessions and recovery programs.
- **Settings & Configuration**: Granular control over application behavior and user preferences.
- **Splash Screen**: Professional, animated entry experience.

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend**: [Express](https://expressjs.com/)
- **AI Integration**: [@google/genai](https://www.npmjs.com/package/@google/genai)

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd rehab-institution-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in the required API keys and configuration.

### Running the Application

- **Development Mode**:
  ```bash
  npm run dev
  ```
  The application will be available at `http://localhost:3000`.

- **Production Build**:
  ```bash
  npm run build
  ```

- **Linting**:
  ```bash
  npm run lint
  ```

## 📂 Project Structure

- `src/components/views/`: Individual view components (Dashboard, Calendar, etc.)
- `src/components/`: Shared UI components (Sidebar, etc.)
- `src/types.ts`: Global TypeScript definitions.
- `src/App.tsx`: Main application shell and routing logic.
- `vite.config.ts`: Vite configuration with Tailwind integration.

## 📄 License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details. (Note: Check `src/App.tsx` for license header).

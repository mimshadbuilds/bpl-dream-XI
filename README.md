# BPL Dream XI

A modern, responsive web application built with React and TypeScript to create and manage dream cricket teams for the Bangladesh Premier League (BPL).

## 🌐 Live Demo

[View Live Project](#) <!-- Add your deployed link here -->

## 📋 Project Overview

BPL Dream XI is an interactive web application that allows users to:
- Create and customize their dream cricket teams
- Select players from BPL teams
- View player statistics and details
- Save and share team compositions
- Manage team budgets and constraints

This project showcases modern web development practices using React with TypeScript and Vite, providing a fast and optimal development experience.

## 🛠️ Technology Stack

### Frontend
- **React** (v19.2.8) - UI library for building interactive components
- **TypeScript** (v6.0.2) - Type-safe JavaScript for better code quality
- **Vite** (v8.2.2) - Next-generation frontend build tool for faster development
- **Tailwind CSS** (v4.3.3) - Utility-first CSS framework for styling
- **DaisyUI** (v5.7.28) - Component library built on Tailwind CSS

### Icons & Notifications
- **React Icons** (v5.7.0) - Popular icon library for React
- **React Toastify** (v11.1.0) - Toast notification library

### Build & Quality Tools
- **Oxlint** (v1.79.0) - Fast JavaScript/TypeScript linter
- **TypeScript Compiler** - For type checking and compilation

## ✨ Main Features

- ⚡ Fast development experience with Vite HMR (Hot Module Replacement)
- 🎨 Beautiful, responsive UI with Tailwind CSS and DaisyUI
- 📱 Mobile-friendly design
- 🔒 Type-safe development with TypeScript
- 📊 Interactive player selection and team management
- 💾 Local state management
- 🎯 Real-time notifications and feedback

## 📦 Dependencies

### Production Dependencies
```json
{
  "@tailwindcss/vite": "^4.3.3",
  "react": "^19.2.8",
  "react-dom": "^19.2.8",
  "react-icons": "^5.7.0",
  "react-toastify": "^11.1.0",
  "tailwindcss": "^4.3.3"
}
```

### Development Dependencies
```json
{
  "@types/node": "^24.13.3",
  "@types/react": "^19.2.18",
  "@types/react-dom": "^19.2.4",
  "@vitejs/plugin-react": "^6.1.0",
  "daisyui": "^5.7.28",
  "oxlint": "^1.79.0",
  "typescript": "~6.0.2",
  "vite": "^8.2.2"
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/mimshadbuilds/bpl-dream-XI.git
cd bpl-dream-XI
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` (default Vite port)

### Available Scripts

- **`npm run dev`** - Start the development server with HMR
- **`npm run build`** - Build the project for production
- **`npm run lint`** - Run Oxlint to check code quality
- **`npm run preview`** - Preview the production build locally

### Build for Production

```bash
npm run build
```

The optimized build files will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
bpl-dream-XI/
├── src/                    # Source code
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Entry point
│   ├── components/        # Reusable components
│   ├── pages/             # Page components
│   └── styles/            # Global styles
├── public/                # Static assets
├── index.html             # HTML entry point
├── package.json           # Project dependencies
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

## 🎨 Styling

This project uses **Tailwind CSS** with **DaisyUI** for styling:
- Utility-first CSS approach for rapid UI development
- Pre-built components via DaisyUI
- Responsive design out of the box

## 📝 Development Guidelines

### Code Quality
- Use TypeScript for type safety
- Follow ESLint rules defined in `.oxlintrc.json`
- Run linter before committing: `npm run lint`

### Component Structure
- Keep components small and focused
- Use functional components with hooks
- Create reusable components in the `components/` directory

### Styling Best Practices
- Use Tailwind classes for styling
- Leverage DaisyUI components when available
- Avoid inline styles when possible

## 🔗 Useful Links

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [DaisyUI Documentation](https://daisyui.com)
- [Bangladesh Premier League Official](https://www.bpl2024.com)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Mimshadbuilds**
- GitHub: [@mimshadbuilds](https://github.com/mimshadbuilds)

---

Made with ❤️ for cricket enthusiasts

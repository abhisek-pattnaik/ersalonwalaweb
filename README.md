# Salon App

A modern React application for salon management built with Vite, TypeScript, and React Router.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
salon-app/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, and other static files
│   ├── components/        # Reusable UI components
│   │   └── common/        # Common components (Button, Input, etc.)
│   │   └── layout/        # Layout components (Header, Footer, etc.)
│   ├── constants/         # Application constants
│   ├── contexts/          # React Context providers
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components (route components)
│   ├── services/          # API services and external integrations
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main App component with routing
│   ├── App.css            # App-specific styles
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── .eslintrc.cjs          # ESLint configuration
├── .gitignore             # Git ignore rules
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tsconfig.node.json     # TypeScript config for Node
└── vite.config.ts         # Vite configuration
```

## 🏗️ Architecture

### Folder Organization

- **components/**: Reusable UI components organized by feature or type
- **pages/**: Top-level route components
- **hooks/**: Custom React hooks for shared logic
- **services/**: API calls and external service integrations
- **utils/**: Pure utility functions
- **contexts/**: React Context providers for global state
- **types/**: TypeScript interfaces and types
- **constants/**: Application-wide constants

### Path Aliases

The project uses path aliases for cleaner imports:

- `@/` → `src/`
- `@components/` → `src/components/`
- `@pages/` → `src/pages/`
- `@hooks/` → `src/hooks/`
- `@services/` → `src/services/`
- `@utils/` → `src/utils/`
- `@contexts/` → `src/contexts/`
- `@assets/` → `src/assets/`
- `@constants/` → `src/constants/`
- `@types/` → `src/types/`

Example usage:
```typescript
import { apiClient } from '@services/api'
import { formatDate } from '@utils'
import Home from '@pages/Home'
```

## 🛠️ Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **ESLint** - Code linting

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

## 📦 Adding New Features

### Adding a New Page

1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update `src/constants/routes.ts` if needed

### Adding a New Component

1. Create component in `src/components/`
2. Organize by feature or type (e.g., `components/common/`, `components/booking/`)

### Adding API Services

1. Create service file in `src/services/`
2. Use `apiClient` from `src/services/api.ts` for HTTP requests

## 🎨 Styling

Global styles are in `src/index.css`. Component-specific styles can be added as CSS modules or styled-components based on your preference.

## 📄 License

MIT

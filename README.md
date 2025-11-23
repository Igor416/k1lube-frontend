# K1 Lube - Commercial Website Frontend

A modern, responsive web application built for K1 Lube, showcasing lubricant products and company information. This project demonstrates proficiency in React, TypeScript, Material-UI, and modern frontend development practices.

## 🚀 Tech Stack

- **React 18.3** - Modern React with hooks and functional components
- **TypeScript 4.9** - Type-safe development
- **Material-UI (MUI) 6.1** - Component library with custom theming
- **React Router DOM 6.28** - Client-side routing
- **Emotion** - CSS-in-JS styling solution
- **React Scripts 5.0** - Build tooling and development server

## ✨ Key Features

### 🏠 Homepage
- Interactive slideshow/carousel
- Company testimonials section
- About company overview
- Vision & Mission with parallax effects
- Product technology showcases (Korea Synthetic Base Oil, Ester-based Organic Friction Modifier, PAO Boosting Tech)
- Product packages display

### 🏢 Company Pages
- **About** - Company information and history
- **Production Facility** - Manufacturing facility details
- **Global Partners** - Partnership information

### 🛍️ Product Catalog
- Dynamic product categories
- Individual product detail pages
- Product filtering and navigation
- Responsive product grid layouts

### 📚 Additional Features
- **Library** - Resource and documentation section
- **Contact Form** - Customer inquiry system
- **Partnership** - Partnership information page
- **Responsive Design** - Mobile-first approach with breakpoint management

## 📁 Project Structure

```
src/
├── api.ts                 # API service layer with fetch utilities
├── App.tsx               # Main application component with routing layout
├── index.tsx             # Application entry point with theme provider
├── JSONTypes.ts          # TypeScript type definitions
├── components/           # Reusable UI components
│   ├── Footer.tsx
│   ├── Form.tsx
│   ├── menu/            # Navigation menu components
│   ├── VisionMission.tsx
│   └── componentsIcons/ # Custom icon components
├── hooks/               # Custom React hooks
│   ├── useProduct.ts    # Product data management
│   ├── useProducts.ts   # Products list management
│   ├── useRoutes.ts     # Route navigation logic
│   └── useWindow.ts     # Responsive breakpoint detection
├── pages/               # Page components
│   ├── company/         # Company-related pages
│   ├── home/            # Homepage sections
│   ├── why/             # Product technology pages
│   └── [other pages]    # Products, Library, Contacts, etc.
└── utils/               # Utility components
    ├── File.tsx
    ├── FloatingText.tsx
    ├── Input.tsx
    └── TitlePanel.tsx
```

## 🎨 Design & UX Highlights

- **Custom Theme Configuration** - Material-UI theme customization with consistent typography and container sizing
- **Responsive Navigation** - Adaptive menu system with mobile drawer and desktop dropdowns
- **Smooth Animations** - Fade-in effects and transitions for enhanced user experience
- **Parallax Effects** - Engaging visual elements on key sections
- **Active Route Highlighting** - Visual feedback for current page navigation

## 🛠️ Development

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (irreversible)
npm run eject
```

## 🔧 Technical Implementation Details

### Custom Hooks
- **`useRoutes`** - Manages route state and active route detection
- **`useWindow`** - Responsive breakpoint detection for mobile/desktop layouts
- **`useProduct`** - Individual product data fetching and state management
- **`useProducts`** - Products list management with category filtering

### API Integration
- RESTful API communication with typed request/response handling
- Centralized API service layer (`api.ts`)
- Support for GET and POST requests
- Type-safe API responses using TypeScript interfaces

### Routing Architecture
- Nested routing structure with outlet pattern
- Dynamic routes for products (`/product/:slug`)
- Category-based routing (`/products/:category`)
- SEO-friendly URL structure

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first design approach
- Breakpoint management using Material-UI's theme system
- Adaptive layouts for different screen sizes
- Touch-friendly navigation on mobile devices

## 🎯 Code Quality

- **TypeScript** - Full type safety throughout the application
- **Strict Mode** - TypeScript strict mode enabled
- **Component Architecture** - Modular, reusable component structure
- **Custom Hooks** - Separation of concerns with custom React hooks
- **Consistent Styling** - Emotion + Material-UI for maintainable styling

## 📝 Notes

This is a commercial project developed for K1 Lube. The codebase demonstrates:
- Modern React development patterns
- TypeScript best practices
- Material-UI component customization
- Responsive design implementation
- API integration and data management
- Clean code architecture

---

**Built with ❤️ using React and TypeScript**


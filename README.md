# 🍽️ Taste Trail - Food Delivery Web Application

A modern, responsive food delivery web application built with React, TypeScript, and Tailwind CSS. Discover amazing Indian restaurants, browse menus, and order your favorite dishes with a premium user experience.

## ✨ Features

### 🏠 **Landing Page**
- Beautiful hero section with premium gradient design
- Statistics showcase (10K+ customers, 500+ restaurants, 15min delivery, 4.9★ rating)
- "How It Works" section with visual steps
- Customer testimonials
- Responsive design with glass morphism effects

### 🍴 **Restaurant Discovery**
- **Smart Search**: Search restaurants by name, cuisine, or description
- **Location-Based**: Find restaurants near your location with distance calculation
- **Advanced Filtering**: Filter by cuisine type and sort by rating, delivery time, or distance
- **Curated Categories**: Quick access to popular food categories
- **Premium Restaurant Cards**: Beautiful cards with ratings, delivery time, and cuisine badges

### 🛒 **Shopping Experience**
- **Interactive Menu Modal**: Browse restaurant menus with category filtering
- **Smart Cart System**: Add items, update quantities, persistent cart storage
- **Cart Sidebar**: Quick access to cart items with real-time updates
- **Multi-Restaurant Support**: Order from different restaurants

### 👤 **User Management**
- **Authentication System**: Sign in/sign up functionality
- **User Context**: Persistent user sessions
- **Location Services**: Automatic location detection and manual location setting

### 🎨 **Premium UI/UX**
- **Modern Design**: Glass morphism, gradients, and smooth animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Dark/Light Theme Support**: Built-in theme switching capability
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### **Styling & UI**
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components
- **Lucide React** - Beautiful SVG icons
- **Tailwind Animate** - CSS animations

### **State Management**
- **React Context API** - For global state management
- **TanStack Query** - Server state management and caching
- **Local Storage** - Persistent cart and user preferences

### **Routing & Navigation**
- **React Router DOM 6.26.2** - Client-side routing

### **Form Handling**
- **React Hook Form 7.53.0** - Performant forms with easy validation
- **Zod 3.23.8** - TypeScript-first schema validation

### **Development Tools**
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
Food-Web/
├── public/                     # Static assets
│   ├── favicon.ico
│   ├── logo.svg
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/                 # Images and media files
│   │   ├── chef-cooking.jpg
│   │   ├── delivery-rider.jpg
│   │   ├── happy-customers.jpg
│   │   └── hero-food.jpg
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # Shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   └── ... (50+ UI components)
│   │   ├── AuthModal.tsx       # Authentication modal
│   │   ├── CartSidebar.tsx     # Shopping cart sidebar
│   │   ├── CuratedCategories.tsx # Food category selection
│   │   ├── LocationBanner.tsx  # Location display banner
│   │   ├── MenuModal.tsx       # Restaurant menu modal
│   │   └── RestaurantCard.tsx  # Restaurant display card
│   ├── context/                # React Context providers
│   │   ├── AuthContext.tsx     # User authentication state
│   │   ├── CartContext.tsx     # Shopping cart state
│   │   └── LocationContext.tsx # User location state
│   ├── data/                   # Mock data and constants
│   │   └── restaurants.ts      # Restaurant and menu data
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-mobile.tsx      # Mobile device detection
│   │   └── use-toast.ts        # Toast notifications
│   ├── lib/                    # Utility libraries
│   │   └── utils.ts            # Helper functions
│   ├── pages/                  # Page components
│   │   ├── CategoryPage.tsx    # Category-specific restaurants
│   │   ├── Home.tsx            # Landing page
│   │   ├── Index.tsx           # Main restaurant listing
│   │   └── NotFound.tsx        # 404 error page
│   ├── types/                  # TypeScript type definitions
│   │   └── index.ts            # Interface definitions
│   ├── utils/                  # Utility functions
│   │   └── locationUtils.ts    # Location calculation helpers
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # Application entry point
│   ├── index.css               # Global styles
│   └── vite-env.d.ts          # Vite type definitions
├── .gitignore                  # Git ignore rules
├── components.json             # Shadcn/ui configuration
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── vite.config.ts             # Vite configuration
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajeshbehera16/Food-Web.git
   cd Food-Web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🏗️ Key Components

### **Restaurant System**
- **Restaurant Interface**: Comprehensive restaurant data structure with coordinates, menu, ratings
- **Menu Items**: Detailed menu items with categories, descriptions, and images
- **Location Integration**: Distance calculation and location-based filtering

### **Cart Management**
- **Persistent Storage**: Cart data saved to localStorage
- **Multi-Restaurant Support**: Handle items from different restaurants
- **Quantity Management**: Add, remove, and update item quantities
- **Real-time Updates**: Instant cart updates across components

### **Authentication Flow**
- **User Context**: Global user state management
- **Modal-based Auth**: Clean authentication UI
- **Session Persistence**: Remember user login state

### **Location Services**
- **Geolocation API**: Automatic location detection
- **Distance Calculation**: Haversine formula for accurate distances
- **Location Context**: Global location state management

## 🎨 Design System

### **Color Palette**
- **Primary**: Orange to red gradient (#f97316 to #dc2626)
- **Secondary**: Emerald to teal gradient (#10b981 to #14b8a6)
- **Accent**: Pink to purple gradient (#ec4899 to #8b5cf6)

### **Typography**
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable fonts with proper contrast
- **Interactive Elements**: Hover states and smooth transitions

### **Components**
- **Glass Morphism**: Backdrop blur effects with transparency
- **Gradient Overlays**: Subtle gradient backgrounds
- **Smooth Animations**: CSS transitions and transforms
- **Responsive Design**: Mobile-first approach

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Adapted layouts for tablet screens
- **Desktop Enhanced**: Rich desktop experience with hover effects
- **Touch Friendly**: Large touch targets and gesture support

## 🔧 Configuration

### **Vite Configuration**
- **Port**: Development server runs on port 8080
- **Path Aliases**: `@` alias for `src` directory
- **React SWC**: Fast React refresh and compilation

### **Tailwind Configuration**
- **Custom Colors**: Extended color palette with CSS variables
- **Animations**: Custom keyframes and animations
- **Container**: Centered containers with responsive padding

### **TypeScript Configuration**
- **Strict Mode**: Enabled for better type safety
- **Path Mapping**: Absolute imports with `@` prefix
- **Modern Target**: ES2020 compilation target

## 🌟 Features in Detail

### **Smart Search & Filtering**
- Real-time search across restaurant names, cuisines, and descriptions
- Multi-criteria filtering (cuisine type, rating, delivery time, distance)
- Optimized with React.useMemo for performance

### **Location-Based Services**
- Automatic geolocation detection
- Manual location input with validation
- Distance calculation using Haversine formula
- Location-based restaurant sorting

### **Premium UI Elements**
- Glass morphism effects with backdrop blur
- Gradient overlays and animations
- Hover effects and micro-interactions
- Loading states and skeleton screens

### **Cart & Ordering**
- Persistent cart storage across sessions
- Real-time cart updates and calculations
- Multi-restaurant order support
- Quantity management with validation

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

The application is optimized for deployment on:
- **Vercel** (recommended for React apps)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Shadcn/ui** for the beautiful component library
- **Radix UI** for accessible component primitives
- **Lucide** for the comprehensive icon set
- **Unsplash** for the high-quality food images
- **Tailwind CSS** for the utility-first CSS framework

---

**Built with ❤️ by the Taste Trail Team**

*Bringing delicious food to your doorstep with a premium digital experience.*
# Cultre Boat - Creative Branding & Digital Agency

A modern, responsive web application for a creative branding and digital agency. Built with React, Vite, and Tailwind CSS.

## 🎯 Project Overview

Cultre Boat is a full-featured website showcasing creative services including brand design, PR & communications, and social media strategy. The platform features multiple service pages, portfolio galleries, testimonials, and a comprehensive contact system.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Workflow](#workflow)
- [Architecture Flowchart](#architecture-flowchart)
- [Installation](#installation)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Key Components](#key-components)

## ✨ Features

### Core Features
- **Responsive Design** - Mobile-first approach with optimized breakpoints
- **Multi-page Navigation** - Home, Design, PR, Social, About, Career, Contact
- **Service Showcase** - Brand Design, PR & Communications, Social Media Strategy
- **Portfolio Gallery** - Filterable project galleries with modal details
- **Testimonials** - Client testimonials with carousel
- **Contact System** - Contact form with modal and email integration
- **Career Page** - Job listings with application form
- **Blog Section** - News and events with carousel

### UI/UX Features
- Smooth animations and transitions
- Interactive hover effects
- Mobile-optimized carousels
- Accessible form inputs
- Dark/Light mode ready
- SEO-friendly structure

## 🛠 Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Custom components + shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router v6
- **Carousel**: Embla Carousel
- **Form Handling**: React Hook Form
- **Containerization**: Docker & Docker Compose

## 📁 Project Structure

```
cultre-boat/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroBanner.jsx
│   │   ├── Cta.jsx
│   │   ├── AboutUsSection.jsx
│   │   ├── WhatWeDo.jsx
│   │   ├── BusinessVerticals.jsx
│   │   ├── ProminentCustomers.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Brands.jsx
│   │   ├── Bolg.jsx
│   │   ├── ResourcesNewsletter.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── ContactModal.jsx
│   │   └── ui/              # UI primitives
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── Design.jsx
│   │   ├── PR.jsx
│   │   ├── Social.jsx
│   │   ├── About.jsx
│   │   ├── Career.jsx
│   │   ├── Contact.jsx
│   │   ├── WhyUs.jsx
│   │   └── PrivacyPolicy.jsx
│   ├── data/                # Static data & constants
│   │   ├── designData.js
│   │   ├── prData.js
│   │   ├── socialData.js
│   │   ├── aboutData.js
│   │   ├── careerData.js
│   │   ├── contactData.js
│   │   └── ...
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── public/                  # Static assets
│   ├── images/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── .github/workflows/       # CI/CD workflows
├── docker-compose.yml       # Docker configuration
├── Dockerfile               # Docker image definition
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS config
├── eslint.config.js        # ESLint configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## 🔄 Workflow

### Development Workflow

```
1. LOCAL DEVELOPMENT
   ├── Clone repository
   ├── Install dependencies (npm install)
   ├── Start dev server (npm run dev)
   ├── Make changes
   └── Test locally

2. CODE QUALITY
   ├── Run ESLint (npm run lint)
   ├── Fix formatting issues
   └── Ensure no console errors

3. COMPONENT DEVELOPMENT
   ├── Create/modify components in src/components/
   ├── Update data in src/data/
   ├── Test responsive design
   └── Verify mobile/tablet/desktop views

4. PAGE DEVELOPMENT
   ├── Create/modify pages in src/pages/
   ├── Add routing in App.jsx
   ├── Test navigation
   └── Verify page functionality

5. GIT WORKFLOW
   ├── Create feature branch (git checkout -b feature/name)
   ├── Make commits (git commit -m "message")
   ├── Push to GitHub (git push origin feature/name)
   ├── Create Pull Request
   └── Merge to main

6. BUILD & DEPLOYMENT
   ├── Build project (npm run build)
   ├── Test production build (npm run preview)
   ├── Deploy to hosting
   └── Verify live site
```

### Component Development Workflow

```
1. DESIGN PHASE
   ├── Plan component structure
   ├── Define props/state
   └── Sketch responsive layout

2. IMPLEMENTATION
   ├── Create component file
   ├── Add JSX structure
   ├── Apply Tailwind CSS classes
   ├── Add interactivity (useState, useEffect)
   └── Import required icons/utilities

3. RESPONSIVE DESIGN
   ├── Mobile-first approach
   ├── Add sm: breakpoints (640px)
   ├── Add md: breakpoints (768px)
   ├── Add lg: breakpoints (1024px)
   └── Test all breakpoints

4. TESTING
   ├── Test on mobile device
   ├── Test on tablet
   ├── Test on desktop
   ├── Test interactions
   └── Verify accessibility

5. INTEGRATION
   ├── Import in parent component
   ├── Pass required props
   ├── Test integration
   └── Commit changes
```

## 📊 Architecture Flowchart

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     USER BROWSER                             │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    REACT APPLICATION                         │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              App.jsx (Router)                        │   │
│  │  ┌────────────────────────────────────────────────┐  │   │
│  │  │  Pages (Home, Design, PR, Social, etc.)       │  │   │
│  │  │  ┌──────────────────────────────────────────┐ │  │   │
│  │  │  │  Components (Header, Footer, Hero, etc.) │ │  │   │
│  │  │  │  ┌────────────────────────────────────┐  │ │  │   │
│  │  │  │  │  UI Elements (Buttons, Forms, etc.)│  │ │  │   │
│  │  │  │  └────────────────────────────────────┘  │ │  │   │
│  │  │  └──────────────────────────────────────────┘ │  │   │
│  │  └────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────┘   │
│                         │                                    │
│  ┌──────────────────────┴──────────────────────────────┐    │
│  │                                                     │    │
│  ▼                                                     ▼    │
│ Data Layer                                    Styling Layer │
│ ├── designData.js                            ├── Tailwind   │
│ ├── prData.js                                ├── CSS        │
│ ├── socialData.js                            └── Animations │
│ ├── careerData.js                                          │
│ └── ...                                                    │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    VITE BUILD TOOL                           │
│  ├── Hot Module Replacement (HMR)                           │
│  ├── Code Splitting                                         │
│  ├── Asset Optimization                                     │
│  └── Production Build                                       │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                  DEPLOYMENT OPTIONS                          │
│  ├── Docker Container                                       │
│  ├── Static Hosting (Netlify, Vercel, etc.)                │
│  ├── Traditional Server                                     │
│  └── CDN Distribution                                       │
└─────────────────────────────────────────────────────────────┘
```

### Page Navigation Flow

```
┌─────────────┐
│   HOME      │
└──────┬──────┘
       │
   ┌───┴────────────────────────────────────────┐
   │                                            │
   ▼                                            ▼
┌──────────┐                            ┌──────────────┐
│ DESIGN   │                            │ PR & COMMS   │
└──────────┘                            └──────────────┘
   │                                            │
   ▼                                            ▼
┌──────────┐                            ┌──────────────┐
│ SOCIAL   │                            │ ABOUT        │
└──────────┘                            └──────────────┘
   │                                            │
   ▼                                            ▼
┌──────────┐                            ┌──────────────┐
│ CAREER   │                            │ CONTACT      │
└──────────┘                            └──────────────┘
   │                                            │
   └────────────────┬─────────────────────────┘
                    │
                    ▼
            ┌──────────────────┐
            │ PRIVACY POLICY   │
            └──────────────────┘
```

### Component Hierarchy

```
App
├── Header
│   ├── Logo
│   ├── Navigation Menu
│   └── Contact Button
├── Page Component (Dynamic)
│   ├── HeroBanner
│   ├── Content Sections
│   │   ├── AboutUsSection
│   │   ├── WhatWeDo
│   │   ├── BusinessVerticals
│   │   ├── ProminentCustomers
│   │   ├── Testimonials
│   │   ├── Brands
│   │   ├── Blog
│   │   └── ResourcesNewsletter
│   └── CTA Section
├── Footer
│   ├── Links
│   ├── Contact Info
│   └── Social Icons
└── ContactModal (Global)
```

### Data Flow

```
┌──────────────────┐
│   Static Data    │
│  (data/*.js)     │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   Components     │
│  (Import Data)   │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   State/Props    │
│  (useState)      │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   Render JSX     │
│  (Display UI)    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   User Events    │
│  (onClick, etc)  │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   Update State   │
│  (Re-render)     │
└──────────────────┘
```

## 🚀 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Git

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/SauravBhadauriya/Cultre-Boalt.git
cd Cultre-Boalt
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
cp .env.example .env.local
```

4. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 💻 Development

### Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix
```

### Development Best Practices

1. **Mobile-First Approach**
   - Design for mobile first
   - Use Tailwind breakpoints: sm, md, lg, xl
   - Test on actual devices

2. **Component Structure**
   - Keep components small and focused
   - Use meaningful prop names
   - Add JSDoc comments for complex logic

3. **Responsive Design**
   - Mobile: < 640px
   - Tablet: 640px - 1024px
   - Desktop: > 1024px

4. **Performance**
   - Use lazy loading for images
   - Optimize bundle size
   - Minimize re-renders

## 🏗 Build & Deployment

### Production Build

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Docker Deployment

```bash
# Build Docker image
docker build -t cultre-boat .

# Run container
docker run -p 3000:80 cultre-boat

# Using Docker Compose
docker-compose up
```

### Deployment Platforms

- **Netlify**: Connect GitHub repo, auto-deploy on push
- **Vercel**: Similar to Netlify, optimized for React
- **Traditional Server**: Copy `dist/` folder to server
- **Docker**: Use provided Dockerfile

## 🧩 Key Components

### Header
- Responsive navigation
- Logo with tagline
- Mobile menu toggle
- Contact button

### HeroBanner
- Image carousel with autoplay
- Centered content
- CTA buttons
- Progress indicators

### Testimonials
- Client testimonials carousel
- Avatar with initials
- Star ratings
- Responsive grid

### Contact Form
- Modal-based form
- Form validation
- Email integration
- Success/error handling

### Portfolio Gallery
- Filterable projects
- Category buttons
- Modal details
- Responsive grid

## 📱 Responsive Breakpoints

```
Mobile:  < 640px   (sm)
Tablet:  640px+    (md: 768px, lg: 1024px)
Desktop: 1024px+   (xl: 1280px, 2xl: 1536px)
```

## 🔐 Environment Variables

```
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
VITE_SITE_URL=your_site_url
```

## 📄 License

This project is proprietary and confidential.

## 👤 Author

**Saurav Bhadauriya**
- GitHub: [@SauravBhadauriya](https://github.com/SauravBhadauriya)

## 📞 Support

For support, email: hello@cultreboat.in

---

**Last Updated**: March 2026
**Version**: 1.0.0
**Status**: Production Ready ✅

# Cultre Boat – Creative Branding & Digital Agency

A modern and responsive website built for a creative branding and digital agency. It highlights services, showcases work, and provides a smooth way for users to connect.

🔗 Live Site: https://cultre-boalt-7x7w.vercel.app/

---

## Overview

This project is a React-based frontend application focused on presenting a digital agency in a clean and structured way. It covers multiple service areas like branding, PR, and social media, along with portfolio and client engagement sections.

The goal was to build something visually strong, responsive, and easy to scale.

---

## Features

- Responsive layout (mobile-first)
- Multi-page navigation
- Service sections (Design, PR, Social Media)
- Portfolio with filtering and previews
- Testimonials slider
- Contact form with validation
- Career page with job listings
- Blog/news section
- Smooth animations and transitions

---

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- React Hook Form
- Embla Carousel
- Lucide Icons
- Docker

---

## Project Structure

src/
├── components/ # reusable UI components
├── pages/ # page-level components
├── data/ # static content
├── App.jsx # routing
├── main.jsx # entry point




Static assets are inside the `public/` folder.

---

## How It Works

The app is structured in a simple and maintainable way:

- Pages define layout and structure  
- Components handle reusable UI  
- Data is stored in separate files and imported where needed  
- State is managed using React hooks  

This is a frontend-only project with no backend dependency.

---

## Getting Started

### Install dependencies
npm install

### Start development server
npm run dev

App will run at:
http://localhost:5173

---

## Available Scripts

npm run dev        # start development server  
npm run build      # build for production  
npm run preview    # preview production build  
npm run lint       # check lint issues  
npm run lint:fix   # fix lint issues  

---

## Build & Deployment

To create a production build:

npm run build

The output will be generated in the dist/ folder.

You can deploy it on:
- Vercel  
- Netlify  
- Any static hosting service  
- Docker (using the included Dockerfile)  

---

## Key Components

### Header
- Navigation menu  
- Mobile toggle  
- Contact button  

### Hero Section
- Carousel  
- Call-to-action buttons  

### Portfolio
- Filterable items  
- Modal previews  

### Testimonials
- Slider with client feedback  

### Contact
- Form with validation  
- Modal interface  

---

## Responsive Design

Built with a mobile-first approach using Tailwind breakpoints:

- Small: 640px+  
- Medium: 768px+  
- Large: 1024px+  
- Extra Large: 1280px+  

---

## Environment Variables

VITE_API_URL=  
VITE_CONTACT_EMAIL=  
VITE_SITE_URL=  

---

## Author

Saurav Bhadauriya  
GitHub: https://github.com/SauravBhadauriya  

---

## Notes

- Clean and modular structure  
- Easy to maintain and extend  
- Focused on UI and user experience  

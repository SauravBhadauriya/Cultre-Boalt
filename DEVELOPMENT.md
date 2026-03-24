# Development Guide - Cultre Boat

Complete guide for developing and maintaining the Cultre Boat website.

## Getting Started

### Prerequisites
- Node.js 16+ (recommended 18+)
- npm 8+ or yarn 3+
- Git
- Code editor (VS Code recommended)

### Initial Setup

```bash
# Clone repository
git clone <repository-url>
cd cultreboat

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## Project Structure

```
cultreboat/
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn/ui components
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   └── carousel.jsx
│   │   ├── Header.jsx             # Navigation
│   │   ├── HeroBanner.jsx         # Hero section
│   │   ├── Brands.jsx             # Brand carousel
│   │   ├── WhatWeDo.jsx           # Services
│   │   ├── WhyChooseUs.jsx        # Benefits
│   │   ├── Cta.jsx                # Call-to-action
│   │   └── Footer.jsx             # Footer
│   ├── assets/                    # Images and static files
│   ├── lib/
│   │   └── utils.js               # Utility functions
│   ├── App.jsx                    # Main component
│   ├── App.css                    # App styles
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── public/                        # Static files
│   ├── favicon.svg
│   ├── icons.svg
│   ├── robots.txt
│   └── sitemap.xml
├── vite.config.js                 # Vite configuration
├── jsconfig.json                  # JS configuration
├── package.json                   # Dependencies
├── eslint.config.js               # ESLint configuration
├── components.json                # shadcn/ui config
├── README.md                      # Project overview
├── DEVELOPMENT.md                 # This file
├── DEPLOYMENT.md                  # Deployment guide
├── PRODUCTION_CHECKLIST.md        # Pre-launch checklist
└── PERFORMANCE.md                 # Performance guide
```

## Development Workflow

### 1. Creating a New Component

```jsx
// src/components/NewComponent.jsx
import React from 'react'

export default function NewComponent() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Component content */}
      </div>
    </section>
  )
}
```

### 2. Using UI Components

```jsx
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

### 3. Styling with Tailwind

```jsx
// Use Tailwind classes for styling
<div className="flex items-center justify-between px-4 py-6 md:px-8 lg:px-12">
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Title</h1>
</div>
```

### 4. Responsive Design

```jsx
// Mobile-first approach
<div className="
  grid 
  grid-cols-1           // 1 column on mobile
  md:grid-cols-2        // 2 columns on tablet
  lg:grid-cols-3        // 3 columns on desktop
  gap-4 md:gap-6 lg:gap-8
">
  {/* Grid items */}
</div>
```

## Available Scripts

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
npm run lint --fix       # Fix linting issues

# Other
npm install              # Install dependencies
npm update               # Update dependencies
```

## Component Guidelines

### Naming Conventions
- Components: PascalCase (e.g., `Header.jsx`)
- Functions: camelCase (e.g., `handleClick`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_WIDTH`)
- CSS classes: kebab-case (e.g., `hero-section`)

### Component Structure
```jsx
import React from 'react'
import { Icon } from 'lucide-react'

export default function ComponentName() {
  // State and hooks
  const [state, setState] = React.useState(false)

  // Event handlers
  const handleClick = () => {
    setState(!state)
  }

  // Render
  return (
    <section className="py-12">
      {/* JSX */}
    </section>
  )
}
```

### Props and PropTypes
```jsx
import PropTypes from 'prop-types'

function Card({ title, description, icon }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.node
}
```

## Styling Guidelines

### Tailwind CSS Classes
- Use utility classes for styling
- Avoid inline styles
- Use responsive prefixes (sm:, md:, lg:, xl:)
- Group related classes together

### Color Palette
```css
/* Primary */
--primary: oklch(0.205 0 0);           /* Dark gray/black */
--primary-foreground: oklch(0.985 0 0); /* White */

/* Secondary */
--secondary: oklch(0.97 0 0);          /* Light gray */
--secondary-foreground: oklch(0.205 0 0); /* Dark */

/* Accent */
--accent: oklch(0.97 0 0);             /* Light */
--accent-foreground: oklch(0.205 0 0); /* Dark */

/* Destructive */
--destructive: oklch(0.577 0.245 27.325); /* Red */
```

### Spacing Scale
```
0: 0
1: 0.25rem (4px)
2: 0.5rem (8px)
3: 0.75rem (12px)
4: 1rem (16px)
6: 1.5rem (24px)
8: 2rem (32px)
12: 3rem (48px)
16: 4rem (64px)
20: 5rem (80px)
```

## Git Workflow

### Branch Naming
```
feature/feature-name
bugfix/bug-name
hotfix/critical-issue
docs/documentation-update
```

### Commit Messages
```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Format code
refactor: Refactor code
perf: Improve performance
test: Add tests
chore: Update dependencies
```

### Example Workflow
```bash
# Create feature branch
git checkout -b feature/new-section

# Make changes
git add .
git commit -m "feat: Add new section component"

# Push to remote
git push origin feature/new-section

# Create pull request on GitHub
```

## Testing

### Manual Testing Checklist
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge
- [ ] Test on mobile (iOS)
- [ ] Test on mobile (Android)
- [ ] Test keyboard navigation
- [ ] Test with screen reader

### Responsive Testing
```bash
# Use browser DevTools
# Chrome: F12 → Toggle device toolbar (Ctrl+Shift+M)
# Firefox: F12 → Responsive Design Mode (Ctrl+Shift+M)
```

### Performance Testing
```bash
# Run Lighthouse
npm run build
npm run preview
# Open DevTools → Lighthouse → Analyze page load
```

## Debugging

### Browser DevTools
- Console: Check for errors
- Network: Check asset loading
- Performance: Check rendering performance
- Accessibility: Check accessibility issues

### React DevTools
```bash
# Install React DevTools extension
# Chrome: React Developer Tools
# Firefox: React Developer Tools
```

### Common Issues

**Issue: Images not loading**
```
Solution: Check image paths in components
- Use relative paths from src/
- Ensure images exist in assets/
- Check file extensions
```

**Issue: Styles not applying**
```
Solution: Check Tailwind classes
- Ensure class names are correct
- Check responsive prefixes
- Verify Tailwind config
```

**Issue: Carousel not working**
```
Solution: Check Embla Carousel setup
- Verify plugin configuration
- Check carousel options
- Ensure content is rendering
```

## Performance Optimization

### Code Splitting
```jsx
import { lazy, Suspense } from 'react'

const HeavyComponent = lazy(() => import('./HeavyComponent'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  )
}
```

### Memoization
```jsx
import { memo } from 'react'

const Header = memo(function Header() {
  return <header>...</header>
})
```

### Image Optimization
- Use AVIF format for modern browsers
- Provide WebP fallback
- Use JPG for older browsers
- Compress images before adding

## Accessibility

### WCAG 2.1 Guidelines
- Use semantic HTML
- Add alt text to images
- Ensure color contrast (4.5:1)
- Make interactive elements keyboard accessible
- Add ARIA labels where needed

### Testing
```bash
# Use axe DevTools extension
# Chrome: axe DevTools
# Firefox: axe DevTools
```

## Dependencies

### Core Dependencies
- react: UI library
- react-dom: React DOM rendering
- vite: Build tool
- tailwindcss: CSS framework
- lucide-react: Icons
- embla-carousel-react: Carousel

### Dev Dependencies
- @vitejs/plugin-react: React plugin for Vite
- eslint: Code linting
- @tailwindcss/vite: Tailwind CSS Vite plugin

### Updating Dependencies
```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update specific package
npm install package-name@latest

# Check for security issues
npm audit
npm audit fix
```

## Environment Variables

### Available Variables
```env
VITE_CONTACT_EMAIL=hello@cultreboat.in
VITE_CONTACT_PHONE=+1 (234) 567-890
VITE_FACEBOOK_URL=https://facebook.com/cultreboat
VITE_INSTAGRAM_URL=https://instagram.com/cultreboat
VITE_LINKEDIN_URL=https://linkedin.com/company/cultreboat
VITE_API_URL=https://api.cultreboat.in
```

### Using Environment Variables
```jsx
const email = import.meta.env.VITE_CONTACT_EMAIL
```

## Code Quality

### ESLint Configuration
```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint --fix
```

### Best Practices
- Keep components small and focused
- Use meaningful variable names
- Add comments for complex logic
- Avoid prop drilling (use context if needed)
- Handle errors gracefully
- Use const/let instead of var
- Avoid console.log in production

## Documentation

### Component Documentation
```jsx
/**
 * Header component with navigation
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */
export default function Header() {
  // ...
}
```

### README Updates
- Update when adding new features
- Document new components
- Add usage examples
- Update deployment instructions

## Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 5173
# Windows: netstat -ano | findstr :5173
# Mac/Linux: lsof -i :5173
```

**Module not found**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build fails**
```bash
# Check for errors
npm run lint
npm run build

# Clear cache
rm -rf dist
npm run build
```

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)
- [Embla Carousel](https://www.embla-carousel.com)

## Support

For development questions:
- Check documentation files
- Review component examples
- Check GitHub issues
- Contact team lead

---

**Last Updated:** 2024-03-24

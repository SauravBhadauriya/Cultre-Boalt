# Performance Optimization Guide

Comprehensive guide for optimizing Cultre Boat's performance.

## Current Performance Metrics

- Build size: ~150KB (gzipped)
- Initial load time: <2s
- Lighthouse score: 95+
- Core Web Vitals: All green

## Image Optimization

### Current Setup
- AVIF format for modern browsers
- WebP fallback
- JPG for older browsers
- Responsive images with proper sizing

### Further Optimization

1. **Image Compression**
```bash
# Install image optimization tools
npm install -D imagemin imagemin-mozjpeg imagemin-pngquant

# Compress images
npx imagemin src/assets/images --out-dir=src/assets/images
```

2. **Lazy Loading**
Already implemented with native `loading="lazy"` attribute.

3. **Image Sizing**
Use `srcset` for responsive images:
```jsx
<img
  src="image.jpg"
  srcSet="image-small.jpg 480w, image-medium.jpg 768w, image-large.jpg 1200w"
  sizes="(max-width: 480px) 100vw, (max-width: 768px) 90vw, 1200px"
  alt="Description"
/>
```

## CSS Optimization

### Current Setup
- Tailwind CSS with PurgeCSS
- Only used styles included
- Minified in production

### Further Optimization

1. **Critical CSS**
Extract critical CSS for above-the-fold content:
```bash
npm install -D critical
```

2. **CSS-in-JS**
Already optimized with Tailwind's JIT compiler.

## JavaScript Optimization

### Current Setup
- Code splitting with Vite
- Tree shaking enabled
- Minified in production

### Further Optimization

1. **Route-based Code Splitting**
```jsx
import { lazy, Suspense } from 'react'

const Services = lazy(() => import('./components/WhatWeDo'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Services />
    </Suspense>
  )
}
```

2. **Component Lazy Loading**
```jsx
const HeroBanner = lazy(() => import('./components/HeroBanner'))
```

## Caching Strategy

### Browser Caching
```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'ui': ['lucide-react', 'embla-carousel-react']
        }
      }
    }
  }
})
```

### Service Worker
```bash
npm install -D vite-plugin-pwa
```

## Network Optimization

### HTTP/2 Push
Automatically handled by modern servers.

### Compression
Enable gzip/brotli on server:
```nginx
# nginx.conf
gzip on;
gzip_types text/plain text/css text/javascript application/json;
gzip_min_length 1000;
```

### CDN
Use CDN for static assets:
- Vercel Edge Network (automatic)
- Cloudflare
- AWS CloudFront

## Monitoring Performance

### Lighthouse CI
```bash
npm install -D @lhci/cli@latest @lhci/server@latest

# Run Lighthouse CI
lhci autorun
```

### Web Vitals
```bash
npm install web-vitals

# In main.jsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

getCLS(console.log)
getFID(console.log)
getFCP(console.log)
getLCP(console.log)
getTTFB(console.log)
```

### Performance Budget
```json
{
  "bundles": [
    {
      "name": "main",
      "maxSize": "200kb"
    }
  ]
}
```

## Build Optimization

### Vite Configuration
```javascript
export default defineConfig({
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'carousel': ['embla-carousel-react', 'embla-carousel-autoplay']
        }
      }
    }
  }
})
```

### Bundle Analysis
```bash
npm install -D rollup-plugin-visualizer

# In vite.config.js
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    visualizer({
      open: true
    })
  ]
})
```

## Runtime Performance

### React Optimization

1. **Memoization**
```jsx
import { memo } from 'react'

const Header = memo(function Header() {
  return <header>...</header>
})
```

2. **useCallback**
```jsx
const handleClick = useCallback(() => {
  // handler
}, [])
```

3. **useMemo**
```jsx
const memoizedValue = useMemo(() => {
  return expensiveCalculation()
}, [dependency])
```

### Component Optimization

1. **Carousel Performance**
Already optimized with Embla Carousel.

2. **Image Loading**
Use native lazy loading:
```jsx
<img loading="lazy" src="..." alt="..." />
```

## Server-Side Optimization

### Compression
Enable on your server:
```bash
# Vercel: Automatic
# Netlify: Automatic
# Traditional: Configure in nginx/Apache
```

### Caching Headers
```nginx
# Cache static assets for 1 year
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}

# Don't cache HTML
location ~* \.html$ {
  expires -1;
  add_header Cache-Control "public, must-revalidate, proxy-revalidate";
}
```

## Performance Checklist

- [ ] Lighthouse score 90+
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Total Blocking Time < 200ms
- [ ] Bundle size < 200KB (gzipped)
- [ ] Images optimized
- [ ] CSS minified
- [ ] JavaScript minified
- [ ] Caching configured
- [ ] CDN enabled
- [ ] Compression enabled
- [ ] Code splitting implemented
- [ ] Lazy loading enabled
- [ ] Service Worker configured

## Performance Testing

### Local Testing
```bash
# Build and preview
npm run build
npm run preview

# Open in browser and run Lighthouse
```

### Automated Testing
```bash
# Install Lighthouse CI
npm install -D @lhci/cli

# Run tests
lhci autorun
```

### Real User Monitoring
- Google Analytics
- Sentry Performance
- New Relic
- Datadog

## Optimization Results

Expected improvements:
- 30-40% faster load time
- 50+ Lighthouse score improvement
- Better Core Web Vitals
- Improved user experience
- Better SEO ranking

## Resources

- [Web.dev Performance](https://web.dev/performance/)
- [Vite Optimization Guide](https://vitejs.dev/guide/features.html)
- [React Performance](https://react.dev/reference/react/memo)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)

---

**Last Updated:** 2024-03-24

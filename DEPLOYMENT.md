# Deployment Guide - Cultre Boat

Complete guide for deploying the Cultre Boat website to production.

## Pre-Deployment Checklist

- [ ] Update company information in components
- [ ] Replace placeholder images with actual images
- [ ] Update contact email and phone number
- [ ] Add social media links
- [ ] Test all links and forms
- [ ] Run `npm run lint` and fix any issues
- [ ] Test on mobile devices
- [ ] Update meta tags in `index.html`
- [ ] Set up analytics (Google Analytics, Hotjar, etc.)
- [ ] Configure email service for contact form

## Environment Setup

1. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

2. Update environment variables with your actual values

## Build for Production

```bash
# Install dependencies
npm install

# Run linting
npm run lint

# Build production files
npm run build

# Preview production build locally
npm run preview
```

The `dist/` folder contains all production-ready files.

## Deployment Options

### Option 1: Vercel (Recommended)

**Advantages:**
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Free tier available
- Automatic deployments from Git

**Steps:**

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Vite configuration
6. Click "Deploy"

**Custom Domain:**
1. Go to project settings
2. Add custom domain
3. Update DNS records as instructed

### Option 2: Netlify

**Advantages:**
- Easy Git integration
- Form handling
- Serverless functions
- Free tier available

**Steps:**

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**netlify.toml Configuration:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: GitHub Pages

**Steps:**

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repository-name/', // if not using custom domain
  // ... rest of config
})
```

2. Build and deploy:
```bash
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git push
```

3. Go to repository Settings → Pages
4. Select "Deploy from a branch"
5. Choose `main` branch and `/root` folder

### Option 4: Traditional Hosting (cPanel, etc.)

**Steps:**

1. Build the project:
```bash
npm run build
```

2. Upload `dist/` folder contents to your hosting:
   - Via FTP/SFTP
   - Via cPanel File Manager
   - Via SSH

3. Set document root to the `dist` folder

4. Configure `.htaccess` for SPA routing:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Option 5: AWS S3 + CloudFront

**Steps:**

1. Create S3 bucket
2. Enable static website hosting
3. Upload `dist/` contents
4. Create CloudFront distribution
5. Point domain to CloudFront

### Option 6: Docker Deployment

**Dockerfile:**
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf:**
```nginx
server {
    listen 80;
    location / {
        root /usr/share/nginx/html;
        try_files $uri $uri/ /index.html;
    }
}
```

## Post-Deployment

### 1. Verify Deployment
- [ ] Check website loads correctly
- [ ] Test all navigation links
- [ ] Test responsive design on mobile
- [ ] Check images load properly
- [ ] Test carousel functionality
- [ ] Verify contact links work

### 2. SEO Setup
- [ ] Add meta tags to `index.html`
- [ ] Submit sitemap to Google Search Console
- [ ] Add robots.txt
- [ ] Set up Google Analytics
- [ ] Verify mobile-friendly in Search Console

### 3. Performance Monitoring
- [ ] Set up monitoring/uptime alerts
- [ ] Monitor Core Web Vitals
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Monitor analytics

### 4. Security
- [ ] Enable HTTPS (automatic on most platforms)
- [ ] Set security headers
- [ ] Configure CORS if needed
- [ ] Set up SSL certificate renewal

### 5. Backup & Maintenance
- [ ] Set up automated backups
- [ ] Plan regular updates
- [ ] Monitor dependencies for updates
- [ ] Keep Node.js and npm updated

## Monitoring & Analytics

### Google Analytics
1. Create Google Analytics account
2. Add tracking ID to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Sentry (Error Tracking)
```bash
npm install @sentry/react @sentry/tracing
```

## Troubleshooting

### Blank Page After Deployment
- Check browser console for errors
- Verify `base` path in `vite.config.js`
- Check that all assets are loading
- Clear browser cache

### Images Not Loading
- Verify image paths are correct
- Check image file permissions
- Ensure images are in correct directory
- Use absolute paths if needed

### Routing Issues
- Ensure SPA routing is configured
- Check `.htaccess` or server configuration
- Verify `index.html` is served for all routes

### Performance Issues
- Run Lighthouse audit
- Optimize images
- Enable gzip compression
- Use CDN for static assets
- Minimize JavaScript bundles

## Rollback Procedure

### Vercel/Netlify
- Go to Deployments
- Click on previous deployment
- Click "Redeploy"

### Manual Deployment
- Keep backup of previous `dist/` folder
- Upload previous version back to server

## Continuous Deployment

### GitHub Actions Example
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## Support

For deployment issues:
- Check platform-specific documentation
- Review error logs
- Contact hosting provider support
- Check GitHub issues

---

**Last Updated:** 2024

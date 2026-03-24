#!/bin/bash

# Cultre Boat - Production Deployment Script
# This script automates the deployment process

set -e

echo "🚀 Cultre Boat - Production Deployment"
echo "======================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check Node.js version
echo "📋 Checking Node.js version..."
NODE_VERSION=$(node -v)
echo "✅ Node.js version: $NODE_VERSION"
echo ""

# Step 2: Install dependencies
echo "📦 Installing dependencies..."
npm ci
echo "✅ Dependencies installed"
echo ""

# Step 3: Run linting
echo "🔍 Running ESLint..."
npm run lint
echo "✅ ESLint passed"
echo ""

# Step 4: Build project
echo "🔨 Building project..."
npm run build
echo "✅ Build successful"
echo ""

# Step 5: Display build metrics
echo "📊 Build Metrics:"
echo "================"
if [ -f "dist/assets/index-*.js" ]; then
  JS_SIZE=$(du -sh dist/assets/index-*.js 2>/dev/null | cut -f1 || echo "N/A")
  echo "JavaScript: $JS_SIZE"
fi
if [ -f "dist/assets/index-*.css" ]; then
  CSS_SIZE=$(du -sh dist/assets/index-*.css 2>/dev/null | cut -f1 || echo "N/A")
  echo "CSS: $CSS_SIZE"
fi
TOTAL_SIZE=$(du -sh dist/ | cut -f1)
echo "Total: $TOTAL_SIZE"
echo ""

# Step 6: Deployment options
echo "🌐 Deployment Options:"
echo "====================="
echo "1. Vercel (Recommended)"
echo "2. Netlify"
echo "3. Docker"
echo "4. Manual Upload"
echo ""

read -p "Select deployment option (1-4): " DEPLOY_OPTION

case $DEPLOY_OPTION in
  1)
    echo ""
    echo "📤 Deploying to Vercel..."
    if command -v vercel &> /dev/null; then
      vercel --prod
      echo "✅ Deployed to Vercel"
    else
      echo "❌ Vercel CLI not found. Install with: npm install -g vercel"
      exit 1
    fi
    ;;
  2)
    echo ""
    echo "📤 Deploying to Netlify..."
    echo "Please deploy manually through Netlify dashboard"
    echo "Build command: npm run build"
    echo "Publish directory: dist"
    ;;
  3)
    echo ""
    echo "🐳 Building Docker image..."
    docker build -t cultreboat:latest .
    echo "✅ Docker image built"
    echo ""
    echo "To run locally:"
    echo "  docker run -p 3000:3000 cultreboat:latest"
    echo ""
    echo "To push to registry:"
    echo "  docker tag cultreboat:latest your-registry/cultreboat:latest"
    echo "  docker push your-registry/cultreboat:latest"
    ;;
  4)
    echo ""
    echo "📁 Build files ready in 'dist' directory"
    echo "Upload the contents of 'dist' to your hosting provider"
    ;;
  *)
    echo "❌ Invalid option"
    exit 1
    ;;
esac

echo ""
echo "✅ Deployment process complete!"
echo ""
echo "📋 Post-Deployment Checklist:"
echo "============================"
echo "[ ] Verify site loads correctly"
echo "[ ] Test all pages and navigation"
echo "[ ] Check mobile responsiveness"
echo "[ ] Verify forms are working"
echo "[ ] Check console for errors"
echo "[ ] Set up monitoring and analytics"
echo "[ ] Configure security headers"
echo "[ ] Submit sitemap to search engines"
echo ""
echo "For more information, see DEPLOYMENT_GUIDE.md"

# Deployment Setup Guide

This guide explains how to set up automatic deployment to Vercel using GitHub Actions.

## Current Status

✅ **Build Job**: Working perfectly - runs ESLint and builds the project
✅ **Deploy Job**: Ready to deploy - requires Vercel secrets configuration

## GitHub Actions Workflow

The workflow in `.github/workflows/deploy.yml` does the following:

1. **On every push to main/develop**:
   - Checks out your code
   - Sets up Node.js 20.x
   - Installs dependencies
   - Runs ESLint checks
   - Builds the project
   - Uploads build artifacts

2. **On push to main branch only**:
   - Downloads build artifacts
   - Deploys to Vercel (if secrets are configured)

## Setup Instructions

### Option 1: Automatic Deployment with Vercel (Recommended)

#### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with GitHub

#### Step 2: Connect Your Repository
1. Click "New Project"
2. Select your GitHub repository
3. Vercel will auto-detect it's a Vite + React project
4. Click "Deploy"

#### Step 3: Get Your Vercel Secrets
1. Go to your Vercel project settings
2. Find your **Project ID** and **Org ID**
3. Create a **Personal Access Token** in Vercel account settings

#### Step 4: Add GitHub Secrets
1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Add these secrets:
   - `VERCEL_TOKEN`: Your Vercel Personal Access Token
   - `VERCEL_ORG_ID`: Your Vercel Organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel Project ID

#### Step 5: Test the Workflow
1. Make a commit and push to main branch
2. Go to GitHub Actions tab
3. Watch the workflow run
4. Check Vercel for deployment

### Option 2: Manual Deployment

If you prefer manual deployment:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Option 3: Netlify Deployment

1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy

### Option 4: Docker Deployment

```bash
# Build Docker image
docker build -t cultre-boat .

# Run container
docker run -p 3000:80 cultre-boat

# Or use Docker Compose
docker-compose up
```

## Troubleshooting

### Build Job Fails
- Check ESLint errors: `npm run lint`
- Check build errors: `npm run build`
- Verify Node.js version: `node --version`

### Deploy Job Fails
- Verify Vercel secrets are set correctly
- Check Vercel project settings
- Ensure project ID matches

### Lighthouse Job Fails
- This job has been removed from the workflow
- Use Vercel's built-in performance monitoring instead

## Monitoring Deployments

### GitHub Actions
- Go to your repository
- Click "Actions" tab
- View workflow runs and logs

### Vercel Dashboard
- Go to [vercel.com](https://vercel.com)
- View deployment history
- Check performance metrics

## Environment Variables

If you need environment variables in production:

1. Create `.env.production` file locally
2. Add to GitHub Secrets (if needed)
3. Configure in Vercel project settings

Example:
```
VITE_API_URL=https://api.example.com
VITE_SITE_URL=https://cultre-boat.vercel.app
```

## Next Steps

1. Choose your deployment platform
2. Follow the setup instructions above
3. Add GitHub secrets if using Vercel
4. Push a test commit to main branch
5. Monitor the deployment

## Support

For issues:
- GitHub Actions: Check workflow logs
- Vercel: Check deployment logs
- Build errors: Run `npm run build` locally

---

**Last Updated**: March 2026
**Status**: Ready for Production Deployment

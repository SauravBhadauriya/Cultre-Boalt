@echo off
REM Cultre Boat - Production Deployment Script (Windows)
REM This script automates the deployment process

setlocal enabledelayedexpansion

echo.
echo ========================================
echo Cultre Boat - Production Deployment
echo ========================================
echo.

REM Step 1: Check Node.js version
echo [1/6] Checking Node.js version...
node -v
if errorlevel 1 (
  echo ERROR: Node.js not found. Please install Node.js first.
  exit /b 1
)
echo.

REM Step 2: Install dependencies
echo [2/6] Installing dependencies...
call npm ci
if errorlevel 1 (
  echo ERROR: Failed to install dependencies
  exit /b 1
)
echo.

REM Step 3: Run linting
echo [3/6] Running ESLint...
call npm run lint
if errorlevel 1 (
  echo ERROR: ESLint failed
  exit /b 1
)
echo.

REM Step 4: Build project
echo [4/6] Building project...
call npm run build
if errorlevel 1 (
  echo ERROR: Build failed
  exit /b 1
)
echo.

REM Step 5: Display build metrics
echo [5/6] Build Metrics:
echo ================
for %%F in (dist\assets\index-*.js) do (
  echo JavaScript: %%~zF bytes
)
for %%F in (dist\assets\index-*.css) do (
  echo CSS: %%~zF bytes
)
echo.

REM Step 6: Deployment options
echo [6/6] Deployment Options:
echo =====================
echo 1. Vercel (Recommended)
echo 2. Netlify
echo 3. Docker
echo 4. Manual Upload
echo.

set /p DEPLOY_OPTION="Select deployment option (1-4): "

if "%DEPLOY_OPTION%"=="1" (
  echo.
  echo Deploying to Vercel...
  where vercel >nul 2>nul
  if errorlevel 1 (
    echo ERROR: Vercel CLI not found. Install with: npm install -g vercel
    exit /b 1
  )
  call vercel --prod
  echo Deployed to Vercel
) else if "%DEPLOY_OPTION%"=="2" (
  echo.
  echo Deploying to Netlify...
  echo Please deploy manually through Netlify dashboard
  echo Build command: npm run build
  echo Publish directory: dist
) else if "%DEPLOY_OPTION%"=="3" (
  echo.
  echo Building Docker image...
  call docker build -t cultreboat:latest .
  echo Docker image built
  echo.
  echo To run locally:
  echo   docker run -p 3000:3000 cultreboat:latest
  echo.
  echo To push to registry:
  echo   docker tag cultreboat:latest your-registry/cultreboat:latest
  echo   docker push your-registry/cultreboat:latest
) else if "%DEPLOY_OPTION%"=="4" (
  echo.
  echo Build files ready in 'dist' directory
  echo Upload the contents of 'dist' to your hosting provider
) else (
  echo ERROR: Invalid option
  exit /b 1
)

echo.
echo ========================================
echo Deployment process complete!
echo ========================================
echo.
echo Post-Deployment Checklist:
echo ==========================
echo [ ] Verify site loads correctly
echo [ ] Test all pages and navigation
echo [ ] Check mobile responsiveness
echo [ ] Verify forms are working
echo [ ] Check console for errors
echo [ ] Set up monitoring and analytics
echo [ ] Configure security headers
echo [ ] Submit sitemap to search engines
echo.
echo For more information, see DEPLOYMENT_GUIDE.md
echo.

pause

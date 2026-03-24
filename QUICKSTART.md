# Quick Start Guide - Cultre Boat

Get up and running in 5 minutes.

## 1. Installation (2 min)

```bash
# Clone and install
git clone <repository-url>
cd cultreboat
npm install
```

## 2. Start Development (1 min)

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## 3. Make Changes (1 min)

Edit any component in `src/components/` and see changes instantly.

### Quick Edits

**Update company name:**
- `src/components/Header.jsx` - Line 13
- `src/components/Footer.jsx` - Line 35
- `index.html` - Line 8

**Update contact email:**
- `src/components/Cta.jsx` - Line 24
- `src/components/Footer.jsx` - Line 50

**Update services:**
- `src/components/WhatWeDo.jsx` - Lines 8-20

**Update benefits:**
- `src/components/WhyChooseUs.jsx` - Lines 8-29

**Update images:**
- Hero images: `src/assets/images/Hero/`
- Brand logos: `src/assets/images/Brandlogo/`

## 4. Build for Production (1 min)

```bash
npm run build
```

Output in `dist/` folder ready to deploy.

## 5. Deploy (Varies)

### Vercel (Easiest)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Traditional Hosting
Upload `dist/` folder via FTP/cPanel.

---

## Common Tasks

### Add a new section
1. Create `src/components/NewSection.jsx`
2. Import in `src/App.jsx`
3. Add to JSX

### Change colors
Edit `src/index.css` (lines 30-60)

### Update navigation
Edit `src/components/Header.jsx` (line 11)

### Add social links
Edit `src/components/Footer.jsx` (line 60)

---

## Useful Commands

```bash
npm run dev       # Start development
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Check code quality
npm run lint --fix # Fix code issues
```

---

## Need Help?

- Check `README.md` for full documentation
- See `DEVELOPMENT.md` for detailed guide
- Review `DEPLOYMENT.md` for deployment help
- Check `PRODUCTION_CHECKLIST.md` before launch

---

**Ready to launch? Follow the PRODUCTION_CHECKLIST.md**

# Design Portfolio Page Guide

Complete guide for the new Design Portfolio page with grid layout and filtering.

## 📋 What's New

### 1. Design Data File
**File:** `src/data/designData.js`

Contains:
- Design categories (Branding, Digital, Print, Packaging, Social Media)
- 16 sample design projects
- Project details (title, category, image, description, year)

### 2. Design Portfolio Page
**File:** `src/pages/Design.jsx`

Features:
- Hero section with title and description
- Category filter buttons (All Work, Branding, Digital, Print, Packaging, Social Media)
- Responsive grid layout (1 column mobile, 2 columns tablet, 3 columns desktop)
- Project cards with hover effects
- Image overlay with project details on hover
- Category badges on each project
- Project detail modal when clicked
- Back button to return to home

### 3. Updated Components
- **Header** - Already includes "Design" navigation link
- **App** - Added Design page routing

---

## 🎯 Features

### Design Page Features
✅ Professional portfolio grid layout
✅ Category filtering system
✅ Responsive design (mobile, tablet, desktop)
✅ Hover effects with image zoom
✅ Project detail modal
✅ Category badges
✅ Year information
✅ Easy to customize

### Grid Layout
- **Mobile (320px+)**: 1 column
- **Tablet (640px+)**: 2 columns
- **Desktop (1024px+)**: 3 columns

### Hover Effects
- Image zoom on hover
- Dark overlay appears
- Project title and description visible
- Smooth transitions

---

## 📁 File Structure

```
src/
├── data/
│   └── designData.js           ✨ NEW
├── pages/
│   └── Design.jsx              ✨ NEW
└── App.jsx                      ✏️ UPDATED
```

---

## 🎨 Design Structure

### Hero Section
- Gradient background (slate-800 to slate-900)
- Title: "Our Design Work"
- Subtitle: "Explore our portfolio of creative design projects"
- Back button to return home

### Category Filter
- Horizontal button layout
- "All Work" button to show all projects
- Individual category buttons
- Active state styling (blue background)
- Inactive state styling (gray background)

### Projects Grid
- Responsive grid layout
- Square aspect ratio for images
- Hover overlay with project details
- Category badge in top-right corner
- Smooth transitions and animations

### Project Modal
- Full project details
- Large project image
- Category information
- Project description
- Year information
- Close button

---

## 🔧 Customization

### Update Design Projects

Edit `src/data/designData.js`:

```javascript
export const designData = {
  categories: [
    {
      id: 'branding',
      name: 'Branding',
      description: 'Complete brand identity systems'
    },
    // ... more categories
  ],
  projects: [
    {
      id: 1,
      title: 'Project Title',
      category: 'branding',
      image: '/path/to/image.jpg',
      description: 'Project description',
      year: 2024
    },
    // ... more projects
  ]
}
```

### Add New Category

1. Add to `categories` array in `src/data/designData.js`:
```javascript
{
  id: 'newcategory',
  name: 'New Category',
  description: 'Category description'
}
```

2. Add projects with `category: 'newcategory'`

### Add New Project

Add to `projects` array:
```javascript
{
  id: 17,
  title: 'New Project',
  category: 'branding',
  image: '/path/to/image.jpg',
  description: 'Project description',
  year: 2024
}
```

### Change Colors

**Hero Section** - Edit `src/pages/Design.jsx`:
- Background: `from-slate-800 to-slate-900`
- Change to your preferred gradient

**Filter Buttons** - Edit `src/pages/Design.jsx`:
- Active: `bg-blue-600 text-white`
- Inactive: `bg-slate-100 text-slate-700`

**Modal Header** - Edit `src/pages/Design.jsx`:
- Background: `from-blue-600 to-blue-700`

---

## 📱 Responsive Design

### Mobile (320px+)
- 1 column grid
- Full-width projects
- Touch-friendly buttons
- Stacked category filters

### Tablet (640px+)
- 2 column grid
- Proper spacing
- Optimized touch targets

### Desktop (1024px+)
- 3 column grid
- Hover effects
- Full layout

---

## 🎯 How to Use

### Access Design Page
1. Click "Design" in navigation menu
2. Or click "Design" link in header
3. Page displays all design projects

### Filter Projects
1. Click category button to filter
2. Grid updates to show only that category
3. Click "All Work" to show all projects

### View Project Details
1. Click on any project card
2. Modal opens with full details
3. Click "Close" or X button to close modal

---

## 📊 Project Structure

Each project has:
- **ID**: Unique identifier
- **Title**: Project name
- **Category**: Project category (branding, digital, print, packaging, social)
- **Image**: Project image path
- **Description**: Short project description
- **Year**: Project year

---

## 🎨 Styling

### Grid Layout
- Responsive grid with gap spacing
- Square aspect ratio for images
- Smooth transitions

### Hover Effects
- Image zoom (scale-110)
- Dark overlay (bg-black/60)
- Text fade in (opacity transition)
- Shadow effect

### Buttons
- Rounded pill shape
- Smooth color transitions
- Active/inactive states

### Modal
- Centered overlay
- Rounded corners
- Scrollable content
- Sticky header

---

## 🔐 Best Practices

### Image Optimization
- Use optimized image formats (AVIF, WebP, JPG)
- Compress images before adding
- Use consistent image sizes
- Provide alt text

### Performance
- Lazy load images
- Optimize modal rendering
- Minimize re-renders
- Use CSS transitions

### Accessibility
- Semantic HTML
- Keyboard navigation
- ARIA labels
- Color contrast

---

## 📧 Integration

### Add to Navigation
Already integrated in Header with "Design" link

### Add to Footer
Edit `src/components/Footer.jsx` to add Design link

### Add to CTA
Edit `src/components/Cta.jsx` to add Design button

---

## 🚀 Quick Start

### 1. Update Design Projects
Edit `src/data/designData.js` with your projects

### 2. Add Project Images
Place images in `src/assets/` and update paths

### 3. Test Locally
```bash
npm run dev
# Click "Design" in navigation
```

### 4. Deploy
```bash
npm run build
# Deploy dist/ folder
```

---

## 🐛 Troubleshooting

### Images Not Loading
- Check image paths are correct
- Verify images exist in src/assets/
- Use absolute paths from src/

### Filter Not Working
- Check category IDs match
- Verify project category values
- Check console for errors

### Modal Not Opening
- Verify onClick handler
- Check selectedProject state
- Check modal rendering

### Styling Issues
- Check Tailwind CSS is loaded
- Verify class names are correct
- Check for CSS conflicts

---

## 📈 Future Enhancements

Possible additions:
- Search functionality
- Sorting options
- Lightbox gallery
- Project detail pages
- Client testimonials
- Project statistics
- Download portfolio PDF

---

## ✅ Checklist

Before launching:
- [ ] Update design projects
- [ ] Add project images
- [ ] Test filtering
- [ ] Test modal
- [ ] Test responsive design
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Deploy to production

---

## 📝 Version

**v1.0.0** - Initial Release (2024-03-24)

---

**Happy designing! 🎨**

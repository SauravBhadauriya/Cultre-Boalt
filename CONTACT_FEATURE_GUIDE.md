# Contact Feature Guide - Cultre Boat

Complete guide for the new contact feature including contact page and modal form.

## 📋 What's New

### 1. Contact Data Structure
**File:** `src/data/contactData.js`

Centralized contact information including:
- Office address
- Phone number
- Email
- Business hours
- Social media links
- Form field definitions

### 2. Contact Page
**File:** `src/pages/Contact.jsx`

Full-page contact form with:
- Contact information display
- Office details with icons
- Social media links
- Responsive contact form
- Success/error messages
- Additional info section (24/7 support, response time, satisfaction)

### 3. Contact Modal
**File:** `src/components/ContactModal.jsx`

Modal dialog that appears when clicking "Contact Us" button:
- Compact form layout
- Same form fields as contact page
- Close button
- Success/error handling
- Auto-closes after successful submission

### 4. Updated Components

**Header** (`src/components/Header.jsx`)
- Added "Contact" link to navigation
- Links to `/contact` page

**CTA Section** (`src/components/Cta.jsx`)
- "Contact Us" button opens modal
- "View Services" button links to contact page

**App** (`src/App.jsx`)
- Added React Router for navigation
- Routes for home page and contact page

---

## 🎯 Features

### Contact Page Features
✅ Professional layout with contact info on left, form on right
✅ Office information with icons (address, phone, email, hours)
✅ Social media links
✅ Responsive design (stacks on mobile)
✅ Form validation
✅ Success/error messages
✅ Additional info section

### Contact Modal Features
✅ Modal dialog overlay
✅ Same form as contact page
✅ Compact layout for modal
✅ Close button (X)
✅ Auto-close on success
✅ Form validation
✅ Success/error messages

### Form Fields
1. **Email ID** (required)
2. **Name** (required)
3. **Company Name** (optional)
4. **Contact Number** (required)
5. **Professional Designation** (optional)
6. **Budget** (optional)
7. **Project Description** (required, textarea)

---

## 📁 File Structure

```
src/
├── data/
│   └── contactData.js          # Contact information & form fields
├── components/
│   ├── ContactModal.jsx        # Modal form component
│   ├── Cta.jsx                 # Updated with modal trigger
│   └── Header.jsx              # Updated with contact link
├── pages/
│   └── Contact.jsx             # Full contact page
└── App.jsx                      # Updated with routing
```

---

## 🚀 How to Use

### Access Contact Page
1. Click "Contact" in navigation menu
2. Or click "View Services" button in CTA section
3. URL: `/contact`

### Open Contact Modal
1. Click "Contact Us" button in CTA section
2. Or click "Contact Us" button in header (if added)
3. Modal appears with form

### Submit Form
1. Fill in required fields (marked with *)
2. Click "Submit" button
3. Form validates and submits
4. Success message appears
5. Modal auto-closes after 2 seconds

---

## 🎨 Customization

### Update Contact Information

Edit `src/data/contactData.js`:

```javascript
export const contactData = {
  office: {
    title: "OUR OFFICE",
    address: "Your Address Here",
    phone: "+91 (98) 765-4321",
    email: "your@email.com",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM"
  },
  social: [
    {
      name: "Facebook",
      url: "https://facebook.com/yourpage",
      icon: "Share2"
    },
    // ... more social links
  ]
}
```

### Update Form Fields

Edit `src/data/contactData.js` - `formFields` array:

```javascript
formFields: [
  {
    id: "fieldName",
    label: "FIELD LABEL",
    type: "text", // or "email", "tel", "textarea"
    placeholder: "Placeholder text",
    required: true,
    rows: 6 // only for textarea
  }
]
```

### Customize Styling

**Contact Page** - Edit `src/pages/Contact.jsx`
- Colors: Change `from-slate-800 to-slate-900` for hero
- Spacing: Adjust `py-12 md:py-16 lg:py-20`
- Layout: Modify grid columns

**Contact Modal** - Edit `src/components/ContactModal.jsx`
- Colors: Change `from-blue-600 to-blue-700` for header
- Size: Adjust `max-w-2xl` for width
- Spacing: Modify padding values

---

## 📧 Form Submission

### Current Setup
Currently, the form validates and shows success message but doesn't actually send data.

### To Add Email Functionality

Choose one of these options from `CONTACT_SETUP.md`:

1. **Formspree** (Easiest)
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   })
   ```

2. **EmailJS** (Client-side)
   ```bash
   npm install @emailjs/browser
   ```

3. **Backend API** (Most control)
   - Create your own API endpoint
   - Send data to your server

4. **Netlify Forms** (If using Netlify)
   - Add `netlify` attribute to form

5. **Vercel Functions** (If using Vercel)
   - Create serverless function

---

## 🔧 Implementation Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Update Contact Data
Edit `src/data/contactData.js` with your information

### Step 3: Set Up Form Submission
Choose a method from CONTACT_SETUP.md and implement

### Step 4: Test
```bash
npm run dev
# Test contact page at http://localhost:5173/contact
# Test modal by clicking "Contact Us" button
```

### Step 5: Deploy
```bash
npm run build
# Deploy dist/ folder
```

---

## 🎯 Form Validation

### Required Fields
- Email ID
- Name
- Contact Number
- Project Description

### Validation Rules
- Email: Valid email format
- Phone: Any format accepted
- Name: Non-empty string
- Message: Non-empty string

### Error Handling
- Shows error message if validation fails
- Prevents submission if required fields empty
- Displays success message on successful submission

---

## 📱 Responsive Design

### Mobile (320px+)
- Single column layout
- Full-width form
- Stacked contact info
- Touch-friendly buttons

### Tablet (768px+)
- Two-column layout
- Side-by-side form and info
- Optimized spacing

### Desktop (1024px+)
- Full two-column layout
- Proper spacing
- Hover effects

---

## 🔐 Security Considerations

### Current Implementation
- Client-side validation only
- No backend security

### For Production
- Add server-side validation
- Sanitize user input
- Use HTTPS
- Add rate limiting
- Add CAPTCHA (optional)
- Validate email format
- Protect API keys

See CONTACT_SETUP.md for security best practices.

---

## 🐛 Troubleshooting

### Form Not Submitting
- Check browser console for errors
- Verify all required fields are filled
- Check network tab for API calls

### Modal Not Opening
- Verify ContactModal component is imported
- Check isModalOpen state
- Verify onClick handler is attached

### Styling Issues
- Check Tailwind CSS is loaded
- Verify class names are correct
- Check for CSS conflicts

### Routing Not Working
- Verify react-router-dom is installed
- Check BrowserRouter wraps app
- Verify Routes are configured

---

## 📊 Analytics Integration

### Track Form Submissions
```javascript
// In handleSubmit function
gtag('event', 'contact_form_submit', {
  'form_name': 'contact_form',
  'form_location': 'modal' // or 'page'
})
```

### Track Modal Opens
```javascript
// In ContactModal component
useEffect(() => {
  if (isOpen) {
    gtag('event', 'contact_modal_open')
  }
}, [isOpen])
```

---

## 🚀 Next Steps

1. **Update Contact Data** - Edit `src/data/contactData.js`
2. **Set Up Email** - Choose method from CONTACT_SETUP.md
3. **Test Locally** - Run `npm run dev`
4. **Deploy** - Follow DEPLOYMENT.md
5. **Monitor** - Set up analytics and error tracking

---

## 📞 Support

### Files to Reference
- `src/data/contactData.js` - Contact information
- `src/pages/Contact.jsx` - Contact page
- `src/components/ContactModal.jsx` - Modal form
- `CONTACT_SETUP.md` - Email setup options

### Common Tasks

**Change contact email:**
- Edit `src/data/contactData.js` - `office.email`

**Add new form field:**
- Edit `src/data/contactData.js` - `formFields` array
- Update form state in Contact.jsx and ContactModal.jsx

**Change colors:**
- Edit `src/pages/Contact.jsx` for page colors
- Edit `src/components/ContactModal.jsx` for modal colors

**Add validation:**
- Edit `handleSubmit` function in Contact.jsx or ContactModal.jsx

---

## ✅ Checklist

Before launching:
- [ ] Update contact information
- [ ] Set up email functionality
- [ ] Test form submission
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Add analytics tracking
- [ ] Deploy to production
- [ ] Monitor form submissions

---

## 📝 Version

**v1.0.0** - Initial Release (2024-03-24)

---

**Happy coding! 🚀**

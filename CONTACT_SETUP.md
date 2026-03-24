# Contact Form & Email Setup Guide

Complete guide for setting up contact functionality.

## Option 1: Formspree (Easiest - No Backend)

### Setup

1. Go to [formspree.io](https://formspree.io)
2. Sign up for free account
3. Create new form
4. Get your form ID

### Implementation

Update `src/components/Cta.jsx`:

```jsx
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"

export default function CTASection() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ email: '', name: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
          Ready to Transform Your Brand?
        </h2>
        
        <p className="text-blue-100 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-10">
          Let's work together to create something extraordinary.
        </p>

        {submitted && (
          <div className="mb-6 p-4 bg-green-500 rounded-lg text-white">
            Thank you! We'll be in touch soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg text-black"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-3 rounded-lg text-black"
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-3"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  )
}
```

## Option 2: EmailJS (Client-Side)

### Setup

1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up for free account
3. Create email service
4. Create email template
5. Get your Service ID, Template ID, and Public Key

### Installation

```bash
npm install @emailjs/browser
```

### Implementation

```jsx
import emailjs from '@emailjs/browser'

// Initialize (in main.jsx or App.jsx)
emailjs.init('YOUR_PUBLIC_KEY')

// In component
const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        to_email: 'hello@cultreboat.in',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      }
    )
    setSubmitted(true)
  } catch (error) {
    console.error('Error:', error)
  }
}
```

## Option 3: Backend API (Most Control)

### Setup Node.js Backend

```bash
npm init -y
npm install express nodemailer cors dotenv
```

### Create `server.js`

```javascript
const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'hello@cultreboat.in',
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    })

    res.json({ success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

app.listen(3001, () => {
  console.log('Server running on port 3001')
})
```

### Frontend Implementation

```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)

  try {
    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    setLoading(false)
  }
}
```

## Option 4: Netlify Forms

### Setup

1. Add form to component with `netlify` attribute
2. Deploy to Netlify
3. Forms automatically detected

### Implementation

```jsx
<form name="contact" method="POST" netlify>
  <input type="text" name="name" placeholder="Name" required />
  <input type="email" name="email" placeholder="Email" required />
  <textarea name="message" placeholder="Message" required />
  <button type="submit">Send</button>
</form>
```

## Option 5: Vercel Serverless Functions

### Setup

Create `api/contact.js`:

```javascript
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  // Send email using your service
  // Example with SendGrid
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  try {
    await sgMail.send({
      to: 'hello@cultreboat.in',
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
```

### Frontend

```jsx
const handleSubmit = async (e) => {
  e.preventDefault()

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })

  if (response.ok) {
    setSubmitted(true)
  }
}
```

## Email Service Providers

### SendGrid
- Free tier: 100 emails/day
- Setup: [sendgrid.com](https://sendgrid.com)
- Best for: High volume

### Mailgun
- Free tier: 5,000 emails/month
- Setup: [mailgun.com](https://mailgun.com)
- Best for: Developers

### AWS SES
- Free tier: 62,000 emails/month
- Setup: [aws.amazon.com/ses](https://aws.amazon.com/ses)
- Best for: AWS users

### Gmail SMTP
- Free: Yes (limited)
- Setup: Enable 2FA, create app password
- Best for: Small projects

## Recommended Setup

**For beginners:** Formspree (no backend needed)
**For small projects:** EmailJS (client-side)
**For production:** Backend API + SendGrid/Mailgun

## Testing

```bash
# Test form submission
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

## Security

- [ ] Validate email format
- [ ] Sanitize user input
- [ ] Rate limit submissions
- [ ] Use HTTPS
- [ ] Don't expose API keys
- [ ] Add CAPTCHA for spam prevention

## CAPTCHA Setup

### Google reCAPTCHA

1. Go to [google.com/recaptcha](https://www.google.com/recaptcha)
2. Register site
3. Get Site Key and Secret Key

```jsx
import ReCAPTCHA from "react-google-recaptcha"

<ReCAPTCHA
  sitekey="YOUR_SITE_KEY"
  onChange={(token) => setRecaptchaToken(token)}
/>
```

## Troubleshooting

**Emails not sending:**
- Check API keys
- Verify email service credentials
- Check spam folder
- Review error logs

**CORS errors:**
- Add CORS headers to backend
- Use proxy in development
- Check allowed origins

**Rate limiting:**
- Implement cooldown
- Add CAPTCHA
- Use rate limiting middleware

---

**Choose the option that best fits your needs!**

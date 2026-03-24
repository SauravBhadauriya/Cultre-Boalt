export const contactData = {
  office: {
    title: "OUR OFFICE",
    address: "X-45, Green Park Main, Green Park, New Delhi, Delhi 110016",
    phone: "+91 (98) 765-4321",
    email: "hello@cultreboat.in",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM"
  },
  social: [
    {
      name: "Facebook",
      url: "https://facebook.com/cultreboat",
      icon: "Share2"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/cultreboat",
      icon: "Heart"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/cultreboat",
      icon: "Zap"
    }
  ],
  formFields: [
    {
      id: "email",
      label: "EMAIL ID",
      type: "email",
      placeholder: "your@email.com",
      required: true
    },
    {
      id: "name",
      label: "NAME",
      type: "text",
      placeholder: "Your Full Name",
      required: true
    },
    {
      id: "company",
      label: "COMPANY NAME",
      type: "text",
      placeholder: "Your Company",
      required: false
    },
    {
      id: "phone",
      label: "CONTACT NUMBER",
      type: "tel",
      placeholder: "+91 (98) 765-4321",
      required: true
    },
    {
      id: "designation",
      label: "PROFESSIONAL DESIGNATION",
      type: "text",
      placeholder: "e.g., Marketing Manager",
      required: false
    },
    {
      id: "budget",
      label: "BUDGET YOU INTEND TO COMMIT TO THE PROJECT",
      type: "text",
      placeholder: "e.g., $5,000 - $10,000",
      required: false
    },
    {
      id: "message",
      label: "DESCRIBE YOUR PROJECT",
      type: "textarea",
      placeholder: "Tell us about your project...",
      required: true,
      rows: 6
    }
  ]
}

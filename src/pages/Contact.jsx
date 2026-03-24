import React, { useState } from 'react'
import { contactData } from '@/data/contactData'
import { Share2, Heart, Zap, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const iconMap = {
  Share2: Share2,
  Heart: Heart,
  Zap: Zap
}

export default function Contact({ onBack }) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    phone: '',
    designation: '',
    budget: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Validate required fields
      if (!formData.email || !formData.name || !formData.phone || !formData.message) {
        setError('Please fill in all required fields')
        setLoading(false)
        return
      }

      // Here you can add your form submission logic
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))

      setSubmitted(true)
      setFormData({
        email: '',
        name: '',
        company: '',
        phone: '',
        designation: '',
        budget: '',
        message: ''
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setError('Failed to submit form. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-slate-300 text-lg">
            Let's discuss your project and how we can help your business grow
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Tell us about
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                <span className="italic">your</span>
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                project and find out how
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                we can help <span className="italic">your business</span>
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                grow
              </h2>
            </div>

            {/* Office Info */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
                {contactData.office.title}
              </h3>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-slate-600 uppercase">Address</p>
                    <p className="text-slate-900 font-medium">{contactData.office.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-slate-600 uppercase">Phone</p>
                    <a href={`tel:${contactData.office.phone}`} className="text-slate-900 font-medium hover:text-blue-600 transition-colors">
                      {contactData.office.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-slate-600 uppercase">Email</p>
                    <a href={`mailto:${contactData.office.email}`} className="text-slate-900 font-medium hover:text-blue-600 transition-colors">
                      {contactData.office.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-3">
                  <div className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00-.447.894l1.006.557a1 1 0 001.894-.894v-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-600 uppercase">Hours</p>
                    <p className="text-slate-900 font-medium">{contactData.office.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {contactData.social.map((social, index) => {
                  const IconComponent = iconMap[social.icon]
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    ✓ Thank you! We'll get back to you soon.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">
                    ✗ {error}
                  </p>
                </div>
              )}

              {/* Form Fields */}
              {contactData.formFields.map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                    {field.label}
                    {field.required && <span className="text-red-600">*</span>}
                  </label>

                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      rows={field.rows}
                      required={field.required}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    />
                  ) : (
                    <input
                      id={field.id}
                      type={field.type}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  )}
                </div>
              ))}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 uppercase tracking-wide"
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-slate-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-slate-600">Email Support Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2-4 hrs</div>
              <p className="text-slate-600">Average Response Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-slate-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

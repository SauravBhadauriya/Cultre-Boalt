import React, { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { contactData } from '@/data/contactData'

export default function ContactModal({ isOpen, onClose }) {
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

      // Simulate form submission
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

      // Close modal after 2 seconds
      setTimeout(() => {
        setSubmitted(false)
        onClose()
      }, 2000)
    } catch {
      setError('Failed to submit form. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-2 sm:mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[var(--brand-blue)] text-white p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Get In Touch</h2>
            <p className="text-blue-100 text-sm mt-1">Tell us about your project</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
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
                    rows={4}
                    required={field.required}
                    className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)]/10 transition-all resize-none text-sm"
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
                    className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)]/10 transition-all text-sm"
                  />
                )}
              </div>
            ))}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[var(--brand-blue)] hover:opacity-90 disabled:bg-slate-400 text-white font-bold py-3 px-6 rounded-lg uppercase tracking-wide mt-6"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { careerData } from '@/data/careerData'
import { ArrowLeft, ChevronDown, ChevronUp, Mail, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function Career() {
  const navigate = useNavigate()
  const [selectedJob, setSelectedJob] = useState(null)
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [filterDepartment, setFilterDepartment] = useState('All')
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    resume: null,
    linkedIn: '',
    portfolio: '',
    coverLetter: ''
  })
  const [applicationSuccess, setApplicationSuccess] = useState(false)

  const departments = ['All', ...new Set(careerData.jobs.map(job => job.department))]
  const filteredJobs = filterDepartment === 'All' 
    ? careerData.jobs 
    : careerData.jobs.filter(job => job.department === filterDepartment)

  const handleApplyClick = (job) => {
    setSelectedJob(job)
    setShowApplicationForm(true)
    setApplicationSuccess(false)
  }

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target
    if (type === 'file') {
      setApplicationData(prev => ({
        ...prev,
        [name]: files[0] || null
      }))
    } else {
      setApplicationData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmitApplication = (e) => {
    e.preventDefault()
    if (applicationData.fullName && applicationData.email && applicationData.phone && applicationData.resume) {
      setApplicationSuccess(true)
      setApplicationData({
        fullName: '',
        email: '',
        phone: '',
        resume: null,
        linkedIn: '',
        portfolio: '',
        coverLetter: ''
      })
      setTimeout(() => {
        setShowApplicationForm(false)
        setApplicationSuccess(false)
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Header Section */}
      <div className="page-hero">
        <img src="/src/assets/images/Hero/herobanner.jpg" alt="hero" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-48 relative z-10 h-full flex flex-col justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {careerData.overview.title}
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl">
            {careerData.overview.description}
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-48">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Why Join Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerData.benefits.map(benefit => (
              <div
                key={benefit.id}
                className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-48">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Our Culture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerData.culture.map(item => (
              <div
                key={item.id}
                className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-48">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Open Positions
          </h2>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setFilterDepartment(dept)}
                className={`px-6 py-2 rounded-full font-semibold transition-all cursor-pointer ${
                  filterDepartment === dept
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-200 text-slate-900 hover:bg-slate-300'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map(job => (
              <div
                key={job.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div
                  onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                  className="p-6 md:p-8 cursor-pointer"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {job.department}
                        </span>
                        <span className="text-sm font-semibold text-slate-600">
                          📍 {job.location}
                        </span>
                        <span className="text-sm font-semibold text-slate-600">
                          💼 {job.type}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-6 text-sm">
                        <div>
                          <p className="text-slate-600">Experience</p>
                          <p className="font-semibold text-slate-900">{job.experience}</p>
                        </div>
                        <div>
                          <p className="text-slate-600">Salary</p>
                          <p className="font-semibold text-slate-900">{job.salary}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-blue-600 flex-shrink-0">
                      {selectedJob?.id === job.id ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                {selectedJob?.id === job.id && (
                  <div className="border-t border-slate-200 p-6 md:p-8 bg-slate-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-4">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex gap-3 text-slate-700">
                              <span className="text-blue-600 font-bold">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-4">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex gap-3 text-slate-700">
                              <span className="text-blue-600 font-bold">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleApplyClick(job)}
                      className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <Mail className="w-5 h-5" />
                      Apply Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-48">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            What Our Team Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerData.testimonials.map(testimonial => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-lg border border-slate-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {careerData.faq.map(item => (
              <div
                key={item.id}
                className="border border-slate-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === item.id ? null : item.id)}
                  className="w-full p-6 flex justify-between items-center hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <h3 className="text-lg font-bold text-slate-900 text-left">{item.question}</h3>
                  <div className="text-blue-600 flex-shrink-0">
                    {expandedFaq === item.id ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </button>
                {expandedFaq === item.id && (
                  <div className="border-t border-slate-200 p-6 bg-slate-50">
                    <p className="text-slate-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Explore open positions and start your journey with Cultre Boat today.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition-colors cursor-pointer"
          >
            View All Positions
          </button>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <Dialog open={showApplicationForm} onOpenChange={setShowApplicationForm}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Apply for Position</DialogTitle>
              <DialogDescription>{selectedJob?.title}</DialogDescription>
            </DialogHeader>

            {applicationSuccess ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Submitted!</h3>
                <p className="text-slate-600">Thank you for applying. We'll review your application and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={applicationData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={applicationData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Resume / CV *</Label>
                  <Input
                    id="resume"
                    type="file"
                    name="resume"
                    onChange={handleInputChange}
                    required
                    accept=".pdf,.doc,.docx"
                  />
                  <p className="text-xs text-slate-500">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                  {applicationData.resume && (
                    <p className="text-sm text-green-600">✓ {applicationData.resume.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                  <Input
                    id="linkedIn"
                    type="url"
                    name="linkedIn"
                    value={applicationData.linkedIn}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio / Website</Label>
                  <Input
                    id="portfolio"
                    type="url"
                    name="portfolio"
                    value={applicationData.portfolio}
                    onChange={handleInputChange}
                    placeholder="https://your-portfolio.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={applicationData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 cursor-pointer"
                  >
                    Submit Application
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    variant="outline"
                    className="flex-1 cursor-pointer"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}













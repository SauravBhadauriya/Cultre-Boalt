import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, ArrowLeft, TrendingUp, Users, Award, Zap, Globe, Heart } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: "Strategic Approach",
    description: "Every project starts with deep research and strategic planning to ensure your brand message is clear, targeted, and impactful across all channels."
  },
  {
    icon: Award,
    title: "Creative Excellence",
    description: "Our team of designers, copywriters, and strategists collaborate to create compelling brand experiences that leave a lasting impression."
  },
  {
    icon: Users,
    title: "Close Collaboration",
    description: "We build close working relationships with our clients, keeping you involved at every step so your vision is fully realized."
  },
  {
    icon: Zap,
    title: "Measurable Results",
    description: "We focus on delivering tangible outcomes — from increased engagement to higher conversions — that align with your business goals."
  },
  {
    icon: Globe,
    title: "Digital Expertise",
    description: "From web design to social media strategy, we leverage the latest digital tools and platforms to amplify your brand's reach globally."
  },
  {
    icon: Heart,
    title: "Storytelling",
    description: "Everybody loves a good story. We craft narratives that connect emotionally with your audience and make your brand unforgettable."
  }
]

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "15+", label: "Countries Reached" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8+", label: "Years Experience" },
]

const images = [
  { src: "/images/Blog/Blog1.jpg", label: "Fashion Design" },
  { src: "/images/Blog/Blog2.jpg", label: "Brand Strategy" },
  { src: "/images/Blog/Blog3.jpg", label: "Creative Direction" },
  { src: "/images/Blog/Blog4.jpg", label: "Digital Marketing" },
]

export default function WhyChooseUs() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="page-hero">
        <img src="/images/Hero/herobanner.jpg" alt="hero" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-48 relative z-10 h-full flex flex-col justify-center">
          <button onClick={() => navigate(-1)} className="back-btn">
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Why Choose Cultre Boat
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl">
            We combine strategic thinking with creative excellence to deliver results that matter.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[var(--brand-teal)]">
        <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-48 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-teal-100 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strengths Section */}
      <section className="section-base">
        <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-48">
          <div className="text-center mb-12">
            <p className="section-label">Our Strengths</p>
            <h2 className="section-heading">What Sets Us Apart</h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mt-3">
              Here's why leading brands trust Cultre Boat to tell their story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="p-6 md:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[var(--brand-blue)]/30 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-blue)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--brand-blue)] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[var(--brand-blue)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mb-2 text-slate-900">{benefit.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="section-base bg-slate-50">
        <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-48">
          <div className="text-center mb-12">
            <p className="section-label">Our Work</p>
            <h2 className="section-heading">Creativity in Action</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-white text-sm font-semibold">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-3 h-48 md:h-64">
          <img src="/images/Blog/Blog1.jpg" alt="" className="w-full h-full object-cover" />
          <img src="/images/Blog/Blog4.jpg" alt="" className="w-full h-full object-cover" />
          <img src="/images/Blog/Blog6.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[var(--brand-teal)]/80 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="section-heading-white mb-4">Ready to Work With Us?</h2>
            <p className="text-teal-100 text-lg mb-8">Let's create something extraordinary together. Get in touch with our team today.</p>
            <button onClick={() => navigate('/contact')} className="bg-white text-[var(--brand-blue)] hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition-colors cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

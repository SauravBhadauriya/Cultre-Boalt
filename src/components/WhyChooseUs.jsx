import React from 'react'
import { CheckCircle, ArrowLeft } from 'lucide-react'

export default function WhyChooseUs({ onBack }) {
  const benefits = [
    {
      title: "Strategic Approach",
      description: "Every project starts with deep research and strategic planning to ensure your brand message is clear and impactful."
    },
    {
      title: "Creative Excellence",
      description: "Our team of designers, copywriters, and strategists work together to create compelling brand experiences."
    },
    {
      title: "Close Collaboration",
      description: "We believe in building close working relationships with our clients, ensuring your vision is realized at every step."
    },
    {
      title: "Measurable Results",
      description: "We focus on delivering tangible outcomes that align with your business goals and drive growth."
    },
    {
      title: "Digital Expertise",
      description: "From web design to social media, we leverage the latest digital tools and platforms to amplify your brand."
    },
    {
      title: "Storytelling",
      description: "We believe everybody loves a good story. We specialize in crafting narratives that connect emotionally with your audience."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Header Section */}
      <div className="bg-slate-900 text-white py-16 md:py-20 lg:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Why Choose Cultre Boat
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl">
            We combine strategic thinking with creative excellence to deliver results that matter.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            Our Strengths
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Here's what sets us apart from the rest.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-6 md:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2 text-slate-900">
                    {benefit.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
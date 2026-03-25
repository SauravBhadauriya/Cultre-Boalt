import React from 'react'
import { aboutUsData } from '@/data/aboutUsData'

export default function AboutUsSection() {
  return (
    <section className="section-base bg-white">
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Side - Images Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 h-[500px]">
            {/* Large image top left */}
            <div className="col-span-1 row-span-2">
              <img
                src={aboutUsData.images[0]}
                alt="Team member 1"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Top right image */}
            <div className="col-span-1">
              <img
                src={aboutUsData.images[1]}
                alt="Team member 2"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Bottom right image */}
            <div className="col-span-1">
              <img
                src={aboutUsData.images[2]}
                alt="Team member 3"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Header */}
            <div>
              <p className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-3">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                {aboutUsData.title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              {aboutUsData.description}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {aboutUsData.highlights.map((highlight, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{highlight.icon}</span>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {highlight.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

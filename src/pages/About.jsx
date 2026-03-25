import React from 'react'
import { aboutData } from '@/data/aboutData'
import { ArrowLeft, CheckCircle } from 'lucide-react'

export default function About({ onBack }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Dark Header Section */}
      <div className="bg-slate-900 text-white py-16 md:py-20 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About Cultre Boat
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl">
            Let's discuss your project and how we can help your business grow
          </p>
        </div>
      </div>

      {/* Company Overview Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {aboutData.company.name}
              </h2>
              <p className="text-xl text-slate-600 italic mb-6">
                "{aboutData.company.tagline}"
              </p>
              <p className="text-slate-700 leading-relaxed mb-8">
                {aboutData.company.description}
              </p>

              {/* Company Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-1">
                    Founded
                  </p>
                  <p className="text-2xl font-bold text-slate-900">{aboutData.company.founded}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-1">
                    Team Size
                  </p>
                  <p className="text-2xl font-bold text-slate-900">{aboutData.company.team}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-1">
                    Location
                  </p>
                  <p className="text-lg font-bold text-slate-900">{aboutData.company.location}</p>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="h-96 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg overflow-hidden">
              <img
                src={aboutData.team[0].image}
                alt="Company"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {aboutData.mission.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {aboutData.mission.description}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {aboutData.vision.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {aboutData.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData.values.map(value => (
              <div
                key={value.id}
                className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.achievements.map(achievement => (
              <div key={achievement.id} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {achievement.value}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {achievement.title}
                </h3>
                <p className="text-slate-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData.process.map((step, index) => (
              <div
                key={step.id}
                className="relative bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.team.map(member => (
              <div
                key={member.id}
                className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutData.testimonials.map(testimonial => (
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
                  <p className="font-bold text-slate-900">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Similar to WhyChooseUs component) */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Why Choose Cultre Boat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    Strategic Approach
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Every project starts with deep research and strategic planning to ensure your brand message is clear and impactful.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    Creative Excellence
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Our team of designers, copywriters, and strategists work together to create compelling brand experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    Close Collaboration
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    We believe in building close working relationships with our clients, ensuring your vision is realized at every step.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    Measurable Results
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    We focus on delivering tangible outcomes that align with your business goals and drive growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    Digital Expertise
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    From web design to social media, we leverage the latest digital tools and platforms to amplify your brand.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    Storytelling
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    We believe everybody loves a good story. We specialize in crafting narratives that connect emotionally with your audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Let's create something amazing together. Get in touch with our team today.
          </p>
          <button
            onClick={onBack}
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition-colors"
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  )
}

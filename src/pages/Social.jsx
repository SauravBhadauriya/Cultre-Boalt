import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { socialData } from '@/data/socialData'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const campaignImages = [
  "/images/Blog/Blog3.jpg",
  "/images/Blog/Blog4.jpg",
  "/images/Blog/Blog5.jpg",
  "/images/Blog/Blog6.jpg",
]

export default function Social() {
  const navigate = useNavigate()
  const [selectedCampaign, setSelectedCampaign] = useState(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Header Section */}
      <div className="page-hero">
        <img src="/images/Hero/herobanner.jpg" alt="hero" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-48 relative z-10 h-full flex flex-col justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            {socialData.overview.title}
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl">
            <span className="typewriter">{socialData.overview.description}</span>
            </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-48">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-8 md:mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialData.services.map(service => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-48">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-8 md:mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialData.statistics.map(stat => (
              <div key={stat.id} className="text-center">
                <div className="text-5xl font-bold text-[var(--brand-blue)] mb-2">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {stat.title}
                </h3>
                <p className="text-slate-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-48">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-8 md:mb-12">
            Platforms We Manage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialData.platforms.map(platform => (
              <div
                key={platform.id}
                className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{platform.name}</h3>
                <p className="text-[var(--brand-blue)] font-semibold mb-3">{platform.followers}</p>
                <p className="text-slate-600 leading-relaxed">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="section-base bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-48">
          <div className="text-center mb-12">
            <p className="section-label">Our Work</p>
            <h2 className="section-heading">Social Media in Action</h2>
            <p className="text-slate-600 mt-3 max-w-xl mx-auto">A glimpse of the creative content and campaigns we've delivered for our clients.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {[
              { src: "/images/Blog/Blog1.jpg", label: "Fashion Campaign" },
              { src: "/images/Blog/Blog2.jpg", label: "Bridal Content" },
              { src: "/images/Blog/Blog3.jpg", label: "Trend Styling" },
              { src: "/images/Blog/Blog4.jpg", label: "Brand Story" },
              { src: "/images/Blog/Blog5.jpg", label: "Product Launch" },
              { src: "/images/Blog/Blog6.jpg", label: "Influencer Collab" },
              { src: "/images/Blog/Blog7.jpg", label: "Reel Content" },
              { src: "/images/Blog/Blog1.jpg", label: "Community Post" },
            ].map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl aspect-square shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-semibold">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-48">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-8 md:mb-12">
            Featured Campaigns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialData.campaigns.map((campaign, i) => (
              <div
                key={campaign.id}
                onClick={() => setSelectedCampaign(campaign)}
                className="bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all cursor-pointer overflow-hidden group"
              >
                {/* Campaign Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={campaignImages[i % campaignImages.length]}
                    alt={campaign.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{campaign.title}</h3>
                  <p className="text-[var(--brand-blue)] font-semibold mb-2">{campaign.platform}</p>
                  <p className="text-slate-600 mb-4 text-sm">{campaign.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Reach</p>
                      <p className="text-2xl font-bold text-slate-900">{campaign.reach}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Engagement</p>
                      <p className="text-2xl font-bold text-slate-900">{campaign.engagement}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Detail Modal */}
      {selectedCampaign && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-slate-900">{selectedCampaign.title}</h2>
              <button
                onClick={() => setSelectedCampaign(null)}
                className="text-slate-400 hover:text-slate-600 text-2xl"
              >
                ×
              </button>
            </div>
            <p className="text-[var(--brand-blue)] font-semibold mb-4">{selectedCampaign.platform}</p>
            <p className="text-slate-700 mb-6">{selectedCampaign.description}</p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                  Total Reach
                </p>
                <p className="text-3xl font-bold text-[var(--brand-blue)]">{selectedCampaign.reach}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                  Engagement Rate
                </p>
                <p className="text-3xl font-bold text-[var(--brand-blue)]">{selectedCampaign.engagement}</p>
              </div>
            </div>
            <Button
              onClick={() => setSelectedCampaign(null)}
              className="w-full bg-[var(--brand-blue)] hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg"
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-48">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-8 md:mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialData.testimonials.map(testimonial => (
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

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-48">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-8 md:mb-12">
            Why Choose Us for Social Media
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    Data-Driven Strategy
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Every decision backed by analytics and performance metrics to maximize ROI.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    Creative Content
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Engaging, on-brand content that resonates with your audience and drives engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    Multi-Platform Expertise
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Specialized strategies for each platform to maximize reach and engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    Community Management
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Active engagement and relationship building with your audience 24/7.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    Trend Awareness
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Stay ahead with latest trends, algorithms, and best practices across all platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    Transparent Reporting
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Regular detailed reports showing exactly how your investment is performing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-3 h-48 sm:h-56 md:h-64">
          <img src="/images/Blog/Blog3.jpg" alt="" className="w-full h-full object-cover" />
          <img src="/images/Blog/Blog5.jpg" alt="" className="w-full h-full object-cover" />
          <img src="/images/Blog/Blog7.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[var(--brand-teal)]/80 flex items-center justify-center p-4">
          <div className="text-center text-white max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Grow Your Social Media?</h2>
            <p className="text-teal-100 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">Let's create a social media strategy that drives real results for your brand.</p>
            <Button onClick={() => navigate('/contact')} className="bg-white text-[var(--brand-blue)] hover:bg-blue-50 font-bold py-3 sm:py-3 px-4 sm:px-8 rounded-full cursor-pointer text-sm sm:text-base w-full sm:w-auto min-h-[44px] flex items-center justify-center">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}













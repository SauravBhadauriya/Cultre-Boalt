import React, { useState } from 'react'
import { prData } from '@/data/prData'
import { X, ArrowLeft, Award, Users, TrendingUp, Target } from 'lucide-react'

export default function PR({ onBack }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCampaign, setSelectedCampaign] = useState(null)
  const [activeTab, setActiveTab] = useState('campaigns')

  const filteredPortfolio = selectedCategory === 'all'
    ? prData.portfolio
    : prData.portfolio.filter(item => item.category === selectedCategory)

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            {prData.overview.title}
          </h1>
          <p className="text-slate-300 text-lg mb-4">{prData.overview.subtitle}</p>
          <p className="text-slate-200 text-base md:text-lg max-w-3xl">
            {prData.overview.description}
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
            Our PR Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prData.services.map(service => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{stat.label}</h3>
                <p className="text-slate-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaigns & Portfolio Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-4 mb-12 border-b border-slate-200">
            <button
              onClick={() => setActiveTab('campaigns')}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === 'campaigns'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Campaigns
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === 'portfolio'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Portfolio
            </button>
          </div>

          {/* Campaigns Tab */}
          {activeTab === 'campaigns' && (
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
                Featured Campaigns
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {prData.campaigns.map(campaign => (
                  <div
                    key={campaign.id}
                    onClick={() => setSelectedCampaign(campaign)}
                    className="group cursor-pointer bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all"
                  >
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {campaign.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{campaign.title}</h3>
                      <p className="text-slate-600 text-sm mb-4">{campaign.description}</p>
                      <div className="flex justify-between text-sm text-slate-500">
                        <span>{campaign.coverage}</span>
                        <span>{campaign.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Portfolio Tab */}
          {activeTab === 'portfolio' && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                  Portfolio Gallery
                </h2>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-6 py-2 rounded-full font-semibold transition-all ${
                      selectedCategory === 'all'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    All
                  </button>
                  {prData.categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-6 py-2 rounded-full font-semibold transition-all ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredPortfolio.map(item => (
                  <div
                    key={item.id}
                    className="group cursor-pointer relative overflow-hidden rounded-lg bg-slate-100 aspect-square hover:shadow-lg transition-all"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end p-4">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-bold text-sm">{item.title}</h3>
                        <p className="text-xs text-slate-200">{item.publication}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Media Partners Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
            Media Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prData.mediaPartners.map(partner => (
              <div
                key={partner.id}
                className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-slate-600 mb-2">{partner.type}</p>
                <p className="text-blue-600 font-semibold">{partner.reach}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Influencers Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
            Influencer Network
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prData.influencers.map(influencer => (
              <div
                key={influencer.id}
                className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={influencer.image}
                    alt={influencer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{influencer.name}</h3>
                  <p className="text-sm text-slate-600 mb-3">{influencer.category}</p>
                  <p className="text-blue-600 font-semibold">{influencer.followers} Followers</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prData.testimonials.map(testimonial => (
              <div
                key={testimonial.id}
                className="bg-slate-50 p-8 rounded-lg border border-slate-200"
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
                    <p className="text-sm text-slate-600">{testimonial.client}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Detail Modal */}
      {selectedCampaign && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{selectedCampaign.title}</h2>
                <p className="text-blue-100 text-sm mt-1">{selectedCampaign.year}</p>
              </div>
              <button
                onClick={() => setSelectedCampaign(null)}
                className="p-2 hover:bg-blue-500 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Campaign Image */}
              <img
                src={selectedCampaign.image}
                alt={selectedCampaign.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              {/* Campaign Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                    Description
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {selectedCampaign.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                      Category
                    </h3>
                    <p className="text-lg text-slate-900">{selectedCampaign.category}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                      Year
                    </h3>
                    <p className="text-lg text-slate-900">{selectedCampaign.year}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                      Media Coverage
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold">{selectedCampaign.coverage}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                      Total Reach
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold">{selectedCampaign.reach}</p>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedCampaign(null)}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

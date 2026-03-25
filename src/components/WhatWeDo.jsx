import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Megaphone, Share2 } from 'lucide-react'

export default function WhatWeDo() {
  const services = [
    {
      icon: Palette,
      title: "Brand Design",
      description: "From logo design to complete brand identity systems, we create visual languages that resonate with your target audience and communicate your brand's unique value."
    },
    {
      icon: Megaphone,
      title: "PR & Communications",
      description: "Strategic public relations and communications that build your brand's reputation, manage your narrative, and create meaningful connections with your stakeholders."
    },
    {
      icon: Share2,
      title: "Social Media Strategy",
      description: "Data-driven social media strategies that engage your audience, build community, and drive measurable results across all major platforms."
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-48">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
            What We Do
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            We specialize in comprehensive brand solutions that combine strategy, creativity,
            and digital expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:border-blue-200 border-slate-200"
              >
                <CardHeader>
                  <div className="mb-4 p-3 bg-blue-100 rounded-lg w-fit">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-slate-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

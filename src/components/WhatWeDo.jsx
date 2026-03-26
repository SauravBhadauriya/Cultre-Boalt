import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Megaphone, Share2 } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

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
      description: (
        <>
          Strategic public relations and communications that build your brand's reputation,
          <br />
          manage your narrative, and create meaningful connections with your stakeholders.
        </>
      )
    },
    {
      icon: Share2,
      title: "Social Media Strategy",
      description: "Data-driven social media strategies that engage your audience, build community, and drive measurable results across all major platforms."
    }
  ]

  return (
    <section className="section-base bg-white">
      <div className="container-base">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 text-slate-900">
            What We Do
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm md:text-base lg:text-lg max-w-xl mx-auto leading-relaxed px-2">
            We specialize in comprehensive brand solutions that combine strategy, creativity,
            and digital expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:border-[var(--brand-blue)]/30 border-slate-200"
              >
                <CardHeader className="pb-3 md:pb-4">
                  <div className="mb-3 md:mb-4 p-2 md:p-3 bg-[var(--brand-blue)]/10 rounded-lg w-fit">
                    <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-[var(--brand-blue)]" />
                  </div>
                  <CardTitle className="text-lg md:text-xl lg:text-2xl text-slate-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
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

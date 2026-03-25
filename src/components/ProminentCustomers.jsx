import { useState, useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import SectionHeader from '@/components/ui/SectionHeader'
import { customersData } from '@/data/customersData'

export default function ProminentCustomers() {
  const [activeRegion, setActiveRegion] = useState(customersData.regions[0].id)

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  const activeCustomers = customersData.regions.find(r => r.id === activeRegion)?.customers || []

  return (
    <section className="section-base bg-white">
      <div className="container-base">
        <SectionHeader label={customersData.subtitle} title={customersData.title} center={false} />

        {/* Region Tabs */}
        <div className="flex gap-1 mb-10 border-b border-slate-200 overflow-x-auto">
          {customersData.regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id)}
              className={`px-5 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer rounded-t-md ${
                activeRegion === region.id
                  ? 'bg-fuchsia-100 text-fuchsia-600 border-b-2 border-fuchsia-500'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {region.label}
            </button>
          ))}
        </div>

        {/* Customers Carousel */}
        <Carousel
          key={activeRegion}
          plugins={[plugin.current]}
          className="w-full"
          opts={{ align: 'start', loop: true }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {activeCustomers.map((customer) => (
              <CarouselItem
                key={customer.id}
                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <div className="flex flex-col items-center justify-center p-4 h-24 border border-slate-200 rounded-lg bg-white hover:shadow-md transition-shadow cursor-pointer group">
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="max-h-12 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <span className="hidden text-xs font-semibold text-slate-700 text-center items-center justify-center h-full">
                    {customer.name}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

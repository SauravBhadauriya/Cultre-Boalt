import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { aboutUsData } from '@/data/aboutUsData'

export default function AboutUsSection() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

  return (
    <section className="section-base bg-white">
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Side - Image Carousel */}
          <div className="h-[250px] sm:h-[350px] lg:h-[500px]">
            <Carousel
              plugins={[plugin.current]}
              opts={{ loop: true, duration: 60 }}
              className="w-full h-full"
            >
              <CarouselContent className="h-full ml-0">
                {aboutUsData.images.map((img, i) => (
                  <CarouselItem key={i} className="h-full pl-0">
                    <div className="h-[250px] sm:h-[350px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={img}
                        alt={`Team ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-3 mt-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <p className="text-[var(--brand-blue)] font-bold text-xs md:text-sm uppercase tracking-widest mb-2 md:mb-3">
                About Us
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                {aboutUsData.title}
              </h2>
            </div>

            <p className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed">
              {aboutUsData.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-2 md:pt-4">
              {aboutUsData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-xl md:text-2xl flex-shrink-0">{highlight.icon}</span>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm md:text-base">{highlight.title}</h3>
                    <p className="text-slate-600 text-xs md:text-sm">{highlight.description}</p>
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

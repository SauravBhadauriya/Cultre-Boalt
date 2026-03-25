import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { testimonialsData } from '@/data/testimonialsData'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-48">
        <Carousel className="w-full" opts={{ align: 'start', loop: true }}>

          {/* Header Row */}
          <div className="flex items-start justify-between mb-12">
            <div>
              <p className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-3">
                {testimonialsData.subtitle}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                {testimonialsData.title}
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-3 mt-2">
              <CarouselPrevious className="static translate-y-0 rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-slate-700" />
              <CarouselNext className="static translate-y-0 rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-slate-700" />
            </div>
          </div>

          {/* Cards */}
          <CarouselContent className="-ml-4 md:-ml-6">
            {testimonialsData.testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white border border-slate-200 h-full hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-200 flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>

                    {/* Name & Role */}
                    <h3 className="font-bold text-slate-900 text-sm md:text-base leading-tight">
                      {testimonial.name}, {testimonial.role}
                    </h3>

                    {/* Quote */}
                    <p className="text-slate-500 text-sm leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Mobile nav */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>

        </Carousel>
      </div>
    </section>
  )
}

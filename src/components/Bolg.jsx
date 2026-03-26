import { useState, useRef, useEffect } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { newsEventsData } from '@/data/Blog'

export default function Bolg() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [expandedId, setExpandedId] = useState(null)
  const [api, setApi] = useState(null)
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))
  const listRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    if (!api) return
    api.on('select', () => {
      const idx = api.selectedScrollSnap()
      setActiveIndex(idx)
      // scroll within the list container only, not the page
      const container = listRef.current
      const item = itemRefs.current[idx]
      if (container && item) {
        const itemTop = item.offsetTop
        container.scrollTo({ top: itemTop - container.offsetTop, behavior: 'smooth' })
      }
    })
  }, [api])

  const handleItemClick = (index) => {
    setActiveIndex(index)
    api?.scrollTo(index)
  }

  const handleReadMore = (e, id) => {
    e.stopPropagation()
    setExpandedId(expandedId === id ? null : id)
  }

  const getFullContent = (item) => {
    // support both paragraph-based and description-based data
    if (item.paragraph1) {
      return [item.paragraph1, item.paragraph2, item.heading && `— ${item.heading} —`, item.paragraph3, item.paragraph4]
        .filter(Boolean)
    }
    return [item.description].filter(Boolean)
  }

  return (
    <section className="section-base bg-[var(--brand-teal)]">
      <div className="container-base">
        <SectionHeader label={newsEventsData.subtitle} title={newsEventsData.title} dark />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left — Image Carousel */}
          <div className="flex flex-col">
            <Carousel
              plugins={[plugin.current]}
              setApi={setApi}
              className="w-full"
              opts={{ align: 'start', loop: true }}
            >
              <CarouselContent className="ml-0">
                {newsEventsData.newsItems.map((item) => (
                  <CarouselItem key={item.id} className="pl-0">
                    <div className="h-[260px] sm:h-[340px] lg:h-[420px] rounded-xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-start gap-3 mt-4">
                <CarouselPrevious className="static translate-y-0 bg-[var(--brand-teal-light)] border-teal-500 text-white hover:bg-[var(--brand-blue)] hover:border-[var(--brand-blue)]" />
                <CarouselNext className="static translate-y-0 bg-[var(--brand-teal-light)] border-teal-500 text-white hover:bg-[var(--brand-blue)] hover:border-[var(--brand-blue)]" />
              </div>
            </Carousel>
          </div>

          {/* Right — News List */}
          <div ref={listRef} className="flex flex-col gap-3 h-[260px] sm:h-[340px] lg:h-[420px] overflow-y-auto pr-1 scrollbar-hide">
            {newsEventsData.newsItems.map((item, index) => {
              const isActive = activeIndex === index
              const isExpanded = expandedId === item.id

              return (
                <div
                  key={item.id}
                  ref={el => itemRefs.current[index] = el}
                  onClick={() => handleItemClick(index)}
                  className={`cursor-pointer rounded-xl p-4 md:p-5 transition-all duration-300 border flex-shrink-0 ${
                    isActive
                      ? 'bg-[var(--brand-teal-light)] border-teal-400 shadow-lg'
                      : 'bg-[var(--brand-teal-light)]/50 border-transparent hover:border-teal-500'
                  }`}
                >
                  <p className="text-teal-200 text-xs font-semibold mb-1">{item.date}</p>
                  <h3 className={`font-bold text-sm md:text-base mb-1 transition-colors ${
                    isActive ? 'text-white' : 'text-teal-100'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Preview — always show on active */}
                  {isActive && !isExpanded && (
                    <p className="text-teal-50 text-xs md:text-sm leading-relaxed mt-1 line-clamp-2">
                      {item.paragraph1 || item.description}
                    </p>
                  )}

                  {/* Expanded full content */}
                  {isExpanded && (
                    <div className="mt-2 space-y-2">
                      {getFullContent(item).map((para, i) => (
                        <p key={i} className={`text-xs md:text-sm leading-relaxed ${
                          para.startsWith('—') ? 'text-white font-bold' : 'text-teal-50'
                        }`}>
                          {para}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Read more / less button */}
                  <Button
                    variant="ghost"
                    onClick={(e) => handleReadMore(e, item.id)}
                    className="text-teal-300 text-xs font-medium hover:text-white hover:bg-transparent transition-colors mt-2 p-0 h-auto"
                  >
                    {isExpanded ? 'Show less ↑' : item.link}
                  </Button>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

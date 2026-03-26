import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Download } from 'lucide-react'
import { resourcesData } from '@/data/resourcesData'

export default function ResourcesNewsletter() {
  const [email, setEmail] = useState('')
  const [selectedResource, setSelectedResource] = useState(null)
  const [displayedCount, setDisplayedCount] = useState(2)

  const handleSubscribe = () => {
    if (!email) return
    setEmail('')
  }

  const handleResourceClick = (resourceId) => {
    setSelectedResource(selectedResource === resourceId ? null : resourceId)
  }

  const handleDownload = () => {
    if (!selectedResource) return
    const resource = resourcesData.downloadSection.resources.find(r => r.id === selectedResource)
    if (resource) window.open(resource.image, '_blank')
  }

  const handleScroll = (e) => {
    const element = e.target
    // Check if scrolled to bottom (with 10px tolerance)
    if (element.scrollHeight - element.scrollTop - element.clientHeight < 10) {
      setDisplayedCount((prev) => 
        Math.min(prev + 1, resourcesData.downloadSection.resources.length)
      )
    }
  }

  const displayedResources = resourcesData.downloadSection.resources.slice(0, displayedCount)

  return (
    <section className="section-base bg-white">
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {/* Left Side - Download Resources */}
          <Card className="lg:col-span-2 bg-white border border-slate-200 rounded-xl">
            <CardHeader className="pb-3 md:pb-4">
              <CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--brand-blue)] mb-2">
                {resourcesData.downloadSection.title}
              </CardTitle>
              <CardDescription className="text-xs md:text-sm lg:text-base text-slate-600 mt-2">
                {resourcesData.downloadSection.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              {/* Steps */}
              <div className="flex gap-2 md:gap-3 flex-wrap">
                {resourcesData.downloadSection.steps.map((step) => (
                  <div key={step.number} className="flex items-center gap-2">
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-[var(--brand-blue)] text-white flex items-center justify-center font-bold text-xs">
                      {step.number}
                    </div>
                    <span className="text-slate-700 text-xs md:text-sm font-medium">{step.label}</span>
                  </div>
                ))}
              </div>

              {/* Resources List - Scrollable Container */}
              <div className="space-y-3 h-40 sm:h-56 md:h-64 lg:h-80 overflow-y-scroll pr-2 md:pr-3 border border-slate-200 rounded-lg p-3 md:p-4 bg-white" onScroll={handleScroll}>
                {displayedResources.map((resource) => (
                  <Card
                    key={resource.id}
                    onClick={() => handleResourceClick(resource.id)}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedResource === resource.id
                        ? 'border-2 border-teal-500 bg-teal-50'
                        : 'border border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <CardContent className="p-3 md:p-4 flex gap-3">
                      {/* Resource Image */}
                      <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                        <img
                          src={resource.image}
                          alt={resource.title}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>

                      {/* Resource Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <h3 className="font-semibold text-slate-900 mb-1 text-xs md:text-sm lg:text-base leading-tight line-clamp-1">
                              {resource.title}
                            </h3>
                            <p className="text-slate-600 text-xs md:text-sm line-clamp-2 leading-relaxed">
                              {resource.description}
                            </p>
                          </div>
                          {selectedResource === resource.id && (
                            <Check className="w-4 h-4 md:w-5 md:h-5 text-teal-500 flex-shrink-0 mt-1" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Download Button - Shows when resource is selected */}
              {selectedResource && (
                <div className="flex justify-center pt-3 md:pt-4">
                  <Button
                    onClick={handleDownload}
                    className="bg-[var(--brand-blue)] text-white font-semibold cursor-pointer px-4 md:px-8 py-2 md:py-2 rounded-lg flex items-center gap-2 text-sm md:text-base"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Right Side - Newsletter */}
          <Card className="bg-brand-teal border-0 rounded-2xl shadow-lg">
            <CardHeader className="pb-3 md:pb-4">
              <CardTitle className="text-xl md:text-2xl lg:text-3xl text-white leading-tight">
                {resourcesData.newsletterSection.title}
              </CardTitle>
              <CardDescription className="text-teal-100 text-xs md:text-sm lg:text-base mt-2">
                {resourcesData.newsletterSection.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              {/* Benefits */}
              <div className="space-y-2 md:space-y-3">
                {resourcesData.newsletterSection.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3">
                    <span className="text-lg md:text-xl flex-shrink-0">{benefit.icon}</span>
                    <span className="text-teal-100 text-xs md:text-sm lg:text-base leading-relaxed">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Email Input */}
              <div className="space-y-2 md:space-y-3">
                <Input
                  type="email"
                  placeholder={resourcesData.newsletterSection.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/25 border border-white/40 text-white placeholder:text-white/70 rounded-lg h-9 md:h-10 text-xs md:text-sm"
                />
                <Button
                  onClick={handleSubscribe}
                  className="w-full bg-[var(--brand-blue)] hover:opacity-90 text-white font-semibold cursor-pointer h-9 md:h-10 text-xs md:text-sm rounded-lg"
                >
                  {resourcesData.newsletterSection.buttonText} 🔔
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"
import ContactModal from './ContactModal'

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section 
        id="contact" 
        className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            Ready to Transform Your Brand?
          </h2>
          
          {/* Subtext */}
          <p className="text-blue-100 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-10">
            Let's work together to create something extraordinary. 
            Get in touch with our team today.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 font-bold text-base md:text-lg px-6 md:px-8 py-6 rounded-full w-full sm:w-auto"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
            
            <Button 
              className="border-2 border-white text-white hover:bg-white/10 font-bold text-base md:text-lg px-6 md:px-8 py-6 rounded-full w-full sm:w-auto bg-transparent"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
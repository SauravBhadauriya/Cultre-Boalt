import React from 'react'
import { Share2, Heart, Zap, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerData = [
    {
      title: "Services",
      links: [
        { name: "Brand Design", link: "#services" },
        { name: "PR & Communications", link: "#services" },
        { name: "Social Media", link: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", link: "#why-choose" },
        { name: "Contact", link: "#contact" },
        { name: "Privacy Policy", link: "#" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "Facebook", link: "#" },
        { name: "Instagram", link: "#" },
        { name: "LinkedIn", link: "#" }
      ]
    }
  ]

  const socialLinks = [
    { icon: Share2, link: "#", label: "Share" },
    { icon: Heart, link: "#", label: "Like" },
    { icon: Zap, link: "#", label: "Follow" }
  ]

  return (
    <footer className="bg-slate-900 text-slate-100">
      {/* Top Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Logo + Tagline */}
            <div className="lg:col-span-1">
              <h1 className="text-2xl font-bold mb-3 text-white">Cultre Boat</h1>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Everybody loves a good story. We love to build them.
              </p>
              
              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:hello@cultreboat.in" className="hover:text-white transition-colors">
                    hello@cultreboat.in
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            {/* Dynamic Sections */}
            {footerData.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((item, i) => (
                    <li key={i}>
                      <a 
                        href={item.link}
                        className="text-slate-400 hover:text-white transition-colors text-sm md:text-base"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {currentYear} Cultre Boat. All rights reserved.
          </p>

          {/* Social Links */}
          <ul className="flex gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <li key={index}>
                  <a 
                    href={social.link}
                    aria-label={social.label}
                    className="p-2 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}
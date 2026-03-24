import React, { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

export default function Header({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "Design", link: "#design", action: () => onNavigate('design') },
    { name: "P R", link: "#p-r", action: () => onNavigate('PR') },
    { name: "Why Us", link: "#why-us", action: () => onNavigate('why-us') },
    { name: "Social", link: "#social", action: () => onNavigate('social') },
    { name: "About", link: "#about", action: () => onNavigate('about') },
    { name: "Contact", link: "#contact", action: () => onNavigate('contact') }
  ]

  const handleMenuClick = (item) => {
    if (item.action) {
      item.action()
    }
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <nav className="flex justify-between items-center px-4 md:px-8 lg:px-20 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <button 
            onClick={() => {
              onNavigate('home')
              setIsOpen(false)
            }}
            className="text-xl md:text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
          >
            Cultre Boat
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button 
                onClick={() => handleMenuClick(item)}
                className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
              >
                {item.name}
              </button>
            </li>
          ))}
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <ul className="flex flex-col gap-4 px-4 py-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button 
                  onClick={() => handleMenuClick(item)}
                  className="text-slate-700 hover:text-slate-900 transition-colors font-medium block w-full text-left"
                >
                  {item.name}
                </button>
              </li>
            ))}
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </ul>
        </div>
      )}
    </header>
  )
}
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import ContactModal from './ContactModal'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isWhite = scrolled || hovered || isOpen
  const menuItems = [
    { name: "Design", path: "/design" },
    { name: "PR", path: "/pr" },
    { name: "Why Us", path: "/why-us" },
    { name: "Social", path: "/social" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  const handleNav = (path) => {
    navigate(path)
    setIsOpen(false)
  }

  return (
    <header
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isWhite
          ? 'bg-white border-b border-slate-200 shadow-sm'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      <nav className="flex justify-between items-center px-4 sm:px-6 md:px-20 lg:px-48 py-4">
        {/* Logo */}
        <button
          onClick={() => handleNav('/')}
          className="flex flex-col items-start cursor-pointer group"
        >
          <span className={`text-xl md:text-2xl font-bold transition-colors group-hover:text-[var(--brand-blue)] ${
            isWhite ? 'text-slate-900' : 'text-white'
          }`}>
            Cultre Boat
          </span>
          <span className={`text-xs md:text-sm font-medium transition-colors group-hover:text-[var(--brand-blue)] ${
            isWhite ? 'text-slate-600' : 'text-white/80'
          }`}>
            Connect . Create . Captivate
          </span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => handleNav(item.path)}
                className={`font-medium cursor-pointer transition-colors hover:text-[var(--brand-blue)] ${
                  isWhite ? 'text-slate-700' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[var(--brand-blue)] hover:opacity-90 cursor-pointer text-white text-sm font-medium px-4 py-2 rounded-lg transition-opacity"
            >
              Get Started
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 cursor-pointer ${isWhite ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <ul className="flex flex-col gap-4 px-4 py-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => handleNav(item.path)}
                  className="text-slate-700 hover:text-[var(--brand-blue)] transition-colors font-medium block w-full text-left cursor-pointer"
                >
                  {item.name}
                </button>
              </li>
            ))}
            <Button
              onClick={() => { setIsModalOpen(true); setIsOpen(false) }}
              className="w-full bg-[var(--brand-blue)] hover:opacity-90 cursor-pointer"
            >
              Get Started
            </Button>
          </ul>
        </div>
      )}

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  )
}

'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  {
    label: 'Services',
    href: '/#services',
    children: [
      { label: 'Freight Broking', href: '/#services', icon: '🚛' },
      { label: 'Logistics Outsourcing', href: '/#services', icon: '🏭' },
      { label: 'Fleet Management', href: '/#services', icon: '🚚' },
      { label: 'Warehouse Solutions', href: '/#services', icon: '📦' },
      { label: 'Supply Chain Strategy', href: '/#services', icon: '🔗' },
      { label: 'View All Services →', href: '/#services', icon: '✦' },
    ],
  },
  { label: 'Industries', href: '/#industries' },
  { label: 'Innovation', href: '/#innovation' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-2xl shadow-navy/40 py-3' : 'py-5'
      }`}
      style={{
        background: scrolled || mobileOpen
          ? 'linear-gradient(135deg, #0B1F3A 0%, #0f2d52 60%, #1a5276 100%)'
          : 'linear-gradient(to bottom, rgba(11,31,58,0.7) 0%, transparent 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-10">
            <div className={`relative transition-all duration-300 ${scrolled ? 'bg-white rounded-lg px-3 py-1.5' : 'bg-white/95 rounded-lg px-3 py-1.5'}`}>
              <Image
                src="/logo.jpeg"
                alt="River Jordan Logistics Consultancy"
                width={180}
                height={52}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.children ? (
                  <div>
                    <button
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors rounded-lg hover:bg-white/10 group"
                      onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: 'easeOut' }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-2xl shadow-navy/20 border border-surface-dark overflow-hidden"
                        >
                          <div className="p-2">
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-navy hover:bg-surface hover:text-royal transition-all group"
                              >
                                <span className="text-lg">{child.icon}</span>
                                <span className="text-sm font-medium">{child.label}</span>
                                <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 text-royal transition-opacity" />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+263242757034"
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              <Phone size={14} />
              +263 242 757034
            </a>
            <Link
              href="/#contact"
              className="btn-accent text-sm py-2.5 px-5"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-white/10"
            style={{ background: 'linear-gradient(160deg, #0B1F3A 0%, #0f2d52 60%, #1a5276 100%)' }}
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl font-medium transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.children.slice(0, -1).map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/10 rounded-xl text-sm transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.icon} {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a href="tel:+263242757034" className="flex items-center gap-2 px-4 py-3 text-white/80 hover:text-white">
                  <Phone size={16} />
                  +263 242 757034
                </a>
                <Link
                  href="/#contact"
                  className="btn-accent w-full text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

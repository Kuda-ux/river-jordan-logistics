'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Clock, ArrowRight, Send } from 'lucide-react'
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Our Services', href: '/#services' },
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'Our Process', href: '/#process' },
  { label: 'Industries Served', href: '/#industries' },
  { label: 'Digital Innovation', href: '/#innovation' },
  { label: 'Contact Us', href: '/#contact' },
]

const services = [
  { label: 'Freight Broking', href: '/#services' },
  { label: 'Logistics Outsourcing', href: '/#services' },
  { label: 'Fleet Management', href: '/#services' },
  { label: 'Warehouse Solutions', href: '/#services' },
  { label: 'Supply Chain Strategy', href: '/#services' },
  { label: 'Transport Operations', href: '/#services' },
  { label: 'Training & Development', href: '/#services' },
  { label: 'Risk Management', href: '/#services' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      {/* Accent line */}
      <div className="h-1 bg-gradient-to-r from-brand via-accent to-royal" />
      
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Company */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-3 inline-block mb-6">
              <Image
                src="/logo.jpeg"
                alt="River Jordan Logistics"
                width={160}
                height={46}
                className="h-11 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Moving logistics beyond borders. We deliver total logistics solutions across Africa with professional expertise, technology, and unwavering commitment to excellence.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                { icon: FaFacebook, href: '#', label: 'Facebook' },
                { icon: FaTwitter, href: '#', label: 'Twitter' },
                { icon: FaInstagram, href: '#', label: 'Instagram' },
                { icon: FaWhatsapp, href: 'https://wa.me/263710781705', label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-royal flex items-center justify-center transition-all hover:-translate-y-0.5"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white hover:gap-3 transition-all group"
                  >
                    <ArrowRight size={12} className="text-brand group-hover:text-accent transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white hover:gap-3 transition-all group"
                  >
                    <ArrowRight size={12} className="text-brand group-hover:text-accent transition-colors" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact + Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">
              Get In Touch
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <MapPin size={16} className="text-brand flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    408, 4th Floor, Equity House<br />
                    Corner Jason Moyo &amp; Rezende St<br />
                    Harare, Zimbabwe
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone size={16} className="text-brand flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:+263242757034" className="block text-sm text-white/70 hover:text-white transition-colors">
                    +263 242 757034
                  </a>
                  <a href="tel:+263710781705" className="block text-sm text-white/70 hover:text-white transition-colors">
                    +263 710 781705 (WhatsApp)
                  </a>
                  <a href="tel:+447979696097" className="block text-sm text-white/70 hover:text-white transition-colors">
                    +44 7979 696097 (UK)
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock size={16} className="text-brand flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm text-white/70">Mon – Fri: 8:00 AM – 5:00 PM</p>
                  <p className="text-sm text-white/70">Saturday: 8:00 AM – 1:00 PM</p>
                  <p className="text-sm text-white/50">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Newsletter */}
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">
              Newsletter
            </h4>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand transition-colors"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-lg bg-royal hover:bg-brand flex items-center justify-center flex-shrink-0 transition-colors"
                aria-label="Subscribe"
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {year} River Jordan Logistics Consultancy (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-white/50 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="text-xs text-white/50 hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

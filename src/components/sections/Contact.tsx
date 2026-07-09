'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const serviceOptions = [
  'Freight Broking',
  'Logistics Outsourcing',
  'Fleet Management',
  'Warehouse Design & Optimisation',
  'Supply Chain Strategy',
  'Procurement & Sourcing',
  'Transport Operations',
  'Training & Development',
  'Risk Management',
  'Technology Solutions',
  'Humanitarian Logistics',
  'Other',
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

/* ── Section ─────────────────────────────────────────────── */
export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<FormState>('idle')

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate async network call
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
    setForm({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    })
    setTimeout(() => setStatus('idle'), 5000)
  }

  const inputClass =
    'w-full bg-white border border-surface-dark rounded-xl px-4 py-3 text-navy text-sm placeholder:text-muted-light focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal/30 transition-all'

  return (
    <section id="contact" className="py-24 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-widest">
              Contact Us
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Let&apos;s Build Your Logistics Solution
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Whether you need a freight quote, supply chain audit, or a full
            logistics transformation — our team is ready to engage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* ── Left: info + map ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Contact details card */}
            <div className="bg-navy rounded-3xl p-8 text-white mb-6">
              <h3
                className="text-xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                Office Information
              </h3>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1 uppercase tracking-wider">
                      Address
                    </p>
                    <p className="text-sm leading-relaxed">
                      408, 4th Floor, Equity House
                      <br />
                      Corner Jason Moyo &amp; Rezende Street
                      <br />
                      Harare, Zimbabwe
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1 uppercase tracking-wider">
                      Phone
                    </p>
                    <a
                      href="tel:+263242757034"
                      className="block text-sm hover:text-accent transition-colors"
                    >
                      +263 242 757034
                    </a>
                    <a
                      href="tel:+263710781705"
                      className="block text-sm hover:text-accent transition-colors"
                    >
                      +263 710 781705
                    </a>
                    <a
                      href="tel:+447979696097"
                      className="block text-sm hover:text-accent transition-colors"
                    >
                      +44 7979 696097 (UK)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1 uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href="mailto:info@riverjordanlogistics.co.zw"
                      className="block text-sm hover:text-accent transition-colors"
                    >
                      info@riverjordanlogistics.co.zw
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp size={16} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1 uppercase tracking-wider">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/263710781705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-400 hover:text-green-300 transition-colors"
                    >
                      +263 710 781705
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1 uppercase tracking-wider">
                      Business Hours
                    </p>
                    <p className="text-sm">Mon – Fri: 8:00 AM – 5:00 PM</p>
                    <p className="text-sm">Saturday: 8:00 AM – 1:00 PM</p>
                    <p className="text-sm text-white/50">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden h-64 border border-surface-dark">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.3259461892!2d31.044989!3d-17.828741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e04d775ef3%3A0x2b8fc7e64e5f3a6d!2sEquity%20House%2C%20Jason%20Moyo%20Ave%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="River Jordan Logistics Office Location"
              />
            </div>
          </motion.div>

          {/* ── Right: contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-xl shadow-navy/8 border border-surface-dark">
              <h3
                className="text-xl font-bold text-navy mb-2"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                Request a Consultation
              </h3>
              <p className="text-muted text-sm mb-8">
                Fill in the form below and we&apos;ll respond within 24 hours.
              </p>

              {/* Success banner */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-6"
                >
                  <CheckCircle
                    size={20}
                    className="text-green-500 flex-shrink-0"
                  />
                  <p className="text-green-700 text-sm font-medium">
                    Message sent! We&apos;ll be in touch within 24 hours.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Company */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+263 77 000 0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Service select */}
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your logistics challenge or requirement..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        style={{ display: 'inline-flex' }}
                      >
                        <Send size={16} />
                      </motion.span>
                      Sending…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} />
                      Send Message
                    </span>
                  )}
                </button>

                <p className="text-xs text-muted text-center">
                  By submitting, you agree to our privacy policy. We never share
                  your data.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

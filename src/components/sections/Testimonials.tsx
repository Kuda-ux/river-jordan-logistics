'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'River Jordan completely transformed our cross-border freight operations between Zimbabwe and South Africa. Their carrier network and rate negotiation saved us over $180,000 annually. An exceptional partner.',
    name: 'Tendai Moyo',
    title: 'Head of Supply Chain',
    company: 'African Mining Resources Ltd',
    industry: 'Mining',
    rating: 5,
    initials: 'TM',
    color: 'bg-royal',
  },
  {
    quote:
      'The warehouse optimisation project River Jordan delivered for our FMCG distribution centre increased our picking efficiency by 40% and reduced our storage footprint by 20%. Remarkable results.',
    name: 'Sarah Ncube',
    title: 'Operations Director',
    company: 'Pan-African FMCG Group',
    industry: 'FMCG',
    rating: 5,
    initials: 'SN',
    color: 'bg-brand',
  },
  {
    quote:
      "As an NGO operating in challenging environments, we needed a logistics partner who understood humanitarian supply chains. River Jordan's expertise and network reliability has been invaluable to our operations.",
    name: 'David Okafor',
    title: 'Logistics Coordinator',
    company: 'International Aid Foundation',
    industry: 'NGO',
    rating: 5,
    initials: 'DO',
    color: 'bg-accent',
  },
  {
    quote:
      'The driver training program River Jordan designed for our fleet of 120 vehicles reduced our accident rate by 65% and improved our compliance scores significantly. Highly professional delivery.',
    name: 'Grace Mutumbwa',
    title: 'Fleet Manager',
    company: 'Zimbabwe Construction Group',
    industry: 'Construction',
    rating: 5,
    initials: 'GM',
    color: 'bg-navy',
  },
  {
    quote:
      "River Jordan's procurement strategy work helped us renegotiate our freight rates across 8 carriers. We achieved savings of 22% in year one alone. Their market intelligence is unparalleled.",
    name: 'James Chikwanda',
    title: 'Procurement Manager',
    company: 'Agri-Business Zambia Ltd',
    industry: 'Agriculture',
    rating: 5,
    initials: 'JC',
    color: 'bg-royal',
  },
]

/* ── Star rating helper ───────────────────────────────────── */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  )
}

/* ── Section ─────────────────────────────────────────────── */
export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length)

  // Three cards visible on desktop (wrapping around)
  const visible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ]

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1573221566340-81bdde00b1c8?w=1920&q=85"
          alt="Professional logistics operations"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-surface/96" />
      </div>
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-widest">
              Client Stories
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Trusted by Africa&apos;s Leading Organisations
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Real results, real clients, real impact across industries throughout
            the African continent.
          </p>
        </div>

        {/* ── Desktop: 3-card grid ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="hidden md:grid grid-cols-3 gap-6 mb-8"
        >
          <AnimatePresence mode="wait">
            {visible.map((testimonial, i) => (
              <motion.div
                key={`${current}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-surface-dark hover:shadow-xl hover:shadow-navy/8 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <StarRating rating={testimonial.rating} />
                  <Quote size={24} className="text-surface-dark" />
                </div>

                <p className="text-navy text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-navy font-bold text-sm">{testimonial.name}</p>
                    <p className="text-muted text-xs">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs font-semibold px-2 py-1 bg-surface rounded-full text-muted">
                      {testimonial.industry}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Mobile: single card ── */}
        <div className="md:hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 border border-surface-dark shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <StarRating rating={testimonials[current].rating} />
                <Quote size={24} className="text-surface-dark" />
              </div>

              <p className="text-navy text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${testimonials[current].color} flex items-center justify-center text-white text-sm font-bold`}
                >
                  {testimonials[current].initials}
                </div>
                <div>
                  <p className="text-navy font-bold text-sm">
                    {testimonials[current].name}
                  </p>
                  <p className="text-muted text-xs">
                    {testimonials[current].title}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Navigation ── */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border-2 border-navy/20 hover:border-royal hover:bg-royal hover:text-white text-navy flex items-center justify-center transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === current
                    ? 'w-8 bg-royal'
                    : 'w-2 bg-navy/20 hover:bg-navy/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border-2 border-navy/20 hover:border-royal hover:bg-royal hover:text-white text-navy flex items-center justify-center transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      </div>
    </section>
  )
}

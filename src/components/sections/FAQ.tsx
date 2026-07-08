'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plus, Minus, ArrowRight } from 'lucide-react'

const faqs = [
  {
    q: 'What makes River Jordan Logistics different from a standard freight broker?',
    a: 'Unlike standard freight brokers who simply match loads with carriers, River Jordan provides comprehensive logistics consulting. We analyse your entire supply chain, identify inefficiencies, negotiate rates, manage documentation, provide training, and deliver strategic recommendations — all backed by 15+ years of African logistics expertise.',
  },
  {
    q: 'Which African countries do you operate in?',
    a: 'We operate across 12+ African countries with primary strength in the SADC region — including Zimbabwe, South Africa, Zambia, Mozambique, Botswana, Malawi, Tanzania, and Kenya. Our carrier network extends to East and West Africa, and we have cross-border expertise across major trade corridors.',
  },
  {
    q: 'Can you handle humanitarian and NGO logistics?',
    a: 'Yes. We have a dedicated humanitarian logistics practice experienced in working with UN agencies, international NGOs, and emergency response organisations. We understand the unique compliance, documentation, and operational requirements of the humanitarian sector, including UNHRD standards and UN global procurement guidelines.',
  },
  {
    q: 'How do you help companies reduce logistics costs?',
    a: 'Our cost reduction approach combines carrier rate negotiation (leveraging our network for competitive pricing), route optimisation (reducing empty miles and fuel costs), warehouse slotting (improving pick efficiency), and contract management (ensuring SLA compliance and penalty avoidance). Clients typically see 20–30% cost reduction within the first year.',
  },
  {
    q: 'Do you offer technology solutions for logistics management?',
    a: "Yes. We provide technology consulting services including TMS (Transport Management System) selection and implementation, digital dashboard setup, fleet tracking solutions, and route optimisation software. We are also developing our own AI-powered load board platform — Africa's first intelligent freight marketplace.",
  },
  {
    q: 'What is your consultation process for new clients?',
    a: 'Our engagement begins with a no-obligation discovery call to understand your logistics challenges. This is followed by a supply chain audit, a tailored proposal with recommendations and ROI projections, and a phased implementation plan. Most initial consultations are completed within 2–3 weeks.',
  },
  {
    q: 'Can River Jordan assist with customs clearance and documentation?',
    a: 'Absolutely. Our documentation and compliance team handles all aspects of import/export documentation, customs declarations, certificate of origin processing, and regulatory compliance across our operating corridors. We work with licensed clearing agents to ensure seamless border processing.',
  },
  {
    q: 'Do you provide training services for logistics teams?',
    a: 'Yes — training is a core service offering. We design and deliver customised training programs for logistics managers, warehouse supervisors, transport controllers, driver trainers, and customer service teams. Our training is practical, industry-specific, and aligned with CILT (Chartered Institute of Logistics and Transport) standards.',
  },
]

/* ── Single accordion item ───────────────────────────────── */
function FAQItem({
  faq,
  index,
}: {
  faq: (typeof faqs)[0]
  index: number
}) {
  const [open, setOpen] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? 'border-royal/40 bg-white shadow-lg shadow-navy/8'
          : 'border-surface-dark bg-white hover:border-royal/20'
      }`}
    >
      <button
        className="w-full flex items-center justify-between p-6 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className={`font-semibold text-sm sm:text-base pr-4 ${
            open ? 'text-royal' : 'text-navy'
          }`}
        >
          {faq.q}
        </span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            open ? 'bg-royal text-white' : 'bg-surface-dark text-navy'
          }`}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6">
              <div className="h-px bg-surface-dark mb-4" />
              <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ── Section ─────────────────────────────────────────────── */
export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-widest">
              Got Questions?
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>

          <h2
            className="text-3xl sm:text-4xl font-bold text-navy mb-4"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-muted max-w-xl mx-auto text-sm">
            Everything you need to know about our services, processes, and how we
            can help your organisation succeed.
          </p>
        </div>

        {/* ── Accordion ── */}
        <div className="space-y-3 mb-12">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* ── CTA banner ── */}
        <div className="text-center bg-gradient-to-br from-navy to-royal rounded-3xl p-8 text-white">
          <p className="text-white/80 mb-4">
            Can&apos;t find what you&apos;re looking for? Our team is ready to answer your
            specific logistics questions.
          </p>
          <a
            href="/#contact"
            className="btn-accent inline-flex items-center gap-2"
          >
            Ask Us Directly
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageSquare, ClipboardList, Truck, Zap, MapPin, CircleCheck, RefreshCw } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin with a thorough assessment of your logistics challenges, understanding your supply chain structure, pain points, and business objectives.',
    icon: MessageSquare,
    color: 'bg-royal',
  },
  {
    number: '02',
    title: 'Strategic Planning',
    description: 'Our experts design a tailored logistics blueprint — covering routing, carrier selection, timeline, compliance, and cost structures.',
    icon: ClipboardList,
    color: 'bg-brand',
  },
  {
    number: '03',
    title: 'Carrier Matching',
    description: 'We leverage our extensive carrier network to source the most reliable, cost-effective transport solutions for your specific requirements.',
    icon: Truck,
    color: 'bg-navy',
  },
  {
    number: '04',
    title: 'Execution',
    description: 'Our operations team coordinates every moving part — from pickup scheduling to documentation, customs clearance, and border compliance.',
    icon: Zap,
    color: 'bg-accent',
  },
  {
    number: '05',
    title: 'Live Tracking',
    description: 'Real-time visibility into your shipment location and status. Proactive exception management keeps stakeholders informed at every milestone.',
    icon: MapPin,
    color: 'bg-royal',
  },
  {
    number: '06',
    title: 'Delivery & POD',
    description: 'Confirmed delivery with proof-of-delivery documentation, chain-of-custody records, and customer sign-off for complete accountability.',
    icon: CircleCheck,
    color: 'bg-brand',
  },
  {
    number: '07',
    title: 'Continuous Improvement',
    description: 'Post-delivery analysis, KPI reporting, and regular performance reviews to continuously optimise your logistics operations.',
    icon: RefreshCw,
    color: 'bg-navy',
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const isEven = index % 2 === 0

  return (
    <div ref={ref} className="relative flex items-start gap-6 lg:gap-0">
      {/* Desktop: alternating layout */}
      <div className={`hidden lg:flex w-full items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Content card */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-[calc(50%-3rem)] bg-white rounded-2xl p-6 shadow-lg shadow-navy/8 border border-surface-dark hover:shadow-xl hover:shadow-navy/12 transition-shadow"
        >
          <div className={`w-10 h-10 ${step.color} rounded-xl flex items-center justify-center mb-4`}>
            <step.icon size={18} className="text-white" />
          </div>
          <h3 className="text-navy font-bold text-lg mb-2">{step.title}</h3>
          <p className="text-muted text-sm leading-relaxed">{step.description}</p>
        </motion.div>
        
        {/* Center number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex-shrink-0 relative z-10"
        >
          <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-lg text-white font-bold text-lg`} style={{ fontFamily: 'var(--font-sora)' }}>
            {step.number}
          </div>
        </motion.div>

        <div className="w-[calc(50%-3rem)]" />
      </div>

      {/* Mobile: vertical layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="lg:hidden flex gap-4 w-full"
      >
        <div className={`w-12 h-12 flex-shrink-0 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
          {step.number}
        </div>
        <div className="flex-1 bg-white rounded-2xl p-5 shadow-md border border-surface-dark">
          <div className={`w-8 h-8 ${step.color} rounded-lg flex items-center justify-center mb-3`}>
            <step.icon size={14} className="text-white" />
          </div>
          <h3 className="text-navy font-bold text-base mb-2">{step.title}</h3>
          <p className="text-muted text-sm leading-relaxed">{step.description}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-widest">How We Work</span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
            Our Proven Process
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            From initial consultation to continuous improvement — a structured, transparent, and results-driven logistics engagement model.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-royal via-brand to-accent -translate-x-1/2" />
          
          {/* Vertical line (mobile) */}
          <div className="lg:hidden absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-royal via-brand to-accent" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <StepCard key={step.title} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

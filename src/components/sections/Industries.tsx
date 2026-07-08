'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaIndustry,
  FaStore,
  FaSeedling,
  FaCogs,
  FaHandHoldingHeart,
  FaBuilding,
  FaHardHat,
  FaShip,
  FaBoxes,
  FaGlobe,
} from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'

const industries = [
  {
    name: 'Mining & Resources',
    icon: FaIndustry,
    description:
      'Heavy equipment logistics, explosives transport, and remote site supply chain management.',
    color: 'from-slate-600 to-slate-800',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    hover: 'hover:border-slate-400',
  },
  {
    name: 'Retail & Distribution',
    icon: FaStore,
    description:
      'Last-mile delivery, inventory replenishment, and multi-channel distribution optimisation.',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    hover: 'hover:border-blue-400',
  },
  {
    name: 'Agriculture & Food',
    icon: FaSeedling,
    description:
      'Cold chain management, perishable goods logistics, and farm-to-market supply chain solutions.',
    color: 'from-green-600 to-green-800',
    bg: 'bg-green-50',
    border: 'border-green-200',
    hover: 'hover:border-green-400',
  },
  {
    name: 'Manufacturing',
    icon: FaCogs,
    description:
      'Raw material procurement logistics, JIT delivery, and inbound/outbound freight management.',
    color: 'from-indigo-600 to-indigo-800',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    hover: 'hover:border-indigo-400',
  },
  {
    name: 'NGOs & Humanitarian',
    icon: FaHandHoldingHeart,
    description:
      'Emergency response logistics, aid distribution, and UN/INGO supply chain coordination.',
    color: 'from-rose-500 to-rose-700',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    hover: 'hover:border-rose-400',
  },
  {
    name: 'Government & Public Sector',
    icon: FaBuilding,
    description:
      'Public procurement logistics, infrastructure project supply chains, and government fleet management.',
    color: 'from-navy to-royal',
    bg: 'bg-blue-50',
    border: 'border-blue-300',
    hover: 'hover:border-blue-500',
  },
  {
    name: 'Construction',
    icon: FaHardHat,
    description:
      'Heavy machinery mobilisation, bulk material transport, and project site logistics coordination.',
    color: 'from-yellow-600 to-yellow-800',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    hover: 'hover:border-yellow-400',
  },
  {
    name: 'Import & Export',
    icon: FaShip,
    description:
      'Customs brokerage, port logistics, freight forwarding, and trade documentation management.',
    color: 'from-cyan-600 to-cyan-800',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    hover: 'hover:border-cyan-400',
  },
  {
    name: 'FMCG',
    icon: FaBoxes,
    description:
      'High-frequency, high-volume distribution logistics with strict SLA adherence and route optimisation.',
    color: 'from-orange-500 to-orange-700',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    hover: 'hover:border-orange-400',
  },
  {
    name: 'Cross-border Trade',
    icon: FaGlobe,
    description:
      'SADC/EAC trade corridor management, forex logistics, and multi-country supply chain coordination.',
    color: 'from-violet-600 to-violet-800',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    hover: 'hover:border-violet-400',
  },
]

type Industry = (typeof industries)[number]

function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: (index % 5) * 0.07 }}
      className={`group relative ${industry.bg} ${industry.border} ${industry.hover} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
    >
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
      >
        <industry.icon size={24} className="text-white" />
      </div>
      <h3 className="text-navy font-bold text-sm mb-2">{industry.name}</h3>
      <p className="text-muted text-xs leading-relaxed mb-3">{industry.description}</p>
      <div className="flex items-center gap-1 text-royal text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Explore Solutions</span>
        <ArrowRight size={11} />
      </div>
    </motion.div>
  )
}

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-widest">
              Industries We Serve
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Sector-Specific Logistics Expertise
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-base">
            Every industry has unique logistics challenges. Our team brings sector-specific
            knowledge to design solutions that align with your industry&apos;s regulatory,
            operational, and cost requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.name} industry={industry} index={i} />
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-16 bg-gradient-to-r from-navy via-royal to-brand rounded-3xl p-8 sm:p-12 text-white text-center">
          <h3
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Not Seeing Your Industry?
          </h3>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Our consulting methodology adapts to any industry vertical. Contact us to discuss your
            specific logistics challenges and how we can engineer a bespoke solution.
          </p>
          <a href="/#contact" className="btn-accent inline-flex items-center gap-2">
            Discuss Your Requirements
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

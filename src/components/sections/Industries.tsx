'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaIndustry, FaStore, FaSeedling, FaCogs, FaHandHoldingHeart,
  FaBuilding, FaHardHat, FaShip, FaBoxes, FaGlobe
} from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'

const industries = [
  {
    name: 'Mining & Resources',
    icon: FaIndustry,
    description: 'Heavy equipment logistics, explosives transport, and remote site supply chain management.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
    gradient: 'from-slate-900/95 via-slate-800/70 to-slate-700/20',
    accent: '#94A3B8',
  },
  {
    name: 'Retail & Distribution',
    icon: FaStore,
    description: 'Last-mile delivery, inventory replenishment, and multi-channel distribution optimisation.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80',
    gradient: 'from-blue-900/95 via-blue-800/70 to-blue-700/20',
    accent: '#60A5FA',
  },
  {
    name: 'Agriculture & Food',
    icon: FaSeedling,
    description: 'Cold chain management, perishable goods logistics, and farm-to-market supply chains.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    gradient: 'from-green-900/95 via-green-800/70 to-green-700/20',
    accent: '#4ADE80',
  },
  {
    name: 'Manufacturing',
    icon: FaCogs,
    description: 'Raw material procurement logistics, JIT delivery, and inbound/outbound freight management.',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80',
    gradient: 'from-indigo-900/95 via-indigo-800/70 to-indigo-700/20',
    accent: '#818CF8',
  },
  {
    name: 'NGOs & Humanitarian',
    icon: FaHandHoldingHeart,
    description: 'Emergency response logistics, aid distribution, and UN/INGO supply chain coordination.',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80',
    gradient: 'from-rose-900/95 via-rose-800/70 to-rose-700/20',
    accent: '#FB7185',
  },
  {
    name: 'Government & Public Sector',
    icon: FaBuilding,
    description: 'Public procurement logistics, infrastructure project supply chains, and fleet management.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    gradient: 'from-sky-900/95 via-sky-800/70 to-sky-700/20',
    accent: '#38BDF8',
  },
  {
    name: 'Construction',
    icon: FaHardHat,
    description: 'Heavy machinery mobilisation, bulk material transport, and project site logistics.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    gradient: 'from-amber-900/95 via-amber-800/70 to-amber-700/20',
    accent: '#FCD34D',
  },
  {
    name: 'Import & Export',
    icon: FaShip,
    description: 'Customs brokerage, port logistics, freight forwarding, and trade documentation.',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80',
    gradient: 'from-cyan-900/95 via-cyan-800/70 to-cyan-700/20',
    accent: '#22D3EE',
  },
  {
    name: 'FMCG',
    icon: FaBoxes,
    description: 'High-frequency, high-volume distribution with strict SLA adherence and route optimisation.',
    image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=600&q=80',
    gradient: 'from-orange-900/95 via-orange-800/70 to-orange-700/20',
    accent: '#FB923C',
  },
  {
    name: 'Cross-border Trade',
    icon: FaGlobe,
    description: 'SADC/EAC trade corridor management and multi-country supply chain coordination.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80',
    gradient: 'from-violet-900/95 via-violet-800/70 to-violet-700/20',
    accent: '#A78BFA',
  },
]

type Industry = (typeof industries)[number]

function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 5) * 0.08 }}
      className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Background image */}
      <Image
        src={industry.image}
        alt={industry.name}
        fill
        className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
      />

      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${industry.gradient}`} />

      {/* Icon badge — top right */}
      <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
        <industry.icon size={17} className="text-white" />
      </div>

      {/* Logo blue accent line — top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2980B9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content — bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white font-bold text-sm mb-1.5 leading-tight">{industry.name}</h3>
        <p
          className="text-white/70 text-xs leading-relaxed line-clamp-2 group-hover:text-white/90 transition-colors duration-300"
        >
          {industry.description}
        </p>
        <div className="flex items-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transition-transform">
          <span className="text-xs font-semibold" style={{ color: industry.accent }}>Explore Solutions</span>
          <ArrowRight size={11} style={{ color: industry.accent }} />
        </div>
      </div>
    </motion.div>
  )
}

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Industries We Serve</span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Sector-Specific Logistics Expertise
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-base">
            Every industry has unique logistics challenges. Our team brings deep sector knowledge to design solutions that align with your operational, regulatory, and cost requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.name} industry={industry} index={i} />
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-14 relative rounded-3xl overflow-hidden min-h-[220px] sm:min-h-[260px]">
          <Image
            src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1600&q=85"
            alt="River Jordan Logistics fleet operations"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-brand/80" />
          <div className="relative z-10 px-8 sm:px-14 py-12 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="text-2xl sm:text-3xl font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                Not Seeing Your Industry?
              </h3>
              <p className="text-white/75 max-w-xl text-sm leading-relaxed">
                Our consulting methodology adapts to any vertical. Contact us to discuss your specific logistics challenges and how we engineer bespoke solutions.
              </p>
            </div>
            <a href="/#contact" className="btn-accent flex-shrink-0 inline-flex items-center gap-2">
              Discuss Your Requirements
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

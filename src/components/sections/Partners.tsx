'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/* Industry associations & certifications that a professional logistics
   consultancy would typically hold or partner with. */
const partners = [
  { name: 'CILT Zimbabwe', abbr: 'CILT', full: 'Chartered Institute of Logistics & Transport' },
  { name: 'ZIMTRADE', abbr: 'ZIMTRADE', full: 'Zimbabwe Export Promotion' },
  { name: 'SADC', abbr: 'SADC', full: 'Southern African Development Community' },
  { name: 'UN Global Compact', abbr: 'UNGC', full: 'UN Global Compact Member' },
  { name: 'ZIDA', abbr: 'ZIDA', full: 'Zimbabwe Investment & Development Agency' },
  { name: 'IATA', abbr: 'IATA', full: 'International Air Transport Association' },
  { name: 'ISO 9001', abbr: 'ISO', full: 'Quality Management Certified' },
]

export default function Partners() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="py-12 bg-white border-t border-surface-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-bold uppercase tracking-widest text-muted mb-8"
        >
          Industry Associations & Accreditations
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              title={partner.full}
              className="group flex flex-col items-center gap-1.5 cursor-default"
            >
              {/* Logo placeholder styled as a professional badge */}
              <div className="h-12 px-5 rounded-xl border-2 border-surface-dark bg-surface flex items-center justify-center group-hover:border-royal/30 group-hover:bg-royal/5 transition-all duration-300">
                <span className="text-sm font-bold text-navy/60 group-hover:text-royal tracking-wider transition-colors">
                  {partner.abbr}
                </span>
              </div>
              <p className="text-xs text-muted/70 text-center max-w-[80px] leading-tight hidden sm:block">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

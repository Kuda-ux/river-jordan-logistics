'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Globe,
  Cpu,
  TrendingDown,
  Eye,
  ShieldCheck,
  Award,
  Network,
  Settings2,
} from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Regional Expertise',
    description:
      'Deep knowledge of African logistics corridors, cross-border regulations, and carrier networks built over 15+ years.',
    color: 'text-blue-400',
  },
  {
    icon: Cpu,
    title: 'Technology-Driven',
    description:
      'Real-time tracking, digital dashboards, and AI-powered decision making for superior supply chain visibility.',
    color: 'text-accent',
  },
  {
    icon: TrendingDown,
    title: 'Cost Optimisation',
    description:
      'Proven strategies that reduce logistics spend by 20-30% through network design, rate negotiation, and process efficiency.',
    color: 'text-green-400',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description:
      'Complete visibility across your supply chain with real-time reporting, milestone tracking, and performance analytics.',
    color: 'text-sky-400',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Reduction',
    description:
      'Proactive risk identification, mitigation strategies, and business continuity planning for operational resilience.',
    color: 'text-red-400',
  },
  {
    icon: Award,
    title: 'Certified Professionals',
    description:
      'CILT-certified logistics consultants with decades of combined experience across freight, warehousing, and supply chain.',
    color: 'text-yellow-400',
  },
  {
    icon: Network,
    title: 'Reliable Network',
    description:
      'Pan-African carrier and partner network spanning 12+ countries, built and vetted over 15 years of operations.',
    color: 'text-purple-400',
  },
  {
    icon: Settings2,
    title: 'Tailored Solutions',
    description:
      'Bespoke logistics strategies and implementation plans designed around your unique industry and business requirements.',
    color: 'text-pink-400',
  },
]

type Feature = (typeof features)[number]

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex gap-4 p-5 rounded-2xl border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
        <feature.icon size={20} className={feature.color} />
      </div>
      <div>
        <h4 className="text-white font-semibold text-sm mb-1.5">{feature.title}</h4>
        <p className="text-white/60 text-xs leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  )
}

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="why-us" className="py-24 bg-navy relative overflow-hidden" ref={ref}>
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-royal/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Features */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-accent" />
                <span className="text-accent text-xs font-bold uppercase tracking-widest">
                  Why River Jordan
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                The Logistics Partner <br />
                <span className="gradient-text-white">Africa Trusts</span>
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                In a landscape where logistics complexity is growing, River Jordan brings clarity,
                control, and confidence to your supply chain. We combine African market intelligence
                with global best practices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, i) => (
                <FeatureCard key={feature.title} feature={feature} index={i} />
              ))}
            </div>
          </div>

          {/* Right: Image + floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=85"
                alt="Logistics operations"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
            </div>

            {/* Pull quote */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-8 glass-white rounded-2xl p-6 max-w-xs shadow-2xl"
            >
              <div className="text-4xl text-accent font-bold leading-none mb-2">&ldquo;</div>
              <p className="text-navy text-sm font-medium leading-relaxed italic">
                River Jordan transformed our cross-border operations and reduced our logistics costs
                by 28%.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-royal flex items-center justify-center text-white text-xs font-bold">
                  MN
                </div>
                <div>
                  <p className="text-navy text-xs font-bold">Michael N.</p>
                  <p className="text-muted text-xs">Head of Logistics, Mining Corp</p>
                </div>
              </div>
            </motion.div>

            {/* Metric card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-6 -right-6 glass rounded-xl p-4 text-white"
            >
              <p className="text-3xl font-bold text-accent">30%</p>
              <p className="text-xs text-white/70 mt-0.5">Avg. Cost Reduction</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

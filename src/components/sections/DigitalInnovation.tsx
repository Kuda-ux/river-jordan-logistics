'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, MapPin, Layers, BarChart3, FileCheck, Activity, ArrowRight, Zap } from 'lucide-react'

const innovations = [
  {
    icon: Brain,
    title: 'AI Freight Matching',
    description:
      'Machine learning algorithms that analyse carrier capacity, routes, and performance to match loads with optimal carriers in milliseconds.',
    badge: 'In Development',
    badgeColor: 'bg-accent/20 text-accent border-accent/30',
    glow: 'hover:shadow-blue-500/20',
  },
  {
    icon: MapPin,
    title: 'Live Fleet Tracking',
    description:
      'GPS-enabled real-time vehicle tracking with predictive ETA, geofencing alerts, and driver behaviour monitoring.',
    badge: 'Phase 1',
    badgeColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    glow: 'hover:shadow-green-500/20',
  },
  {
    icon: Layers,
    title: 'Digital Load Board',
    description:
      "Africa's premier digital freight marketplace — connecting shippers and verified carriers with transparent pricing and instant booking.",
    badge: 'Coming Soon',
    badgeColor: 'bg-accent/20 text-accent border-accent/30',
    glow: 'hover:shadow-orange-500/20',
    featured: true,
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics Dashboard',
    description:
      'Business intelligence platform with KPI tracking, supply chain benchmarking, and predictive analytics for data-driven decisions.',
    badge: 'In Development',
    badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    glow: 'hover:shadow-purple-500/20',
  },
  {
    icon: FileCheck,
    title: 'Automated Documentation',
    description:
      'AI-powered generation of shipping documents, customs declarations, and compliance certificates — reducing admin time by 80%.',
    badge: 'Phase 2',
    badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    glow: 'hover:shadow-cyan-500/20',
  },
  {
    icon: Activity,
    title: 'Real-time Reporting',
    description:
      'Instant access to shipment status, fleet performance metrics, cost analytics, and client SLA compliance from any device.',
    badge: 'Phase 1',
    badgeColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    glow: 'hover:shadow-green-500/20',
  },
]

const roadmap = [
  { period: 'Q1 2025', label: 'Fleet Tracking Launch',        done: true  },
  { period: 'Q3 2025', label: 'Real-time Reporting Portal',   done: true  },
  { period: 'Q1 2026', label: 'AI Freight Matching Beta',     done: false },
  { period: 'Q3 2026', label: 'Digital Load Board Launch',    done: false },
]

/* ── Single card ─────────────────────────────────────────── */
function InnovationCard({
  item,
  index,
}: {
  item: (typeof innovations)[0]
  index: number
}) {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative glass rounded-2xl p-6 border border-white/10 hover:border-white/20 ${
        item.featured ? 'ring-1 ring-accent/40' : ''
      } hover:shadow-2xl ${item.glow} transition-all duration-300`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
          <item.icon size={22} className="text-white" />
        </div>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full border ${item.badgeColor}`}
        >
          {item.badge}
        </span>
      </div>

      <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>

      {item.featured && (
        <div className="mt-4 flex items-center gap-2 text-accent text-sm font-semibold">
          <Zap size={14} />
          <span>Flagship Product</span>
        </div>
      )}
    </motion.div>
  )
}

/* ── Section ─────────────────────────────────────────────── */
export default function DigitalInnovation() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section
      id="innovation"
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #060f1d 0%, #0B1F3A 50%, #0d2847 100%)',
      }}
    >
      {/* ── Animated background blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.08, 0.15] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
        />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-widest">
              Digital Innovation
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            The Future of Logistics
            <br />
            <span className="gradient-text-white">Is Already Here</span>
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto text-base leading-relaxed">
            We&apos;re building Africa&apos;s most advanced digital logistics platform —
            combining AI freight matching, real-time tracking, and smart analytics
            to transform how logistics works across the continent.
          </p>
        </motion.div>

        {/* ── Innovation cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {innovations.map((item, i) => (
            <InnovationCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* ── Roadmap ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-3xl p-8 sm:p-12 border border-white/10"
        >
          <h3
            className="text-white font-bold text-xl mb-8 text-center"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Platform Development Roadmap
          </h3>

          <div className="relative">
            {/* Connecting line — hidden on mobile */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent hidden sm:block" />

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
              {roadmap.map((milestone, i) => (
                <div key={milestone.period} className="relative text-center">
                  <div
                    className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-bold border-2 relative z-10 ${
                      milestone.done
                        ? 'bg-green-500 border-green-400 text-white'
                        : 'bg-navy border-white/30 text-white/60'
                    }`}
                  >
                    {milestone.done ? '✓' : i + 1}
                  </div>
                  <p className="text-accent text-xs font-bold uppercase tracking-wider mb-1">
                    {milestone.period}
                  </p>
                  <p className="text-white/70 text-sm">{milestone.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/#contact"
              className="btn-accent inline-flex items-center gap-2"
            >
              Join the Beta Program
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

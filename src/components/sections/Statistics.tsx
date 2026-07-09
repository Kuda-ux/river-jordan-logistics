'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Globe, Users, Award, Package, Clock } from 'lucide-react'

const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered', icon: Package, description: 'Across multiple industries' },
  { value: 15, suffix: '+', label: 'Years of Experience', icon: Award, description: 'Industry expertise' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: Users, description: 'Retention rate' },
  { value: 12, suffix: '+', label: 'Countries Served', icon: Globe, description: 'Pan-African operations' },
  { value: 50, suffix: 'M+', label: 'Tons Facilitated', icon: TrendingUp, description: 'Cargo managed annually' },
  { value: 24, suffix: '/7', label: 'Support Available', icon: Clock, description: 'Always on call' },
]

function CounterItem({ stat, inView }: { stat: typeof stats[0]; inView: boolean }) {
  const [count, setCount] = useState(0)
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!inView || hasStarted.current) return
    hasStarted.current = true
    const duration = 2000
    const steps = 60
    const increment = stat.value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        setCount(stat.value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, stat.value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center group"
    >
      <div className="w-16 h-16 rounded-2xl bg-white/10 hover:bg-white/15 flex items-center justify-center mx-auto mb-4 transition-colors border border-white/15 group-hover:border-[#2980B9]/50">
        <stat.icon size={24} className="text-[#2980B9] group-hover:text-accent transition-colors" />
      </div>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-sora)' }}>
        {count}{stat.suffix}
      </div>
      <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
      <div className="text-white/50 text-xs">{stat.description}</div>
    </motion.div>
  )
}

export default function Statistics() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=85"
          alt="Aerial view of shipping port and logistics operations"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Brand-aligned overlay: navy -> brand blue */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/90 to-[#2980B9]/80" />
      </div>

      {/* Decorative glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#2980B9]/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#2980B9]" />
            <span className="text-[#2980B9] text-xs font-bold uppercase tracking-widest">By The Numbers</span>
            <div className="h-px w-8 bg-[#2980B9]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-sora)' }}>
            Delivering Results That Speak
          </h2>
          <p className="text-white/60 mt-3 max-w-xl mx-auto text-sm">
            Real metrics from real projects — across Africa&apos;s most demanding logistics environments.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <CounterItem key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

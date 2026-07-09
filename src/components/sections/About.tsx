'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CircleCheck, Download, Target, Eye, Lightbulb } from 'lucide-react'

const sixRights = [
  {
    title: 'Right Product',
    description: 'Ensuring every consignment matches exact specifications and client requirements.',
    icon: '📦',
    color: 'from-blue-500/20 to-blue-600/10',
    border: 'border-blue-500/30',
  },
  {
    title: 'Right Time',
    description: 'Precision scheduling and real-time tracking to guarantee on-time delivery.',
    icon: '⏱️',
    color: 'from-orange-500/20 to-orange-600/10',
    border: 'border-orange-500/30',
  },
  {
    title: 'Right Quantity',
    description: 'Accurate load planning and capacity optimisation to eliminate waste.',
    icon: '⚖️',
    color: 'from-green-500/20 to-green-600/10',
    border: 'border-green-500/30',
  },
  {
    title: 'Right Quality',
    description: 'ISO-aligned handling protocols ensuring your goods arrive in perfect condition.',
    icon: '✅',
    color: 'from-purple-500/20 to-purple-600/10',
    border: 'border-purple-500/30',
  },
  {
    title: 'Right Place',
    description: 'Strategic routing and last-mile delivery capabilities across the African continent.',
    icon: '📍',
    color: 'from-red-500/20 to-red-600/10',
    border: 'border-red-500/30',
  },
  {
    title: 'Right Cost',
    description: 'Competitive rate negotiation and cost optimisation without compromising quality.',
    icon: '💰',
    color: 'from-yellow-500/20 to-yellow-600/10',
    border: 'border-yellow-500/30',
  },
]

const trustPoints = [
  'Licensed freight brokerage operations',
  'Regional expertise across Southern & East Africa',
  'Technology-enabled supply chain visibility',
  'Certified logistics professionals',
]

function SixRightsCard({ right, index }: { right: typeof sixRights[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative bg-gradient-to-br ${right.color} border ${right.border} rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}
    >
      <div className="text-3xl mb-3">{right.icon}</div>
      <h4 className="text-navy font-bold text-base mb-2">{right.title}</h4>
      <p className="text-muted text-sm leading-relaxed">{right.description}</p>
    </motion.div>
  )
}

export default function About() {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="about" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top grid: text + image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-xs font-bold uppercase tracking-widest">About River Jordan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6" style={{ fontFamily: 'var(--font-sora)' }}>
              Built on Expertise.<br />
              <span className="gradient-text">Driven by Results.</span>
            </h2>
            <p className="text-muted text-base leading-relaxed mb-4">
              River Jordan Logistics Consultancy (Pvt) Ltd is a premier logistics consulting firm headquartered in Harare, Zimbabwe. We specialise in transforming logistics operations across Africa — from freight broking and fleet management to end-to-end supply chain strategy.
            </p>
            <p className="text-muted text-base leading-relaxed mb-8">
              Our team of certified logistics professionals brings deep regional knowledge and global best practices to every engagement. We don&apos;t just move cargo — we engineer logistics ecosystems that drive competitive advantage for our clients.
            </p>
            
            <ul className="space-y-3 mb-8">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-navy font-medium">
                  <CircleCheck size={16} className="text-brand flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <a
              href="/company-profile.pdf"
              className="btn-primary inline-flex items-center gap-2"
              download
            >
              <Download size={16} />
              Download Company Profile
            </a>
          </motion.div>

          {/* Right: Photo collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Main large image */}
            <div className="relative rounded-3xl overflow-hidden h-72 shadow-2xl shadow-navy/20 mb-4">
              <Image
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=85"
                alt="Professional logistics operations — River Jordan Consultancy"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">
                  Supply Chain Operations
                </span>
              </div>
            </div>

            {/* Two smaller images side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden h-44 shadow-lg shadow-navy/10">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&q=80"
                  alt="Logistics professionals at work"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-white/80 text-xs font-semibold">Consulting</span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-44 shadow-lg shadow-navy/10">
                <Image
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=500&q=80"
                  alt="Fleet and freight management across Africa"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-white/80 text-xs font-semibold">Fleet Operations</span>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 glass-white rounded-2xl p-5 shadow-xl border border-white/80"
            >
              <p className="text-3xl font-bold text-navy">15+</p>
              <p className="text-sm text-muted font-medium">Years of Logistics Expertise</p>
              <div className="mt-2 h-1 w-12 bg-gradient-to-r from-brand to-accent rounded-full" />
            </motion.div>

            {/* Accent decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand/10 rounded-full blur-2xl" />
          </motion.div>
        </div>

        {/* Six Rights Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-xs font-bold uppercase tracking-widest">Our Philosophy</span>
              <div className="h-px w-8 bg-accent" />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
              The 6 Rights of Logistics
            </h3>
            <p className="text-muted max-w-2xl mx-auto text-base">
              Every logistics decision we make is guided by six fundamental principles that define excellence in delivery performance and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sixRights.map((right, i) => (
              <SixRightsCard key={right.title} right={right} index={i} />
            ))}
          </div>
        </div>

        {/* Mission / Vision banner */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              label: 'Our Mission',
              text: 'To deliver world-class logistics consulting that empowers businesses across Africa to compete globally.',
              color: 'bg-royal',
            },
            {
              icon: Eye,
              label: 'Our Vision',
              text: 'To be the most trusted logistics consultancy on the African continent, driving economic growth through supply chain excellence.',
              color: 'bg-navy',
            },
            {
              icon: Lightbulb,
              label: 'Our Values',
              text: 'Integrity. Innovation. Reliability. Client-first thinking. Continuous improvement. Regional pride.',
              color: 'bg-accent',
            },
          ].map(({ icon: Icon, label, text, color }) => (
            <div key={label} className={`${color} rounded-2xl p-8 text-white`}>
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                <Icon size={22} />
              </div>
              <h4 className="text-lg font-bold mb-3">{label}</h4>
              <p className="text-white/80 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

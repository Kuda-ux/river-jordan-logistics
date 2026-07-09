'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  ArrowRight,
  Truck,
  Factory,
  Settings,
  Warehouse,
  Network,
  ShoppingCart,
  Route,
  Navigation,
  GraduationCap,
  Users,
  BookOpen,
  Headphones,
  DollarSign,
  FileText,
  Shield,
  Monitor,
  Heart,
  Leaf,
} from 'lucide-react'

const categories = ['All', 'Freight & Transport', 'Consulting', 'Operations', 'Technology']

const services = [
  {
    id: 1,
    category: 'Freight & Transport',
    icon: Truck,
    title: 'Freight Broking',
    description:
      'Match shippers with optimal carriers for road, rail, air and sea freight across Africa. Leveraging our extensive network for competitive rates.',
    color: 'from-blue-500 to-blue-700',
    featured: true,
  },
  {
    id: 2,
    category: 'Consulting',
    icon: Factory,
    title: 'Logistics Outsourcing',
    description:
      'End-to-end logistics function management, letting you focus on your core business while we handle the complexity.',
    color: 'from-indigo-500 to-indigo-700',
  },
  {
    id: 3,
    category: 'Freight & Transport',
    icon: Settings,
    title: 'Fleet Management',
    description:
      'Comprehensive fleet lifecycle management, maintenance scheduling, and performance monitoring for optimal uptime.',
    color: 'from-slate-600 to-slate-800',
  },
  {
    id: 4,
    category: 'Operations',
    icon: Warehouse,
    title: 'Warehouse Design',
    description:
      'Strategic warehouse layout design, slotting optimisation, and workflow engineering for maximum throughput.',
    color: 'from-cyan-500 to-cyan-700',
  },
  {
    id: 5,
    category: 'Consulting',
    icon: Network,
    title: 'Supply Chain Strategy',
    description:
      'Holistic supply chain design and network optimisation for sustainable competitive advantage across your markets.',
    color: 'from-violet-500 to-violet-700',
  },
  {
    id: 6,
    category: 'Consulting',
    icon: ShoppingCart,
    title: 'Procurement & Sourcing',
    description:
      'Strategic procurement frameworks, vendor selection criteria, and cost reduction programs for measurable savings.',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    id: 7,
    category: 'Freight & Transport',
    icon: Route,
    title: 'Transport Operations',
    description:
      'Day-to-day transport coordination, load planning, and carrier management for seamless freight movement.',
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 8,
    category: 'Operations',
    icon: Navigation,
    title: 'Routing & Scheduling',
    description:
      'Advanced route optimisation and dynamic scheduling for maximum delivery efficiency and fuel cost savings.',
    color: 'from-teal-500 to-teal-700',
  },
  {
    id: 9,
    category: 'Consulting',
    icon: GraduationCap,
    title: 'Training & Development',
    description:
      'Customised logistics training programs for teams at all levels — from operations staff to senior management.',
    color: 'from-amber-500 to-amber-700',
  },
  {
    id: 10,
    category: 'Operations',
    icon: Users,
    title: 'Driver Training',
    description:
      'Defensive driving, compliance, fatigue management, and professional conduct training for transport personnel.',
    color: 'from-orange-500 to-orange-700',
  },
  {
    id: 11,
    category: 'Operations',
    icon: BookOpen,
    title: 'Warehouse Training',
    description:
      'Hands-on training for warehouse supervisors, pickers, and stock controllers to improve efficiency and accuracy.',
    color: 'from-lime-600 to-lime-800',
  },
  {
    id: 12,
    category: 'Consulting',
    icon: Headphones,
    title: 'Customer Service',
    description:
      'Logistics customer experience design and service level improvement programs that drive retention and loyalty.',
    color: 'from-pink-500 to-pink-700',
  },
  {
    id: 13,
    category: 'Freight & Transport',
    icon: DollarSign,
    title: 'Rate Negotiation',
    description:
      'Expert carrier rate negotiation leveraging our network relationships for best-in-market freight pricing.',
    color: 'from-green-600 to-green-800',
  },
  {
    id: 14,
    category: 'Operations',
    icon: FileText,
    title: 'Documentation & Compliance',
    description:
      'Import/export documentation, customs compliance, and regulatory adherence for seamless cross-border trade.',
    color: 'from-gray-600 to-gray-800',
  },
  {
    id: 15,
    category: 'Consulting',
    icon: Shield,
    title: 'Risk Management',
    description:
      'Supply chain risk identification, mitigation strategies, and business continuity planning for operational resilience.',
    color: 'from-red-600 to-red-800',
  },
  {
    id: 16,
    category: 'Technology',
    icon: Monitor,
    title: 'Technology Solutions',
    description:
      'Digital logistics tools, TMS implementation, load board software, and technology roadmap development.',
    color: 'from-sky-500 to-sky-700',
  },
  {
    id: 17,
    category: 'Freight & Transport',
    icon: Heart,
    title: 'Humanitarian Logistics',
    description:
      'Specialised logistics support for NGOs, UN agencies, and emergency response operations with precision and care.',
    color: 'from-rose-500 to-rose-700',
  },
  {
    id: 18,
    category: 'Consulting',
    icon: Leaf,
    title: 'Sustainability Consulting',
    description:
      'Green logistics strategies, carbon footprint reduction, and ESG compliance frameworks for responsible operations.',
    color: 'from-green-500 to-green-700',
  },
]

type Service = (typeof services)[number]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      className={`group relative bg-white rounded-2xl p-6 border border-surface-dark hover:border-royal/30 hover:shadow-xl hover:shadow-navy/10 transition-all duration-300 hover:-translate-y-1 shimmer-card ${
        service.featured ? 'ring-2 ring-royal/30' : ''
      }`}
    >
      {service.featured && (
        <div className="absolute -top-3 left-6">
          <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Core Service
          </span>
        </div>
      )}

      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <service.icon size={20} className="text-white" />
      </div>

      <h3 className="text-navy font-bold text-base mb-2 group-hover:text-royal transition-colors">
        {service.title}
      </h3>

      <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
        {service.description}
      </p>

      <div className="flex items-center gap-1 text-royal text-sm font-semibold group-hover:gap-2 transition-all">
        <span>Learn More</span>
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </div>

      {/* Bottom accent line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
    </motion.div>
  )
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered =
    activeCategory === 'All' ? services : services.filter((s) => s.category === activeCategory)

  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-widest">
              OUR SERVICES
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-base">
            From freight movement to strategic supply chain transformation — we provide an
            end-to-end suite of logistics consulting services tailored for African and global
            operations.
          </p>
        </div>

        {/* Logistics showcase strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {[
            { src: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80', label: 'Fleet Operations' },
            { src: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&q=80', label: 'Warehouse Solutions' },
            { src: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=600&q=80', label: 'Sea Freight' },
            { src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80', label: 'Supply Chain' },
          ].map((item) => (
            <div key={item.label} className="relative h-44 rounded-2xl overflow-hidden group">
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-white text-xs font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-navy text-white shadow-lg shadow-navy/30'
                  : 'bg-white text-muted hover:bg-surface-dark border border-surface-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-muted mb-6">Ready to transform your logistics operations?</p>
          <a href="/#contact" className="btn-primary">
            Request a Free Consultation
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

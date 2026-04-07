import { motion } from 'framer-motion'
import { BriefcaseBusiness, Building2, Calculator, ClipboardList, Landmark, ReceiptText } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const services = [
  {
    title: 'Personal Tax Returns',
    description: 'Accurate and timely personal tax filing tailored to your income sources and deductions.',
    icon: ReceiptText,
  },
  {
    title: 'Corporate Tax Returns',
    description: 'Corporate tax preparation designed to help your business stay compliant and organized.',
    icon: Building2,
  },
  {
    title: 'Business Incorporation',
    description: 'Set up your company with the right structure and guidance from day one.',
    icon: Landmark,
  },
  {
    title: 'Accounting & Bookkeeping',
    description: 'Reliable bookkeeping systems that keep your reports clean, current, and decision-ready.',
    icon: Calculator,
  },
  {
    title: 'Payroll Services',
    description: 'End-to-end payroll support so your team gets paid accurately and on time.',
    icon: ClipboardList,
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-width">
        <SectionHeader
          title="Core Services for Small Businesses"
          subtitle="Everything you need to manage taxes, reporting, compliance, and core accounting operations under one roof."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-dark to-brand-light text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

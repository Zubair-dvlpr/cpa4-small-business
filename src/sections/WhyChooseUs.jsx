import { motion } from 'framer-motion'
import { BadgeCheck, CircleDollarSign, FolderKanban, ShieldCheck } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const features = [
  {
    title: 'CRA Compliance',
    description: 'Stay aligned with deadlines, filings, and reporting requirements with expert oversight.',
    icon: ShieldCheck,
  },
  {
    title: 'Predictable Pricing',
    description: 'Straightforward plans and fixed quotes help you budget with confidence.',
    icon: CircleDollarSign,
  },
  {
    title: 'Financial Clarity',
    description: 'Understand your numbers with organized records and better reporting visibility.',
    icon: FolderKanban,
  },
  {
    title: 'Trusted Support',
    description: 'Dependable communication and professional guidance when your business needs it most.',
    icon: BadgeCheck,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <SectionHeader
          title="Why Choose Us"
          subtitle="Built for small businesses that want expert accounting help without unnecessary complexity."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-brand-dark">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

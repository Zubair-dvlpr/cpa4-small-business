import { motion } from 'framer-motion'
import { MessageSquareText, PhoneCall, WalletCards } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const steps = [
  {
    title: 'Get in touch',
    description: 'Tell us about your business, goals, and the support you need.',
    icon: PhoneCall,
  },
  {
    title: 'Chat to our expert',
    description: 'We review your situation and recommend the right accounting path.',
    icon: MessageSquareText,
  },
  {
    title: 'Get a fixed quote',
    description: 'Receive a clear quote with predictable pricing and next steps.',
    icon: WalletCards,
  },
]

export default function Process() {
  return (
    <section id="process" className="section-padding bg-slate-50">
      <div className="container-width">
        <SectionHeader
          title="Join us in three easy steps"
          subtitle="A simple process designed to get you the right support quickly, clearly, and professionally."
        />

        <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
          <div className="absolute left-0 top-16 hidden h-0.5 w-full bg-gradient-to-r from-brand-dark via-brand-light to-brand-dark lg:block" />
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative glass-card p-8"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-dark to-brand-light text-white shadow-soft">
                    <Icon size={24} />
                  </div>
                  <span className="text-5xl font-bold text-slate-200">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const plans = [
  {
    name: 'Basic Plan',
    price: '$1,249.99',
    features: ['Annual tax filing support', 'Basic bookkeeping guidance', 'Email support', 'Year-end review'],
  },
  {
    name: 'Standard Plan',
    price: '$3,249.99',
    features: ['Corporate tax returns', 'Monthly bookkeeping support', 'Payroll setup guidance', 'Priority email support'],
  },
  {
    name: 'Premium Plan',
    price: '$3,949.99',
    popular: true,
    features: ['Everything in Standard', 'Payroll management support', 'Quarterly advisory sessions', 'CRA correspondence assistance'],
  },
  {
    name: 'Platinum Plan',
    price: '$5,374.99',
    features: ['Everything in Premium', 'Advanced financial reporting', 'Dedicated account support', 'Strategic planning guidance'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-width">
        <SectionHeader
          title="Simple Plans With Predictable Pricing"
          subtitle="Choose the level of support that fits your business today, with professional service designed to grow alongside you."
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl border p-8 shadow-soft ${plan.popular ? 'border-brand-dark bg-gradient-to-b from-brand-dark to-brand-light text-white' : 'border-slate-200 bg-white'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  Most Popular
                </div>
              )}
              <h3 className={`text-xl font-semibold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
              <div className="mt-5 flex items-end gap-1">
                <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-slate-950'}`}>{plan.price}</span>
                <span className={`${plan.popular ? 'text-white/80' : 'text-slate-500'}`}>/year</span>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6">
                    <span className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ${plan.popular ? 'bg-white/20' : 'bg-sky-100'}`}>
                      <Check size={14} className={plan.popular ? 'text-white' : 'text-brand-dark'} />
                    </span>
                    <span className={plan.popular ? 'text-white/90' : 'text-slate-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${plan.popular ? 'bg-white text-brand-dark hover:bg-slate-100' : 'bg-brand-dark text-white hover:bg-brand-light'}`}>
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

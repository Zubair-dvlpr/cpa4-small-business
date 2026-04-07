import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container-width">
        <SectionHeader
          title="Let’s Talk About Your Business"
          subtitle="Reach out today to discuss tax, bookkeeping, payroll, or accounting support."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-semibold text-slate-900">Contact Information</h3>
            <div className="mt-8 space-y-5">
              {[
                { icon: MapPin, label: 'Address', value: '55 Ontario Street, S, Milton, ON' },
                { icon: Phone, label: 'Phone', value: '+1 (905) 555-0147' },
                { icon: Mail, label: 'Email', value: 'hello@cpa4smallbusiness.ca' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-brand-dark">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                <input type="text" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-light" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-light" placeholder="Your email" />
              </div>
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-700">Subject</label>
              <input type="text" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-light" placeholder="How can we help?" />
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
              <textarea rows="6" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-light" placeholder="Tell us a little about your business and needs" />
            </div>
            <button type="submit" className="primary-btn mt-6 w-full">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

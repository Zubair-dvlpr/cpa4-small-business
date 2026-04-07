import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-width">
        <SectionHeader
          title="Your Local Accounting and Tax Experts"
          subtitle="CPA4Small Business is committed to helping entrepreneurs and small business owners navigate accounting, tax compliance, and financial reporting with confidence. We focus on practical advice, dependable communication, and clear pricing so you can spend less time on paperwork and more time building your business."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-14 grid gap-8 lg:grid-cols-2"
        >
          <div className="glass-card p-8">
            <p className="text-base leading-8 text-slate-600">
              From tax returns and incorporation to payroll and monthly bookkeeping, our team provides accessible accounting solutions built for Canadian small businesses. We understand the pressures that owners face and deliver the financial structure needed to stay compliant and make better decisions.
            </p>
          </div>
          <div className="glass-card p-8">
            <p className="text-base leading-8 text-slate-600">
              Whether you are launching a new company or improving your current financial systems, CPA4Small Business brings a professional, responsive, and supportive approach that helps you move forward with clarity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

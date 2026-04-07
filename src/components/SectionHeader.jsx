import { motion } from 'framer-motion'

export default function SectionHeader({ title, subtitle, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className={`section-subtitle ${align === 'center' ? '' : 'mx-0'}`}>{subtitle}</p> : null}
    </motion.div>
  )
}

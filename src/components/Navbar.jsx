import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="container-width flex h-20 items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight text-brand-dark">
          CPA4<span className="text-brand-light">Small Business</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-dark">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="primary-btn">
            Book Free Consultation
          </a>
        </nav>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-width flex flex-col gap-4 py-4">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-700" onClick={() => setOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#contact" className="primary-btn" onClick={() => setOpen(false)}>
              Book Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

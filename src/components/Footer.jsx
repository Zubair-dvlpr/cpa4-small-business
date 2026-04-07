export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-width grid gap-10 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-brand-dark">CPA4Small Business</h3>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
            Affordable, reliable and professional tax and accounting support for Canadian small businesses.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Navigation</h4>
          <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</h4>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p>55 Ontario Street, S, Milton, ON</p>
            <p>+1 (905) 555-0147</p>
            <p>hello@cpa4smallbusiness.ca</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © 2026 CPA4Small Business. All rights reserved.
      </div>
    </footer>
  )
}

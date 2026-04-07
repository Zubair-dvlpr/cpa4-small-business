import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Points, PointMaterial } from '@react-three/drei'
import { useMemo, useRef } from 'react'

function ParticleField() {
  const ref = useRef()
  const sphere = useMemo(() => {
    const positions = new Float32Array(1500)
    for (let i = 0; i < 1500; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8
      positions[i + 1] = (Math.random() - 0.5) * 5
      positions[i + 2] = (Math.random() - 0.5) * 4
    }
    return positions
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.08
    }
  })

  return (
    <group ref={ref}>
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.8}>
        <Points positions={sphere} stride={3} frustumCulled={false}>
          <PointMaterial transparent color="#02a0df" size={0.045} sizeAttenuation depthWrite={false} />
        </Points>
      </Float>
    </group>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-50 pt-32">
      <div className="absolute inset-0 bg-grid bg-[size:34px_34px] opacity-40" />
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 3.5], fov: 60 }}>
          <ambientLight intensity={1.2} />
          <ParticleField />
        </Canvas>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center rounded-full border border-brand-light/20 bg-white/80 px-4 py-2 text-sm font-medium text-brand-dark shadow-soft">
              Trusted accounting support for Canadian small businesses
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Your Affordable, Reliable and Professional Tax and Accounting Advisor
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              We help entrepreneurs, startups, and growing small businesses stay compliant, organized, and confident with tailored tax, bookkeeping, payroll, and advisory support.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="primary-btn gap-2">
                Book Free Consultation <ArrowRight size={18} />
              </a>
              <a href="#pricing" className="secondary-btn">
                View Plans
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {['CRA-ready support', 'Fixed yearly pricing', 'Local expert guidance'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 size={18} className="text-brand-light" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="glass-card relative mx-auto w-full max-w-xl overflow-hidden p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/5 to-brand-light/10" />
            <div className="relative">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['Personalized advice', 'Practical accounting support designed around your business stage and goals.'],
                  ['Reliable tax planning', 'Reduce surprises and stay on top of important filing deadlines.'],
                  ['Scalable bookkeeping', 'Get organized systems that support your next phase of growth.'],
                  ['Professional partner', 'Work with a team that values clarity, trust, and fast communication.'],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/70 bg-white/90 p-5 shadow-sm">
                    <h3 className="font-semibold text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

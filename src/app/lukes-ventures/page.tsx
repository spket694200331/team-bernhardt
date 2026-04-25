import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata = {
  title: "Luke's Ventures — Team Bernhard",
  description: 'Real estate, the open water, and the slopes — the world Luke is building.',
}

export default function LukesVenturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1600&q=80"
          alt="Yacht on open water"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-navy-deep/70 to-black/85" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-luke-gold text-xs font-bold tracking-[0.35em] uppercase mb-6">
            Team Bernhard
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-xl">
            Luke&apos;s{' '}
            <span className="relative inline-block">
              Ventures
              <span className="absolute left-0 right-0 -bottom-2 h-[3px] bg-luke-gold"></span>
            </span>
          </h1>
          <p className="text-white/85 text-xl max-w-xl mx-auto leading-relaxed">
            Real estate. The slopes. The open water.
          </p>
        </div>
      </section>

      {/* Luxury Real Estate */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <p className="text-luke-gold text-xs font-bold tracking-[0.35em] uppercase mb-4">
              Real Estate
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
              Building Portfolios
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              From single-family homes to multi-unit holdings, Luke approaches real estate the way
              he approaches everything: long-term thinking, careful underwriting, and a respect for
              the people on both sides of the table. Every property is a thesis. Every deal is a
              relationship.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { label: 'Markets', value: '4' },
                { label: 'Properties', value: '12+' },
                { label: 'Years', value: '10' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-cream-soft rounded-xl px-4 py-5 border border-cream-gray text-center"
                >
                  <p className="text-3xl font-black text-navy-deep">{stat.value}</p>
                  <p className="text-xs text-gray-500 tracking-wide uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.1}>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80"
                alt="Luxury home"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sunseeker Yacht */}
      <section className="relative py-32 px-6">
        <Image
          src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1600&q=80"
          alt="Sunseeker yacht"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/75" />
        <AnimatedSection className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <p className="text-luke-gold text-xs font-bold tracking-[0.35em] uppercase mb-6">
            On The Water
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The Sunseeker
            <br />
            <span className="text-luke-gold">Predator</span>
          </h2>
          <p className="text-white/75 text-xl max-w-2xl mx-auto leading-relaxed">
            Built for those who refuse to stay still. Every horizon is an invitation. The Sunseeker
            isn&apos;t just a yacht — it&apos;s a statement about how we choose to live.
          </p>
          <div className="flex justify-center gap-10 mt-12">
            {[
              { label: 'Cruising', value: '36 kn' },
              { label: 'Range', value: '350 nm' },
              { label: 'Berths', value: '6' },
            ].map((spec) => (
              <div key={spec.label} className="text-center">
                <p className="text-3xl font-black text-luke-gold">{spec.value}</p>
                <p className="text-white/60 text-xs mt-1 tracking-[0.3em] uppercase">
                  {spec.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Skiing */}
      <section className="bg-cream-soft py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left" delay={0.1}>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&q=80"
                alt="Skiing in the mountains"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <p className="text-luke-gold text-xs font-bold tracking-[0.35em] uppercase mb-4">
              On The Slopes
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
              Mountain Air, Clear Mind
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Carving fresh lines, chasing first chair, and the rare clarity that comes after a
              full day on the mountain. Skiing is the off-season strategy meeting — equal parts
              recovery, adventure, and reset for whatever the next quarter brings.
            </p>
            <div className="flex items-center gap-3 text-luke-gold font-semibold text-sm">
              <span className="w-8 h-[2px] bg-luke-gold" />
              Altitude. Adrenaline. Reset.
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <span className="text-[40vw] font-black text-luke-gold select-none">L</span>
        </div>
        <AnimatedSection className="relative z-10 max-w-2xl mx-auto text-center text-white">
          <p className="text-luke-gold text-xs font-bold tracking-[0.35em] uppercase mb-6">
            Ventures
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Interested in connecting?</h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Real estate, partnerships, or just a good conversation about the next horizon — the
            door&apos;s open.
          </p>
          <a
            href="mailto:luke@pacer1.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-luke-gold hover:bg-luke-gold/90
                       text-navy-deep font-bold rounded-full transition-all duration-300
                       hover:shadow-lg hover:shadow-luke-gold/30 text-sm tracking-wide"
          >
            Get In Touch <ArrowRight size={16} />
          </a>
        </AnimatedSection>
      </section>

      {/* Back to Hub */}
      <section className="bg-white py-20 px-6 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-navy-mid
                     text-navy-mid font-semibold rounded-full hover:bg-navy-mid hover:text-white
                     transition-all duration-300 text-sm tracking-wide"
        >
          <ArrowLeft size={16} /> Back to The Hub
        </Link>
      </section>
    </>
  )
}

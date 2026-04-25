import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata = {
  title: "Lex's Arena — Team Bernhard",
  description: "Soccer, karate, and Philadelphia Eagles — Lex's world in motion.",
}

export default function LexsArenaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&q=80"
          alt="Soccer field"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-eagles-green/80 to-black/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-eagles-silver text-xs font-bold tracking-[0.35em] uppercase mb-6">
            Team Bernhard
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-xl">
            Lex&apos;s Arena
          </h1>
          <p className="text-white/80 text-xl max-w-xl mx-auto leading-relaxed">
            Where the field, the dojo, and the end zone collide.
          </p>
        </div>
      </section>

      {/* Soccer */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <p className="text-eagles-green text-xs font-bold tracking-[0.35em] uppercase mb-4">
              Sport 1
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">On The Pitch</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              From early morning drills to match-day adrenaline, Lex brings intensity and heart to
              every game. Soccer isn&apos;t just a sport — it&apos;s a way of life, built on
              teamwork, grit, and the pursuit of the next goal.
            </p>
            <div className="flex items-center gap-3 text-eagles-green font-semibold text-sm">
              <span className="w-8 h-[2px] bg-eagles-green" />
              Passion. Precision. Persistence.
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.1}>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80"
                alt="Soccer"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-eagles-green/10" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Karate */}
      <section className="bg-cream-soft py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left" delay={0.1}>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80"
                alt="Karate"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <p className="text-eagles-green text-xs font-bold tracking-[0.35em] uppercase mb-4">
              Sport 2
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">The Dojo</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Discipline, focus, and respect. The dojo teaches more than technique — it builds
              character. Lex trains with the same relentless spirit that drives everything on and
              off the field, earning every belt with dedication.
            </p>
            <div className="flex items-center gap-3 text-eagles-green font-semibold text-sm">
              <span className="w-8 h-[2px] bg-eagles-green" />
              Discipline. Focus. Respect.
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Eagles Nation */}
      <section className="bg-eagles-green py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <span className="text-[40vw] font-black text-white select-none">E</span>
        </div>
        <AnimatedSection className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <p className="text-eagles-silver text-xs font-bold tracking-[0.35em] uppercase mb-6">
            Eagles Nation
          </p>
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none">
            FLY
            <br />
            EAGLES
            <br />
            FLY
          </h2>
          <p className="text-white/75 text-xl max-w-lg mx-auto">
            Lex bleeds midnight green. Game day is sacred. The Eagles aren&apos;t just a team —
            they&apos;re family.
          </p>
          <div className="flex justify-center gap-6 mt-10">
            <div className="text-center">
              <p className="text-4xl font-black">🦅</p>
              <p className="text-white/60 text-xs mt-1 tracking-wide">SUPERFAN</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black">⚽</p>
              <p className="text-white/60 text-xs mt-1 tracking-wide">SOCCER</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black">🥋</p>
              <p className="text-white/60 text-xs mt-1 tracking-wide">KARATE</p>
            </div>
          </div>
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

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Lightbox from '@/components/ui/Lightbox'

const galleryPhotos = [
  { src: '/images/family-2.jpg', alt: 'Elizabeth at Liberty' },
  {
    src: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=1200&q=80',
    alt: 'Track stadium',
  },
  {
    src: 'https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=1200&q=80',
    alt: 'University library',
  },
  { src: '/images/family-wide.jpg', alt: 'Family support' },
]

export default function ElizabethsJourneyPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1600&q=80"
          alt="Track stadium"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-liberty-red/85 via-liberty-navy/55 to-black/70" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-white/70 text-xs font-bold tracking-[0.35em] uppercase mb-6">
            Team Bernhardt
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-xl">
            Elizabeth&apos;s Journey
          </h1>
          <p className="text-white/85 text-xl max-w-xl mx-auto leading-relaxed">
            Faith, focus, and finishing strong — every step a story.
          </p>
        </div>
      </section>

      {/* Liberty University */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <p className="text-liberty-red text-xs font-bold tracking-[0.35em] uppercase mb-4">
              Champions for Christ
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-liberty-navy mb-6">
              Liberty University
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              From the rolling Blue Ridge to a campus built on conviction — Liberty is more than a
              school for Elizabeth. It&apos;s the proving ground where intellect, faith, and
              athletic ambition come together. Red and navy. Flames pride. Every day on purpose.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <div className="w-14 h-14 rounded-full bg-liberty-red flex items-center justify-center text-white font-black text-xl">
                LU
              </div>
              <div>
                <p className="text-sm font-bold text-liberty-navy">Class of 2026</p>
                <p className="text-xs text-gray-500 tracking-wide uppercase">Lynchburg, VA</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.1}>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80"
                alt="University campus"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-liberty-navy/40 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Track & Field */}
      <section className="bg-cream-soft py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left" delay={0.1}>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1486218119243-13883505764c?w=1200&q=80"
                alt="Track and field action"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <p className="text-liberty-red text-xs font-bold tracking-[0.35em] uppercase mb-4">
              On The Track
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-liberty-navy mb-6">
              Strides &amp; Records
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every stride is the result of countless mornings, missed weekends, and unwavering
              belief. Elizabeth&apos;s training is part science, part scripture — measured in
              splits, sustained by faith, and celebrated with the team that runs alongside her.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { label: 'PRs', value: '8' },
                { label: 'Meets', value: '24' },
                { label: 'Medals', value: '12' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl px-4 py-5 border border-cream-gray text-center"
                >
                  <p className="text-3xl font-black text-liberty-red">{stat.value}</p>
                  <p className="text-xs text-gray-500 tracking-wide uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="bg-liberty-navy py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <span className="text-[40vw] font-black text-white select-none">LU</span>
        </div>
        <AnimatedSection className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <p className="text-liberty-red text-xs font-bold tracking-[0.35em] uppercase mb-8">
            Words To Run By
          </p>
          <blockquote className="text-3xl md:text-5xl font-bold italic leading-tight">
            &ldquo;She runs with purpose, studies with passion, and lives with faith.&rdquo;
          </blockquote>
          <p className="text-white/60 mt-8 text-sm tracking-[0.3em] uppercase">— Team Bernhardt</p>
        </AnimatedSection>
      </section>

      {/* Photo Gallery */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-liberty-red text-xs font-bold tracking-[0.35em] uppercase mb-4">
              Gallery
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-liberty-navy">Snapshots</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPhotos.map((photo, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="relative h-56 w-full rounded-xl overflow-hidden shadow-sm
                             hover:shadow-lg transition-all duration-300 hover:scale-[1.02] block"
                >
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Hub */}
      <section className="bg-cream-soft py-20 px-6 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-liberty-navy
                     text-liberty-navy font-semibold rounded-full hover:bg-liberty-navy hover:text-white
                     transition-all duration-300 text-sm tracking-wide"
        >
          <ArrowLeft size={16} /> Back to The Hub
        </Link>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryPhotos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((i) => (i! > 0 ? i! - 1 : galleryPhotos.length - 1))
          }
          onNext={() =>
            setLightboxIndex((i) => (i! < galleryPhotos.length - 1 ? i! + 1 : 0))
          }
        />
      )}
    </>
  )
}

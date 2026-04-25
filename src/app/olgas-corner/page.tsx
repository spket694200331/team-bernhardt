import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Fish, Bird } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata = {
  title: "Olga's Corner — Team Bernhard",
  description: "Books, fish, birds — the quiet rhythms of Olga's world.",
}

export default function OlgasCornerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1513001900722-370f803f498d?w=1600&q=80"
          alt="Cozy reading nook"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-olga-wood/70 via-black/40 to-olga-teal/55" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-white/70 text-xs font-bold tracking-[0.35em] uppercase mb-6">
            Team Bernhard
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-xl">
            Olga&apos;s Corner
          </h1>
          <p className="text-white/85 text-xl max-w-xl mx-auto leading-relaxed">
            Where stillness becomes a superpower.
          </p>
        </div>
      </section>

      {/* Book Nook */}
      <section className="bg-[#FAF6EE] py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="inline-flex items-center gap-2 mb-4">
              <BookOpen size={18} className="text-olga-wood" />
              <p className="text-olga-wood text-xs font-bold tracking-[0.35em] uppercase">
                The Book Nook
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
              Lost in the Pages
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Stacks by the window, dog-eared favorites on the shelf, and the kind of focus most
              people reserve for emergencies. Olga&apos;s corner runs on tea, lamplight, and the
              steady company of a good book — fiction, history, philosophy, anything with weight to
              it.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Literary Fiction', 'History', 'Philosophy', 'Poetry'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-olga-wood/10 text-olga-wood text-xs font-semibold tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.1}>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=1200&q=80"
                alt="Stacks of books"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Fish Tanks */}
      <section className="bg-[#EAF6F6] py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left" delay={0.1}>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(45,149,150,0.4)]">
              <Image
                src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=1200&q=80"
                alt="Aquarium with tropical fish"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="inline-flex items-center gap-2 mb-4">
              <Fish size={18} className="text-olga-teal" />
              <p className="text-olga-teal text-xs font-bold tracking-[0.35em] uppercase">
                The Aquarium
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">A Living Painting</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Tropical fish drift between coral and driftwood, lit like a slow-motion film. The
              tanks are equal parts ecosystem and meditation — water chemistry checked, plants
              tended, and a glow that softens every room they sit in.
            </p>
            <div className="flex items-center gap-3 text-olga-teal font-semibold text-sm">
              <span className="w-8 h-[2px] bg-olga-teal" />
              Quiet. Color. Calm.
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Bird Watching */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="inline-flex items-center gap-2 mb-4">
              <Bird size={18} className="text-olga-wood" />
              <p className="text-olga-wood text-xs font-bold tracking-[0.35em] uppercase">
                In The Wild
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
              Patient Watching
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Binoculars, a worn field guide, and the patience to wait for the cardinal to land
              exactly where the light hits. Birdwatching is Olga&apos;s favorite kind of attention
              — undemanding, alert, and rewarded only when you stop trying.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Cardinals', 'Hawks', 'Goldfinches', 'Owls'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-olga-teal/10 text-olga-teal text-xs font-semibold tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.1}>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=1200&q=80"
                alt="Cardinal in a tree"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quote Block */}
      <section className="bg-olga-wood py-24 px-6 relative overflow-hidden">
        <AnimatedSection className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <p className="text-white/60 text-xs font-bold tracking-[0.35em] uppercase mb-8">
            Olga&apos;s Way
          </p>
          <blockquote className="text-3xl md:text-5xl font-bold italic leading-tight">
            &ldquo;In the quiet, you hear what matters most.&rdquo;
          </blockquote>
        </AnimatedSection>
      </section>

      {/* Back to Hub */}
      <section className="bg-cream-soft py-20 px-6 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-olga-wood
                     text-olga-wood font-semibold rounded-full hover:bg-olga-wood hover:text-white
                     transition-all duration-300 text-sm tracking-wide"
        >
          <ArrowLeft size={16} /> Back to The Hub
        </Link>
      </section>
    </>
  )
}

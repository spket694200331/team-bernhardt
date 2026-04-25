import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/bernhardt-crest.png"
                alt="Bernhardt crest"
                width={48}
                height={60}
                className="h-12 w-auto"
              />
              <h3 className="text-2xl font-bold tracking-[0.15em]">BERNHARDT</h3>
            </div>
            <p className="text-luke-gold/80 text-xs font-semibold tracking-[0.35em] uppercase">
              Семья · Вера · Успех
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Family. Sports. Lifestyle. Ventures.
              <br />
              This is where our story lives.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:hello@teambernhard.com"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Mail size={14} />
                hello@teambernhard.com
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Phone size={14} />
                +1 (555) 123-4567
              </a>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center
                             hover:border-white/60 hover:bg-white/10 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold tracking-wide text-white/80 text-sm uppercase">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: 'The Hub', href: '/' },
                { label: "Lex's Arena", href: '/lexs-arena' },
                { label: "Elizabeth's Journey", href: '/elizabeths-journey' },
                { label: "Olga's Corner", href: '/olgas-corner' },
                { label: "Luke's Ventures", href: '/lukes-ventures' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Column */}
          <div className="space-y-4">
            <h4 className="font-semibold tracking-wide text-white/80 text-sm uppercase">
              Stay Connected
            </h4>
            <p className="text-white/60 text-sm">
              Get updates from Team Bernhard directly to your inbox.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20
                           text-white placeholder-white/40 text-sm
                           focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                className="w-full py-3 bg-navy-mid hover:bg-navy-light text-white font-semibold
                           rounded-lg text-sm tracking-wide transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs tracking-wide">
            © 2025 Team Bernhard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

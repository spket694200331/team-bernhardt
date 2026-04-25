'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { clsx } from 'clsx'

const navLinks = [
  { label: 'The Hub', href: '/' },
  { label: "Lex's Arena", href: '/lexs-arena' },
  { label: "Elizabeth's Journey", href: '/elizabeths-journey' },
  { label: "Olga's Corner", href: '/olgas-corner' },
  { label: "Luke's Ventures", href: '/lukes-ventures' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={clsx(
            'flex items-center gap-2.5 text-xl font-bold tracking-[0.15em] transition-colors duration-300',
            scrolled ? 'text-navy-deep' : 'text-white'
          )}
        >
          <Image
            alt="Bernhardt crest"
            width={36}
            height={44}
            className="h-9 w-auto" style={{mixBlendMode:"multiply"}}
            priority
          />
          <span>BERNHARDT</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'text-sm font-semibold tracking-wide transition-all duration-200 pb-1 border-b-2',
                pathname === link.href
                  ? 'border-navy-mid text-navy-mid'
                  : scrolled
                  ? 'border-transparent text-navy-deep hover:text-navy-mid hover:border-navy-mid'
                  : 'border-transparent text-white hover:text-white/80 hover:border-white/50'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle menu"
          className={clsx(
            'lg:hidden transition-colors duration-300',
            scrolled ? 'text-navy-deep' : 'text-white'
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  'px-6 py-3 text-sm font-semibold tracking-wide transition-colors',
                  pathname === link.href
                    ? 'text-navy-mid bg-cream-soft'
                    : 'text-navy-deep hover:bg-cream-soft hover:text-navy-mid'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

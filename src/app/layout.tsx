import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Team Bernhard — Family Hub',
  description:
    'The official hub for the Bernhard family. Sports, academics, lifestyle, and ventures — all in one place.',
  keywords: ['Bernhard family', 'family lifestyle', 'Team Bernhard'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

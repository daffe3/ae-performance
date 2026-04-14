// src/app/layout.tsx
// ─────────────────────────────────────────────────────────────
// Next.js App Router: layout.tsx är den delade layouten för
// ALLA sidor. Allt här renderas på servern → bra för SEO.
//
// metadata-objektet genererar <title> och <meta description>
// automatiskt i <head> — ingen klientsidekod behövs.
// ─────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'


export const metadata: Metadata = {
  title: {
    default: 'A&E Performance AB — Mark & Anläggning, Falun',
    // Undersidor kan sätta title: 'Tjänster' → blir "Tjänster | A&E Performance"
    template: '%s | A&E Performance AB',
  },
  description:
    'Markentrepenad, fastighetsskötsel och maskintjänster i Dalarna. ' +
    'Kontakta A&E Performance AB i Falun för offert.',
  openGraph: {
    siteName: 'A&E Performance AB',
    locale: 'sv_SE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

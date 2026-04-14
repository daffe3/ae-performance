'use client'
// Nav är en Client Component eftersom den har interaktiv state
// (mobilmeny öppen/stängd). Allt annat renderas på servern.

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'

const links = [
  { href: '/',         label: 'Hem' },
  { href: '/tjanster', label: 'Tjänster' },
  { href: '/om-oss',   label: 'Om oss' },
  { href: '/kontakt',  label: 'Kontakt' },
] as const

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <div className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="A&E Performance"
            width={140}
            height={34}
            priority
            className={styles.logoImg}
          />
        </Link>

        <nav className={styles.links}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/kontakt" className={styles.cta}>
          Begär offert
        </Link>

        <button
          className={styles.burger}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Stäng meny' : 'Öppna meny'}
        >
          <span className={open ? styles.lineTop : ''} />
          <span className={open ? styles.lineMid : ''} />
          <span className={open ? styles.lineBot : ''} />
        </button>
      </div>

      {open && (
        <div className={styles.mobile}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className={styles.mobileCta}
            onClick={() => setOpen(false)}
          >
            Begär offert
          </Link>
        </div>
      )}
    </header>
  )
}

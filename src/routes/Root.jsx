// Root.jsx

import { Outlet, Link, useRouter } from '@tanstack/react-router'
import { useState } from 'react'
import styles from './Root.module.css'

function Nav() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // Stäng mobilmenyn vid navigation
  const handleNav = () => setOpen(false)

  const links = [
    { to: '/',         label: 'Hem' },
    { to: '/tjanster', label: 'Tjänster' },
    { to: '/om-oss',   label: 'Om oss' },
    { to: '/kontakt',  label: 'Kontakt' },
  ]

  return (
    <header className={styles.header}>
      <div className={`container ${styles.nav}`}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img src="/logo.png" alt="A&E Performance logotyp" className={styles.logoImg} />
        </Link>

        {/* Desktop-länkar */}
        <nav className={styles.links}>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={styles.navLink}
              activeProps={{ className: `${styles.navLink} ${styles.active}` }}
              activeOptions={{ exact: to === '/' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link to="/kontakt" className={styles.cta}>
          Begär offert
        </Link>

        {/* Hamburger (mobil) */}
        <button
          className={styles.burger}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Stäng meny' : 'Öppna meny'}
        >
          <span className={open ? styles.burgerLineTop    : ''} />
          <span className={open ? styles.burgerLineMid    : ''} />
          <span className={open ? styles.burgerLineBottom : ''} />
        </button>
      </div>

      {/* Mobilmeny */}
      {open && (
        <div className={styles.mobileMenu}>
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className={styles.mobileLink} onClick={handleNav}>
              {label}
            </Link>
          ))}
          <Link to="/kontakt" className={styles.mobileCta} onClick={handleNav}>
            Begär offert
          </Link>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div>
          <img src="/logo.png" alt="A&E Performance" className={styles.footerLogo} />
          <p className={styles.footerTagline}>Mark & anläggning i Dalarna sedan 2017</p>
        </div>
        <div className={styles.footerLinks}>
          <Link to="/tjanster">Tjänster</Link>
          <Link to="/om-oss">Om oss</Link>
          <Link to="/kontakt">Kontakt</Link>
        </div>
        <div className={styles.footerContact}>
          <p>Stora Källviken 10</p>
          <p>791 93 Falun</p>
          <p>Org.nr 559117-0732</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} A&E Performance AB</p>
      </div>
    </footer>
  )
}

export default function Root() {
  return (
    <>
      <Nav />
      {/* Outlet = den matchade barn-routen renderas här */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

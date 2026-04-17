import { Link } from '@tanstack/react-router'
import styles from './Home.module.css'

const services = [
  {
    icon: '⛏',
    title: 'Mark & grundarbeten',
    desc: 'Schaktning, markentrepenad och anläggningsarbeten för privata och kommunala beställare i hela Dalarnaregionen.',
    to: '/tjanster',
  },
  {
    icon: '🏗',
    title: 'Maskintjänster',
    desc: 'Vi utför arbetet med moderna maskiner och erfarna operatörer. Du bokar tjänsten — vi löser jobbet.',
    to: '/tjanster',
  },
  {
    icon: '🏢',
    title: 'Fastighetsskötsel',
    desc: 'Allservice för fastigheter — löpande underhåll, skötsel och driftsupport året runt.',
    to: '/tjanster',
  },
  {
    icon: '🚛',
    title: 'Fordonsaffärer',
    desc: 'Köp och försäljning av personbilar, lastbilar och specialfordon.',
    to: '/tjanster',
  },
]

const trustItems = [
  'F-skattsedel & momsregistrerade',
  'Verksamma sedan 2017',
  'Lokal aktör i Dalarna',
  'Snabb återkoppling',
]

export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <img src="/hero.png" alt="Grävmaskin på ett markarbete" className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.heroPre}>Falun · Dalarna</p>
          <h1 className={styles.heroTitle}>
            Mark & anläggning<br />
            <em>du kan lita på</em>
          </h1>
          <p className={styles.heroSub}>
            Vi utför markarbeten, fastighetsskötsel och fordonsaffärer
            med hög kvalitet och snabb kommunikation.
          </p>
          <div className={styles.heroBtns}>
            <Link to="/kontakt" className={styles.btnPrimary}>Begär offert</Link>
            <Link to="/tjanster" className={styles.btnGhost}>Våra tjänster</Link>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────── */}
      <div className={styles.trustBar}>
        {trustItems.map(item => (
          <div key={item} className={styles.trustItem}>
            <span className={styles.trustCheck}>✓</span>
            {item}
          </div>
        ))}
      </div>

      {/* ── TJÄNSTER ──────────────────────────────────────────── */}
      <section className={styles.servicesSection}>
        <div className="container">
          <p className={styles.sectionLabel}>Vad vi gör</p>
          <h2 className={styles.sectionTitle}>Bred kompetens — ett bolag</h2>
          <div className={styles.grid}>
            {services.map(s => (
              <Link key={s.title} to={s.to} className={styles.card}>
                <span className={styles.cardIcon}>{s.icon}</span>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <span className={styles.cardArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── KONTAKT CTA ───────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Redo att sätta igång?</h2>
          <p className={styles.ctaSub}>
            Beskriv ditt projekt så återkommer vi med ett prisförslag.
          </p>
          <Link to="/kontakt" className={styles.btnPrimary}>
            Kontakta oss idag
          </Link>
        </div>
      </section>
    </>
  )
}

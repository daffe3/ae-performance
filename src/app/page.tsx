import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const services = [
  {
    title: 'Mark & grundarbeten',
    desc: 'Schaktning, markentrepenad och anläggningsarbeten för privata och kommunala beställare i Dalarna.',
    image: '/projekt-lugnet.jpg',
    alt: 'Stenläggning och markarbete vid nya badhuset på Lugnet i Falun',
  },
  {
    title: 'Maskintjänster',
    desc: 'Du bokar tjänsten — vi löser jobbet med moderna maskiner och erfarna operatörer.',
    image: '/projekt-hjullastare.jpg',
    alt: 'Hjullastare på markarbete i Dalarna',
  },
  {
    title: 'Fastighetsskötsel',
    desc: 'Allservice för fastigheter — löpande underhåll, skötsel och driftsupport året runt.',
    image: '/projekt-natt.jpg',
    alt: 'Maskinist vid grävmaskin på natten',
  },
  {
    title: 'Fordonsaffärer',
    desc: 'Köp och försäljning av personbilar, lastbilar och specialfordon.',
    image: '/projekt-bro.jpg',
    alt: 'Anläggningsarbete vid bro i Dalarna',
  },
]

const trustItems = [
  'F-skattsedel & momsregistrerade',
  'Verksamma sedan 2017',
  'Lokal aktör i Dalarna',
  'Snabb återkoppling',
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <Image
          src="/hero.jpg"
          alt="Grävmaskin på markarbete i Dalarna"
          fill
          priority
          className={styles.heroBg}
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.heroPre}>Falun · Dalarna</p>
          <h1 className={styles.heroTitle}>
            Mark & anläggning<br />
            <em>du kan lita på</em>
          </h1>
          <p className={styles.heroSub}>
            Vi utför markarbeten, fastighetsskötsel och maskintjänster
            med hög kvalitet och snabb kommunikation.
          </p>
          <div className={styles.heroBtns}>
            <Link href="/kontakt" className={styles.btnPrimary}>Begär offert</Link>
            <Link href="/tjanster" className={styles.btnGhost}>Våra tjänster</Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className={styles.trustBar}>
        {trustItems.map(item => (
          <div key={item} className={styles.trustItem}>
            <span className={styles.check}>&#10003;</span>
            {item}
          </div>
        ))}
      </div>

      {/* TJÄNSTER MED BILDBAKGRUND */}
      <section className={styles.servicesSection}>
        <div className="container">
          <p className={styles.sectionLabel}>Vad vi gör</p>
          <h2 className={styles.sectionTitle}>Våra tjänster</h2>
        </div>
        <div className={styles.serviceGrid}>
          {services.map(s => (
            <Link key={s.title} href="/tjanster" className={styles.serviceCard}>
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
                className={styles.serviceImg}
              />
              <div className={styles.serviceOverlay} />
              <div className={styles.serviceText}>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <span className={styles.serviceArrow}>&#8594;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Redo att sätta igång?</h2>
          <p className={styles.ctaSub}>
            Beskriv ditt projekt — vi återkommer med ett prisförslag.
          </p>
          <Link href="/kontakt" className={styles.btnPrimary}>
            Kontakta oss
          </Link>
        </div>
      </section>
    </>
  )
}

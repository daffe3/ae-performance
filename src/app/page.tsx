'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import OffertModal from '@/components/OffertModal'
import styles from './page.module.css'

const services = [
  {
    title: 'Mark & grundarbeten',
    desc: 'Schaktning, markentrepenad och anläggningsarbeten för privata och kommunala beställare.',
    image: '/projekt-lugnet.jpg',
    alt: 'Stenläggning vid nya badhuset på Lugnet i Falun',
    points: ['Schaktning & återfyllning', 'Dräneringsarbeten', 'Väg- & plattläggning', 'Stenläggning'],
  },
  {
    title: 'Maskintjänster',
    desc: 'Du bokar tjänsten — vi löser jobbet med moderna maskiner och erfarna operatörer.',
    image: '/projekt-hjullastare.jpg',
    alt: 'Hjullastare på markarbete',
    points: ['Grävmaskin med operatör', 'Hjullastare', 'Masstransport', 'Snöröjning'],
  },
  {
    title: 'Fastighetsskötsel',
    desc: 'Allservice för fastigheter — löpande underhåll, skötsel och driftsupport året runt.',
    image: '/projekt-natt.jpg',
    alt: 'Maskinist vid grävmaskin på natten',
    points: ['Löpande underhåll', 'Felavhjälpning', 'Grönytor', 'Säsongsservice'],
  },
  {
    title: 'Fordonsaffärer',
    desc: 'Köp och försäljning av personbilar, lastbilar och specialfordon.',
    image: '/projekt-bro.jpg',
    alt: 'Anläggningsarbete i Dalarna',
    points: ['Personbilar', 'Lastbilar', 'Specialfordon', 'Inbyten'],
  },
]

const trustItems = [
  { icon: '✓', text: 'F-skattsedel & momsregistrerade' },
  { icon: '✓', text: 'Verksamma sedan 2017' },
  { icon: '✓', text: 'Lokal aktör i Dalarna' },
  { icon: '✓', text: 'Snabb återkoppling' },
]

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <OffertModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Flytande offert-knapp */}
      <button className={styles.floatingBtn} onClick={() => setModalOpen(true)}>
        Begär offert
      </button>

      {/* HERO  */}
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
            Mark & anläggning
            <br />
            <em>du kan lita på</em>
          </h1>
          <p className={styles.heroSub}>
            Vi utför markarbeten, fastighetsskötsel och maskintjänster med hög
            kvalitet och snabb kommunikation.
          </p>
          <div className={styles.heroBtns}>
            <button
              className={styles.btnPrimary}
              onClick={() => setModalOpen(true)}
            >
              Begär offert
            </button>
            <Link href="/tjanster" className={styles.btnGhost}>
              Våra tjänster
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className={styles.trustBar}>
        {trustItems.map((item) => (
          <div key={item.text} className={styles.trustItem}>
            <span className={styles.check}>{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>

      {/* TJÄNSTER */}
      <section className={styles.servicesSection}>
        <div className="container">
          <p className={styles.sectionLabel}>Vad vi gör</p>
          <h2 className={styles.sectionTitle}>Våra tjänster</h2>
          <div className={styles.serviceGrid}>
            {services.map((s) => (
              <div key={s.title} className={styles.serviceCard}>
                <div className={styles.serviceImgWrap}>
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                    className={styles.serviceImg}
                  />
                  <div className={styles.serviceOverlay} />
                  <h3 className={styles.serviceImgTitle}>{s.title}</h3>
                </div>
                <div className={styles.serviceBody}>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <ul className={styles.servicePoints}>
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <button
                    className={styles.serviceBtn}
                    onClick={() => setModalOpen(true)}
                  >
                    Begär offert &#8594;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h2 className={styles.ctaTitle}>Redo att sätta igång?</h2>
            <p className={styles.ctaSub}>
              Beskriv ditt projekt — vi återkommer med ett prisförslag.
            </p>
          </div>
          <button
            className={styles.btnPrimary}
            onClick={() => setModalOpen(true)}
          >
            Kontakta oss
          </button>
        </div>
      </section>
    </>
  );
}

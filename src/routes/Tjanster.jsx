// Tjanster.jsx — Tjänster-sidan (route: "/tjanster")

import { Link } from '@tanstack/react-router'
import styles from './Tjanster.module.css'

const services = [
  {
    icon: '⛏',
    title: 'Mark & grundarbeten',
    desc: 'Vi utför schaktning, markentrepenad och anläggningsarbeten för privatpersoner, bostadsrättsföreningar och kommunala beställare i hela Dalarnaregionen.',
    points: [
      'Schaktning och återfyllning',
      'Markplanering och terrassering',
      'Dräneringsarbeten',
      'Väg- och plattläggning',
      'Rivning och röjning',
    ],
  },
  {
    icon: '🏗',
    title: 'Maskintjänster',
    desc: 'Du bokar tjänsten — vi löser jobbet. Moderna maskiner och erfarna operatörer som arbetar effektivt och säkert på din arbetsplats.',
    points: [
      'Grävmaskin med operatör',
      'Hjullastare och dumper',
      'Komprimering och packningsarbeten',
      'Transport av massor',
      'Snöröjning och halkbekämpning',
    ],
  },
  {
    icon: '🏢',
    title: 'Fastighetsskötsel',
    desc: 'Allservice för fastigheter. Vi tar ett helhetsansvar för ditt fastighetsbestånd så att du kan fokusera på annat.',
    points: [
      'Löpande fastighetsunderhåll',
      'Städning av gemensamma ytor',
      'Grönytor och trädgårdsskötsel',
      'Felavhjälpning och jour',
      'Säsongsanpassad service',
    ],
  },
  {
    icon: '🚛',
    title: 'Fordonsaffärer',
    desc: 'Köp och försäljning av personbilar, lastbilar och specialfordon. Kontakta oss för att ta del av aktuellt bestånd.',
    points: [
      'Personbilar',
      'Lätta och tunga lastbilar',
      'Specialfordon och maskiner',
      'Inbyten',
      'Rådgivning vid köp',
    ],
  },
]

export default function Tjanster() {
  return (
    <>
      {/* Sidhuvud */}
      <section className={styles.pageHeader}>
        <div className="container">
          <p className={styles.label}>Vad vi gör</p>
          <h1 className={styles.title}>Tjänster</h1>
          <p className={styles.sub}>
            Vi erbjuder ett brett utbud av tjänster inom mark, anläggning och fastighet.
            Kontakta oss så skräddarsyr vi en lösning för ditt projekt.
          </p>
        </div>
      </section>

      {/* Tjänstekort */}
      <section className={styles.list}>
        <div className="container">
          {services.map((s, i) => (
            <div key={s.title} className={`${styles.item} ${i % 2 === 1 ? styles.itemAlt : ''}`}>
              <div className={styles.itemText}>
                <span className={styles.itemIcon}>{s.icon}</span>
                <h2 className={styles.itemTitle}>{s.title}</h2>
                <p className={styles.itemDesc}>{s.desc}</p>
                <ul className={styles.points}>
                  {s.points.map(p => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <Link to="/kontakt" className={styles.btn}>
                  Begär offert →
                </Link>
              </div>
              <div className={styles.itemAccent}>
                <div className={styles.accentBox}>
                  <span>{s.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

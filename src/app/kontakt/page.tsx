import type { Metadata } from 'next'
import KontaktForm from './KontaktForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontakta A&E Performance AB i Falun för offert på markarbeten, maskintjänster eller fastighetsskötsel.',
}

const contactItems = [
  { icon: '📍', label: 'Adress', content: 'Stora Källviken 10, 791 93 Falun' },
  { icon: '📱', label: 'Instagram', content: '@aeperformance_ab', href: 'https://instagram.com/aeperformance_ab' },
  { icon: '🏢', label: 'Organisationsnummer', content: '559117-0732' },
  { icon: '✓', label: 'F-skattsedel', content: 'Ja — ROT-avdrag tillämpas' },
]

export default function KontaktPage() {
  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <p className={styles.label}>Ta kontakt</p>
          <h1 className={styles.title}>Kontakta oss</h1>
          <p className={styles.sub}>Beskriv ditt projekt — vi återkommer snabbt med ett förslag.</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={`container ${styles.grid}`}>
          <KontaktForm />

          <aside className={styles.info}>
            {contactItems.map(item => (
              <div key={item.label} className={styles.infoCard}>
                <div className={styles.infoIcon}>{item.icon}</div>
                <div>
                  <p className={styles.infoLabel}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} target="_blank" rel="noopener noreferrer">{item.content}</a>
                    : <p>{item.content}</p>
                  }
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  )
}

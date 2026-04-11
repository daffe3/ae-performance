// Kontakt.jsx — Kontaktsidan (route: "/kontakt")

import { useState } from 'react'
import styles from './Kontakt.module.css'

const INITIAL = { name: '', email: '', phone: '', message: '' }

export default function Kontakt() {
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

 async function handleSubmit(e) {
  e.preventDefault()

  const res = await fetch('https://formspree.io/f/mbdpvnen', { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })

  if (res.ok) {
    setSent(true)
    setForm(INITIAL)
  } else {
    alert('Något gick fel, försök igen.')
  }
}

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <p className={styles.label}>Ta kontakt</p>
          <h1 className={styles.title}>Kontakta oss</h1>
          <p className={styles.sub}>
            Beskriv ditt projekt kort — vi återkommer snabbt med ett förslag.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={`container ${styles.grid}`}>

          {/* Formulär */}
          <div>
            {sent ? (
              <div className={styles.thankYou}>
                <span className={styles.thankIcon}>✓</span>
                <h2>Tack för din förfrågan!</h2>
                <p>Vi återkommer så snart vi kan.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">Namn</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Förnamn Efternamn"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone">Telefon</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="070-000 00 00"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">E-post</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="din@email.se"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Beskriv ditt projekt</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Vad behöver du hjälp med? Var, ungefär hur stort, önskat startdatum…"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className={styles.submit}>
                  Skicka förfrågan
                </button>
              </form>
            )}
          </div>

          {/* Kontaktinfo */}
          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Adress</p>
              <p>Stora Källviken 10<br />791 93 Falun</p>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Instagram</p>
              <a
                href="https://instagram.com/aeperformance_ab"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoLink}
              >
                @aeperformance_ab
              </a>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Organisationsnummer</p>
              <p>559117-0732</p>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>F-skattsedel</p>
              <p>Ja — ROT-avdrag tillämpas vid kvalificerade arbeten</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

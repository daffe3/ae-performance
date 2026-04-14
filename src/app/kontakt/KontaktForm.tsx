'use client'
// KontaktForm är Client Component eftersom den hanterar
// formulärstate och skickar fetch-request till Formspree.
// Resten av kontaktsidan är Server Component.

import { useState } from 'react'
import styles from './KontaktForm.module.css'

type FormState = {
  name: string
  phone: string
  email: string
  message: string
}

const INITIAL: FormState = { name: '', phone: '', email: '', message: '' }

export default function KontaktForm() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    setError(false)

    try {
      // Byt ut URL:en mot din Formspree-endpoint
      // Skapa gratis konto på formspree.io → New Form → kopiera URL
      const res = await fetch('https://formspree.io/f/DIN_KOD_HÄR', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setSent(true)
        setForm(INITIAL)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className={styles.thankYou}>
        <span className={styles.thankIcon}>&#10003;</span>
        <h2>Tack för din förfrågan</h2>
        <p>Vi återkommer så snart vi kan.</p>
      </div>
    )
  }

  return (
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
          placeholder="Vad behöver du hjälp med? Var, ungefär hur stort, önskat startdatum..."
          value={form.message}
          onChange={handleChange}
        />
      </div>

      {error && (
        <p className={styles.error}>
          Något gick fel. Försök igen eller kontakta oss via Instagram.
        </p>
      )}

      <button type="submit" className={styles.submit} disabled={sending}>
        {sending ? 'Skickar...' : 'Skicka förfrågan'}
      </button>
    </form>
  )
}

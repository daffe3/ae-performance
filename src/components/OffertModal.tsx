'use client'

import { useState, useEffect } from 'react'
import styles from './OffertModal.module.css'

type Props = {
  open: boolean
  onClose: () => void
}

type Form = {
  name: string
  phone: string
  email: string
  message: string
}

const INITIAL: Form = { name: '', phone: '', email: '', message: '' }

export default function OffertModal({ open, onClose }: Props) {
  const [form, setForm] = useState<Form>(INITIAL)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch('hhttps://formspree.io/f/xyzabcde', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setSent(true); setForm(INITIAL) }
    } finally {
      setSending(false)
    }
  }

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Stäng">&#10005;</button>

        {sent ? (
          <div className={styles.thanks}>
            <div className={styles.thanksIcon}>&#10003;</div>
            <h2>Tack för din förfrågan!</h2>
            <p>Vi återkommer så snart vi kan.</p>
            <button className={styles.btnClose} onClick={onClose}>Stäng</button>
          </div>
        ) : (
          <>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Begär offert</h2>
              <p className={styles.modalSub}>Beskriv vad du behöver hjälp med så återkommer vi så snart som möjligt.</p>
            </div>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.hIcon}>&#10003;</span>
                Prisförslag inom 24 timmar
              </div>
              <div className={styles.highlight}>
                <span className={styles.hIcon}>&#10003;</span>
                Lokal aktör i Dalarna
              </div>
              <div className={styles.highlight}>
                <span className={styles.hIcon}>&#10003;</span>
                Snabb återkoppling
              </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="m-name">Namn</label>
                  <input id="m-name" name="name" type="text" required placeholder="Förnamn Efternamn" value={form.name} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="m-phone">Telefon</label>
                  <input id="m-phone" name="phone" type="tel" placeholder="070-000 00 00" value={form.phone} onChange={handleChange} />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="m-email">E-post</label>
                <input id="m-email" name="email" type="email" required placeholder="din@email.se" value={form.email} onChange={handleChange} />
              </div>
              <div className={styles.field}>
                <label htmlFor="m-message">Beskriv arbetet</label>
                <textarea id="m-message" name="message" required rows={4} placeholder="Vad behöver du hjälp med? Var, ungefär hur stort, önskat startdatum..." value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className={styles.submit} disabled={sending}>
                {sending ? 'Skickar...' : 'Skicka förfrågan'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

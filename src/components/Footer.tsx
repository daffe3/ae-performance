// Server Component — ingen 'use client' behövs
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <Image
            src="/logo.png"
            alt="A&E Performance"
            width={120}
            height={28}
            className={styles.logo}
          />
          <p className={styles.tagline}>Mark & anläggning i Dalarna sedan 2017</p>
        </div>

        <nav className={styles.links}>
          <Link href="/tjanster">Tjänster</Link>
          <Link href="/om-oss">Om oss</Link>
          <Link href="/kontakt">Kontakt</Link>
        </nav>

        <address className={styles.address}>
          <p>Stora Källviken 10</p>
          <p>791 93 Falun</p>
          <p>Org.nr 559117-0732</p>
        </address>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} A&E Performance AB</p>
      </div>
    </footer>
  )
}

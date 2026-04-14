import type { Metadata } from 'next'
import Image from 'next/image'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Om oss',
  description: 'A&E Performance AB grundades 2017 i Falun. Lokalt förankrat bolag med bred kompetens inom mark och anläggning.',
}

export default function OmOssPage() {
  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <p className={styles.label}>Vilka vi är</p>
          <h1 className={styles.title}>Om A&E Performance</h1>
        </div>
      </section>

      <section className={styles.content}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.text}>
            <h2 className={styles.h2}>Lokalt förankrade sedan 2017</h2>
            <p>
              A&E Performance AB grundades 2017 och har sedan dess vuxit till ett
              mångsidigt bolag med nio anställda. Vi är baserade i Falun och verkar
              i hela Dalarnaregionen.
            </p>
            <p>
              Vår styrka är kombinationen av bred kompetens och lokal närvaro. Oavsett
              om det gäller ett schaktningsjobb, maskintjänster för ett
              anläggningsprojekt eller löpande fastighetsskötsel — vi vet hur man
              gör jobbet ordentligt.
            </p>
            <p>
              Vi är F-skattsedelsregistrerade och momsregistrerade. Det innebär att du
              som privatperson kan nyttja ROT-avdrag för kvalificerade arbeten.
            </p>

            <div className={styles.facts}>
              <div className={styles.fact}>
                <span className={styles.factNum}>2017</span>
                <span className={styles.factLabel}>Grundat</span>
              </div>
              <div className={styles.fact}>
                <span className={styles.factNum}>9</span>
                <span className={styles.factLabel}>Anställda</span>
              </div>
              <div className={styles.fact}>
                <span className={styles.factNum}>Dalarna</span>
                <span className={styles.factLabel}>Verksamhetsområde</span>
              </div>
            </div>
          </div>

          <aside>
            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>Företagsinformation</h3>
              <dl className={styles.dl}>
                <dt>Juridiskt namn</dt>
                <dd>A&E Performance AB</dd>
                <dt>Organisationsnummer</dt>
                <dd>559117-0732</dd>
                <dt>Bolagsform</dt>
                <dd>Aktiebolag</dd>
                <dt>Registrerat</dt>
                <dd>2017</dd>
                <dt>Adress</dt>
                <dd>Stora Källviken 10<br />791 93 Falun</dd>
                <dt>Registrerad för</dt>
                <dd>Moms, F-skatt, Arbetsgivaravgift</dd>
              </dl>
            </div>

            <div className={styles.nightImg}>
              <Image
                src="/projekt-natt.jpg"
                alt="Maskinist framför grävmaskin på natten"
                fill
                sizes="340px"
                className={styles.nightPhoto}
              />
              <div className={styles.nightOverlay} />
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

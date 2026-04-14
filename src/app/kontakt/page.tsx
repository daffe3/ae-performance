import type { Metadata } from "next";
import KontaktForm from "./KontaktForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakta A&E Performance AB i Falun för offert på markarbeten, maskintjänster eller fastighetsskötsel.",
};

export default function KontaktPage() {
  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <p className={styles.label}>Ta kontakt</p>
          <h1 className={styles.title}>Kontakta oss</h1>
          <p className={styles.sub}>
            Beskriv ditt projekt — vi återkommer snabbt med ett förslag.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={`container ${styles.grid}`}>
          <KontaktForm />

          <aside className={styles.info}>
            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>Adress</p>
              <p>
                Stora Källviken 10
                <br />
                791 93 Falun
              </p>
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
          </aside>
        </div>
      </section>
    </>
  );
}

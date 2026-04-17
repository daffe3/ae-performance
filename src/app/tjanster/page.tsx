import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "Mark & grundarbeten, maskintjänster, fastighetsskötsel och fordonsaffärer i Dalarna.",
};

export default function TjansterPage() {
  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <p className={styles.label}>Vad vi gör</p>
          <h1 className={styles.title}>Tjänster</h1>
          <p className={styles.sub}>
            Vi erbjuder ett brett utbud av tjänster inom mark, anläggning och
            fastighet. Kontakta oss för offert.
          </p>
        </div>
      </section>

      <section className={styles.list}>
        <div className="container">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className={`${styles.item} ${i % 2 === 1 ? styles.itemAlt : ""}`}
            >
              <div className={styles.itemText}>
                <h2 className={styles.itemTitle}>{s.title}</h2>
                <p className={styles.itemDesc}>{s.fullDesc}</p>
                <ul className={styles.points}>
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <Link href="/kontakt" className={styles.btn}>
                  Begär offert &#8594;
                </Link>
              </div>
              <div className={styles.accentBox}>
                <span className={styles.accentNum}>0{i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

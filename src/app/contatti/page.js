import styles from './page.module.css'

export const metadata = {
  title: 'Contatti – CipCalor',
  description: 'Contatta CipCalor per cippato, pellet e legna da ardere in provincia di Como.',
    alternates: {
    canonical: '/contatti',
  },
}

export default function Contatti() {
  return (
    <div className={styles.page}>

      <section className={styles.heroSection}>
        <div className={styles.heroShell}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.label}>Contatti</span>
              <h1 className={styles.heroTitle}>Parlaci del tuo progetto</h1>
              <p className={styles.heroText}>
                Siamo a disposizione per informazioni e preventivi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.main}>
        <a href="tel:031951099" className={styles.bigCard}>
          <span className={styles.bigCardLabel}>Chiamaci</span>
          <strong className={styles.bigCardValue}>031 951099</strong>
          <span className={styles.bigCardSub}>Telefono</span>
          <span className={styles.bigCardArrow}>→</span>
        </a>

        <a href="mailto:cipcalor@geroli.it" className={styles.bigCard}>
          <span className={styles.bigCardLabel}>Scrivici</span>
          <strong className={styles.bigCardValue}>cipcalor@geroli.it</strong>
          <span className={styles.bigCardSub}>Email aziendale</span>
          <span className={styles.bigCardArrow}>→</span>
        </a>
      </section>

      <section className={`${styles.strip} container`}>
        <div className={styles.stripItem}>
          <span className={styles.stripLabel}>Sede</span>
          <p>Via Provinciale snc<br />22030 Lasnigo (CO)</p>
        </div>

        <div className={styles.stripDivider} />

        <div className={styles.stripItem}>
          <span className={styles.stripLabel}>Orari</span>
          <p>
            Lunedì, mercoledì, venerdì: 8:00 – 12:00 e 14:00 – 17:30<br />
            Martedì e giovedì: 8:00 – 12:00
          </p>
        </div>
      </section>

      <section className={`${styles.mapsSection} container`}>
        <a
          href="https://www.google.com/maps/place/Cip+Calor+S.+R.+L.+Societ%C3%A0+Agricola/@45.891164,9.257846,17z/data=!3m1!4b1!4m6!3m5!1s0x47841f1a01afa101:0x7198018b95c09a2e!8m2!3d45.8911603!4d9.2604209!16s%2Fg%2F1wg5wwf_?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noreferrer"
          className={styles.mapsCard}
        >
          <div>
            <span className={styles.mapsLabel}>Sede operativa</span>
            <strong>CipCalor — Via Provinciale snc, 22030 Lasnigo (CO)</strong>
          </div>
          <span className={styles.mapsLink}>Apri in Google Maps →</span>
        </a>
      </section>

    </div>
  )
}
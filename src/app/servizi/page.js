import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Servizi – CipCalor',
  description: 'Taglio boschivo, cippatura e gestione forestale sostenibile in provincia di Como.',
}

const services = [
  {
    number: '01',
    title: 'Taglio Boschivo Professionale',
    desc: 'Interventi di taglio con macchinari specializzati su tutto il territorio della provincia di Como. Ogni operazione è condotta nel rispetto delle normative forestali vigenti, garantendo sicurezza e qualità di esecuzione.',
    features: ['Abbattimento e esbosco', 'Diradamento boschivo', 'Pulizia aree forestali', 'Interventi per enti pubblici'],
  },
  {
    number: '02',
    title: 'Cippatura in Loco',
    desc: 'Trasformazione immediata del materiale legnoso in cippato direttamente sul cantiere. La lavorazione in loco garantisce la freschezza del prodotto e minimizza i costi di trasporto.',
    features: ['Cippatrici industriali', 'Granulometria uniforme', 'Lavorazione in giornata', 'Riduzione scarti al minimo'],
  },
  {
    number: '03',
    title: 'Gestione Forestale Sostenibile',
    desc: 'Supporto tecnico e operativo per la gestione responsabile del patrimonio boschivo privato e pubblico. Operiamo in sinergia con enti regionali per garantire la tutela degli ecosistemi.',
    features: ['Piani di taglio programmati', 'Conformità normative ambientali', 'Tracciabilità completa', 'Consulenza tecnica'],
  },
  {
    number: '04',
    title: 'Trasporto e Consegna',
    desc: 'Logistica interamente gestita con mezzi propri. Consegniamo legna, cippato e pellet direttamente presso la destinazione concordata, rispettando i tempi stabiliti con il cliente.',
    features: ['Consegna a domicilio', 'Flotta mezzi dedicata', 'Copertura provincia di Como', 'Pianificazione flessibile'],
  },
]

const stats = [
  { value: '30+', label: 'Anni di attività' },
  { value: 'CO', label: 'Provincia Como' },
  { value: '100%', label: 'Filiera locale' },
]

export default function Servizi() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroShell}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.label}>I nostri servizi</span>
              <h1 className={styles.heroTitle}>
                Dal taglio
                <br />
                alla consegna
              </h1>
              <p className={styles.heroText}>
                Oltre trent&apos;anni di esperienza nel settore del legno.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.statsStrip} container`}>
        <div className={styles.statsInner}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statWrap}>
              <div className={styles.statItem}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
              {i < stats.length - 1 && <div className={styles.statDivider} />}
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.services} container`}>
        <div className={styles.servicesGrid}>
          {services.map((s, i) => (
            <div key={i} className={styles.serviceCard}>
              <div className={styles.cardTop}>
                <span className={styles.number}>{s.number}</span>
                <div className={styles.line} />
              </div>
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
              <ul className={styles.features}>
                {s.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.cta} container`}>
        <div className={styles.ctaInner}>
          <div>
            <h2>Hai un progetto da valutare?</h2>
            <p>Contattaci per un sopralluogo. Operiamo su tutto il territorio provinciale.</p>
          </div>
          <Link href="/contatti" className="btn btn-primary">
            Richiedi un sopralluogo
          </Link>
        </div>
      </section>
    </div>
  )
}
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Certificazioni – CipCalor',
  description:
    'CipCalor è certificata ENAMA Agroenergie per la produzione di cippato di legno (ISO 17225-4) e legna da ardere (ISO 17225-5). Qualità verificata da ente terzo accreditato ACCREDIA.',
  alternates: {
    canonical: '/certificazioni',
  },
}

const certs = [
  {
    tag: 'Cippato di Legno',
    title: 'Certificato ENAMA Agroenergie n° 4/073',
    norma: 'UNI EN ISO 17225-4',
    anno: '2025',
    desc: 'Certificazione di qualità del nostro cippato di legno secondo la norma UNI EN ISO 17225-4, rilasciata da ENAMA – Ente Nazionale per la Meccanizzazione Agricola. Attesta la tracciabilità, la qualità costante e la sostenibilità del prodotto lungo tutta la filiera.',
    file: '/certificazioni/certificato-cippato-enama-2025.pdf',
  },
  {
    tag: 'Legna da Ardere',
    title: 'Certificato ENAMA Agroenergie n° 5/069',
    norma: 'UNI EN ISO 17225-5',
    anno: '2025',
    desc: 'Certificazione di qualità della nostra legna da ardere secondo la norma UNI EN ISO 17225-5, rilasciata da ENAMA Agroenergie. Garantisce caratteristiche verificate di umidità, potere calorifico e granulometria per ogni lotto prodotto e commercializzato.',
    file: '/certificazioni/certificato-legna-enama-2025.pdf',
  },
]

export default function Certificazioni() {
  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroShell}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.label}>Qualità certificata</span>
              <h1 className={styles.heroTitle}>
                Biomassa verificata,<br />
                filiera trasparente
              </h1>
              <p className={styles.heroText}>
                Siamo certificati ENAMA Agroenergie per cippato e legna da ardere.
                Ogni lotto rispetta le norme europee ISO 17225, controllato da un ente terzo
                accreditato ACCREDIA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATI ── */}
      <section className={styles.certsWrap}>
        {certs.map((c, i) => (
          <div key={i} className={styles.certCard}>

            {/* Icona / badge visivo */}
            <div className={styles.certBadge}>
              <svg
                width="56" height="56" viewBox="0 0 24 24"
                fill="none" stroke="currentColor"
                strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
              </svg>
              <span className={styles.certYear}>{c.anno}</span>
            </div>

            <div className={styles.certContent}>
              <span className={styles.certTag}>{c.tag}</span>
              <h2>{c.title}</h2>
              <p className={styles.certNorma}>Norma di riferimento: <strong>{c.norma}</strong></p>
              <p className={styles.certDesc}>{c.desc}</p>
              <a
                href={c.file}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certDownload}
                download
              >
                <svg
                  width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ marginRight: '8px', flexShrink: 0 }}
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Scarica il certificato PDF
              </a>
            </div>

          </div>
        ))}
      </section>

      {/* ── COS'È ENAMA ── */}
      <section className={styles.infoSection}>
        <div className={styles.infoInner}>
          <div className={styles.infoText}>
            <span className={styles.label}>Perché conta</span>
            <h2 className={styles.infoTitle}>
              Cosa garantisce<br />la certificazione ENAMA
            </h2>
            <p className={styles.infoDesc}>
              ENAMA – Ente Nazionale per la Meccanizzazione Agricola – è l'organismo di
              certificazione accreditato ACCREDIA per i biocombustibili solidi in Italia.
              I certificati ENAMA Agroenergie attestano che il prodotto rispetta gli standard
              europei di qualità, tracciabilità e sostenibilità lungo tutta la filiera,
              dalla raccolta alla consegna.
            </p>
            <p className={styles.infoDesc}>
              La certificazione è obbligatoria per gli impianti che accedono a incentivi
              (Conto Termico, Ecobonus, Bonus Casa), ma per noi rappresenta soprattutto
              una garanzia concreta per i nostri clienti: sapere esattamente cosa bruciano.
            </p>
          </div>

          <div className={styles.infoFeatures}>
            {[
              { icon: '✓', label: 'Qualità verificata da ente terzo' },
              { icon: '✓', label: 'Tracciabilità di ogni lotto' },
              { icon: '✓', label: 'Conformità alle norme ISO 17225' },
              { icon: '✓', label: 'Accreditamento ACCREDIA' },
              { icon: '✓', label: 'Valido per incentivi Conto Termico' },
              { icon: '✓', label: 'Aggiornato annualmente' },
            ].map((f, i) => (
              <div key={i} className={styles.feature}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <div>
            <h2>Hai bisogno di un preventivo?</h2>
            <p>Consegniamo cippato e legna certificata in tutta la provincia di Como.</p>
          </div>
          <div className={styles.ctaBtns}>
            <Link href="/contatti" className="btn btn-primary">
              Contattaci
            </Link>
            <a href="tel:031951099" className="btn btn-primary">
              <svg
                width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ marginRight: '8px' }}
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.21 1.17 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.66-.66a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
              031 951099
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Prodotti – CipCalor',
  description: 'Cippato, pellet e legna da ardere. Filiera locale, consegna diretta in provincia di Como.',
}

const products = [
  {
    title: 'Cippato',
    subtitle: 'Biomassa legnosa per caldaie',
    image: '/images/cippato.webp',
    desc: 'Prodotto direttamente nei nostri cantieri forestali, il cippato CipCalor garantisce freschezza, granulometria uniforme e massima resa energetica. Ideale per caldaie a biomassa di qualsiasi taglia.',
    specs: [
      { label: 'Umidità', value: 'Classe M30–M50' },
      { label: 'Granulometria', value: 'G30 – G50' },
      { label: 'Origine', value: 'Boschi locali CO' },
      { label: 'Disponibilità', value: 'Tutto l\'anno' },
    ],
  },
  {
    title: 'Pellet',
    subtitle: 'Alta densità energetica',
    image: '/images/pellet.webp',
    desc: 'Pellet certificato ENplus, prodotto con legno puro privo di additivi chimici. Combustione pulita, ceneri ridotte al minimo e massima efficienza per stufe e caldaie domestiche.',
    specs: [
      { label: 'Diametro', value: '6 mm ENplus' },
      { label: 'Umidità', value: '< 10%' },
      { label: 'Ceneri', value: '< 0.7%' },
      { label: 'Confezione', value: 'Sacchi 15kg' },
    ],
  },
  {
    title: 'Legna da Ardere',
    subtitle: 'Stagionata e pronta all\'uso',
    image: '/images/legna.webp',
    desc: 'Legna selezionata tra le migliori essenze locali — faggio, carpino  — tagliata e stagionata per garantire la massima resa calorica e una fiamma pulita e duratura.',
    specs: [
      { label: 'Stagionatura', value: '12–24 mesi' },
      { label: 'Essenze', value: 'Faggio, Carpino' },
      { label: 'Pezzatura', value: '25 / 33 / 50 cm' },
      { label: 'Fornitura', value: 'Sfusa' },
    ],
  },
]

export default function Prodotti() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroShell}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.label}>I nostri prodotti</span>
              <h1 className={styles.heroTitle}>
                Calore naturale,
                <br />
                qualità garantita
              </h1>
              <p className={styles.heroText}>
                Cippato, pellet e legna da ardere. Filiera locale, consegna diretta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.productsWrap}>
        {products.map((p, i) => (
          <div key={i} className={styles.product}>
            <div className={styles.productImage}>
              <Image
                src={p.image}
                alt={p.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="360px"
              />
            </div>

            <div className={styles.productContent}>
              <span className={styles.productLabel}>{p.subtitle}</span>
              <h2>{p.title}</h2>
              <p className={styles.productDesc}>{p.desc}</p>

              <div className={styles.specsGrid}>
                {p.specs.map((s, j) => (
                  <div key={j} className={styles.specItem}>
                    <span>{s.label}</span>
                    <strong>{s.value}</strong>
                  </div>
                ))}
              </div>

              <Link href="/contatti" className={styles.btnInfo}>
                Richiedi informazioni
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <div>
            <h2>Hai bisogno di un preventivo?</h2>
            <p>Consegniamo direttamente a casa tua in tutta la provincia di Como.</p>
          </div>

          <div className={styles.ctaBtns}>
            <Link href="/contatti" className="btn btn-primary">
              Contattaci
            </Link>

            <a href="tel:031951099" className="btn btn-primary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginRight: '8px' }}
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
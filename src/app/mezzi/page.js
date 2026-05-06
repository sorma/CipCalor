import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Mezzi – CipCalor',
  description: 'Scopri la flotta di macchinari CipCalor: mezzi forestali professionali per il taglio, la cippatura e il trasporto del legname in provincia di Como.',
}


const vehicles = [
  {
    tag: 'Trattore + Trasporto',
    title: 'Valtra con Rimorchio Scarrabile',
    image: '/images/mezzo-1.webp',
    desc: 'Il nostro trattore Valtra con rimorchio scarrabile: il mezzo principale per il trasporto e la consegna diretta del cippato. Capacità di carico elevata per servire i clienti in tutta la provincia di Como, anche sul lungolago.',
  },
  {
    tag: 'Cippatrice',
    title: 'Cippatrice Heizohack con Gru',
    image: '/images/mezzo-2.webp',
    desc: 'Cippatrice trainata con braccio gru idraulico integrato. Lavora direttamente su strada o in piazzale, riducendo i tempi di cantiere grazie alla presa autonoma del materiale e al carico diretto sul rimorchio.',
  },
  {
    tag: 'Cantiere Forestale',
    title: 'Cippatura Diretta nel Bosco',
    image: '/images/mezzo-3.webp',
    desc: 'La nostra squadra al completo in un cantiere forestale: trattore, cippatrice e rimorchio lavorano in sincronia. Il cippato viene prodotto e caricato direttamente nel bosco per minimizzare i trasporti intermedi.',
  },
  {
    tag: 'Cippatrice Industriale',
    title: 'Heizohack M 10-500 KT',
    image: '/images/mezzo-4.webp',
    desc: 'La cippatrice Heizohack M 10-500 KT è il cuore produttivo della nostra flotta. Potente e affidabile, è progettata per i cantieri forestali più impegnativi: produzione di cippato con gru idraulica ad alta precisione.',
  },
  {
    tag: 'Movimentazione Legname',
    title: 'Escavatore con Pinza Forestale',
    image: '/images/mezzo-6.webp',
    desc: "Il nostro escavatore attrezzato con pinza per la movimentazione e gestione delle cataste di tronchi. Fondamentale per l'organizzazione dei piazzali di stoccaggio e per il carico efficiente dei veicoli di trasporto.",
  },
]

export default function IMezzi() {
  return (
    <div className={styles.page}>

      <section className={styles.heroSection}>
        <div className={styles.heroShell}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.label}>La nostra flotta</span>
              <h1 className={styles.heroTitle}>
                Mezzi moderni,<br />
                boschi rispettati
              </h1>
              <p className={styles.heroText}>
                Sei macchine specializzate per il lavoro forestale, dalla raccolta al trasporto.
                Tecnologia al servizio della filiera corta in provincia di Como.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.fleetWrap}>
        {vehicles.map((v, i) => (
          <div key={i} className={styles.vehicle}>
            <div className={styles.vehicleImage}>
              <Image
                src={v.image}
                alt={v.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 900px) 100vw, 360px"
              />
            </div>

            <div className={styles.vehicleContent}>
              <span className={styles.vehicleTag}>{v.tag}</span>
              <h2>{v.title}</h2>
              <p className={styles.vehicleDesc}>{v.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.videoSection}>
        <div className={styles.videoInner}>
          <div className={styles.videoText}>
            <span className={styles.label}>I mezzi in azione</span>
            <h2 className={styles.videoTitle}>
              Guarda il filmato<br />di cantiere
            </h2>
            <p className={styles.videoDesc}>
              La cippatrice Heizohack al lavoro: guarda come trasformiamo il legname in cippato di qualità certificata, 
              direttamente nel bosco lombardo.
            </p>
          </div>

          <div className={styles.videoWrap}>
            <video
              className={styles.videoFrame}
              src="/videos/cantiere.mp4"
              controls
              playsInline
              preload="metadata"
              aria-label="Filmato di cantiere CipCalor"
            />
          </div>
        </div>
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
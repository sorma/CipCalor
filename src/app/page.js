import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Home – CipCalor',
  description: 'CipCalor: azienda agricola forestale con oltre trent\'anni di esperienza. Offriamo cippato, pellet e legna da ardere con filiera locale e consegna diretta in provincia di Como.',
    alternates: {
    canonical: '/',
  },
}

const stats = [
  { value: '30+', label: 'Anni di esperienza' },
  { value: '3', label: 'Linee di prodotto' },
  { value: 'CO', label: 'Provincia di Como' },
]

const products = [
  {
    title: 'Cippato',
    subtitle: 'Biomassa legnosa per impianti e caldaie',
    desc: 'Soluzione adatta per impianti a biomassa, con lavorazione legata direttamente alla filiera forestale.',
    href: '/prodotti',
  },
  {
    title: 'Pellet',
    subtitle: 'Pratico, pulito, ad alta resa',
    desc: 'Un combustibile efficiente per il riscaldamento quotidiano, ideale per stufe e caldaie domestiche.',
    href: '/prodotti',
  },
  {
    title: 'Legna da Ardere',
    subtitle: 'Tradizione, calore, semplicità',
    desc: 'Legna selezionata e pronta all’uso per chi cerca un riscaldamento naturale e affidabile.',
    href: '/prodotti',
  },
]

const services = [
  {
    number: '01',
    title: 'Taglio boschivo',
    desc: 'Interventi professionali per la gestione e la manutenzione del patrimonio forestale.',
  },
  {
    number: '02',
    title: 'Cippatura',
    desc: 'Trasformazione del materiale legnoso in cippato con lavorazione diretta sul posto.',
  },
  {
    number: '03',
    title: 'Consegna',
    desc: 'Trasporto organizzato con mezzi propri per forniture puntuali e affidabili.',
  },
]

const reasons = [
  {
    title: 'Filiera locale',
    desc: 'Seguiamo direttamente le fasi operative, dal bosco alla fornitura finale.',
  },
  {
    title: 'Esperienza concreta',
    desc: 'Lavoriamo da anni nel settore forestale con attenzione alla qualità del servizio.',
  },
  {
    title: 'Fornitura affidabile',
    desc: 'Supportiamo clienti privati e attività con disponibilità e organizzazione.',
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroShell}>
          <div className={styles.heroBackground}>
            <Image
              src="/images/home-hero.webp"
              alt="CipCalor lavorazione forestale"
              fill
              priority
              className={styles.heroImage}
              sizes="100vw"
            />
            <div className={styles.heroOverlay} />
          </div>

          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.label}>Azienda agricola forestale</span>

              <h1 className={styles.heroTitle}>
                Dal taglio
                <br />
                alla cippatura e legna da ardere
              </h1>

              <p className={styles.heroText}>
                Cippato, pellet e legna da ardere con filiera locale,
                esperienza operativa e consegna diretta in provincia di Como.
              </p>

              <div className={styles.heroButtons}>
                <Link href="/prodotti" className={styles.primaryButton}>
                  Scopri i prodotti
                </Link>
                <Link href="/contatti" className={styles.secondaryButton}>
                  Richiedi informazioni
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.statsSection} container`}>
        <div className={styles.statsCard}>
          {stats.map((item, index) => (
            <div key={index} className={styles.statBlock}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.about} container`}>
        <div className={styles.aboutText}>
          <span className={styles.sectionLabel}>Chi siamo</span>
          <h2>Esperienza, territorio e attenzione alla qualità</h2>
          <p>
            CipCalor opera nel settore forestale con un approccio concreto,
            curando ogni fase del lavoro: taglio, lavorazione, produzione e fornitura.
          </p>
          <p>
            L’obiettivo è offrire prodotti affidabili e un servizio serio,
            mantenendo un forte legame con il territorio e con la gestione responsabile del bosco.
          </p>
          <Link href="/servizi" className="btn btn-primary">
            Scopri i servizi
          </Link>
        </div>

        <div className={styles.aboutImage}>
          <Image
            src="/images/home-azienda.webp"
            alt="CipCalor azienda forestale"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className={`${styles.productsSection} container`}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionLabel}>Prodotti</span>
          <h2>Tre soluzioni per il tuo riscaldamento</h2>
        </div>

        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <article key={index} className={styles.productCard}>
              <span className={styles.productSubtitle}>{product.subtitle}</span>
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
              <Link href={product.href} className={styles.textLink}>
                Vai ai prodotti
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.servicesSection} container`}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionLabel}>Servizi</span>
          <h2>Un supporto completo, dal bosco alla consegna</h2>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <article key={index} className={styles.serviceCard}>
              <div className={styles.serviceTop}>
                <span className={styles.serviceNumber}>{service.number}</span>
                <div className={styles.serviceLine} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.reasonsSection} container`}>
        <div className={styles.reasonsCard}>
          <div className={styles.reasonsIntro}>
            <span className={styles.sectionLabelLight}>Perché CipCalor</span>
            <h2>Un partner affidabile per prodotti e servizi forestali</h2>
          </div>

          <div className={styles.reasonsGrid}>
            {reasons.map((reason, index) => (
              <div key={index} className={styles.reasonItem}>
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
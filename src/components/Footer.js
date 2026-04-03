import Link from 'next/link'
import styles from './Footer.module.css'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/prodotti', label: 'Prodotti' },
  { href: '/contatti', label: 'Contatti' },
]

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/termini-e-condizioni', label: 'Termini e Condizioni' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.top} container`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <strong>Cip</strong>Calor
          </div>

          <p>
            Dal Taglio alla Cippatura.
            <br />
            Qualità naturale dalla foresta a casa tua.
          </p>

          <div className={styles.socials}>
            <a href="mailto:cipcalor@geroli.it" className={styles.pill}>
              <svg
                className={styles.icon}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16v16H4z" opacity="0" />
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              <span>Email</span>
            </a>

            <a href="tel:031951099" className={styles.pill}>
              <svg
                className={`${styles.icon} ${styles.phoneIcon}`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 9.8 19.79 19.79 0 0 1 .21 1.17 2 2 0 0 1 2.22 0h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11l-.64.64a16 16 0 0 0 6 6l.66-.66a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Telefono</span>
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>Navigazione</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Contatti</h4>
          <address>
            <p>Via Provinciale snc</p>
            <p>22030 Lasnigo (CO)</p>
            <p>Tel: 031 951099</p>
            <p>
              <a href="mailto:cipcalor@geroli.it">cipcalor@geroli.it</a>
            </p>
          </address>
        </div>

        <div className={styles.col}>
          <h4>Legale</h4>
          <ul>
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`${styles.bottom} container`}>
        <p suppressHydrationWarning>
          © {new Date().getFullYear()} CipCalor — P.IVA 02948280132. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  )
}
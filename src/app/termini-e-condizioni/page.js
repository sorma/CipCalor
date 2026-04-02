import styles from './termini-e-condizioni.module.css'

export const metadata = {
  title: 'Termini e Condizioni | CipCalor',
  description:
    'Termini e condizioni generali di vendita e utilizzo del sito CipCalor.',
}

const LAST_UPDATE = '30 marzo 2026'

export default function TerminiCondizioniPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Documento legale</p>
          <h1>Termini e Condizioni</h1>
          <p className={styles.meta}>
            Condizioni Generali di Vendita e di Utilizzo del Sito
            <br />
            <span>Ultimo aggiornamento: {LAST_UPDATE}</span>
          </p>
        </header>

        <article className={styles.content}>
          <section>
            <h2>1. Oggetto e Ambito di Applicazione</h2>
            <p>
              I presenti Termini e Condizioni disciplinano l&apos;utilizzo del sito web
              <strong> www.cipcalor.it</strong> e la vendita dei prodotti offerti da CipCalor.
            </p>
            <p>
              L&apos;accesso al sito e l&apos;invio di richieste di ordine implicano l&apos;accettazione integrale dei presenti termini.
            </p>
          </section>

          <section>
            <h2>2. Informazioni sull&apos;Azienda</h2>
            <address className={styles.addressBox}>
              <strong>Azienda Agricola CipCalor</strong><br />
              Via Provinciale snc – 22030 Lasnigo (CO) – Italia<br />
              P.IVA: 02948280132<br />
              Tel: <a href="tel:031951099">031 951099</a><br />
              E-mail: <a href="mailto:cipcalor@geroli.it">cipcalor@geroli.it</a>
            </address>
          </section>

          <section>
            <h2>3. Prodotti e Servizi</h2>
            <p>CipCalor commercializza prodotti di origine forestale quali:</p>
            <ul>
              <li><strong>Legna da ardere</strong>.</li>
              <li><strong>Cippato</strong>.</li>
              <li><strong>Pellet</strong>.</li>
            </ul>
            <p>
              Le caratteristiche specifiche dei prodotti vengono indicate nelle relative schede o comunicate in fase di preventivo o ordine.
            </p>
          </section>

          <section>
            <h2>4. Prezzi e Modalità di Ordine</h2>
            <p>
              I prezzi sono espressi in Euro (€) e si intendono IVA inclusa se non diversamente specificato.
            </p>
            <p>Gli ordini possono essere effettuati:</p>
            <ul>
              <li>telefonicamente al numero <a href="tel:031951099">031 951099</a>;</li>
              <li>via e-mail a <a href="mailto:cipcalor@geroli.it">cipcalor@geroli.it</a>;</li>
              <li>tramite eventuale modulo contatti presente sul sito.</li>
            </ul>
            <p>
              L&apos;ordine si considera confermato solo dopo conferma espressa da parte di CipCalor.
            </p>
          </section>

          <section>
            <h2>5. Consegna e Ritiro</h2>
            <p>
              La consegna dei prodotti avviene secondo accordi presi con il cliente.
              Tempistiche, modalità ed eventuali costi di trasporto vengono definiti in fase di ordine.
            </p>
            <p>
              È possibile anche il ritiro presso la sede operativa, previo accordo.
            </p>
          </section>

          <section>
            <h2>6. Pagamento</h2>
            <p>Le modalità di pagamento possono includere:</p>
            <ul>
              <li>contanti alla consegna o al ritiro;</li>
              <li>bonifico bancario anticipato;</li>
              <li>altre modalità concordate preventivamente.</li>
            </ul>
            <p>
              In caso di mancato pagamento nei termini concordati, CipCalor si riserva il diritto di sospendere le forniture.
            </p>
          </section>

          <section>
            <h2>7. Resi, Recesso e Reclami</h2>
            <p>
              I clienti consumatori possono esercitare il diritto di recesso entro 14 giorni dalla consegna, ai sensi della normativa applicabile,
              salvo i casi di esclusione previsti dalla legge.
            </p>
            <p>
              Eventuali reclami relativi a difformità dei prodotti devono essere comunicati tempestivamente via e-mail o telefono,
              preferibilmente entro 8 giorni dalla consegna.
            </p>
          </section>

          <section>
            <h2>8. Responsabilità</h2>
            <p>
              CipCalor garantisce che i prodotti siano conformi alle caratteristiche dichiarate al momento dell&apos;ordine.
            </p>
            <p>
              L&apos;azienda non è responsabile di danni derivanti da uso improprio dei prodotti, da installazioni non corrette
              o da impianti non idonei.
            </p>
          </section>

          <section>
            <h2>9. Proprietà Intellettuale</h2>
            <p>
              Tutti i contenuti presenti sul sito, inclusi testi, immagini, loghi e materiali grafici, sono protetti dalla normativa vigente
              in materia di proprietà intellettuale e non possono essere copiati o riutilizzati senza autorizzazione.
            </p>
          </section>

          <section>
            <h2>10. Legge Applicabile e Foro Competente</h2>
            <p>
              I presenti Termini sono disciplinati dalla legge italiana.
            </p>
            <p>
              Per ogni controversia sarà competente il Foro di Como, salvo i casi in cui la legge preveda una tutela diversa per il consumatore.
            </p>
            <p>
              Per i consumatori dell&apos;Unione Europea è disponibile anche la piattaforma ODR:{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                ec.europa.eu/consumers/odr
              </a>
            </p>
          </section>

          <section>
            <h2>11. Contatti</h2>
            <p>
              Per qualsiasi informazione relativa ai presenti termini è possibile contattare CipCalor ai recapiti sopra indicati.
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
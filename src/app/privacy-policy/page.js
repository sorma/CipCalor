import styles from './privacy-policy.module.css'

export const metadata = {
  title: 'Privacy Policy | CipCalor',
  description:
    'Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) – CipCalor.',
      alternates: {
    canonical: '/privacy-policy',
  },
}

const LAST_UPDATE = '30 marzo 2026'

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Documento legale</p>
          <h1>Privacy Policy</h1>
          <p className={styles.meta}>
            Informativa ai sensi dell&apos;art. 13 del Regolamento UE 2016/679 (GDPR)
            <br />
            <span>Ultimo aggiornamento: {LAST_UPDATE}</span>
          </p>
        </header>

        <article className={styles.content}>
          <section>
            <h2>1. Titolare del Trattamento</h2>
            <p>
              Il Titolare del trattamento dei dati personali raccolti tramite il sito web
              <strong> www.cipcalor.it</strong> è:
            </p>
            <address className={styles.addressBox}>
              <strong>Azienda Agricola CipCalor</strong><br />
              Via Provinciale snc<br />
              22030 Lasnigo (CO) – Italia<br />
              P.IVA: 02948280132<br />
              Tel: <a href="tel:031951099">031 951099</a><br />
              E-mail: <a href="mailto:cipcalor@geroli.it">cipcalor@geroli.it</a>
            </address>
          </section>

          <section>
            <h2>2. Dati Raccolti</h2>
            <p>
              Il sito raccoglie le seguenti categorie di dati personali, esclusivamente
              quando l&apos;utente li fornisce volontariamente:
            </p>
            <ul>
              <li><strong>Dati di contatto</strong> – nome, cognome, indirizzo e-mail, numero di telefono, trasmessi tramite modulo di contatto o e-mail diretta.</li>
              <li><strong>Dati di navigazione</strong> – indirizzo IP, tipo di browser, sistema operativo, pagine visitate e orari di accesso, raccolti automaticamente dai log del server.</li>
              <li><strong>Cookie tecnici</strong> – necessari al corretto funzionamento del sito.</li>
            </ul>
            <p>
              Non vengono raccolti dati sensibili ai sensi dell&apos;art. 9 GDPR né dati di minori di 16 anni.
            </p>
          </section>

          <section>
            <h2>3. Finalità e Base Giuridica del Trattamento</h2>
            <div className={styles.tableWrapper}>
              <table>
                <thead>
                  <tr>
                    <th>Finalità</th>
                    <th>Base giuridica</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rispondere a richieste di informazioni e preventivi</td>
                    <td>Misure precontrattuali (art. 6.1.b GDPR)</td>
                  </tr>
                  <tr>
                    <td>Gestione ordini e forniture</td>
                    <td>Esecuzione del contratto (art. 6.1.b GDPR)</td>
                  </tr>
                  <tr>
                    <td>Adempimento di obblighi legali, fiscali e contabili</td>
                    <td>Obbligo legale (art. 6.1.c GDPR)</td>
                  </tr>
                  <tr>
                    <td>Analisi statistica anonima delle visite</td>
                    <td>Legittimo interesse (art. 6.1.f GDPR)</td>
                  </tr>
                  <tr>
                    <td>Comunicazioni commerciali</td>
                    <td>Consenso esplicito (art. 6.1.a GDPR), se prestato</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2>4. Modalità di Trattamento</h2>
            <p>
              I dati sono trattati con strumenti elettronici e/o cartacei, nel rispetto dei principi di liceità,
              correttezza, trasparenza, minimizzazione, integrità e riservatezza previsti dal GDPR.
            </p>
            <p>
              Il trattamento è effettuato da personale autorizzato o da eventuali responsabili esterni nominati ai sensi dell&apos;art. 28 GDPR.
            </p>
          </section>

          <section>
            <h2>5. Comunicazione dei Dati</h2>
            <p>I dati personali non vengono venduti né ceduti a terzi.</p>
            <ul>
              <li>Soggetti cui la comunicazione è necessaria per obbligo di legge.</li>
              <li>Fornitori di servizi informatici e hosting, in qualità di responsabili del trattamento.</li>
              <li>Professionisti e consulenti che assistono l&apos;azienda nei rapporti commerciali e amministrativi.</li>
            </ul>
          </section>

          <section>
            <h2>6. Trasferimento Dati Extra-UE</h2>
            <p>
              I dati personali sono conservati su server ubicati preferibilmente all&apos;interno dell&apos;Unione Europea.
              Qualora fosse necessario trasferire dati verso Paesi terzi, il trasferimento avverrà nel rispetto
              delle garanzie previste dagli artt. 44–49 GDPR.
            </p>
          </section>

          <section>
            <h2>7. Cookie</h2>
            <p>
              Il sito utilizza esclusivamente cookie tecnici necessari al suo funzionamento.
              Non vengono installati cookie di profilazione senza previo consenso.
            </p>
            <ul>
              <li><strong>Cookie di sessione</strong> – temporanei, eliminati alla chiusura del browser.</li>
              <li><strong>Cookie di preferenza</strong> – memorizzano eventuali impostazioni di navigazione.</li>
            </ul>
          </section>

          <section>
            <h2>8. Periodo di Conservazione</h2>
            <ul>
              <li><strong>Dati di contatto e richieste</strong>: fino a 24 mesi dalla richiesta, salvo rapporti contrattuali successivi.</li>
              <li><strong>Dati contrattuali e fiscali</strong>: 10 anni, secondo la normativa vigente.</li>
              <li><strong>Log di navigazione</strong>: massimo 12 mesi.</li>
              <li><strong>Dati trattati su base consenso</strong>: fino alla revoca del consenso.</li>
            </ul>
          </section>

          <section>
            <h2>9. Diritti dell&apos;Interessato</h2>
            <p>Ai sensi degli artt. 15–22 GDPR, l&apos;utente ha diritto di accesso, rettifica, cancellazione, limitazione, portabilità, opposizione e revoca del consenso.</p>
            <p>
              Per esercitare tali diritti è possibile scrivere a{' '}
              <a href="mailto:cipcalor@geroli.it">cipcalor@geroli.it</a>.
            </p>
            <p>
              È inoltre possibile presentare reclamo al{' '}
              <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
                Garante per la Protezione dei Dati Personali
              </a>.
            </p>
          </section>

          <section>
            <h2>10. Modifiche alla Presente Informativa</h2>
            <p>
              CipCalor si riserva il diritto di aggiornare la presente informativa in qualsiasi momento.
              Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento.
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
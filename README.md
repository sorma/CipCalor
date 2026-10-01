# CipCalor

Sito vetrina Next.js App Router, pubblicato tramite OpenNext su Cloudflare Workers.
Usare Node.js 22 e installare le dipendenze con `npm ci`.

## Sviluppo e verifica

- `npm run dev`: sviluppo locale.
- `npm run check`: lint e build Next.js.
- `npm run build:cloudflare`: generazione del Worker e degli asset OpenNext.
- `npm run preview`: build e anteprima locale Cloudflare.
- `npm run deploy`: controlli, build e pubblicazione su Cloudflare.

I recapiti condivisi sono in `src/lib/company.js`. Modificare lì telefono, email e indirizzo.
Gli header delle risposte Next.js sono in `next.config.mjs`; quelli degli asset Cloudflare
sono in `public/_headers`. La CSP consente gli script inline necessari all'attuale
prerendering Next.js; una CSP con nonce richiederebbe una diversa strategia di rendering.

La workflow GitHub esegue lint, build Next.js e build OpenNext. Configurare il controllo
`validate` come obbligatorio sul ramo di produzione nelle impostazioni del repository.

## Pubblicazione e ripristino

Prima della pubblicazione eseguire `npm run preview` e controllare navigazione mobile,
link telefonici, immagini, video e PDF. Dopo il deploy verificare i recapiti su `/contatti`
e gli header HTML con `curl -I https://www.cipcalor.it/contatti`.

L'osservabilità è attiva in `wrangler.jsonc`. Nel pannello Cloudflare controllare gli errori
del Worker e configurare gli avvisi disponibili per il piano; usare un controllo esterno
di disponibilità per ricevere avvisi anche se il sito non risponde.
Per un ripristino usare il rollback alla precedente versione funzionante del Worker
dal pannello Cloudflare e verificare nuovamente pagine e asset.

Le impostazioni di cookie e log di Cloudflare devono corrispondere all'informativa privacy:
verificare servizi abilitati e tempi effettivi di conservazione nell'account hosting.

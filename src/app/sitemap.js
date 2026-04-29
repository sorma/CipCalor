// app/sitemap.js
export default function sitemap() {
  return [
    {
      url: 'https://www.cipcalor.it',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://www.cipcalor.it/servizi',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.cipcalor.it/prodotti',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.cipcalor.it/mezzi',
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: 'https://www.cipcalor.it/certificazioni',
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: 'https://www.cipcalor.it/contatti',
      lastModified: new Date(),
      priority: 0.6,
    },
  ]
}
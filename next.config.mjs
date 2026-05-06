import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

if (process.env.NODE_ENV === 'development') {
  await initOpenNextCloudflareForDev();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [

      // Vecchie pagine
      { source: '/lasnigo-e-mail', destination: '/contatti', permanent: true },
      { source: '/lasnigo-e-mail/:path*', destination: '/contatti', permanent: true },
      { source: '/news', destination: '/', permanent: true },
      { source: '/news/:path*', destination: '/', permanent: true },
      { source: '/i-nostri-mezzi', destination: '/mezzi', permanent: true },
      { source: '/i-nostri-mezzi/:path*', destination: '/mezzi', permanent: true },
      { source: '/chi-siamo', destination: '/', permanent: true },
      { source: '/produzione', destination: '/prodotti', permanent: true },
      { source: '/le-nostre-attivita', destination: '/servizi', permanent: true },
    ]
  },
};

export default nextConfig;
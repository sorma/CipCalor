import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

if (process.env.NODE_ENV === 'development') {
  await initOpenNextCloudflareForDev();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/chi-siamo',
        destination: '/contatti',
        permanent: true,
      },
      {
        source: '/produzione',
        destination: '/prodotti',
        permanent: true,
      },
      {
        source: '/le-nostre-attivita',
        destination: '/servizi',
        permanent: true,
      },
      {
        source: '/lasnigo-e-mail',
        destination: '/contatti',
        permanent: true,
      },
      {
        source: '/lasnigo-e-mail/:path*',
        destination: '/contatti',
        permanent: true,
      },
      {
        source: '/i-nostri-mezzi',
        destination: '/mezzi',
        permanent: true,
      },
      {
        source: '/news',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
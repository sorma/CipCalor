import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'CipCalor',
  icons: {
    icon: 'images/logo.png',
    apple: 'images/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
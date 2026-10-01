'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'
import { Menu, X, Phone } from 'lucide-react'
import { company } from '@/lib/company'

const links = [
  { href: '/', label: 'Home' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/prodotti', label: 'Prodotti' },
  { href: '/mezzi', label: 'Mezzi' },
  { href: '/certificazioni', label: 'Certificazioni' },
  { href: '/contatti', label: 'Contatti' },

]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.leftArea}>
            <Link href="/" className={styles.logo} onClick={closeMenu}>
              <Image
                src="/images/logo.png"      
                alt="CipCalor logo"
                width={200}           
                height={48}           
                priority              
                className={styles.logoImage}
              />
            </Link>
          </div>

          <nav className={styles.desktopNav}>
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navlink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.rightArea}>
            <a
              href={company.phoneHref}
              className={styles.callButton}
              aria-label={`Chiama ${company.phone}`}
            >
              <Phone size={18} />
              <span>Chiama ora</span>
            </a>

            <button
              className={styles.toggle}
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <nav id="mobile-menu" aria-label="Navigazione mobile" className={`${styles.mobilePanel} ${isOpen ? styles.mobilePanelOpen : ''}`}>
        <a
          href={company.phoneHref}
          className={styles.mobileCallButton}
          onClick={closeMenu}
          aria-label={`Chiama ${company.phone}`}
        >
          <Phone size={18} />
          <span>Chiama {company.phone}</span>
        </a>

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {isOpen && (
        <button
          className={styles.backdrop}
          onClick={closeMenu}
          aria-label="Chiudi menu"
        />
      )}
    </>
  )
}

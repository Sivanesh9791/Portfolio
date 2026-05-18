import { useState, useEffect } from 'react'
import './Navbar.css'
import { smoothScrollToId } from '../utils/smoothScroll'

const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'Services',     href: '#services' },
  { label: 'Portfolio',    href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About',        href: '#about' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close mobile menu on resize ≥ 768px
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (id) => {
    smoothScrollToId(id)
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      {/* ── Logo ── */}
      <button className="navbar__logo" onClick={() => handleNavClick('home')}>
        Catalyst
      </button>

      {/* ── Desktop Nav Links ── */}
      <nav className="navbar__links" aria-label="Primary navigation">
        {NAV_LINKS.map(({ label, href }) => (
          <button
            key={href}
            className="navbar__link"
            onClick={() => handleNavClick(href.replace('#', ''))}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* ── Right: CTA + Hamburger ── */}
      <div className="navbar__right">
        <a
          href="https://www.fiverr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__cta"
        >
          Get Started
        </a>

        <button
          className={`navbar__hamburger${menuOpen ? ' is-active' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="navbar__bar" />
          <span className="navbar__bar" />
          <span className="navbar__bar" />
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      <nav
        className={`navbar__mobile-menu${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <button
            key={href}
            className="navbar__mobile-link"
            onClick={() => handleNavClick(href.replace('#', ''))}
          >
            {label}
          </button>
        ))}
        <a
          href="https://www.fiverr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__mobile-cta"
        >
          Get Started
        </a>
      </nav>
    </header>
  )
}

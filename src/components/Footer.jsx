import './Footer.css'

const YEAR = new Date().getFullYear()

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/sivaneshkumar',          icon: '🐙' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sivaneshkumar',      icon: '💼' },
  { label: 'Fiverr',   href: 'https://www.fiverr.com',                    icon: '🟢' },
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="footer">
      {/* Social links */}
      <div className="footer__socials">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label={s.label}
          >
            <span aria-hidden="true">{s.icon}</span>
            {s.label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="footer__text">
        Designed &amp; Built by{' '}
        <span className="footer__name">Sivanesh Kumar M</span>
        <span className="footer__dot"> · </span>
        MERN Stack Developer · Tamil Nadu, India
      </p>

      <p className="footer__copy">© {YEAR} Catalyst. All rights reserved.</p>

      {/* Back to top */}
      <button className="footer__top-btn" onClick={scrollToTop} aria-label="Back to top">
        ↑ Back to top
      </button>
    </footer>
  )
}

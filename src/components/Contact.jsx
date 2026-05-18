import { useEffect, useRef } from 'react'
import './Contact.css'

const CONTACT_METHODS = [
  {
    icon: '📧',
    label: 'Email',
    value: 'sivaneshkumar@email.com',
    href: 'mailto:sivaneshkumar@email.com',
    external: false,
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/sivaneshkumar',
    href: 'https://github.com/sivaneshkumar',
    external: true,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/sivaneshkumar',
    href: 'https://linkedin.com/in/sivaneshkumar',
    external: true,
  },
]

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const targets = sectionRef.current?.querySelectorAll('.contact__animate')
    targets?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      {/* ── Header ── */}
      <div className="contact__header contact__animate">
        <span className="contact__label">Get In Touch</span>
        <h2 className="contact__heading">Let&apos;s Build Something Great</h2>
        <div className="contact__divider" aria-hidden="true" />
        <p className="contact__desc">
          Have a project in mind? Let&apos;s discuss how I can help you achieve your business
          goals. Whether you need a complete platform or specific features, I&apos;m here to
          deliver excellence.
        </p>
      </div>

      {/* ── Card ── */}
      <div className="contact__card contact__animate" style={{ transitionDelay: '120ms' }}>
        {/* Background glow */}
        <div className="contact__glow" aria-hidden="true" />

        {/* Contact methods */}
        <div className="contact__methods">
          {CONTACT_METHODS.map((method) => (
            <a
              key={method.label}
              href={method.href}
              className="contact__link"
              {...(method.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <div className="contact__link-icon">{method.icon}</div>
              <div className="contact__link-text">
                <span className="contact__link-label">{method.label}</span>
                <span className="contact__link-value">{method.value}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <a href="#contact" className="contact__cta-primary">
          Schedule Free Consultation
        </a>

        {/* Fiverr CTA */}
        <a
          href="https://www.fiverr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__cta-fiverr"
        >
          🟢 Hire on Fiverr
        </a>
      </div>
    </section>
  )
}

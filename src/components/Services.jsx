import { useEffect, useRef } from 'react'
import './Services.css'

const SERVICES = [
  {
    icon: '🛒',
    title: 'E-Commerce Solutions',
    description:
      'Build powerful online stores with product catalogs, secure checkout, inventory management, and payment integration.',
    features: [
      'Product management systems',
      'Shopping cart & checkout',
      'Payment gateway integration',
      'Order tracking & analytics',
    ],
    accent: '#38bdf8',
    link: 'Explore E-Commerce',
  },
  {
    icon: '💼',
    title: 'Web Applications & SAAS',
    description:
      'Custom web applications tailored to your business. Multi-user systems, real-time collaboration, cloud-ready architecture.',
    features: [
      'Project management apps',
      'Collaboration tools',
      'Analytics dashboards',
      'User management systems',
    ],
    accent: '#34d399',
    link: 'View Web Apps',
  },
  {
    icon: '📊',
    title: 'Admin Dashboards',
    description:
      'Intuitive, data-rich dashboards for business intelligence. Real-time metrics, analytics, reporting, and user management.',
    features: [
      'Real-time analytics',
      'Business metrics tracking',
      'User management',
      'Revenue reports & insights',
    ],
    accent: '#fbbf24',
    link: 'See Dashboards',
  },
  {
    icon: '⚙️',
    title: 'REST APIs & Backend',
    description:
      'Robust, scalable backend systems. Authentication, database design, API architecture, microservices.',
    features: [
      'User authentication (JWT)',
      'API endpoint design',
      'Database optimization',
      'System integration',
    ],
    accent: '#ec4899',
    link: 'Discover Backend',
  },
  {
    icon: '⚡',
    title: 'Real-Time Applications',
    description:
      'Live updates, instant notifications, collaborative features. WebSocket integration for real-time experiences.',
    features: [
      'Live chat systems',
      'Instant notifications',
      'Collaborative editing',
      'Real-time feeds',
    ],
    accent: '#f97316',
    link: 'Explore Real-Time',
  },
  {
    icon: '🔗',
    title: 'Custom Integrations',
    description:
      'Connect your tools seamlessly. Third-party API integration, payment gateways, CRM integration.',
    features: [
      'Stripe & PayPal integration',
      'Email service integration',
      'CRM & automation tools',
      'Third-party API connections',
    ],
    accent: '#06b6d4',
    link: 'Learn About Integration',
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const cardRefs   = useRef([])

  // Staggered fade-in on scroll
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
      { threshold: 0.12 }
    )

    const header = sectionRef.current?.querySelector('.services__header')
    if (header) observer.observe(header)

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="services" ref={sectionRef}>
      {/* ── Header ── */}
      <div className="services__header">
        <span className="services__label">Our Services</span>
        <h2 className="services__heading">What We Build</h2>
        <div className="services__divider" aria-hidden="true" />
        <p className="services__desc">
          Comprehensive web solutions tailored to your business needs
        </p>
      </div>

      {/* ── Grid ── */}
      <div className="services__grid">
        {SERVICES.map((svc, i) => (
          <article
            key={svc.title}
            className="service-card"
            ref={(el) => (cardRefs.current[i] = el)}
            style={{ '--accent': svc.accent, animationDelay: `${i * 80}ms` }}
          >
            {/* Top accent bar (visible on hover via CSS) */}
            <div className="service-card__top-bar" aria-hidden="true" />

            <span className="service-card__icon" aria-hidden="true">
              {svc.icon}
            </span>

            <h3 className="service-card__title">{svc.title}</h3>
            <p className="service-card__desc">{svc.description}</p>

            <ul className="service-card__features">
              {svc.features.map((f) => (
                <li key={f} className="service-card__feature">
                  <span className="service-card__arrow" aria-hidden="true">→</span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="service-card__link"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {svc.link} <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

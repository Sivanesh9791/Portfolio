import { useEffect, useRef } from 'react'
import './Portfolio.css'

const PROJECTS = [
  {
    number: 'Project 01',
    titlePrefix: 'GIFTINY',
    titleSuffix: ' — E-Commerce Gift Shop',
    badge: 'Full Stack · React · E-Commerce',
    badgeStyle: 'badge--cyan',
    description:
      'An elegant e-commerce platform for curated gift shopping. Features occasion-based filtering, personalization options, secure checkout, and a comprehensive admin panel for store management. Delivered to a boutique gift retailer looking to expand online.',
    stats: [
      { value: '30+',  label: 'Products Catalog' },
      { value: '50+',  label: 'Monthly Orders' },
      { value: '4.8★', label: 'Client Rating' },
    ],
    features: [
      'Occasion-based gift filtering',
      'Gift personalization with preview',
      'Shopping cart with coupon system',
      'Secure payment integration',
      'Admin dashboard with analytics',
    ],
    tech: ['React JS', 'Vite', 'Tailwind CSS', 'React Router v6', 'Recharts', 'Headless UI', 'LocalStorage', 'Vercel'],
    testimonial: {
      quote:
        'Catalyst delivered our gift shop platform in just 3 weeks. The interface is intuitive, performance is excellent, and our customers love it. Highly recommend for e-commerce projects!',
      client: 'Priya Sharma',
      role: 'Founder @ Gift Gala Boutique',
      rating: '⭐⭐⭐⭐⭐ 5.0',
    },
    link: '#',
    accent: 'var(--accent-purple)',
  },
  {
    number: 'Project 02',
    titlePrefix: 'MicroBlog',
    titleSuffix: ' — MERN Social Platform',
    badge: 'Full Stack · MERN · Auth System',
    badgeStyle: 'badge--purple',
    description:
      'A full-stack micro-blogging platform with JWT authentication, role-based access control, and real-time feed updates. Demonstrates complete MERN architecture, security best practices, and scalable system design for a social media startup.',
    stats: [
      { value: '1000+', label: 'Active Users' },
      { value: '50K+',  label: 'Posts Published' },
      { value: '4.9★',  label: 'Client Rating' },
    ],
    features: [
      'JWT-based authentication & role-based authorization',
      'Cookie-based session management',
      'Protected routes & secure API endpoints',
      'Real-time feed updates & notifications',
      'User profiles, following, likes & comments',
    ],
    tech: ['React JS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cookies', 'AWS'],
    testimonial: {
      quote:
        'Working with Catalyst was seamless. The platform is secure, scalable, and well-documented. They even provided training for our team. Exceptional work!',
      client: 'Rajesh Nair',
      role: 'CTO @ Social Connect Inc',
      rating: '⭐⭐⭐⭐⭐ 4.9',
    },
    link: '#',
    accent: 'var(--accent-purple)',
  },
]

export default function Portfolio() {
  const sectionRef = useRef(null)
  const cardRefs   = useRef([])

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

    const header = sectionRef.current?.querySelector('.portfolio__header')
    if (header) observer.observe(header)

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="portfolio" ref={sectionRef}>
      {/* ── Header ── */}
      <div className="portfolio__header">
        <span className="portfolio__label">Our Work</span>
        <h2 className="portfolio__heading">Featured Projects</h2>
        <div className="portfolio__divider" aria-hidden="true" />
        <p className="portfolio__desc">
          Real projects solving real business problems for real clients
        </p>
      </div>

      {/* ── Grid ── */}
      <div className="portfolio__grid">
        {PROJECTS.map((proj, i) => (
          <article
            key={proj.number}
            className="pcard"
            ref={(el) => (cardRefs.current[i] = el)}
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {/* Top accent bar */}
            <div className="pcard__top-bar" aria-hidden="true" />

            {/* Project number */}
            <p className="pcard__number">{proj.number}</p>

            {/* Title */}
            <h3 className="pcard__title">
              <span className="pcard__title-accent">{proj.titlePrefix}</span>
              {proj.titleSuffix}
            </h3>

            {/* Type badge */}
            <div className={`pcard__badge ${proj.badgeStyle}`}>{proj.badge}</div>

            {/* Description */}
            <p className="pcard__desc">{proj.description}</p>

            {/* Stats */}
            <div className="pcard__stats">
              {proj.stats.map(({ value, label }) => (
                <div key={label} className="pcard__stat">
                  <span className="pcard__stat-value">{value}</span>
                  <span className="pcard__stat-label">{label}</span>
                </div>
              ))}
            </div>

            {/* Features */}
            <ul className="pcard__features">
              {proj.features.map((f) => (
                <li key={f} className="pcard__feature">
                  <span className="pcard__check" aria-hidden="true">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="pcard__tech">
              {proj.tech.map((t) => (
                <span key={t} className="pcard__tech-badge">{t}</span>
              ))}
            </div>

            {/* Testimonial */}
            <blockquote className="pcard__testimonial">
              <p className="pcard__testimonial-quote">"{proj.testimonial.quote}"</p>
              <footer className="pcard__testimonial-footer">
                <div>
                  <span className="pcard__testimonial-client">{proj.testimonial.client}</span>
                  <span className="pcard__testimonial-role">{proj.testimonial.role}</span>
                </div>
                <span className="pcard__testimonial-stars">{proj.testimonial.rating}</span>
              </footer>
            </blockquote>

            {/* CTA */}
            <a
              href={proj.link}
              className="pcard__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

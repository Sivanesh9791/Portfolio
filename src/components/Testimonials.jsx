import { useEffect, useRef } from 'react'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    stars: 5,
    rating: '5.0',
    quote:
      'Professional, reliable, and incredibly talented. Catalyst built our entire e-commerce platform and went above expectations. Quick turnaround, great communication, and outstanding technical skills. We\'ve already hired them for our next project!',
    client: 'Sarah Mitchell',
    title: 'CEO, Digital Retail Solutions',
    project: 'E-Commerce Platform',
  },
  {
    stars: 5,
    rating: '5.0',
    quote:
      'Our startup needed a complex SaaS dashboard. Catalyst not only delivered on time but also provided valuable technical insights that improved our product roadmap. They\'re not just a developer, they\'re a business partner.',
    client: 'Amit Patel',
    title: 'Founder, Analytics Pro',
    project: 'Real-Time Analytics Dashboard',
  },
  {
    stars: 5,
    rating: '5.0',
    quote:
      'We had tight deadlines and unclear requirements. Catalyst stayed flexible, communicated constantly, and delivered a product that exceeded our vision. Truly impressed with their professionalism and technical depth.',
    client: 'Lisa Chen',
    title: 'Product Manager, FinTech Startup',
    project: 'Payment Integration API',
  },
  {
    stars: 5,
    rating: '5.0',
    quote:
      'Built 3 projects with Catalyst. Every single one delivered on time, on budget, and with exceptional quality. The code is clean, well-documented, and maintainable. Highly recommended for serious businesses.',
    client: 'Marcus Thompson',
    title: 'VP Engineering, B2B SaaS Company',
    project: 'Multi-Project Engagement',
  },
  {
    stars: 5,
    rating: '5.0',
    quote:
      'From initial consultation to post-launch support, Catalyst was exceptional. They understand not just technology but also business goals. Our investment paid off 10x. This is the freelancer you want on your team.',
    client: 'Elena Rodriguez',
    title: 'Founder, E-Learning Platform',
    project: 'Course Management System',
  },
]

export default function Testimonials() {
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

    const header = sectionRef.current?.querySelector('.testimonials__header')
    if (header) observer.observe(header)

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      {/* ── Header ── */}
      <div className="testimonials__header">
        <span className="testimonials__label">Client Love</span>
        <h2 className="testimonials__heading">Trusted by 500+ Clients</h2>
        <div className="testimonials__divider" aria-hidden="true" />
        <p className="testimonials__desc">
          Real feedback from real clients who&apos;ve seen real results
        </p>
      </div>

      {/* ── Grid ── */}
      <div className="testimonials__grid">
        {TESTIMONIALS.map((t, i) => (
          <article
            key={t.client}
            className="tcard"
            ref={(el) => (cardRefs.current[i] = el)}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {/* Stars */}
            <div className="tcard__stars" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.stars }).map((_, idx) => (
                <span key={idx} aria-hidden="true">⭐</span>
              ))}
            </div>

            {/* Quote */}
            <p className="tcard__quote">"{t.quote}"</p>

            {/* Divider */}
            <hr className="tcard__divider" />

            {/* Client info */}
            <div className="tcard__client">
              <span className="tcard__name">{t.client}</span>
              <span className="tcard__title">{t.title}</span>
              <span className="tcard__project">{t.project}</span>
            </div>
          </article>
        ))}
      </div>

      {/* ── CTA ── */}
      <a
        href="https://www.fiverr.com"
        target="_blank"
        rel="noopener noreferrer"
        className="testimonials__cta"
      >
        View all 500+ client reviews on Fiverr ↗
      </a>
    </section>
  )
}

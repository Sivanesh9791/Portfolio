import { useEffect, useRef } from 'react'
import './WhyChoose.css'

const BENEFITS = [
  {
    icon: '🏅',
    title: 'Proven Track Record',
    points: [
      '500+ successful projects delivered',
      '4.9★ average client rating',
      '100% on-time delivery rate',
      '5+ years of expertise',
    ],
  },
  {
    icon: '💡',
    title: 'Business-First Approach',
    points: [
      'Not just coding, solving problems',
      'Strategic technical guidance',
      'Scalable solutions for growth',
      'ROI-focused development',
    ],
  },
  {
    icon: '🔧',
    title: 'Full-Stack Expertise',
    points: [
      'Frontend to backend to deployment',
      'Database design & optimization',
      'API architecture & integration',
      'DevOps & infrastructure',
    ],
  },
  {
    icon: '💬',
    title: 'Clear Communication',
    points: [
      'Weekly status updates',
      'Transparent pricing & timelines',
      'Responsive to feedback (24/7)',
      'Bilingual support available',
    ],
  },
  {
    icon: '⚡',
    title: 'Quality & Performance',
    points: [
      'Clean, maintainable code',
      'Performance-optimized apps',
      'SEO-friendly web solutions',
      'Mobile-responsive design',
    ],
  },
  {
    icon: '🛡️',
    title: 'Post-Launch Support',
    points: [
      '6-month free maintenance',
      'Bug fixes & updates included',
      'Technical documentation',
      'Team training provided',
    ],
  },
]

export default function WhyChoose() {
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

    const header = sectionRef.current?.querySelector('.whychoose__header')
    if (header) observer.observe(header)

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-choose" className="whychoose" ref={sectionRef}>
      {/* ── Header ── */}
      <div className="whychoose__header">
        <span className="whychoose__label">Why Choose Us</span>
        <h2 className="whychoose__heading">Why 500+ Clients Trust Catalyst</h2>
        <div className="whychoose__divider" aria-hidden="true" />
        <p className="whychoose__desc">
          The Catalyst difference: expertise, reliability, and results
        </p>
      </div>

      {/* ── Grid ── */}
      <div className="whychoose__grid">
        {BENEFITS.map((card, i) => (
          <article
            key={card.title}
            className="wcard"
            ref={(el) => (cardRefs.current[i] = el)}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="wcard__icon" aria-hidden="true">{card.icon}</span>
            <h3 className="wcard__title">{card.title}</h3>
            <ul className="wcard__points">
              {card.points.map((pt) => (
                <li key={pt} className="wcard__point">
                  <span className="wcard__check" aria-hidden="true">✓</span>
                  {pt}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

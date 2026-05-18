import { useEffect, useRef } from 'react'
import './Portfolio.css'
import { ExternalLink, ArrowRight } from 'lucide-react'

const PROJECTS = [
  {
    title: 'AI Analytics Dashboard',
    desc: 'Modern SaaS dashboard with analytics, authentication, team management, and real-time reporting.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Chart.js'],
    metrics: ['Enterprise SaaS', '99.9% Uptime', 'Real-time Sync'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://linear.app',
    caseStudyUrl: 'https://dribbble.com/tags/dashboard-ui',
    badge: 'AI & Analytics',
  },
  {
    title: 'Enterprise CRM Platform',
    desc: 'Business CRM system for managing clients, invoices, sales pipelines, and workflows.',
    tech: ['React', 'Express', 'PostgreSQL', 'Redux'],
    metrics: ['B2B Platform', '40% Faster Workflow', 'Scalable Arch'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://stripe.com',
    caseStudyUrl: 'https://dribbble.com/tags/crm_dashboard',
    badge: 'B2B SaaS',
  },
  {
    title: 'Modern E-Commerce System',
    desc: 'Scalable e-commerce platform with secure checkout, product management, and admin dashboard.',
    tech: ['MERN Stack', 'Stripe', 'JWT', 'Cloudinary'],
    metrics: ['Retail Tech', '10k+ Daily Users', 'Sub-second Load'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://www.shopify.com',
    caseStudyUrl: 'https://dribbble.com/tags/ecommerce_website',
    badge: 'E-Commerce',
  },
  {
    title: 'Real-Time Team Workspace',
    desc: 'Collaborative productivity platform with chat, task tracking, notifications, and workspace management.',
    tech: ['React', 'Socket.io', 'Firebase', 'Tailwind CSS'],
    metrics: ['Team Collaboration', 'Zero Latency', 'Offline Support'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://vercel.com',
    caseStudyUrl: 'https://dribbble.com/tags/team_dashboard',
    badge: 'Collaboration',
  },
  {
    title: 'Business Automation Platform',
    desc: 'Custom automation system for workflows, scheduling, reporting, and operational management.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'REST API'],
    metrics: ['Process Automation', 'Auto-Scaling', 'SOC2 Compliant'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://www.framer.com',
    caseStudyUrl: 'https://dribbble.com/tags/saas_dashboard',
    badge: 'Automation',
  },
]

export default function Portfolio() {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
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
      {/* Background Glow */}
      <div className="portfolio__glow portfolio__glow--1"></div>
      <div className="portfolio__glow portfolio__glow--2"></div>

      {/* Header */}
      <div className="portfolio__header">
        <span className="portfolio__label">Featured Work</span>
        <h2 className="portfolio__heading">Projects Built for Real Business Growth</h2>
        <p className="portfolio__desc">
          Modern full-stack applications designed for scalability, performance, and premium user experiences.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="portfolio__grid">
        {PROJECTS.map((proj, i) => (
          <article
            key={proj.title}
            className="pcard"
            ref={(el) => { cardRefs.current[i] = el }}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {/* Real Image Preview */}
            <div className="pcard__image-container">
              <img src={proj.image} alt={proj.title} className="pcard__image" loading="lazy" />
              <div className="pcard__image-overlay"></div>
              <div className="pcard__badge">{proj.badge}</div>
            </div>

            {/* Content */}
            <div className="pcard__content">
              <h3 className="pcard__title">{proj.title}</h3>
              <p className="pcard__desc">{proj.desc}</p>

              {/* Metrics / Info replacing GitHub */}
              <ul className="pcard__metrics">
                {proj.metrics.map((metric, idx) => (
                  <li key={idx} className="pcard__metric-item">
                    <span className="pcard__metric-dot"></span>
                    {metric}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="pcard__tech">
                {proj.tech.map((tech) => (
                  <span key={tech} className="pcard__tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pcard__actions">
                <a
                  href={proj.caseStudyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="pcard__btn pcard__btn--secondary"
                >
                  <span>Case Study</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="pcard__btn pcard__btn--primary"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
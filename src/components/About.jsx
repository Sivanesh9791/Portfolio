import { useEffect, useRef } from 'react'
import './About.css'

const CREDENTIALS = [
  {
    icon: '🎓',
    label: 'Experience',
    value: '5+ Years',
    description: 'Web development and architecture',
  },
  {
    icon: '🚀',
    label: 'Projects',
    value: '500+',
    description: 'Successful projects delivered',
  },
  {
    icon: '😊',
    label: 'Clients',
    value: '500+',
    description: 'Satisfied and returning clients',
  },
  {
    icon: '⭐',
    label: 'Rating',
    value: '4.9★',
    description: 'Average client satisfaction score',
  },
]

export default function About() {
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

    const targets = sectionRef.current?.querySelectorAll('.about__animate')
    targets?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      {/* ── Header ── */}
      <div className="about__header about__animate">
        <span className="about__label">About Catalyst</span>
        <h2 className="about__heading">Sivanesh Kumar M</h2>
        <p className="about__subheading">
          Full-Stack Web Developer &amp; Business Solutions Architect
        </p>
        <div className="about__divider" aria-hidden="true" />
      </div>

      {/* ── Two-column body ── */}
      <div className="about__body">
        {/* Left — Bio */}
        <div className="about__bio about__animate">
          <p className="about__para">
            Hi, I&apos;m Sivanesh Kumar M, and I&apos;ve been building web applications for 5+
            years. What started as a passion for coding has evolved into a mission: help
            businesses solve problems and scale through technology.
          </p>

          <p className="about__para">
            I&apos;ve worked with startups launching their first MVP to established companies
            scaling their platforms. Whether it&apos;s a sleek e-commerce site or a complex SaaS
            dashboard, I bring the same dedication to every project.
          </p>

          <div className="about__philosophy">
            <p className="about__philosophy-heading">My Philosophy:</p>
            <p className="about__philosophy-text">
              Code is not just about functionality—it&apos;s about creating experiences. I believe
              in clean, maintainable code that scales with your business, and I prioritize your
              success above all else.
            </p>
          </div>

          <p className="about__para">
            When I&apos;m not coding, I&apos;m learning new technologies, mentoring junior developers,
            and staying updated with industry trends. Always growing, always improving.
          </p>

          <a href="#contact" className="about__cta">
            Ready to discuss your project?
          </a>
        </div>

        {/* Right — Credentials */}
        <div className="about__credentials">
          {CREDENTIALS.map((cred, i) => (
            <div
              key={cred.label}
              className="cred-card about__animate"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="cred-card__icon" aria-hidden="true">{cred.icon}</span>
              <div className="cred-card__text">
                <span className="cred-card__label">{cred.label}</span>
                <span className="cred-card__value">{cred.value}</span>
                <span className="cred-card__desc">{cred.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

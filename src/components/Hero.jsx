import './Hero.css'

const STATS = [
  { value: '500+', label: 'Projects Completed' },
  { value: '500+', label: 'Satisfied Clients' },
  { value: '4.9★', label: 'Client Rating' },
  { value: '5+',   label: 'Years Expertise' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* ── Background layer ── */}
      <div className="hero__bg">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__glow" aria-hidden="true" />
      </div>

      {/* ── Content ── */}
      <div className="hero__content">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" aria-hidden="true" />
          Available for Freelance
        </div>

        {/* Heading */}
        <h1 className="hero__heading">
          Custom Web Solutions
          <br />
          <span className="hero__heading-gradient">Built for Growth</span>
        </h1>

        {/* Sub-heading */}
        <p className="hero__sub">
          From concept to launch, I build scalable, high-performance web
          applications that drive real business results. E-commerce platforms,
          SaaS dashboards, REST APIs, and everything in between.
        </p>

        {/* CTA Buttons */}
        <div className="hero__ctas">
          <button
            className="hero__btn hero__btn--primary"
            onClick={() => scrollTo('portfolio')}
          >
            View My Work
          </button>
          <button
            className="hero__btn hero__btn--ghost"
            onClick={() => scrollTo('contact')}
          >
            Start Your Project
          </button>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          {STATS.map(({ value, label }) => (
            <div key={label} className="hero__stat">
              <span className="hero__stat-value">{value}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

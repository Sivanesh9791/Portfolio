import './Projects.css';
import useIntersectionObserver from '../utils/useIntersectionObserver';

const projects = [
  {
    number: 'Project 01',
    titleAccent: 'GIFTINY',
    titleRest: '— E-Commerce Gift Shop',
    accentPart: 'Gift Shop',
    badge: 'Full Stack · React · E-Commerce',
    description:
      'GIFTINY is a full-featured e-commerce gift platform built for a seamless gifting experience. It supports occasion-based browsing, personalised gift curation, and a robust admin workflow. The app is fully deployed on Vercel with persistent cart state and coupon-powered checkout.',
    features: [
      'Occasion-based filtering & gift personalisation',
      'Cart management & secure checkout flow',
      'Admin panel with product CRUD & order tracking',
      'Coupon system & revenue analytics dashboard',
      'Customer management module',
    ],
    tech: [
      'React JS', 'Vite', 'Tailwind CSS', 'React Router v6',
      'Recharts', 'Headless UI', 'LocalStorage', 'Vercel',
    ],
  },
  {
    number: 'Project 02',
    titleAccent: 'MicroBlog',
    titleRest: '— MERN Social App',
    accentPart: 'MicroBlog',
    badge: 'Full Stack · MERN · Auth System',
    description:
      'MicroBlog is a full-stack social blogging application powered by the MERN stack. It features a secure JWT + cookie-based auth system with role-based access control and fully protected API routes. The frontend and backend are cleanly separated with optimised API communication for a smooth user experience.',
    features: [
      'JWT-based authentication & role-based authorization',
      'Cookie-based session management & protected routes',
      'RESTful API design with frontend integration',
      'Optimized API calls for performance',
      'Clean separation of concerns across the stack',
    ],
    tech: [
      'React JS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cookies',
    ],
  },
];

export default function Projects() {
  const ref = useIntersectionObserver({ threshold: 0.08 });
  return (
    <section id="projects" className="projects-section fade-in" ref={ref}>
      <div className="projects-container">

        {/* Section Header */}
        <div className="projects-header fade-in-up">
          <span className="projects-label">My Work</span>
          <h2 className="projects-heading">Featured Projects</h2>
          <div className="projects-divider" />
          <p className="projects-description">
            A selection of real-world projects I&apos;ve designed, built, and shipped — each one solving a distinct problem with a purposeful tech stack.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
              {/* Top gradient accent line (visible on hover via CSS) */}
              <div className="project-card-bar" />

              {/* Number */}
              <p className="project-number">{project.number}</p>

              {/* Title */}
              <h3 className="project-title">
                <span className="proj-accent">{project.titleAccent}</span>
                {project.titleRest}
              </h3>

              {/* Badge */}
              <span className="project-type-badge">{project.badge}</span>

              {/* Description */}
              <p className="project-desc">{project.description}</p>

              {/* Features */}
              <ul className="feature-list">
                {project.features.map((f, fi) => (
                  <li key={fi}>{f}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="project-tech">
                {project.tech.map((t, ti) => (
                  <span key={ti} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

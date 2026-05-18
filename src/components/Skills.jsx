import './Skills.css';
import useIntersectionObserver from '../utils/useIntersectionObserver';

export default function Skills() {
  const ref = useIntersectionObserver({ threshold: 0.1 });
  const skillGroups = [
    {
      title: 'Frontend',
      color: 'accent2',
      colorValue: '#a78bfa',
      skills: ['React JS', 'Vite', 'Tailwind CSS', 'React Router v6', 'Headless UI', 'Recharts'],
    },
    {
      title: 'Backend',
      color: 'accent3',
      colorValue: '#38bdf8',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Cookies', 'RBAC'],
    },
    {
      title: 'Database',
      color: 'green',
      colorValue: '#34d399',
      skills: ['MongoDB', 'Mongoose', 'LocalStorage'],
    },
    {
      title: 'Tools & Deploy',
      color: 'amber',
      colorValue: '#fbbf24',
      skills: ['Git & GitHub', 'Vercel', 'VS Code', 'Postman'],
    },
  ];

  return (
    <section id="skills" className="skills-section fade-in" ref={ref}>
      <div className="skills-container">
        {/* Section Header */}
        <div className="skills-header">
          <div className="skills-label">Tech Stack</div>
          
          <h2 className="skills-heading">Skills & Technologies</h2>
          
          <div className="skills-divider"></div>
          
          <p className="skills-description">
            A focused set of tools and technologies I use to build scalable, efficient, and user-friendly web applications. I'm constantly learning and staying updated with the latest industry trends.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div key={index} className="skill-group">
              {/* Group Title with Colored Dot */}
              <div className="skill-group-header">
                <span 
                  className="skill-dot" 
                  style={{ backgroundColor: group.colorValue }}
                ></span>
                <h3 className="skill-group-title">{group.title}</h3>
              </div>

              {/* Skill Tags */}
              <div className="skill-tags">
                {group.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

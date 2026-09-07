const experience = [
  {
    date: 'Jan - Aug 2026',
    company: 'AgRobotics',
    role: 'Mechanical Engineer Intern',
    note: '7-DoF arm, drive units, field data systems, and low-level controls.',
  },
  {
    date: 'Aug 2023 - Present',
    company: 'Purdue ACM SIGBots',
    role: 'Lead Design Engineer',
    note: 'Led 60+ students across six competitive robotics platforms.',
  },
  {
    date: 'Aug 2025 - Present',
    company: 'ASME Energy - Fuel Cell',
    role: 'Mechanical Engineer',
    note: 'Design evaluation and fabrication planning for a 200W hydrogen fuel cell.',
  },
  {
    date: 'Jun - Aug 2025',
    company: 'ACS System Associates',
    role: 'Project Engineer Intern',
    note: 'HVAC estimating, vendor coordination, inventory, and jobsite logistics.',
  },
  {
    date: 'Aug - Dec 2024',
    company: 'Purdue Semiconductor Packaging Lab',
    role: 'Undergraduate Research Fellow',
    note: '3D fluid topology optimization and SLA manifold prototypes for CES 2025.',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="content-page experience-page scroll-section" aria-labelledby="experience-title">
      <header className="page-intro compact-intro">
        <span className="eyebrow">Experience</span>
        <h2 id="experience-title">Built in the field.</h2>
      </header>

      <section className="experience-list" aria-label="Professional experience">
        {experience.map((item, index) => (
          <article className="experience-row" key={item.company}>
            <span className="item-number">{String(index + 1).padStart(2, '0')}</span>
            <div><h3>{item.company}</h3><p>{item.role}</p></div>
            <p className="experience-note">{item.note}</p>
            <time>{item.date}</time>
          </article>
        ))}
      </section>
    </section>
  );
}

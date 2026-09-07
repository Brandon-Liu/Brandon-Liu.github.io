const experience = [
  {
    date: 'Jan - Aug 2026',
    company: 'agrobotics',
    url: 'https://agrobotics.com/',
    role: 'Mechanical Engineer Intern',
    note: 'Worked on robotic arms, drive systems, and controls.',
  },
  {
    date: 'Aug 2023 - Present',
    company: 'purdue sigbots',
    url: 'https://purduesigbots.com/',
    role: 'Lead Design Engineer',
    note: 'Led 60+ students building six competition robots.',
  },
  {
    date: 'Aug 2025 - Present',
    company: 'Purdue ASME',
    url: 'https://www.purdueasme.com/',
    role: 'Mechanical Engineer',
    note: 'Evaluated designs and planned fabrication for a 200W hydrogen fuel cell.',
  },
  {
    date: 'Jun - Aug 2025',
    company: 'ACS System Associates',
    url: 'https://www.acssystem.com/',
    role: 'Project Engineer Intern',
    note: 'Supported HVAC estimates, vendor coordination, and jobsite logistics.',
  },
  {
    date: 'Aug - Dec 2024',
    company: 'Advanced Packaging and Semiconductor Lab at Purdue',
    url: 'https://www.can-wu.com/home',
    role: 'Undergraduate Research Fellow',
    note: 'Optimized fluid flow and built 3D-printed prototypes for CES 2025.',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="content-page experience-page scroll-section" aria-labelledby="experience-title">
      <div className="experience-content">
        <h2 id="experience-title">Experience</h2>
        <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-row" key={item.company}>
            <h3><a className="organization-link" href={item.url} target="_blank" rel="noreferrer">{item.company}</a></h3>
            <div className="experience-meta">
              <p className="experience-role">{item.role}</p>
              <p className="experience-date">{item.date}</p>
            </div>
            <p className="experience-note">{item.note}</p>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  ['CAD 01', '7-DoF Humanoid Arm', '55% lighter / 63% more manipulable'],
  ['CAD 02', 'Agricultural Drive Unit', '40% lower cost / 250% more stable'],
  ['CAD 03', 'Data Collection Unit', 'Six built / 90% field uptime'],
  ['CAD 04', 'Competition Platform', 'CAD through fabrication and testing'],
  ['CAD 05', 'Differential Lift', 'Custom competitive mechanism'],
  ['CAD 06', 'Drive Chassis', 'Designed and fabricated in-house'],
  ['CAD 07', 'End Effector', 'Purpose-built manipulation hardware'],
];

export function RoboticsSection() {
  return (
    <section id="robotics" className="content-page robotics-page scroll-section" aria-labelledby="robotics-title">
      <div className="robotics-content">
        <h2 id="robotics-title">Robotics</h2>
        <p className="robotics-summary">11 robots built · 2 world titles · 20+ regional awards</p>
        <div className="robot-project-list">
        {projects.map(([cad, title, result]) => (
          <article className="robot-project" key={cad}>
            <h3>{title}</h3>
            <p>{result}</p>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}

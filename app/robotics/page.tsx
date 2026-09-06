const projects = [
  ['CAD 01', '7-DoF Humanoid Arm', '55% lighter / 63% more manipulable'],
  ['CAD 02', 'Agricultural Drive Unit', '40% lower cost / 250% more stable'],
  ['CAD 03', 'Data Collection Unit', 'Six built / 90% field uptime'],
  ['CAD 04', 'Competition Platform', 'CAD through fabrication and testing'],
  ['CAD 05', 'Differential Lift', 'Custom competitive mechanism'],
  ['CAD 06', 'Drive Chassis', 'Designed and fabricated in-house'],
  ['CAD 07', 'End Effector', 'Purpose-built manipulation hardware'],
];

export default function RoboticsPage() {
  return (
    <main className="content-page robotics-page">
      <header className="page-intro robotics-intro">
        <span className="eyebrow">Robotics</span>
        <h1>Eleven robots.<br />Two world titles.</h1>
        <p>Five world championship awards and more than twenty regional awards.</p>
      </header>

      <section className="robot-project-grid" aria-label="Selected robotics work">
        {projects.map(([cad, title, result]) => (
          <article className="robot-project" key={cad}>
            <span>{cad}</span>
            <div><h2>{title}</h2><p>{result}</p></div>
          </article>
        ))}
      </section>
    </main>
  );
}

const robots = [
  'CAD 1',
  'CAD 2',
  'CAD 3',
  'CAD 4',
  'CAD 5',
  'CAD 6',
  'CAD 7',
];

export default function RoboticsPage() {
  return (
    <main className="page page-robotics">
      <div className="page-mark">03 / Robotics</div>
      <div className="robot-grid">
        {robots.map((robot, index) => (
          <figure key={robot}>
            <div className="robot-card-placeholder">{robot}</div>
            <figcaption>{String(index + 1).padStart(2, '0')}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}

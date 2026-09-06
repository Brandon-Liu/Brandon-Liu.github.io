const robots = [
  { src: '/mechanism-study.png', alt: 'Six-wheel field rover' },
  { src: '/robot-field.png', alt: 'Agricultural field robot' },
  { src: '/robot-arm.png', alt: 'Autonomous mobile manipulator' },
];

export default function RoboticsPage() {
  return (
    <main className="page page-robotics">
      <div className="page-mark">03 / Robotics</div>
      <div className="robot-grid">
        {robots.map((robot, index) => (
          <figure key={robot.src}>
            <img src={robot.src} alt={robot.alt} />
            <figcaption>{String(index + 1).padStart(2, '0')}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}

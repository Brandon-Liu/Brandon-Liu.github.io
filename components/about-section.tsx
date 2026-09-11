import Image from 'next/image';

const coursework = [
  'Autonomous Systems',
  'Heat and Mass Transfer',
  'Controls 2',
  'Machine Design',
  'Partial Differential Equations',
  'Linear Circuit Analysis',
  'Thermodynamics',
  'Mobile Microrobotics',
  'Controls 1',
  'Mechanics of Materials',
  'Probability',
  'Introductory Fluid Mechanics',
  'Introduction to Statistics',
  'Dynamics',
  'Statics',
  'C Programming',
  'Structure and Properties of Materials',
  'Differential Equations',
  'Linear Algebra',
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="content-page about-me-section scroll-section"
      aria-labelledby="about-title"
    >
      <div className="about-me-content">
        <h2 id="about-title">About Me</h2>
        <div className="about-me-profile">
          <div className="about-me-portrait">
            <Image
              src="/brandon-liu-green.png"
              alt="Brandon Liu"
              width={280}
              height={280}
            />
          </div>
          <div className="about-me-copy">
            <p>
              I’m Brandon, a Senior at <strong>Purdue University</strong> studying{' '}
              <strong>Mechanical Engineering</strong> and Statistics
            </p>
            <p>
              I’m into robotics, climbing, skiing, mountain biking and I love
              rolling bowl.
            </p>
            <p className="coursework-preview">
              <strong>Relevant coursework:</strong> Autonomous Systems, Heat and
              Mass Transfer, Controls 2, Machine Design, Partial Differential
              Equations, Linear Circuit Analysis …
            </p>
            <details className="coursework-details">
              <summary>View all courses</summary>
              <ul>
                {coursework.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}

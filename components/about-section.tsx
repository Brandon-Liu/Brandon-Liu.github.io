import Image from 'next/image';
import { ProfileIntro } from './profile-intro';

const coursework = [
  'Autonomous Systems',
  'Mobile Microrobotics',
  'Controls 1',
  'Controls 2',
  'Statics',
  'Dynamics',
  'Mechanics of Materials',
  'Structure and Properties of Materials',
  'Machine Design',
  'Thermodynamics',
  'Heat and Mass Transfer',
  'Introductory Fluid Mechanics',
  'Linear Circuit Analysis',
  'C Programming',
  'Differential Equations',
  'Partial Differential Equations',
  'Linear Algebra',
  'Probability',
  'Introduction to Statistics',
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
              <ProfileIntro />
            </p>
            <p>
              I’m into robotics, climbing, skiing, mountain biking and I love{' '}
              <a
                className="place-link"
                href="https://maps.app.goo.gl/QddCSwNigy6zTGVF8"
                target="_blank"
                rel="noreferrer"
              >
                rolling bowl
              </a>
              .
            </p>
            <p>
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

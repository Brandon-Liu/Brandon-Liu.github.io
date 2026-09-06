'use client';

import { useEffect, useState } from 'react';

const robots = [
  { label: 'CAD 1', number: '01' },
  { label: 'CAD 2', number: '02' },
  { label: 'CAD 3', number: '03' },
  { label: 'CAD 4', number: '04' },
  { label: 'CAD 5', number: '05' },
  { label: 'CAD 6', number: '06' },
  { label: 'CAD 7', number: '07' },
];

export default function Home() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const update = () => {
      const travel = document.documentElement.scrollHeight - window.innerHeight;
      const progress = travel > 0 ? window.scrollY / travel : 0;
      setActive(Math.min(robots.length - 1, Math.round(progress * (robots.length - 1))));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const showRobot = (index: number) => {
    const travel = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: travel * (index / (robots.length - 1)), behavior: 'smooth' });
  };

  return (
    <main className="home-scroll">
      <section className="robot-stage" aria-label="Robot showcase">
        <div className="robot-frame">
          {robots.map((robot, index) => (
            <div
              key={robot.number}
              className={active === index ? 'robot-placeholder is-active' : 'robot-placeholder'}
              aria-hidden={active !== index}
            >
              {robot.label}
            </div>
          ))}
        </div>

        <div className="robot-dots" aria-label="Choose a robot">
          {robots.map((robot, index) => (
            <button
              key={robot.number}
              className={active === index ? 'is-active' : ''}
              onClick={() => showRobot(index)}
              aria-label={`Show ${robot.label}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

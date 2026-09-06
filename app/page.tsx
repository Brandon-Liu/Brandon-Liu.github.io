'use client';

import { useEffect, useState } from 'react';

const robots = [
  { src: '/mechanism-study.png', alt: 'Six-wheel field rover', number: '01' },
  { src: '/robot-field.png', alt: 'Agricultural field robot', number: '02' },
  { src: '/robot-arm.png', alt: 'Autonomous mobile manipulator', number: '03' },
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
            <img
              key={robot.src}
              className={active === index ? 'robot-image is-active' : 'robot-image'}
              src={robot.src}
              alt={robot.alt}
              aria-hidden={active !== index}
            />
          ))}
        </div>

        <div className="robot-index" aria-live="polite">
          <b>{robots[active].number}</b><span>/</span><span>{String(robots.length).padStart(2, '0')}</span>
        </div>

        <div className="robot-dots" aria-label="Choose a robot">
          {robots.map((robot, index) => (
            <button
              key={robot.number}
              className={active === index ? 'is-active' : ''}
              onClick={() => showRobot(index)}
              aria-label={`Show robot ${index + 1}`}
            />
          ))}
        </div>

        <div className="scroll-hint" aria-hidden="true">Scroll <span>↓</span></div>
      </section>
    </main>
  );
}

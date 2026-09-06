'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, MoveRight } from 'lucide-react';

const sections = [
  { id: 'intro', label: 'Index' },
  { id: 'robotics', label: 'Robotics' },
  { id: 'mechanisms', label: 'Mechanisms' },
  { id: 'work', label: 'Work' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Home() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const panels = Array.from(rail.querySelectorAll<HTMLElement>('[data-panel]'));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(Number((visible.target as HTMLElement).dataset.panel));
      },
      { root: rail, threshold: [0.45, 0.65, 0.85] },
    );

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        rail.scrollBy({ left: event.deltaY, behavior: 'auto' });
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') move(1);
      if (event.key === 'ArrowLeft') move(-1);
    };

    panels.forEach((panel) => observer.observe(panel));
    rail.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    return () => {
      observer.disconnect();
      rail.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [active]);

  const goTo = (id: string) => {
    railRef.current?.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  };

  const move = (direction: number) => {
    const next = Math.max(0, Math.min(sections.length - 1, active + direction));
    goTo(sections[next].id);
  };

  return (
    <main className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => goTo('intro')} aria-label="Return to the first project">
          <span className="brand-name">Brandon Liu</span>
          <span className="brand-rule" />
          <span className="brand-role">Mechanical engineer</span>
        </button>

        <nav className="topnav" aria-label="Portfolio sections">
          {['About', 'Work', 'Robotics', 'Hobbies', 'Contact'].map((item) => {
            const index = sections.findIndex((section) => section.id === item.toLowerCase());
            return (
              <button
                key={item}
                className={active === index ? 'is-active' : ''}
                onClick={() => goTo(item.toLowerCase())}
              >
                {item}
              </button>
            );
          })}
        </nav>
      </header>

      <div className="rail" ref={railRef} aria-label="Brandon Liu project gallery" tabIndex={0}>
        <section className="panel panel-intro" id="intro" data-panel="0">
          <div className="intro-copy">
            <p className="eyebrow">Portfolio · 2026</p>
            <h1>Machines,<br />made thoughtful.</h1>
            <p className="lede">A horizontal archive of robots, mechanisms, software, and side quests by Brandon Liu.</p>
          </div>

          <figure className="hero-machine">
            <span className="orb orb-one" />
            <span className="orb orb-two" />
            <img src="/mechanism-study.png" alt="A field robot from Brandon's mechanism studies" />
            <figcaption>
              <span>01</span>
              <span>Field robotics study</span>
            </figcaption>
          </figure>

          <button className="explore-cue" onClick={() => move(1)}>
            Scroll to explore <MoveRight aria-hidden="true" />
          </button>
        </section>

        <section className="panel project-panel robotics-panel" id="robotics" data-panel="1">
          <div className="panel-heading">
            <p><span>01</span> Robotics</p>
            <p>Systems / Controls / Prototyping</p>
          </div>
          <div className="project-visual full-robot">
            <img src="/mechanism-study.png" alt="Field robot study, full assembly" />
            <div className="callout callout-a"><i />Vision</div>
            <div className="callout callout-b"><i />Mobility</div>
          </div>
          <div className="project-copy">
            <h2>Field Robotics.</h2>
            <p>Building complete robotic systems around reliable motion, sensing, and real-world constraints.</p>
          </div>
        </section>

        <section className="panel project-panel mechanism-panel" id="mechanisms" data-panel="2">
          <div className="panel-heading light-heading">
            <p><span>02</span> Mechanism study</p>
            <p>Detail / Iteration</p>
          </div>
          <div className="detail-grid">
            <div className="detail-image detail-camera">
              <img src="/mechanism-study.png" alt="Detail view of a robot sensing assembly" />
              <span>Optical package</span>
            </div>
            <div className="detail-image detail-wheel">
              <img src="/mechanism-study.png" alt="Detail view of a robot wheel assembly" />
              <span>Suspension module</span>
            </div>
          </div>
          <div className="project-copy light-copy">
            <h2>Mechanisms.</h2>
            <p>Close attention to packaging, serviceability, and the small decisions that make hardware work.</p>
          </div>
        </section>

        <section className="panel work-panel" id="work" data-panel="3">
          <div className="panel-heading light-heading">
            <p><span>03</span> Work</p>
            <p>Experience / Community</p>
          </div>
          <div className="work-title">
            <span>Where ideas</span>
            <span>meet hardware.</span>
          </div>
          <div className="work-list">
            <article>
              <span>01</span>
              <h3>AgRobotics</h3>
              <p>Present</p>
            </article>
            <article>
              <span>02</span>
              <h3>ACM SIGBots</h3>
              <p>2023—</p>
            </article>
          </div>
        </section>

        <section className="panel hobbies-panel" id="hobbies" data-panel="4">
          <div className="panel-heading">
            <p><span>04</span> Off the clock</p>
            <p>Curiosity / Play</p>
          </div>
          <div className="hobby-type" aria-label="Building, exploring, and good food">
            <span>Building</span>
            <span>Exploring</span>
            <span>Good food</span>
          </div>
          <p className="hobby-note">The best projects usually start as a question that refuses to go away.</p>
        </section>

        <section className="panel about-panel" id="about" data-panel="5">
          <div className="panel-heading">
            <p><span>05</span> About</p>
            <p>Brandon Liu</p>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Mechanical engineer · builder</p>
            <h2>I like making complicated machines feel simple.</h2>
            <p>My work sits at the intersection of robotics, controls, and thoughtful machine design.</p>
            <div className="about-links">
              <a href="https://www.linkedin.com/in/brandonliu05/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <button onClick={() => goTo('contact')}>Contact →</button>
            </div>
          </div>
          <button className="back-start" onClick={() => goTo('intro')}>Back to start <ArrowRight aria-hidden="true" /></button>
        </section>

        <section className="panel contact-panel" id="contact" data-panel="6">
          <div className="panel-heading light-heading">
            <p><span>06</span> Contact</p>
            <p>Start a conversation</p>
          </div>
          <div className="contact-watermark" aria-hidden="true">Hello</div>
          <div className="contact-copy">
            <p className="eyebrow">Open to good problems</p>
            <h2>Let&apos;s make<br />something move.</h2>
            <p>For robotics, mechanical design, collaboration, or a good build story—reach out.</p>
          </div>
          <div className="contact-actions">
            <a href="https://www.linkedin.com/in/brandonliu05/" target="_blank" rel="noreferrer">
              <span>01</span><b>LinkedIn</b><i>↗</i>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1" target="_blank" rel="noreferrer">
              <span>02</span><b>Email</b><i>↗</i>
            </a>
          </div>
          <button className="back-start contact-back" onClick={() => goTo('intro')}>Back to start <ArrowRight aria-hidden="true" /></button>
        </section>
      </div>

      <footer className="gallery-controls">
        <div className="progress" aria-hidden="true"><span style={{ width: `${((active + 1) / sections.length) * 100}%` }} /></div>
        <p><b>{String(active + 1).padStart(2, '0')}</b> / {String(sections.length).padStart(2, '0')} <span>{sections[active].label}</span></p>
        <div className="arrow-controls">
          <button onClick={() => move(-1)} disabled={active === 0} aria-label="Previous project"><ArrowLeft /></button>
          <button onClick={() => move(1)} disabled={active === sections.length - 1} aria-label="Next project"><ArrowRight /></button>
        </div>
      </footer>
    </main>
  );
}

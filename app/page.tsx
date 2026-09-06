'use client';

import { useEffect, useState } from 'react';

const sections = ['home', 'about', 'work', 'builds', 'notes', 'contact'] as const;

export default function Home() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return <main><div className="page-shell">
    <aside className="sidebar" aria-label="Portfolio navigation">
      <a className="wordmark" href="#home" aria-label="Brandon Liu, home">B. Liu <span>劉</span></a>
      <nav>{sections.map((section) => <a key={section} href={`#${section}`} className={active === section ? 'active' : ''}>{section[0].toUpperCase() + section.slice(1)}</a>)}</nav>
      <p className="side-note">NYC ↔ West Lafayette<br />EST · 2026</p>
    </aside>

    <div className="content">
      <section id="home" className="hero section">
        <div className="hero-copy"><p className="eyebrow">機械 · robotics · controls</p><h1>I make machines<br />move with intent.</h1><p className="intro">Brandon is a mechanical engineering student at Purdue building at the intersection of robotics, controls, and thoughtful machine design.</p><div className="status"><i /> currently building with AgRobotics</div></div>
        <div className="hero-art" aria-label="Robotic mechanism study"><div className="art-label">機械の研究<br /><span>MECHANISM STUDY № 05</span></div><div className="target-mark">十</div><div className="art-number">01</div></div>
        <p className="scroll-cue">scroll to inspect ↓</p>
      </section>

      <section id="about" className="section split-section"><header><p className="section-num">01 / 自己紹介</p><h2>About</h2></header><div><p className="lead">I like the moment when a sketch becomes a mechanism—and a mechanism becomes something useful.</p><p>I’m a third-year honors mechanical engineering student at Purdue University. My interests sit across controls and robotics, mechanics of materials, and machine design.</p><div className="facts"><span>Based</span><strong>New York / Purdue</strong><span>Studying</span><strong>Mechanical Engineering</strong><span>Curious about</span><strong>Robots that work in the real world</strong></div></div></section>

      <section id="work" className="section split-section"><header><p className="section-num">02 / 経験</p><h2>Work</h2></header><div className="timeline">
        <article><span>now</span><div><h3>AgRobotics</h3><p>Mechanical Engineering</p><small>Designing and developing machines for demanding, real-world environments.</small></div></article>
        <article><span>2023—</span><div><h3>Purdue ACM SIGBots</h3><p>VEXU Robotics</p><small>Building competition robots with a team that became world champions—and earned the World Excellence Award.</small></div></article>
        <article><span>2023—27</span><div><h3>Purdue University</h3><p>Honors Mechanical Engineering</p><small>Controls, mechanics of materials, and machine design.</small></div></article>
      </div></section>

      <section id="builds" className="section projects-section"><header><p className="section-num">03 / 製作</p><h2>Selected builds</h2></header><div className="project-list">
        <article><span className="project-index">01</span><div><h3>VEXU Competition Robots</h3><p>mechanical design · iteration · manufacturing</p></div><span className="arrow">↗</span></article>
        <article><span className="project-index">02</span><div><h3>Field Robotics</h3><p>controls · rugged systems · autonomy</p></div><span className="arrow">↗</span></article>
        <article><span className="project-index">03</span><div><h3>Mechanism Studies</h3><p>CAD · prototyping · mechanics</p></div><span className="arrow">↗</span></article>
      </div></section>

      <section id="notes" className="section notes-section"><p className="section-num">04 / 思考</p><blockquote>“Good engineering should feel inevitable after you see it.”</blockquote><p className="note-copy">A running notebook on mechanisms, robots, materials, and the small decisions that make hardware better.</p></section>
      <section id="contact" className="section contact-section"><p className="section-num">05 / 連絡</p><h2>Let’s build<br />something real.</h2><a href="https://www.linkedin.com/in/brandonliu05/" target="_blank" rel="noreferrer">LinkedIn ↗</a><p className="footer-line">Brandon Liu · mechanical engineer in motion</p></section>
    </div>
  </div></main>;
}

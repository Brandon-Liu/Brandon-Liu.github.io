'use client';

import { useState } from 'react';

const nav = ['Home', 'About', 'Work', 'Projects', 'Thoughts', 'Contact'];

export default function Home() {
  const [page, setPage] = useState('Home');

  return <main className="site">
    <div className="frame">
      <aside>
        <button className="title" onClick={() => setPage('Home')}>{page === 'Home' ? 'B. Liu' : page}</button>
        <nav aria-label="Portfolio pages">
          {nav.map((item) => <button key={item} className={page === item ? 'active' : ''} onClick={() => setPage(item)}>{item}</button>)}
        </nav>
      </aside>

      <section className="panel" aria-live="polite">
        {page === 'Home' && <div className="home-art"><img src="/mechanism-study.png" alt="Archival study of a field robot" /><b>機械工学<br />ロボティクス</b><span>robotics / controls / design</span></div>}
        {page === 'About' && <div className="copy"><h1>hey, i’m brandon</h1><p>I’m a third-year honors mechanical engineering student at Purdue University.</p><p>I’m interested in controls and robotics, mechanics of materials, and machine design. I like turning a sketch into a mechanism—and a mechanism into something useful.</p><p className="small">New York City Metropolitan Area<br />West Lafayette, Indiana</p></div>}
        {page === 'Work' && <div className="copy"><h1>building things that move</h1><div className="row"><b>AgRobotics</b><span>Mechanical Engineering · now</span></div><p>Working on machines built for demanding, real-world environments.</p><div className="row"><b>Purdue ACM SIGBots</b><span>VEXU Robotics · 2023—</span></div><p>World champions and recipients of the VEXU World Excellence Award.</p></div>}
        {page === 'Projects' && <div className="copy"><h1>selected builds</h1><ul><li><b>competition robots</b><span>mechanical design, iteration, manufacturing</span></li><li><b>field robotics</b><span>controls, rugged systems, autonomy</span></li><li><b>mechanism studies</b><span>CAD, prototyping, mechanics</span></li></ul></div>}
        {page === 'Thoughts' && <div className="copy"><h1>thinking in mechanisms</h1><p>good engineering should feel inevitable after you see it.</p><p className="small">notes on robots, materials, machines, and the small decisions that make hardware better.</p></div>}
        {page === 'Contact' && <div className="copy"><h1>let’s build something real</h1><p>Always happy to talk robotics, machine design, and interesting problems.</p><a href="https://www.linkedin.com/in/brandonliu05/" target="_blank" rel="noreferrer">find me on linkedin ↗</a></div>}
      </section>
    </div>
  </main>;
}

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
        {page === 'Home' && <div className="home-art"><img src="/mechanism-study.png" alt="Archival study of a field robot" /></div>}
        {page === 'About' && <div className="copy"><h1>hey, i’m brandon</h1><p>Honors mechanical engineering student at Purdue, interested in controls, robotics, and machine design.</p><p>I like turning sketches into useful machines.</p></div>}
        {page === 'Work' && <div className="copy"><h1>building things that move</h1><div className="row"><b>AgRobotics</b><span>Mechanical Engineering · now</span></div><div className="row"><b>Purdue ACM SIGBots</b><span>VEXU Robotics · 2023—</span></div></div>}
        {page === 'Projects' && <div className="copy"><h1>selected builds</h1><ul><li><b>competition robots</b><span>mechanical design, iteration, manufacturing</span></li><li><b>field robotics</b><span>controls, rugged systems, autonomy</span></li><li><b>mechanism studies</b><span>CAD, prototyping, mechanics</span></li></ul></div>}
        {page === 'Thoughts' && <div className="copy"><h1>thinking in mechanisms</h1><p>good engineering should feel inevitable after you see it.</p></div>}
        {page === 'Contact' && <div className="copy"><h1>say hello</h1><a href="https://www.linkedin.com/in/brandonliu05/" target="_blank" rel="noreferrer">linkedin ↗</a></div>}
      </section>
    </div>
  </main>;
}

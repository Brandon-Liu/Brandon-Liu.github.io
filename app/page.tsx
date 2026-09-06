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
        {page === 'About' && <div className="copy"><h1>mechanical engineering @ purdue</h1><p>robots, controls, and machine design.</p></div>}
        {page === 'Work' && <div className="copy"><div className="row"><b>AgRobotics</b><span>now</span></div><div className="row"><b>ACM SIGBots</b><span>2023—</span></div></div>}
        {page === 'Projects' && <div className="copy"><ul><li><b>competition robots</b></li><li><b>field robotics</b></li><li><b>mechanism studies</b></li></ul></div>}
        {page === 'Thoughts' && <div className="copy"><p>make useful things.</p></div>}
        {page === 'Contact' && <div className="copy"><a href="https://www.linkedin.com/in/brandonliu05/" target="_blank" rel="noreferrer">linkedin ↗</a></div>}
      </section>
    </div>
  </main>;
}

'use client';

import { useState } from 'react';

const nav = ['Home', 'Work', 'Robotics', 'Hobbies', 'Blog'];

export default function Home() {
  const [page, setPage] = useState('Home');

  return <main className="site">
    <div className="socials" aria-label="Social links">
      <a href="https://www.linkedin.com/in/brandonliu05/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span>in</span></a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1" target="_blank" rel="noreferrer" aria-label="Gmail"><span>✉</span></a>
      <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X"><span>𝕏</span></a>
    </div>
    <div className="frame">
      <aside>
        <button className="title" onClick={() => setPage('Home')}>Brandon Liu</button>
        <nav aria-label="Portfolio pages">
          {nav.map((item) => <button key={item} className={page === item ? 'active' : ''} onClick={() => setPage(item)}>{item}</button>)}
        </nav>
      </aside>

      <section className="panel" aria-live="polite">
        {page === 'Home' && <div className="home-art"><img src="/mechanism-study.png" alt="Archival study of a field robot" /></div>}
        {page === 'Work' && <div className="copy"><div className="row"><b>AgRobotics</b><span>now</span></div><div className="row"><b>ACM SIGBots</b><span>2023—</span></div></div>}
        {page === 'Robotics' && <div className="copy"><ul><li><b>competition robots</b></li><li><b>field robotics</b></li><li><b>mechanism studies</b></li></ul></div>}
        {page === 'Hobbies' && <div className="copy"><p>building. exploring. good food.</p></div>}
        {page === 'Blog' && <div className="copy"><p>notes coming soon.</p></div>}
      </section>
    </div>
  </main>;
}

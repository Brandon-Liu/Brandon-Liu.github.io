export default function ResumePage() {
  return (
    <main className="page page-resume">
      <div className="page-mark">📄 / Resume</div>
      <header className="resume-head">
        <h1>Brandon Liu</h1>
        <p>Mechanical Engineer</p>
      </header>
      <section className="resume-section">
        <span>Experience</span>
        <article><h2>AgRobotics</h2><p>Present</p></article>
        <article><h2>ACM SIGBots</h2><p>2023—</p></article>
      </section>
      <section className="resume-section">
        <span>Focus</span>
        <p>Robotics · Controls · Machine design</p>
      </section>
    </main>
  );
}

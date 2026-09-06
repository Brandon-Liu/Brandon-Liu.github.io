export default function AboutPage() {
  return (
    <main className="content-page about-page">
      <header className="page-intro">
        <span className="eyebrow">About</span>
        <h1>Mechanical engineer.<br />Robot builder.</h1>
      </header>

      <section className="about-summary" aria-label="Profile">
        <p>
          Brandon designs practical robotic systems from first sketch through CAD,
          fabrication, controls, and field testing.
        </p>
        <dl className="fact-list">
          <div><dt>Education</dt><dd>Purdue University</dd></div>
          <div><dt>Degree</dt><dd>B.S. Mechanical Engineering</dd></div>
          <div><dt>Minor</dt><dd>Statistics</dd></div>
          <div><dt>Graduation</dt><dd>May 2027</dd></div>
        </dl>
      </section>

      <div className="skill-strip" aria-label="Technical skills">
        <span>SolidWorks</span><span>NX</span><span>Fusion 360</span><span>Onshape</span>
        <span>GD&amp;T</span><span>DFM</span><span>MATLAB</span><span>C++</span>
      </div>
    </main>
  );
}

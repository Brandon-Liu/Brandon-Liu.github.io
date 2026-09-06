import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="page page-about">
      <div className="page-mark">01 / About</div>
      <div className="about-layout">
        <h1>Machines<br />made<br />thoughtful.</h1>
        <div className="page-aside">
          <p>Mechanical engineer working across robotics, controls, and machine design.</p>
          <Link href="/contact">Contact →</Link>
        </div>
      </div>
    </main>
  );
}

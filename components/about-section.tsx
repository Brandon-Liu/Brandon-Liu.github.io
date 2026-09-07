import Image from 'next/image';

export function AboutSection() {
  return (
    <section
      id="about"
      className="content-page about-me-section scroll-section"
      aria-labelledby="about-title"
    >
      <div className="about-me-content">
        <h2 id="about-title">About Me</h2>
        <div className="about-me-profile">
          <div className="about-me-portrait">
            <Image
              src="/brandon-liu-green.png"
              alt="Brandon Liu"
              width={280}
              height={280}
            />
          </div>
          <div className="about-me-copy">
            <p>I’m Brandon, a Mechanical Engineering student at Purdue.</p>
            <p>I’m into robotics, climbing, and Szechuan spice.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

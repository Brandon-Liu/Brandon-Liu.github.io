export function ContactSection() {
  return (
    <section id="contact" className="content-page contact-page scroll-section" aria-labelledby="contact-title">
      <header className="page-intro contact-intro">
        <span className="eyebrow">Contact</span>
        <h2 id="contact-title">Let&apos;s build<br />something real.</h2>
      </header>

      <div className="contact-grid">
        <a className="contact-card" href="mailto:liu3681@purdue.edu">
          <span>Email</span><strong>liu3681@purdue.edu</strong><i>↗</i>
        </a>
        <a className="contact-card" href="https://www.linkedin.com/in/brandonliu05/" target="_blank" rel="noreferrer">
          <span>LinkedIn</span><strong>brandonliu05</strong><i>↗</i>
        </a>
        <a className="contact-card" href="/brandon-liu-resume.pdf" target="_blank" rel="noreferrer">
          <span>Resume</span><strong>Open PDF</strong><i>↗</i>
        </a>
      </div>

      <p className="contact-location">Chatham, New Jersey / West Lafayette, Indiana</p>
    </section>
  );
}

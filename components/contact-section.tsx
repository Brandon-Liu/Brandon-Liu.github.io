export function ContactSection() {
  return (
    <section id="contact" className="content-page contact-page scroll-section" aria-label="Contact">
      <div className="contact-grid">
        <a className="contact-card" href="mailto:liu3681@purdue.edu">
          <strong>Email</strong>
        </a>
        <a className="contact-card" href="https://www.linkedin.com/in/brandonliu05/" target="_blank" rel="noreferrer">
          <strong>LinkedIn</strong>
        </a>
        <span className="contact-card" role="link" aria-disabled="true" title="GitHub profile link coming soon">
          <strong>GitHub</strong>
        </span>
        <a className="contact-card" href="/brandon-liu-resume.pdf" target="_blank" rel="noreferrer">
          <strong>Resume</strong>
        </a>
      </div>
    </section>
  );
}

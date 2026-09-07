export function ContactSection() {
  return (
    <section
      id="contact"
      className="content-page contact-page scroll-section"
      aria-label="Contact"
    >
      <div className="contact-options">
        <a href="mailto:liu3681@purdue.edu">Email</a>
        <a
          href="https://www.linkedin.com/in/brandonliu05/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <span aria-disabled="true" title="GitHub profile link coming soon">
          GitHub
        </span>
        <a href="/brandon-liu-resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </section>
  );
}

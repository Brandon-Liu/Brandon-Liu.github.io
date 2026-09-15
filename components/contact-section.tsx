import { PrintButton } from './print-button';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="content-page contact-page scroll-section"
      aria-label="Contact"
    >
      <h2 className="print-only">Contact</h2>
      <div className="contact-options">
        <a href="mailto:liu3681@purdue.edu">Email</a>
        <a
          href="https://www.linkedin.com/in/brandonliu05/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Brandon-Liu"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="contact-resume"
          href="/brandon-liu-resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        <PrintButton />
      </div>
    </section>
  );
}

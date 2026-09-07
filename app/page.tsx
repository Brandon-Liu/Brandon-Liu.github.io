'use client';

import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, type KeyboardEvent } from 'react';

const featuredProjects = ['CAD 1', 'CAD 2', 'CAD 3'];
const cadProjects = ['CAD 2', 'CAD 3', 'CAD 4', 'CAD 5', 'CAD 6', 'CAD 7'];

export default function Home() {
  const [active, setActive] = useState(0);

  const showPrevious = () => setActive((current) => (current - 1 + featuredProjects.length) % featuredProjects.length);
  const showNext = () => setActive((current) => (current + 1) % featuredProjects.length);

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowLeft') showPrevious();
    if (event.key === 'ArrowRight') showNext();
  };

  return (
    <main className="home-showcase">
      <h1 className="sr-only">Brandon Liu CAD showcase</h1>

      <section className="cad-feature" aria-label="Featured CAD projects" onKeyDown={handleKeyDown}>
        <div className="featured-cad-stage" aria-live="polite">
          {featuredProjects.map((project, index) => (
            <div className={active === index ? 'featured-cad is-active' : 'featured-cad'} aria-hidden={active !== index} key={project}>
              {project}
            </div>
          ))}
        </div>

        <button className="feature-arrow feature-arrow-left" onClick={showPrevious} aria-label="Show previous featured CAD project">
          <ChevronLeft aria-hidden="true" />
        </button>
        <button className="feature-arrow feature-arrow-right" onClick={showNext} aria-label="Show next featured CAD project">
          <ChevronRight aria-hidden="true" />
        </button>

        <div className="feature-dots" aria-label="Choose a featured CAD project">
          {featuredProjects.map((project, index) => (
            <button
              className={active === index ? 'is-active' : ''}
              key={project}
              onClick={() => setActive(index)}
              aria-label={`Show ${project}`}
              aria-current={active === index ? 'true' : undefined}
            />
          ))}
        </div>

        <a className="portfolio-scroll-cue" href="#portfolio">
          <span>Portfolio</span>
          <ChevronDown aria-hidden="true" />
        </a>
      </section>

      <section className="cad-gallery" id="portfolio" aria-label="More CAD projects">
        <div className="cad-grid">
          {cadProjects.map((project) => (
            <article className="cad-card" key={project}>
              <span>{project}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

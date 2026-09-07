'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const featuredProjects = ['CAD 1', 'CAD 2', 'CAD 3'];
const cadProjects = ['CAD 2', 'CAD 3', 'CAD 4', 'CAD 5', 'CAD 6', 'CAD 7'];

export default function Home() {
  const [active, setActive] = useState(0);
  const featureRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;

    const updateFeaturedProject = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const feature = featureRef.current;
        if (!feature) return;
        const travel = feature.offsetHeight - window.innerHeight;
        const progress = travel > 0 ? Math.min(1, Math.max(0, -feature.getBoundingClientRect().top / travel)) : 0;
        setActive(Math.min(featuredProjects.length - 1, Math.floor(progress * featuredProjects.length)));
      });
    };

    updateFeaturedProject();
    window.addEventListener('scroll', updateFeaturedProject, { passive: true });
    window.addEventListener('resize', updateFeaturedProject);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateFeaturedProject);
      window.removeEventListener('resize', updateFeaturedProject);
    };
  }, []);

  const showFeaturedProject = (index: number) => {
    const feature = featureRef.current;
    if (!feature) return;
    const travel = feature.offsetHeight - window.innerHeight;
    const step = index / (featuredProjects.length - 1);
    window.scrollTo({ top: feature.offsetTop + travel * step, behavior: 'smooth' });
  };

  return (
    <main className="home-showcase">
      <h1 className="sr-only">Brandon Liu CAD showcase</h1>

      <section className="featured-scroll" ref={featureRef} aria-label="Featured CAD projects">
        <div className="cad-feature">
          <div className="landing-intro">
            <h2>Hello!</h2>
            <p>I’m Brandon, a Mechanical Engineering Student at Purdue, and I’m currently working @ agrobotics building bombs and dildos.</p>
          </div>
          <div className="featured-cad-stage" aria-live="polite">
            {featuredProjects.map((project, index) => (
              <div className={active === index ? 'featured-cad is-active' : 'featured-cad'} aria-hidden={active !== index} key={project}>
                {project}
              </div>
            ))}
          </div>

          <a className="portfolio-scroll-cue" href="#portfolio">
            <span>Full Project Showcase</span>
            <ChevronDown aria-hidden="true" />
          </a>

          <div className="feature-dots" aria-label="Choose a featured CAD project">
            {featuredProjects.map((project, index) => (
              <button
                className={active === index ? 'is-active' : ''}
                key={project}
                onClick={() => showFeaturedProject(index)}
                aria-label={`Show ${project}`}
                aria-current={active === index ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
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

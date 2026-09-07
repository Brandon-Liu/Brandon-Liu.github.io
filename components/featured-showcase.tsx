'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const featuredProjects = ['CAD 1', 'CAD 2', 'CAD 3'];

export function FeaturedShowcase() {
  const [active, setActive] = useState(0);
  const featureRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;

    const updateFeaturedProject = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const feature = featureRef.current;
        if (!feature) return;
        const travel = Math.max(0, feature.offsetHeight - window.innerHeight);
        const progress =
          travel > 0
            ? Math.min(
                1,
                Math.max(0, -feature.getBoundingClientRect().top / travel),
              )
            : 0;
        setActive(
          Math.min(
            featuredProjects.length - 1,
            Math.floor(progress * featuredProjects.length),
          ),
        );
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
    const travel = Math.max(0, feature.offsetHeight - window.innerHeight);
    const step = index / (featuredProjects.length - 1);
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    window.scrollTo({
      top: feature.offsetTop + travel * step,
      behavior: reduceMotion ? 'instant' : 'smooth',
    });
  };

  return (
    <section
      id="about"
      className="featured-scroll"
      ref={featureRef}
      aria-label="Featured CAD projects"
    >
      <div className="cad-feature">
        <div className="landing-intro">
          <h2>Hello!</h2>
          <p>
            I’m Brandon, a Mechanical Engineering Student at Purdue, and I’m
            <br />
            currently working @{' '}
            <a
              className="organization-link"
              href="https://agrobotics.com/"
              target="_blank"
              rel="noreferrer"
            >
              agrobotics
            </a>{' '}
            building bombs and dildos.
          </p>
        </div>
        <div className="featured-cad-stage" aria-live="polite">
          {featuredProjects.map((project, index) => (
            <div
              className={`featured-cad${index === 0 ? ' featured-cad-image' : ''}${active === index ? ' is-active' : ''}`}
              aria-hidden={active !== index}
              key={project}
            >
              {index === 0 ? (
                <svg
                  className="cad-render"
                  viewBox="310 18 835 905"
                  preserveAspectRatio="xMidYMid meet"
                  aria-label="CAD 1: Brandon’s competition robot with a vertical lift and cone-stacking mechanism"
                >
                  <image href="/cad-1.png" width="1672" height="941" />
                </svg>
              ) : (
                project
              )}
            </div>
          ))}
        </div>

        <a className="portfolio-scroll-cue" href="#portfolio">
          <span>Full Project Showcase</span>
          <ChevronDown aria-hidden="true" />
        </a>

        <div
          className="feature-dots"
          aria-label="Choose a featured CAD project"
        >
          {featuredProjects.map((project, index) => (
            <button
              type="button"
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
  );
}

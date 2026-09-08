'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CadSubsystemViewer, type CadView } from './cad-subsystem-viewer';

const cad1Views: CadView[] = [
  { image: '/cad-1.png?v=bd91f3ab', label: 'Full robot' },
  {
    image: '/cad-1-view-2.png?v=ad92bdf3',
    label: 'Lift assembly',
    callout: { side: 'left', y: 380, target: [360, 660] },
  },
  {
    image: '/cad-1-view-3.png?v=dafceb2e',
    label: 'Chassis',
    callout: { side: 'right', y: 650, target: [850, 790] },
  },
  {
    image: '/cad-1-view-4.png?v=30180867',
    label: 'Intake System',
    callout: { side: 'left', y: 1020, target: [540, 1060] },
  },
];

const cad2Views: CadView[] = [
  { image: '/cad-3-view-3.png', label: 'Full robot' },
  {
    image: '/cad-3-view-1.png',
    label: 'Slingshot Assembly',
    callout: { side: 'right', y: 200, target: [770, 280] },
  },
  {
    image: '/cad-3-view-2.png',
    label: 'Matchload Bar',
    callout: { side: 'left', y: 850, target: [445, 820] },
  },
  {
    image: '/cad-3-view-4.png',
    label: 'Intake System',
    callout: { side: 'left', y: 530, target: [545, 730] },
  },
  {
    image: '/cad-3-view-5.png',
    label: 'Chassis',
    callout: { side: 'right', y: 1080, target: [970, 1090] },
  },
];

const featuredProjects = [
  {
    label: 'CAD 1',
    image: '/cad-1.png',
    width: 1208,
    height: 1290,
    viewBox: '0 0 1208 1290',
    description: 'CAD 1: competition robot assembly shown in Autodesk Inventor',
  },
  {
    label: 'CAD 2',
    image: cad2Views[0].image,
    width: 1208,
    height: 1290,
    viewBox: '0 0 1208 1286',
    description:
      'CAD 2: grayscale competition robot assembly with an intake and lifting mechanism',
  },
  {
    label: 'CAD 3',
    image: '/cad-2.png',
    width: 1672,
    height: 941,
    viewBox: '310 18 835 905',
    description:
      'CAD 3: competition robot with a vertical lift and cone-stacking mechanism',
  },
];

export function FeaturedShowcase() {
  const [active, setActive] = useState(0);
  const [activeCad1View, setActiveCad1View] = useState(0);
  const [activeCad2View, setActiveCad2View] = useState(0);
  const featureRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    let currentProject = 0;

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
        const nextProject = Math.min(
          featuredProjects.length - 1,
          Math.floor(progress * featuredProjects.length),
        );
        if (nextProject !== currentProject) {
          setActiveCad1View(0);
          setActiveCad2View(0);
          currentProject = nextProject;
        }
        setActive(nextProject);
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
      id="home"
      className="featured-scroll"
      ref={featureRef}
      aria-label="Featured CAD projects"
    >
      <div className="cad-feature">
        <div className="landing-intro">
          <h2>Hello!</h2>
          <p>
            I’m Brandon, a Senior at <strong>Purdue University</strong> studying{' '}
            <strong>Mechanical Engineering</strong> and Statistics
            <br />
            I worked @{' '}
            <a
              className="organization-link"
              href="https://agrobotics.com/"
              target="_blank"
              rel="noreferrer"
            >
              agrobotics
            </a>
            , (Pre-series A) building humanoid strawberry picking robots
          </p>
        </div>
        <div className="featured-cad-stage" aria-live="polite">
          {featuredProjects.map((project, index) => (
            <div
              className={`featured-cad${project.image ? ' featured-cad-image' : ''}${active === index ? ' is-active' : ''}`}
              aria-hidden={active !== index}
              key={project.label}
            >
              {index === 0 || index === 1 ? (
                <CadSubsystemViewer
                  id={`cad-${index + 1}`}
                  label={project.label}
                  views={index === 0 ? cad1Views : cad2Views}
                  selected={index === 0 ? activeCad1View : activeCad2View}
                  onSelect={index === 0 ? setActiveCad1View : setActiveCad2View}
                  active={active === index}
                  small={index === 1}
                />
              ) : project.image ? (
                <svg
                  className="cad-render"
                  viewBox={project.viewBox}
                  preserveAspectRatio="xMidYMid meet"
                  aria-label={project.description}
                >
                  <image
                    href={project.image}
                    width={project.width}
                    height={project.height}
                  />
                </svg>
              ) : (
                project.label
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
              key={project.label}
              onClick={() => showFeaturedProject(index)}
              aria-label={`Show ${project.label}`}
              aria-current={active === index ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

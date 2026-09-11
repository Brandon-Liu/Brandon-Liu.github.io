'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CadSubsystemViewer } from './cad-subsystem-viewer';
import { featuredProjects } from './featured-projects';
import { ProfileIntro } from './profile-intro';

export function FeaturedShowcase() {
  const [active, setActive] = useState(0);
  const [selectedView, setSelectedView] = useState(0);
  const featureRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    let currentProject = 0;
    const mobile = window.matchMedia('(max-width: 820px)');
    const stage = stageRef.current;

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
        const nextProject =
          mobile.matches && stage
            ? Math.max(
                0,
                Math.min(
                  featuredProjects.length - 1,
                  Math.round(stage.scrollLeft / Math.max(1, stage.clientWidth)),
                ),
              )
            : Math.min(
                featuredProjects.length - 1,
                Math.floor(progress * featuredProjects.length),
              );
        if (nextProject !== currentProject) {
          setSelectedView(0);
          currentProject = nextProject;
        }
        setActive(nextProject);
      });
    };

    const onPageScroll = () => {
      if (!mobile.matches) updateFeaturedProject();
    };
    const onStageScroll = () => {
      if (mobile.matches) updateFeaturedProject();
    };
    const onResize = () => {
      if (mobile.matches && stage) {
        stage.scrollTo({
          left: currentProject * stage.clientWidth,
          behavior: 'instant',
        });
      }
      updateFeaturedProject();
    };

    updateFeaturedProject();
    window.addEventListener('scroll', onPageScroll, { passive: true });
    stage?.addEventListener('scroll', onStageScroll, { passive: true });
    window.addEventListener('resize', onResize);
    mobile.addEventListener('change', onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onPageScroll);
      stage?.removeEventListener('scroll', onStageScroll);
      window.removeEventListener('resize', onResize);
      mobile.removeEventListener('change', onResize);
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
    if (window.matchMedia('(max-width: 820px)').matches) {
      const stage = stageRef.current;
      stage?.scrollTo({
        left: stage.clientWidth * index,
        behavior: reduceMotion ? 'instant' : 'smooth',
      });
      return;
    }
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
            <ProfileIntro />
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
            , building humanoid strawberry picking robots, and currently lead
            the{' '}
            <a
              className="organization-link"
              href="https://purduesigbots.com/"
              target="_blank"
              rel="noreferrer"
            >
              Purdue Sigbots
            </a>
            . Check out some of my work!
          </p>
        </div>
        <div className="featured-cad-stage" ref={stageRef} aria-live="polite">
          {featuredProjects.map((project, index) => (
            <div
              className={`featured-cad ${project.theme}${active === index ? ' is-active' : ''}`}
              aria-hidden={active !== index}
              key={project.id}
            >
              {project.kind === 'subsystems' ? (
                <CadSubsystemViewer
                  id={project.id}
                  label={project.label}
                  views={project.views}
                  selected={active === index ? selectedView : 0}
                  onSelect={setSelectedView}
                  active={active === index}
                  small={project.small}
                />
              ) : (
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
              )}
            </div>
          ))}
        </div>

        <a className="portfolio-scroll-cue" href="#projects">
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
              className={`${project.theme}${active === index ? ' is-active' : ''}`}
              key={project.id}
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

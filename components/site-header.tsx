'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import {
  useEffect,
  useState,
  type PointerEvent as ReactPointerEvent,
} from 'react';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#robotics', label: 'Robotics' },
  { href: '/#contact', label: 'Contact' },
];

function entryPointOnPerimeter(event: ReactPointerEvent<HTMLAnchorElement>) {
  const bounds = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  const distances = [y, bounds.width - x, bounds.height - y, x];
  const edge = distances.indexOf(Math.min(...distances));
  const perimeter = 2 * (bounds.width + bounds.height);

  if (edge === 0) return (x / perimeter) * 100;
  if (edge === 1) return ((bounds.width + y) / perimeter) * 100;
  if (edge === 2)
    return (
      ((bounds.width + bounds.height + bounds.width - x) / perimeter) * 100
    );
  return (
    ((2 * bounds.width + bounds.height + bounds.height - y) / perimeter) * 100
  );
}

function drawNavBox(event: ReactPointerEvent<HTMLAnchorElement>) {
  if (event.currentTarget.classList.contains('is-active')) return;
  const entry = entryPointOnPerimeter(event);
  const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 1
    : 480;
  const forward = event.currentTarget.querySelector<SVGRectElement>(
    '.nav-outline-forward',
  );
  const backward = event.currentTarget.querySelector<SVGRectElement>(
    '.nav-outline-backward',
  );

  forward?.getAnimations().forEach((animation) => animation.cancel());
  backward?.getAnimations().forEach((animation) => animation.cancel());

  forward?.animate(
    [
      { strokeDasharray: '0 100', strokeDashoffset: `${-entry}` },
      { strokeDasharray: '50 50', strokeDashoffset: `${-entry}` },
    ],
    { duration, easing: 'cubic-bezier(.16,.84,.24,1)', fill: 'forwards' },
  );

  backward?.animate(
    [
      { strokeDasharray: '0 100', strokeDashoffset: `${-entry}` },
      { strokeDasharray: '50 50', strokeDashoffset: `${50 - entry}` },
    ],
    { duration, easing: 'cubic-bezier(.16,.84,.24,1)', fill: 'forwards' },
  );
}

function resetNavBox(event: ReactPointerEvent<HTMLAnchorElement>) {
  event.currentTarget
    .querySelectorAll<SVGRectElement>('.nav-outline rect')
    .forEach((line) => {
      line.getAnimations().forEach((animation) => animation.cancel());
    });
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  useEffect(() => {
    if (pathname !== '/') return;
    let frame = 0;
    const updateSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let current = '';
        for (const link of links) {
          const section = document.getElementById(link.href.slice(2));
          if (section && section.getBoundingClientRect().top <= 100)
            current = link.href;
        }
        if (
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2
        )
          current = '/#contact';
        setActiveSection(current);
      });
    };
    updateSection();
    window.addEventListener('scroll', updateSection, { passive: true });
    window.addEventListener('resize', updateSection);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateSection);
      window.removeEventListener('resize', updateSection);
    };
  }, [pathname]);

  return (
    <header className="topbar">
      <a
        className="brand"
        href={pathname === '/' ? '#home' : '/#home'}
        aria-label="Brandon Liu home"
      >
        <span className="brand-avatar" aria-hidden="true">
          <Image
            src="/brandon-liu-green.png"
            alt=""
            width={80}
            height={80}
            priority
          />
        </span>
        <span className="brand-name">
          <span className="brand-first">Brandon</span>
          <span className="brand-last">Liu</span>
        </span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="main-navigation"
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav
        id="main-navigation"
        className={open ? 'topnav is-open' : 'topnav'}
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={pathname === '/' ? link.href.slice(1) : link.href}
            className={
              (
                pathname === '/'
                  ? activeSection === link.href
                  : pathname === link.href.replace('/#', '/')
              )
                ? 'is-active'
                : ''
            }
            aria-current={
              pathname === '/' && activeSection === link.href
                ? 'location'
                : undefined
            }
            onPointerEnter={drawNavBox}
            onPointerLeave={resetNavBox}
            onClick={() => setOpen(false)}
          >
            <span>{link.label}</span>
            <svg
              className="nav-outline"
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <rect
                className="nav-outline-forward"
                x=".5"
                y=".5"
                width="99"
                height="39"
                pathLength="100"
              />
              <rect
                className="nav-outline-backward"
                x=".5"
                y=".5"
                width="99"
                height="39"
                pathLength="100"
              />
            </svg>
          </a>
        ))}
        <a
          className="resume-link"
          href="/brandon-liu-resume.pdf"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Brandon Liu's resume PDF"
          title="Resume PDF"
          onClick={() => setOpen(false)}
        >
          <span aria-hidden="true">📄</span>
          <span className="sr-only">Resume</span>
        </a>
      </nav>
    </header>
  );
}

'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

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
        let closestTop = -Infinity;
        for (const link of links) {
          const section = document.getElementById(link.href.slice(2));
          if (!section) continue;
          const top = section.getBoundingClientRect().top;
          // Menu order differs from page order; use the closest passed section.
          if (top <= 100 && top > closestTop) {
            current = link.href;
            closestTop = top;
          }
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
        onClick={() => setOpen((wasOpen) => !wasOpen)}
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
            onClick={() => setOpen(false)}
          >
            <span>{link.label}</span>
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

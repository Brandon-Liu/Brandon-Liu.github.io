'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/robotics', label: 'Robotics' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="Brandon Liu home">
        <span className="brand-name"><span className="brand-first">Brandon</span><span className="brand-last">Liu</span></span>
        <span className="brand-rule" />
        <span className="brand-role">Mechanical engineer</span>
      </Link>

      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? 'topnav is-open' : 'topnav'} aria-label="Main navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={pathname === link.href ? 'is-active' : ''} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <a className="resume-link" href="/brandon-liu-resume.pdf" target="_blank" rel="noreferrer" aria-label="Open Brandon Liu's resume PDF" title="Resume PDF" onClick={() => setOpen(false)}>
          <span aria-hidden="true">📄</span><span className="sr-only">Resume</span>
        </a>
      </nav>
    </header>
  );
}

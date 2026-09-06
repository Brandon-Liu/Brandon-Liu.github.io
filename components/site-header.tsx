'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/robotics', label: 'Robotics' },
  { href: '/hobbies', label: 'Hobbies' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="Brandon Liu home">
        <span className="brand-name">Brandon Liu</span>
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
        <Link className={pathname === '/resume' ? 'resume-link is-active' : 'resume-link'} href="/resume" aria-label="Resume" title="Resume" onClick={() => setOpen(false)}>
          <span aria-hidden="true">📄</span><span className="sr-only">Resume</span>
        </Link>
      </nav>
    </header>
  );
}

'use client';

import { useEffect } from 'react';

// GitHub Pages cannot send server redirects, so preserve these legacy URLs
// with a browser redirect and a usable link when JavaScript is disabled.
export function SectionRedirect({ section }: { section: string }) {
  const href = `/#${section}`;
  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return (
    <main className="content-page">
      <a href={href}>Continue to {section}</a>
    </main>
  );
}

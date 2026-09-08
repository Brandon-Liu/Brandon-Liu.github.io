import type { Metadata, Viewport } from 'next';
import { SiteHeader } from '@/components/site-header';
import './globals.css';

// Portfolio content is identical for every visitor and can be pre-rendered.
export const dynamic = 'force-static';

export const metadata: Metadata = {
  metadataBase: new URL('https://brandon-liu.github.io'),
  title: 'Brandon Liu',
  icons: {
    icon: [{ url: '/favicon-face.png', type: 'image/png', sizes: '64x64' }],
  },
  openGraph: {
    title: 'Brandon Liu',
  },
  twitter: {
    card: 'summary',
    title: 'Brandon Liu',
  },
};

export const viewport: Viewport = { themeColor: '#004225' };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}

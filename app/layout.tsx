import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://brandon-liu-mechanical-engineer.yoosang-cho.chatgpt.site'),
  title: 'Brandon Liu — Mechanical Engineer',
  description: 'Brandon Liu builds at the intersection of robotics, controls, and thoughtful machine design.',
  openGraph: { title: 'Brandon Liu — Mechanical Engineer', description: 'Robotics, controls, and thoughtful machine design.', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Brandon Liu — Mechanical Engineer', description: 'Robotics, controls, and thoughtful machine design.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

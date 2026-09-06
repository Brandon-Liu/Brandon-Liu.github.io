import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://brandon-liu-mechanical-engineer.yoosang-cho.chatgpt.site'),
  title: 'Brandon Liu',
  description: 'A horizontal archive of robots, mechanisms, software, and side quests by mechanical engineer Brandon Liu.',
  openGraph: { title: 'Brandon Liu', description: 'A horizontal archive of robotics and thoughtful machine design.', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Brandon Liu', description: 'A horizontal archive of robotics and thoughtful machine design.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

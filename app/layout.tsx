import type { Metadata } from 'next';
import './globals.css';
import 'animate.css';

export const metadata: Metadata = {
  title: 'Animations and Effects collections',
  description: 'A bunch of animation and effects for project, feel free to use them or add yours.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-neutral-950'>{children}</body>
    </html>
  );
}

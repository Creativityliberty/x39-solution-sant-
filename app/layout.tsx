import type {Metadata} from 'next';
import { Inter, Bayon } from 'next/font/google';
import './globals.css';
import ChatWidget from '@/components/ChatWidget';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bayon',
});

export const metadata: Metadata = {
  title: 'LifeWave X39® Patches - Boutique Officielle',
  description: 'Une nouvelle approche du bien-être basée sur la photothérapie.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className={`${inter.variable} ${bayon.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-black text-white" suppressHydrationWarning>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}

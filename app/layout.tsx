import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: {
    default: 'Lanyard Construction Services',
    template: '%s | Lanyard Construction Services',
  },
  description:
    'Placeholder-safe foundation for a construction services website prototype with shared navigation and route shells.',
  keywords: ['construction', 'commercial renovation', 'multifamily', 'prototype'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-brand-cream text-brand-charcoal">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

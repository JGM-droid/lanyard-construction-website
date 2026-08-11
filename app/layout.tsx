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
    'Lanyard Construction Services offers multifamily renovation and general contracting services with a clear, simple website experience for owners and managers.',
  keywords: ['construction', 'multifamily renovation', 'general contracting', 'commercial renovation'],
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

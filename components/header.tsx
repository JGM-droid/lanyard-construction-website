"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { assetPath } from '@/lib/asset-path';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Completed Projects' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="Lanyard Construction Services home">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-blue/20 bg-brand-cream/80 p-2 shadow-sm">
            <Image src={assetPath('/images/brand/lanyard-logo.png')} alt="" width={72} height={72} className="h-full w-full object-contain" />
          </div>
          <div className="leading-none">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brand-navy">Lanyard</p>
            <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.23em] text-brand-charcoal/80">
              Construction Services
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const isContact = item.href === '/contact';
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition ${isContact ? 'btn-primary px-4 py-2 text-sm' : isActive ? 'text-brand-blue' : 'text-brand-charcoal hover:text-brand-blue'}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="rounded-full border border-brand-navy/15 bg-white px-3.5 py-2 text-sm font-semibold text-brand-navy lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-brand-navy/10 bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const isContact = item.href === '/contact';
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-3 py-2 text-sm font-semibold ${isContact ? 'btn-primary mt-1 justify-center py-2.5' : isActive ? 'bg-brand-cream text-brand-blue' : 'text-brand-charcoal hover:bg-brand-cream'}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}

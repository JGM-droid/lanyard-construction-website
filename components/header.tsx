"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="text-lg font-semibold tracking-[0.2em] text-brand-charcoal uppercase">
          Lanyard Construction
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${isActive ? 'text-brand-accent' : 'text-stone-700 hover:text-brand-accent'}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-brand-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#a8541f]"
          >
            Request a consultation
          </Link>
        </nav>
        <button
          type="button"
          className="rounded-full border border-stone-300 px-3 py-2 text-sm font-medium text-brand-charcoal md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-stone-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium ${isActive ? 'bg-brand-cream text-brand-accent' : 'text-stone-700'}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="rounded-full bg-brand-accent px-4 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Request a consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

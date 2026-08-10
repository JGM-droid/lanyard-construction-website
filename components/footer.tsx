import Link from 'next/link';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-brand-charcoal text-stone-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:px-8 lg:flex-row lg:justify-between lg:px-10">
        <div className="max-w-xl space-y-3">
          <p className="text-lg font-semibold tracking-[0.2em] text-white uppercase">Lanyard Construction</p>
          <p className="text-sm leading-7 text-stone-300">
            Placeholder-safe foundation for a future construction website prototype. All content remains intentionally simple while future agents build feature-specific pages.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">Quick Links</p>
          <div className="flex flex-wrap gap-4 text-sm text-stone-300">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

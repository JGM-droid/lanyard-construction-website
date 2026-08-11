import Image from 'next/image';
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
    <footer className="border-t border-brand-navy/10 bg-brand-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 sm:px-8 lg:flex-row lg:justify-between lg:px-10">
        <div className="max-w-xl space-y-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Lanyard Construction Services home">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 p-2">
              <Image src="/images/brand/lanyard-logo.png" alt="" width={72} height={72} className="h-full w-full object-contain" />
            </div>
            <div className="leading-none">
              <p className="text-sm font-semibold uppercase tracking-[0.26em]">Lanyard</p>
              <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.23em] text-white/70">
                Construction Services
              </p>
            </div>
          </Link>
          <p className="text-sm leading-7 text-white/75">
            Placeholder-safe website direction for a polished commercial and multifamily renovation presence. Contact details and project proof remain owner-confirmed pending final approval.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:min-w-[24rem] lg:grid-cols-2">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">Quick links</p>
            <div className="flex flex-col gap-2 text-sm text-white/75">
              {footerLinks.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">Owner confirmation</p>
            <p className="text-sm leading-7 text-white/75">
              Contact details, service-area language, and project evidence are still Placeholder or Open Question pending owner confirmation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

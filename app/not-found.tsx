import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col justify-center px-6 py-24">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-3 text-3xl font-semibold text-brand-ink">The page you requested was not found.</h1>
      <p className="mt-4 text-lg text-brand-charcoal/80">Please return home and choose a page from the menu.</p>
      <Link href="/" className="btn-primary mt-6 w-fit">
        Go Home
      </Link>
    </div>
  );
}

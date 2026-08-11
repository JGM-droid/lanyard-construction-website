import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col justify-center px-6 py-24">
      <p className="eyebrow">Placeholder</p>
      <h1 className="mt-3 text-3xl font-semibold text-brand-ink">This page is not part of the initial foundation.</h1>
      <p className="mt-4 text-lg text-brand-charcoal/80">Return to the shared site shell and continue with the planned route set.</p>
      <Link href="/" className="btn-primary mt-6 w-fit">
        Back to home
      </Link>
    </div>
  );
}

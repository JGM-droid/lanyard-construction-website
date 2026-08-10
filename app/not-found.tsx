import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col justify-center px-6 py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">Placeholder</p>
      <h1 className="mt-3 text-3xl font-semibold text-brand-charcoal">This page is not part of the initial foundation.</h1>
      <p className="mt-4 text-lg text-stone-600">Return to the shared site shell and continue with the planned route set.</p>
      <Link href="/" className="mt-6 w-fit rounded-full bg-brand-accent px-5 py-3 text-sm font-semibold text-white">
        Back to home
      </Link>
    </div>
  );
}

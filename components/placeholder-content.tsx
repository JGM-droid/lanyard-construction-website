import Link from 'next/link';

export function PlaceholderContent({
  title,
  eyebrow,
  notice,
}: {
  title: string;
  eyebrow?: string;
  notice: string;
}) {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">{eyebrow}</p>
        ) : null}
        <h1 className="text-3xl font-semibold tracking-tight text-brand-charcoal sm:text-4xl">{title}</h1>
        <p className="max-w-2xl text-lg leading-8 text-stone-600">{notice}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-medium"
        >
          Request a consultation
        </Link>
        <Link
          href="/services"
          className="rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-brand-charcoal transition hover:border-brand-blue hover:text-brand-blue"
        >
          Explore services
        </Link>
      </div>
      <div className="rounded-2xl border border-dashed border-stone-300 bg-brand-cream/70 p-4 text-sm text-stone-600">
        Placeholder content remains visible so future feature agents can replace it without confusing it with approved facts.
      </div>
    </div>
  );
}

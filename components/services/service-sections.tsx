import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

type StatusKind = 'Confirmed' | 'Assumed' | 'Placeholder' | 'Open Question';

type ServiceItem = {
  title: string;
  description: string;
  status: StatusKind;
};

type ProcessStep = {
  title: string;
  description: string;
  status: StatusKind;
};

type ProjectPreview = {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  status: StatusKind;
};

function statusClass(status: StatusKind): string {
  if (status === 'Confirmed') {
    return 'border-emerald-300/70 bg-emerald-100 text-emerald-800';
  }

  if (status === 'Assumed') {
    return 'border-amber-300/70 bg-amber-100 text-amber-800';
  }

  if (status === 'Open Question') {
    return 'border-sky-300/70 bg-sky-100 text-sky-800';
  }

  return 'border-rose-300/70 bg-rose-100 text-rose-800';
}

function StatusPill({ status }: { status: StatusKind }) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-[0.7rem] font-semibold tracking-[0.18em] uppercase ${statusClass(status)}`}
      aria-label={`Status label: ${status}`}
    >
      {status}
    </span>
  );
}

function SectionBlock({ tone, children, id }: { tone: 'light' | 'dark'; children: ReactNode; id?: string }) {
  return (
    <section
      id={id}
      className={
        tone === 'dark'
          ? 'rounded-[2.25rem] border border-brand-charcoal/40 bg-brand-charcoal px-6 py-10 text-stone-100 shadow-soft sm:px-8 sm:py-12 lg:px-12 lg:py-14'
          : 'rounded-[2.25rem] border border-stone-200 bg-white/95 px-6 py-10 text-brand-charcoal shadow-soft sm:px-8 sm:py-12 lg:px-12 lg:py-14'
      }
    >
      {children}
    </section>
  );
}

export function ServicesHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  ctaHref,
  ctaLabel,
  headingId,
}: {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  ctaHref: string;
  ctaLabel: string;
  headingId: string;
}) {
  return (
    <SectionBlock tone="dark">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="space-y-6">
          <p className="text-xs font-semibold tracking-[0.28em] text-brand-accent uppercase">Services Hub</p>
          <h1 id={headingId} className="max-w-3xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-8 text-stone-200 sm:text-lg">{subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <StatusPill status="Confirmed" />
            <StatusPill status="Placeholder" />
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href={ctaHref}
              className="rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white uppercase transition hover:bg-[#aa5c24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
            >
              {ctaLabel}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold tracking-[0.08em] text-stone-100 uppercase transition hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
            >
              Request Consultation
            </Link>
          </div>
        </div>

        <figure className="overflow-hidden rounded-3xl border border-stone-300/35 bg-brand-navy/35">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={860}
            height={620}
            className="h-full w-full object-cover"
            priority
          />
          <figcaption className="border-t border-stone-300/20 bg-brand-charcoal/90 px-4 py-3 text-xs leading-6 text-stone-300">
            Placeholder image treatment for visual direction only. Image subject and project context remain unverified.
          </figcaption>
        </figure>
      </div>
    </SectionBlock>
  );
}

export function ServiceCategoryGrid({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: ServiceItem[];
}) {
  return (
    <SectionBlock tone="light" id="service-categories">
      <div className="space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.24em] text-brand-accent uppercase">Service Categories</p>
          <h2 className="text-pretty text-2xl font-semibold leading-tight sm:text-3xl">{title}</h2>
          <p className="max-w-3xl text-base leading-8 text-stone-700">{intro}</p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col gap-4 rounded-2xl border border-stone-200 bg-stone-50/70 p-6"
            >
              <StatusPill status={item.status} />
              <h3 className="text-xl font-semibold text-brand-charcoal">{item.title}</h3>
              <p className="text-sm leading-7 text-stone-700">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionBlock>
  );
}

export function ProcessOverview({ title, intro, steps }: { title: string; intro: string; steps: ProcessStep[] }) {
  return (
    <SectionBlock tone="dark" id="process-overview">
      <div className="space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.24em] text-brand-accent uppercase">Approach Snapshot</p>
          <h2 className="text-pretty text-2xl font-semibold leading-tight text-white sm:text-3xl">{title}</h2>
          <p className="max-w-3xl text-base leading-8 text-stone-200">{intro}</p>
        </header>

        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-stone-600/45 bg-brand-navy/35 p-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand-accent uppercase">Step {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-200">{step.description}</p>
              <div className="mt-4">
                <StatusPill status={step.status} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionBlock>
  );
}

export function TrustSignalSection({
  title,
  intro,
  bullets,
}: {
  title: string;
  intro: string;
  bullets: { label: string; description: string; status: StatusKind }[];
}) {
  return (
    <SectionBlock tone="light" id="trust-signals">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <header className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.24em] text-brand-accent uppercase">Trust Framework</p>
          <h2 className="text-pretty text-2xl font-semibold leading-tight sm:text-3xl">{title}</h2>
          <p className="text-base leading-8 text-stone-700">{intro}</p>
        </header>
        <div className="space-y-4">
          {bullets.map((bullet) => (
            <article key={bullet.label} className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="mb-3">
                <StatusPill status={bullet.status} />
              </div>
              <h3 className="text-lg font-semibold text-brand-charcoal">{bullet.label}</h3>
              <p className="mt-2 text-sm leading-7 text-stone-700">{bullet.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionBlock>
  );
}

export function ProjectPreviewSection({
  title,
  intro,
  projects,
}: {
  title: string;
  intro: string;
  projects: ProjectPreview[];
}) {
  return (
    <SectionBlock tone="light" id="project-preview">
      <div className="space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.24em] text-brand-accent uppercase">Project Preview</p>
          <h2 className="text-pretty text-2xl font-semibold leading-tight sm:text-3xl">{title}</h2>
          <p className="max-w-3xl text-base leading-8 text-stone-700">{intro}</p>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                width={900}
                height={560}
                className="h-52 w-full object-cover sm:h-60"
              />
              <div className="space-y-3 p-6">
                <StatusPill status={project.status} />
                <h3 className="text-xl font-semibold text-brand-charcoal">{project.title}</h3>
                <p className="text-sm leading-7 text-stone-700">{project.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionBlock>
  );
}

export function ConsultationCta({ title, body, primaryHref, primaryLabel }: { title: string; body: string; primaryHref: string; primaryLabel: string }) {
  return (
    <SectionBlock tone="dark" id="consultation-cta">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold tracking-[0.24em] text-brand-accent uppercase">Consultation Path</p>
          <h2 className="text-pretty text-2xl font-semibold leading-tight text-white sm:text-3xl">{title}</h2>
          <p className="text-base leading-8 text-stone-200">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={primaryHref}
            className="rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white uppercase transition hover:bg-[#aa5c24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            {primaryLabel}
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-stone-400 px-6 py-3 text-sm font-semibold tracking-[0.08em] text-stone-100 uppercase transition hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            Return to Services Hub
          </Link>
        </div>
      </div>
    </SectionBlock>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

const heroSnapshots = [
  {
    src: '/images/home/hero-primary.svg',
    alt: 'Placeholder hero image showing an abstract construction facade and site pattern',
    caption: 'Placeholder hero image',
  },
  {
    src: '/images/home/hero-secondary.svg',
    alt: 'Placeholder hero image showing a stepped building study with warm accent lines',
    caption: 'Placeholder visual study',
  },
  {
    src: '/images/home/trust-placeholder.svg',
    alt: 'Placeholder image showing a trust framework illustration for a construction website',
    caption: 'Placeholder trust visual',
  },
];

const serviceHighlights = [
  {
    title: 'Exterior envelope updates',
    description:
      'Placeholder copy for facade refreshes, visible envelope improvements, and property-front impressions that need to be handled with care.',
  },
  {
    title: 'Common-area and entry refreshes',
    description:
      'Placeholder copy for entry sequences, walkways, and shared surfaces that shape the first impression of a property.',
  },
  {
    title: 'Scope planning for occupied sites',
    description:
      'Placeholder copy for sequencing, communication, and construction planning around active residents, staff, and tenants.',
  },
];

const trustPrinciples = [
  'Clear scopes with visible placeholder labels until approved copy replaces them.',
  'Simple communication cues for property teams reviewing a proposal or consultation.',
  'Design rhythm that separates concept, trust signals, and conversion steps.',
  'No invented awards, metrics, testimonials, or credentials are shown here.',
];

const projectSnapshots = [
  {
    title: 'Placeholder project A',
    summary: 'Placeholder project summary for a commercial exterior refresh and visible entry upgrade.',
  },
  {
    title: 'Placeholder project B',
    summary: 'Placeholder project summary for a multifamily facade improvement with no unverified outcomes shown.',
  },
  {
    title: 'Placeholder project C',
    summary: 'Placeholder project summary for a coordinated exterior renovation on an occupied property.',
  },
];

function PlaceholderPill({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${
        dark ? 'border-white/15 bg-white/10 text-white/80' : 'border-stone-300 bg-white text-brand-charcoal'
      }`}
    >
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <PlaceholderPill dark={dark}>{eyebrow}</PlaceholderPill>
      <div className="space-y-4">
        <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-brand-charcoal'}`}>
          {title}
        </h2>
        <p className={`text-base leading-8 sm:text-lg ${dark ? 'text-white/72' : 'text-stone-600'}`}>{description}</p>
      </div>
    </div>
  );
}

function ContentCard({
  title,
  description,
  dark = false,
  image,
}: {
  title: string;
  description: string;
  dark?: boolean;
  image?: string;
}) {
  return (
    <article
      className={`overflow-hidden rounded-[1.75rem] border shadow-soft transition duration-300 hover:-translate-y-1 ${
        dark ? 'border-white/10 bg-white/5' : 'border-stone-200 bg-white'
      }`}
    >
      {image ? (
        <Image
          src={image}
          alt={`Placeholder image for ${title}`}
          width={1200}
          height={900}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="aspect-[4/3] w-full object-cover"
        />
      ) : null}
      <div className="space-y-3 p-6 sm:p-7">
        <h3 className={`text-xl font-semibold ${dark ? 'text-white' : 'text-brand-charcoal'}`}>{title}</h3>
        <p className={`text-sm leading-7 ${dark ? 'text-white/72' : 'text-stone-600'}`}>{description}</p>
      </div>
    </article>
  );
}

function HomeSection({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={dark ? 'bg-brand-navy text-white' : 'bg-brand-cream text-brand-charcoal'}>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">{children}</div>
    </section>
  );
}

export function HomePage() {
  return (
    <div className="space-y-0">
      <section className="relative overflow-hidden bg-brand-cream">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,111,45,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.09),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24 lg:pt-14">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-8">
              <PlaceholderPill>Placeholder hero</PlaceholderPill>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-brand-charcoal sm:text-6xl lg:text-7xl">
                  Placeholder headline: built for the realities of occupied properties.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
                  Placeholder copy: this homepage is structured to present Lanyard Construction Services as a professional
                  commercial and multifamily renovation partner. Replace every marked claim, project detail, and image
                  with client-approved content before launch.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#a8541f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
                >
                  Request a Consultation
                </Link>
                <Link
                  href="/services/exterior-renovations"
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-brand-charcoal transition hover:border-brand-accent hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
                >
                  Explore Exterior Renovations
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-stone-200 bg-white/75 p-4 shadow-soft">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-accent">Placeholder</p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">Image-led hero layout with verified copy still pending.</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white/75 p-4 shadow-soft">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-accent">Placeholder</p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">Consultation CTA stays prominent at the first scroll.</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white/75 p-4 shadow-soft">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-accent">Placeholder</p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">All project references remain visibly unverified.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-6 h-40 w-40 rounded-full bg-brand-accent/15 blur-3xl" aria-hidden="true" />
              <div className="grid gap-4 sm:grid-cols-2">
                {heroSnapshots.map((snapshot, index) => (
                  <figure
                    key={snapshot.src}
                    className={`overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft ${
                      index === 0 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <Image
                      src={snapshot.src}
                      alt={snapshot.alt}
                      width={1200}
                      height={900}
                      priority={index === 0}
                      sizes={index === 0 ? '(max-width: 1024px) 100vw, 52vw' : '(max-width: 768px) 100vw, 26vw'}
                      className="aspect-[16/10] w-full object-cover"
                    />
                    <figcaption className="border-t border-stone-200 px-5 py-4 text-sm text-stone-600">
                      {snapshot.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeSection dark>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            dark
            eyebrow="Company positioning"
            title="A renovation partner for active buildings"
            description="Placeholder copy: the homepage should communicate calm scheduling, coordinated scopes, and a polished construction presence without inventing company history or performance claims."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {trustPrinciples.map((principle) => (
              <div key={principle} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm leading-7 text-white/82">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </HomeSection>

      <HomeSection>
        <SectionHeading
          eyebrow="Service highlights"
          title="Exterior renovation priorities"
          description="These service highlights stay intentionally broad so the page can feel high-end now while the client confirms final service language later."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {serviceHighlights.map((service, index) => (
            <ContentCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={index === 0 ? '/images/home/service-highlight.svg' : '/images/home/project-preview.svg'}
            />
          ))}
        </div>
      </HomeSection>

      <HomeSection dark>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <SectionHeading
            dark
            eyebrow="Trust framework"
            title="Trust signals without invented proof"
            description="Placeholder-safe trust content focuses on communication, visual clarity, and process confidence rather than unverified awards, credentials, or testimonials."
          />

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-soft">
              <Image
                src="/images/home/trust-placeholder.svg"
                alt="Placeholder image showing a trust framework illustration for the homepage"
                width={1400}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="border-t border-white/10 p-6 sm:p-7">
                <p className="text-sm leading-7 text-white/72">
                  Placeholder visual: replace this with verified team, project, or credential imagery once client approval
                  is available.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">Placeholder</p>
                <p className="mt-3 text-sm leading-7 text-white/75">No invented statistics, award counts, or certifications are shown here.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">Placeholder</p>
                <p className="mt-3 text-sm leading-7 text-white/75">Copy remains open for proof-backed language once the client confirms it.</p>
              </div>
            </div>
          </div>
        </div>
      </HomeSection>

      <HomeSection>
        <SectionHeading
          eyebrow="Featured projects"
          title="Preview the portfolio structure"
          description="Project cards are labeled as placeholders so the layout can be reviewed without implying that unapproved project details are already confirmed."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projectSnapshots.map((project, index) => (
            <ContentCard
              key={project.title}
              title={project.title}
              description={project.summary}
              image={index === 1 ? '/images/home/project-preview.svg' : '/images/home/hero-secondary.svg'}
            />
          ))}
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-dashed border-stone-300 bg-white/70 p-5 text-sm leading-7 text-stone-600">
          Placeholder note: no project metrics, client names, or before-and-after claims are published until approved material
          is supplied.
        </div>
      </HomeSection>

      <section className="bg-brand-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-12">
            <div className="max-w-2xl space-y-4">
              <PlaceholderPill dark>Final consultation CTA</PlaceholderPill>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Start with a placeholder-safe consultation path</h2>
              <p className="text-base leading-8 text-white/72 sm:text-lg">
                This band keeps the conversion path visible while the production contact details, project proof, and final lead
                workflow remain unverified.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 lg:mt-0 lg:shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#a8541f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
              >
                Request a Consultation
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
              >
                Review Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
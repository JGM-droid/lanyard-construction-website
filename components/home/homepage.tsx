import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

const heroSnapshots = [
  {
    src: '/images/home/hero-primary.svg',
    alt: 'Placeholder hero image showing an abstract construction facade and site pattern',
    caption: 'Placeholder visual direction for a future project-led hero',
  },
  {
    src: '/images/home/hero-secondary.svg',
    alt: 'Placeholder hero image showing a stepped building study with blue accent lines',
    caption: 'Placeholder study for editorial composition',
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
        dark ? 'border-white/15 bg-white/10 text-white/80' : 'border-brand-blue/20 bg-brand-cream/70 text-brand-navy'
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
        <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-brand-ink'}`}>
          {title}
        </h2>
        <p className={`text-base leading-8 sm:text-lg ${dark ? 'text-white/72' : 'text-brand-charcoal/80'}`}>{description}</p>
      </div>
    </div>
  );
}

function ContentCard({ title, description, image }: { title: string; description: string; image?: string }) {
  return (
    <article className="content-card flex h-full flex-col">
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
      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <h3 className="text-xl font-semibold text-brand-ink">{title}</h3>
        <p className="text-sm leading-7 text-brand-charcoal/80">{description}</p>
      </div>
    </article>
  );
}

function HomeSection({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <section className={dark ? 'bg-brand-navy text-white' : 'bg-white text-brand-charcoal'}>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">{children}</div>
    </section>
  );
}

export function HomePage() {
  return (
    <div className="space-y-0">
      <section className="relative overflow-hidden bg-brand-cream/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,167,222,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(41,45,120,0.1),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24 lg:pt-14">
          <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="space-y-8">
              <PlaceholderPill>Placeholder Hero</PlaceholderPill>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-brand-ink sm:text-6xl lg:text-7xl">
                  A refined construction presence for occupied, high-visibility properties.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-brand-charcoal/80 sm:text-xl">
                  This homepage direction translates Lanyard’s current identity into a more editorial, image-led presentation while keeping every factual claim clearly marked until the client confirms it.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Request a Consultation
                </Link>
                <Link href="/services/exterior-renovations" className="btn-secondary">
                  Explore Exterior Renovations
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-brand-navy/10 bg-white/80 p-4 shadow-sm">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-blue">Placeholder</p>
                  <p className="mt-2 text-sm leading-6 text-brand-charcoal/80">Image-led hero layout with verified copy still pending.</p>
                </div>
                <div className="rounded-2xl border border-brand-navy/10 bg-white/80 p-4 shadow-sm">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-blue">Placeholder</p>
                  <p className="mt-2 text-sm leading-6 text-brand-charcoal/80">Consultation CTA stays prominent at the first scroll.</p>
                </div>
                <div className="rounded-2xl border border-brand-navy/10 bg-white/80 p-4 shadow-sm">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-blue">Placeholder</p>
                  <p className="mt-2 text-sm leading-6 text-brand-charcoal/80">All project references remain visibly unverified.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-6 h-40 w-40 rounded-full bg-brand-blue/15 blur-3xl" aria-hidden="true" />
              <div className="grid gap-4 sm:grid-cols-2">
                {heroSnapshots.map((snapshot, index) => (
                  <figure key={snapshot.src} className={`image-panel ${index === 0 ? 'sm:col-span-2' : ''}`}>
                    <Image
                      src={snapshot.src}
                      alt={snapshot.alt}
                      width={1200}
                      height={900}
                      priority={index === 0}
                      sizes={index === 0 ? '(max-width: 1024px) 100vw, 52vw' : '(max-width: 768px) 100vw, 26vw'}
                      className="aspect-[16/10] w-full object-cover"
                    />
                    <figcaption className="border-t border-brand-navy/10 bg-white px-5 py-4 text-sm text-brand-charcoal/70">
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
              <div key={principle} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <p className="text-sm leading-7 text-white/80">{principle}</p>
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
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">Placeholder</p>
                <p className="mt-3 text-sm leading-7 text-white/75">No invented statistics, award counts, or certifications are shown here.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">Placeholder</p>
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

        <div className="mt-6 rounded-[1.5rem] border border-dashed border-brand-navy/15 bg-brand-cream/70 p-5 text-sm leading-7 text-brand-charcoal/80">
          Placeholder note: no project metrics, client names, or before-and-after claims are published until approved material is supplied.
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
              <Link href="/contact" className="btn-primary">
                Request a Consultation
              </Link>
              <Link href="/projects" className="btn-secondary border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                Review Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
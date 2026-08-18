import Image from 'next/image';
import Link from 'next/link';

const projectCategories = [
  {
    id: 'project-category-exterior',
    title: 'Exterior Renovations',
    summary: 'Exterior renovation support for multifamily and other properties.',
  },
  {
    id: 'project-category-interior',
    title: 'Interior Renovations',
    summary: 'Interior renovation support for units, common areas, and shared spaces.',
  },
  {
    id: 'project-category-restoration',
    title: 'Fire & Flood Restoration',
    summary: 'Restoration support for properties affected by fire or flood damage.',
  },
  {
    id: 'project-category-maintenance',
    title: 'Maintenance Services',
    summary: 'Maintenance support for ongoing property needs and planned repairs.',
  },
];

const visualAssets = [
  {
    id: 'project-visual-1',
    image: '/images/services/exterior-hero.svg',
    alt: 'Construction service visual',
  },
  {
    id: 'project-visual-2',
    image: '/images/services/overview-hero.svg',
    alt: 'Multifamily construction service visual',
  },
  {
    id: 'project-visual-3',
    image: '/images/services/project-preview-a.svg',
    alt: 'Renovation service visual',
  },
  {
    id: 'project-visual-4',
    image: '/images/services/project-preview-b.svg',
    alt: 'Restoration service visual',
  },
  {
    id: 'project-visual-5',
    image: '/images/home/service-highlight.svg',
    alt: 'Capital improvement service visual',
  },
  {
    id: 'project-visual-6',
    image: '/images/home/hero-secondary.svg',
    alt: 'Maintenance service visual',
  },
];

export function ProjectsPageContent() {
  return (
    <main className="space-y-12 sm:space-y-16" aria-labelledby="projects-page-heading">
      <section className="section-surface overflow-hidden bg-brand-navy text-white">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[20rem] lg:min-h-[26rem]">
            <Image src="/images/services/exterior-hero.svg" alt="Construction service visual" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/55 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-6 sm:p-10">
              <p className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                Our Work
              </p>
              <h1 id="projects-page-heading" className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Our Work
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                Lanyard supports multifamily renovation, restoration, capital improvements, and maintenance needs with
                a practical approach built around property operations.
              </p>
            </div>
          </div>
          <aside className="flex flex-col justify-between gap-6 border-t border-white/10 bg-brand-navy/95 p-6 sm:p-10 lg:border-l lg:border-t-0">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Discuss Your Property</h2>
              <p className="text-sm leading-relaxed text-white/80">
                Contact Lanyard to talk through renovation, restoration, capital improvement, or maintenance needs.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a href="#project-gallery" className="btn-secondary border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                View Work Areas
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="project-categories-heading" className="space-y-6">
        <div className="space-y-2">
          <h2 id="project-categories-heading" className="text-2xl font-semibold text-brand-ink sm:text-3xl">
            Project Types
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-brand-charcoal/80 sm:text-base">
            These categories reflect the approved services currently presented for Lanyard Construction Services.
          </p>
        </div>
        <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {projectCategories.map((category) => (
            <li key={category.id} className="rounded-2xl border border-brand-navy/10 bg-white/95 p-5 shadow-soft">
              <h3 className="text-lg font-semibold text-brand-ink">{category.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">{category.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="project-gallery" aria-labelledby="project-gallery-heading" className="space-y-6">
        <div className="space-y-2">
          <h2 id="project-gallery-heading" className="text-2xl font-semibold text-brand-ink sm:text-3xl">
            Work Area Visuals
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-brand-charcoal/80 sm:text-base">
            These visuals support the page layout without identifying specific projects, properties, clients,
            locations, or outcomes.
          </p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visualAssets.map((visual) => (
            <li key={visual.id} className="overflow-hidden rounded-3xl border border-brand-navy/10 bg-white shadow-soft">
              <div className="relative aspect-[4/3]">
                <Image src={visual.image} alt={visual.alt} fill className="object-cover" />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="projects-cta-heading" className="section-surface bg-gradient-to-r from-brand-cream via-white to-brand-cream p-6 sm:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <h2 id="projects-cta-heading" className="text-2xl font-semibold text-brand-ink sm:text-3xl">
              Discuss Your Property
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-brand-charcoal/80 sm:text-base">
              Contact Lanyard to talk through renovation, restoration, capital improvement, or maintenance needs for
              your property.
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

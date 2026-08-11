import Image from 'next/image';
import Link from 'next/link';

const projectCategories = [
  {
    title: 'Placeholder Category: Exterior Envelope',
    summary:
      'Placeholder grouping label for facade, cladding, and weatherproofing project examples once client-approved project scope language is provided.',
  },
  {
    title: 'Placeholder Category: Multifamily Upgrades',
    summary:
      'Placeholder grouping label for occupied-property renovation examples pending final project permissions and approved detail depth.',
  },
  {
    title: 'Placeholder Category: Commercial Repositioning',
    summary:
      'Placeholder grouping label for commercial refresh projects, to be replaced with verified and publishable project categories.',
  },
];

const placeholderProjects = [
  {
    title: 'Placeholder Project 01',
    category: 'Placeholder Category: Exterior Envelope',
    details: 'Placeholder location, placeholder schedule window, placeholder scope notes.',
    image: '/images/projects/project-placeholder-1.svg',
  },
  {
    title: 'Placeholder Project 02',
    category: 'Placeholder Category: Multifamily Upgrades',
    details: 'Placeholder location, placeholder schedule window, placeholder scope notes.',
    image: '/images/projects/project-placeholder-2.svg',
  },
  {
    title: 'Placeholder Project 03',
    category: 'Placeholder Category: Commercial Repositioning',
    details: 'Placeholder location, placeholder schedule window, placeholder scope notes.',
    image: '/images/projects/project-placeholder-3.svg',
  },
  {
    title: 'Placeholder Project 04',
    category: 'Placeholder Category: Exterior Envelope',
    details: 'Placeholder location, placeholder schedule window, placeholder scope notes.',
    image: '/images/projects/project-placeholder-4.svg',
  },
  {
    title: 'Placeholder Project 05',
    category: 'Placeholder Category: Multifamily Upgrades',
    details: 'Placeholder location, placeholder schedule window, placeholder scope notes.',
    image: '/images/projects/project-placeholder-5.svg',
  },
  {
    title: 'Placeholder Project 06',
    category: 'Placeholder Category: Commercial Repositioning',
    details: 'Placeholder location, placeholder schedule window, placeholder scope notes.',
    image: '/images/projects/project-placeholder-6.svg',
  },
];

export function ProjectsPageContent() {
  return (
    <main className="space-y-12 sm:space-y-16" aria-labelledby="projects-page-heading">
      <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-950 text-stone-100 shadow-soft">
        <div className="grid lg:grid-cols-[1.25fr_1fr]">
          <div className="relative min-h-[20rem] lg:min-h-[26rem]">
            <Image
              src="/images/projects/hero-placeholder.svg"
              alt="Placeholder image for approved projects hero visual."
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-900/55 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-6 sm:p-10">
              <p className="inline-flex w-fit rounded-full border border-amber-200/40 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                Placeholder portfolio visual
              </p>
              <h1 id="projects-page-heading" className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Project Portfolio Framework for Commercial and Multifamily Renovation
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-stone-200 sm:text-base">
                Placeholder project cards, placeholder imagery, and placeholder case details are shown below for layout and user-flow review
                only. Verified project data and publication-approved media will replace this content.
              </p>
            </div>
          </div>
          <aside className="flex flex-col justify-between gap-6 border-t border-stone-700/70 bg-stone-900/90 p-6 sm:p-10 lg:border-l lg:border-t-0">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-stone-100">Consultation Path</h2>
              <p className="text-sm leading-relaxed text-stone-300">
                Use this placeholder portfolio structure to discuss similar renovation needs while project names, dates, outcomes, and scope
                specifics remain unverified.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-stone-900 transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
              >
                Discuss a Similar Project
              </Link>
              <a
                href="#project-gallery"
                className="inline-flex items-center rounded-full border border-stone-500 px-5 py-2.5 text-sm font-semibold text-stone-100 transition hover:border-stone-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-100"
              >
                View Placeholder Gallery
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="project-categories-heading" className="space-y-6">
        <div className="space-y-2">
          <h2 id="project-categories-heading" className="text-2xl font-semibold text-stone-900 sm:text-3xl">
            Project Category Presentation
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-stone-700 sm:text-base">
            Every category label below is placeholder taxonomy used to prototype filtering/grouping behavior before client-approved service
            language and portfolio segmentation are finalized.
          </p>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {projectCategories.map((category) => (
            <li key={category.title} className="rounded-2xl border border-stone-200 bg-white/95 p-5 shadow-soft">
              <h3 className="text-lg font-semibold text-stone-900">{category.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-700">{category.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="project-gallery" aria-labelledby="project-gallery-heading" className="space-y-6">
        <div className="space-y-2">
          <h2 id="project-gallery-heading" className="text-2xl font-semibold text-stone-900 sm:text-3xl">
            Responsive Placeholder Project Gallery
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-stone-700 sm:text-base">
            Every project title, project detail, and image in this gallery is placeholder-only. No project location, outcome, budget,
            completion date, or client identity is represented as confirmed.
          </p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {placeholderProjects.map((project) => (
            <li key={project.title} className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-soft">
              <div className="relative aspect-[4/3]">
                <Image src={project.image} alt={`Placeholder image for ${project.title}.`} fill className="object-cover" />
              </div>
              <div className="space-y-3 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">{project.category}</p>
                <h3 className="text-xl font-semibold text-stone-900">{project.title}</h3>
                <p className="text-sm leading-relaxed text-stone-700">{project.details}</p>
                <p className="rounded-xl bg-amber-50 px-3 py-2 text-xs font-medium text-amber-800">
                  Placeholder image and placeholder project summary pending client publication approval.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="projects-cta-heading"
        className="rounded-[2rem] border border-amber-200 bg-gradient-to-r from-amber-100 via-orange-50 to-amber-100 p-6 sm:p-10"
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <h2 id="projects-cta-heading" className="text-2xl font-semibold text-stone-900 sm:text-3xl">
              Consultation CTA
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-stone-800 sm:text-base">
              This call to action is confirmed for page flow; all adjacent project proof remains placeholder until verified details and image
              rights are provided.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}

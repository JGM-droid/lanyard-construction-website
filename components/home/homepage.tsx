import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

const whyChooseItems = [
  {
    title: 'Multifamily Is Our Focus',
    description: 'We work with multifamily properties and understand the demands of occupied buildings.',
  },
  {
    title: 'Clear Communication at Every Step',
    description: 'We keep projects moving with straightforward communication and clear coordination.',
  },
  {
    title: 'Accountability You Can Rely On',
    description: 'We stand behind our work and stay engaged from planning through completion.',
  },
  {
    title: 'Experienced Project Management',
    description: 'Our team manages scheduling, coordination, and day-to-day execution with care.',
  },
  {
    title: 'Solutions That Fit Your Property',
    description: 'We tailor each approach to the specific property, scope, and timeline.',
  },
  {
    title: 'Built for Long-Term Partnerships',
    description: 'We aim to be a dependable construction partner for ongoing property needs.',
  },
];

const services = [
  {
    title: 'Exterior Renovations',
    description: 'Exterior renovation work for multifamily and other properties, including facades, roofing updates, and exterior improvements.',
    href: '/services/exterior-renovations',
    linkLabel: 'Learn More',
    image: '/images/services/exterior-hero.svg',
  },
  {
    title: 'Interior Renovations',
    description: 'Interior renovation work for units, common areas, and shared spaces with a focus on coordination and quality.',
    href: '/services',
    linkLabel: 'Explore Services',
    image: '/images/services/overview-hero.svg',
  },
  {
    title: 'Fire & Flood Restoration',
    description: 'Restoration support for urgent property needs, including fire and flood recovery work.',
    href: '/services',
    linkLabel: 'Explore Services',
    image: '/images/services/project-preview-a.svg',
  },
  {
    title: 'Maintenance Services',
    description: 'Reliable maintenance support for ongoing property needs and planned repairs.',
    href: '/services',
    linkLabel: 'Explore Services',
    image: '/images/services/project-preview-b.svg',
  },
];

const projectGallery = [
  { src: '/images/home/hero-primary.svg', alt: 'Construction service visual' },
  { src: '/images/home/service-highlight.svg', alt: 'Renovation service visual' },
  { src: '/images/home/project-preview.svg', alt: 'Property improvement service visual' },
];

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
      <span
        className={`inline-flex items-center rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${
          dark ? 'border-white/15 bg-white/10 text-white/80' : 'border-brand-blue/20 bg-brand-cream/70 text-brand-navy'
        }`}
      >
        {eyebrow}
      </span>
      <div className="space-y-4">
        <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-brand-ink'}`}>
          {title}
        </h2>
        <p className={`text-base leading-8 sm:text-lg ${dark ? 'text-white/72' : 'text-brand-charcoal/80'}`}>{description}</p>
      </div>
    </div>
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
      <section className="relative isolate overflow-hidden bg-brand-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/services/exterior-hero.svg"
            alt="Exterior renovation work for a multifamily or commercial property"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/35" />
        </div>

        <div className="relative mx-auto flex min-h-[32rem] max-w-7xl items-center px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <div className="max-w-2xl space-y-7 text-white">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/80">
              Construction Services
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Built on Relationships. Driven by Quality.
              </h1>
              <p className="max-w-xl text-base leading-8 text-white/80 sm:text-lg">
                Multifamily renovation, restoration, and capital improvements delivered with clear communication and dependable execution.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/projects" className="btn-secondary border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomeSection>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Welcome"
              title="Welcome to Lanyard Construction Services"
              description="Lanyard Construction Services is a general contractor specializing in multifamily renovation, restoration, and capital improvements."
            />
            <p className="max-w-2xl text-base leading-8 text-brand-charcoal/80">
              We believe successful construction starts with strong relationships, clear communication, and dependable execution. From individual repairs to large-scale renovations, our team works alongside clients to provide practical solutions while delivering quality work with consistency and accountability.
            </p>
            <Link href="/about" className="btn-primary inline-flex">
              More About Us
            </Link>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-brand-cream/70 shadow-soft">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/home/hero-primary.svg"
                alt="Construction project work and exterior renovation details"
                fill
                className="object-cover"
              />
            </div>
            <div className="border-t border-brand-navy/10 bg-white px-6 py-5 text-sm leading-7 text-brand-charcoal/80">
              A practical construction partner for multifamily properties, renovations, and restoration work.
            </div>
          </div>
        </div>
      </HomeSection>

      <HomeSection dark>
        <div className="space-y-8">
          <SectionHeading
            dark
            eyebrow="Why Choose Lanyard"
            title="Why Choose Lanyard"
            description="A Construction Partner Built Around Your Property’s Needs"
          />
          <p className="max-w-3xl text-base leading-8 text-white/70">
            Multifamily construction requires coordination, communication, and an understanding of how properties operate while occupied. Lanyard helps property teams protect assets, reduce disruption, and keep projects moving with confidence.
          </p>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseItems.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </HomeSection>

      <HomeSection>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Services"
            title="Our Services"
            description="From exterior improvements to restoration and ongoing maintenance support, we help property teams keep work moving with a clear, dependable approach."
          />
          <Link href="/services" className="btn-secondary inline-flex">
            View All Services
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover transition duration-300 group-hover:scale-[1.02]" />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold text-brand-ink">{service.title}</h3>
                <p className="text-sm leading-7 text-brand-charcoal/80">{service.description}</p>
                <span className="inline-flex items-center text-sm font-semibold text-brand-blue">{service.linkLabel}</span>
              </div>
            </Link>
          ))}
        </div>
      </HomeSection>

      <HomeSection>
        <div className="space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Completed Projects"
              title="Completed Projects"
              description="Service visuals are presented here as part of a polished early review experience while final project details remain client-dependent."
            />
            <Link href="/projects" className="btn-secondary inline-flex">
              View Completed Projects
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projectGallery.map((project) => (
              <div key={project.src} className="overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-brand-cream/60 shadow-soft">
                <div className="relative aspect-[4/3] w-full">
                  <Image src={project.src} alt={project.alt} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </HomeSection>

      <section className="bg-brand-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-12">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to Discuss Your Property?</h2>
              <p className="text-base leading-8 text-white/72 sm:text-lg">
                Our team is ready to learn about your property, answer your questions, and discuss practical solutions for your next project.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 lg:mt-0 lg:shrink-0">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

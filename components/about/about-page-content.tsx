import Image from 'next/image';
import Link from 'next/link';

const differentiators = [
  {
    id: 'multifamily-focus',
    title: 'Multifamily Is Our Focus',
    body:
      'We specialize in working within active communities. That means we understand residents, leasing schedules, access limitations, and the importance of minimizing disruption while maintaining quality and speed.',
  },
  {
    id: 'clear-communication',
    title: 'Clear Communication at Every Step',
    body:
      'You should never have to wonder what’s happening on your property. Our team provides consistent updates, proactive scheduling coordination, and transparent communication from kickoff to closeout.',
  },
  {
    id: 'accountability',
    title: 'Accountability You Can Rely On',
    body:
      'We take ownership of our work. That means showing up when we say we will, addressing issues directly, and standing behind the quality of every project we deliver.',
  },
  {
    id: 'project-management',
    title: 'Experienced Project Management',
    body:
      'Our team brings hands-on field experience and structured project oversight to every job. We coordinate trades, manage timelines, and keep work aligned with your operational needs.',
  },
  {
    id: 'property-fit-solutions',
    title: 'Solutions That Fit Your Property',
    body:
      'No two properties are the same. We tailor our approach to your goals, your budget, and your constraints—delivering practical solutions that make sense for your asset.',
  },
  {
    id: 'long-term-partnerships',
    title: 'Built for Long-Term Partnerships',
    body:
      'We’re not here for one project—we’re here to become a trusted extension of your team. Many of our clients work with us across multiple properties and repeat projects because of the consistency we deliver.',
  },
];

export function AboutPageContent() {
  return (
    <main className="space-y-12 sm:space-y-16" aria-labelledby="about-page-heading">
      <section className="section-surface overflow-hidden">
        <div className="grid gap-6 bg-white p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:p-12">
          <div className="space-y-5 lg:space-y-6">
            <p className="eyebrow">ABOUT LANYARD</p>
            <h1 id="about-page-heading" className="text-3xl font-semibold text-brand-ink sm:text-4xl lg:text-5xl">
              Built on Relationships. Driven by Quality.
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed text-brand-charcoal/85 sm:text-base">
              Lanyard Construction Services is a general contractor specializing in multifamily renovation, restoration,
              and capital improvements.
            </p>
            <p className="max-w-3xl text-sm leading-relaxed text-brand-charcoal/85 sm:text-base">
              We believe successful construction starts with strong relationships, clear communication, and dependable
              execution. From individual repairs to large-scale renovations, our team works alongside clients to provide
              practical solutions while delivering quality work with consistency and accountability.
            </p>
            <p className="max-w-3xl rounded-2xl border border-brand-navy/15 bg-brand-navy/5 px-4 py-3 text-sm font-semibold leading-relaxed text-brand-navy sm:text-base">
              Our goal is simple: to be the construction partner our clients trust with their properties, today and for
              years to come.
            </p>
          </div>
          <div className="section-surface-dark relative overflow-hidden p-6 sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,167,222,0.36),transparent_54%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.14),transparent_52%)]" />
            <div className="relative z-10 mx-auto flex max-w-sm flex-col items-center gap-5 text-center">
              <div className="rounded-2xl border border-white/20 bg-white/8 p-4 backdrop-blur-sm">
                <Image
                  src="/images/brand/lanyard-logo.png"
                  alt="Lanyard Construction Services logo"
                  width={280}
                  height={140}
                  className="h-auto w-auto max-w-full"
                  priority
                />
              </div>
              <p className="text-sm leading-relaxed text-white/85 sm:text-base">
                Multifamily renovation, restoration, and capital improvements delivered with clear communication and
                dependable execution.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-choose-lanyard-heading" className="space-y-6">
        <div className="space-y-2">
          <h2 id="why-choose-lanyard-heading" className="text-2xl font-semibold text-brand-ink sm:text-3xl">
            Why Choose Lanyard
          </h2>
          <p className="text-sm font-semibold text-brand-navy sm:text-base">
            A Construction Partner Built Around Your Property&apos;s Needs
          </p>
          <p className="max-w-3xl text-sm leading-relaxed text-brand-charcoal/80 sm:text-base">
            Multifamily construction requires more than technical skill—it requires coordination, communication, and a
            deep understanding of how properties operate while occupied. That&apos;s where we excel.
          </p>
          <p className="max-w-3xl text-sm leading-relaxed text-brand-charcoal/80 sm:text-base">
            At Lanyard, we don&apos;t just complete scopes of work. We help property teams protect assets, reduce
            disruption, and keep projects moving with confidence.
          </p>
        </div>
      </section>

      <section aria-labelledby="differentiators-heading" className="space-y-6">
        <div className="space-y-2">
          <h2 id="differentiators-heading" className="text-2xl font-semibold text-brand-ink sm:text-3xl">Differentiators</h2>
        </div>
        <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {differentiators.map((item) => (
            <li key={item.id} className="rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-soft sm:p-6">
              <h3 className="text-lg font-semibold text-brand-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/85">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="about-closing-cta-heading"
        className="section-surface bg-gradient-to-br from-brand-navy via-brand-navy to-brand-medium p-6 text-white sm:p-10"
      >
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <h2 id="about-closing-cta-heading" className="text-2xl font-semibold sm:text-3xl">
            Let&apos;s Discuss Your Property
          </h2>
          <p className="text-sm leading-relaxed text-white/85 sm:text-base">
            Connect with our team to plan practical multifamily solutions with clear communication and dependable
            execution.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

import Image from 'next/image';
import Link from 'next/link';

const placeholderStoryMilestones = [
  { id: 'story-company-photo', text: 'Company photo needed.' },
  { id: 'story-project-details', text: 'Project details needed.' },
  { id: 'story-team-photos', text: 'Team photos coming soon.' },
];

const placeholderValues = [
  {
    id: 'value-about',
    title: 'About Us',
    body: 'Renovation and maintenance work for multifamily properties.',
  },
  {
    id: 'value-work',
    title: 'Our Work',
    body: 'Exterior work, interior work, and restoration work.',
  },
  {
    id: 'value-team',
    title: 'Our Team',
    body: 'Team photos and bios will be added here.',
  },
];

const placeholderTeam = [
  {
    id: 'team-member-1',
    role: 'Team Member',
    bio: 'Add a short bio and photo here.',
    image: '/images/about/team-placeholder-1.svg',
  },
  {
    id: 'team-member-2',
    role: 'Team Member',
    bio: 'Add a short bio and photo here.',
    image: '/images/about/team-placeholder-2.svg',
  },
  {
    id: 'team-member-3',
    role: 'Team Member',
    bio: 'Add a short bio and photo here.',
    image: '/images/about/team-placeholder-3.svg',
  },
];

export function AboutPageContent() {
  return (
    <main className="space-y-12 sm:space-y-16" aria-labelledby="about-page-heading">
      <section className="section-surface overflow-hidden">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[18rem] lg:min-h-[24rem]">
            <Image src="/images/about/hero-placeholder.svg" alt="About image needed: Add a professional photograph of the Lanyard team or crew." fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/80 via-brand-navy/30 to-transparent" />
            <div className="relative z-10 flex h-full items-end p-6 sm:p-10">
              <p className="rounded-full border border-white/40 bg-brand-navy/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                About image needed: Add a professional photograph of the Lanyard team or crew.
              </p>
            </div>
          </div>
          <div className="space-y-5 bg-brand-navy p-6 text-white sm:p-10">
            <p className="eyebrow text-brand-blue">About</p>
            <h1 id="about-page-heading" className="text-3xl font-semibold leading-tight sm:text-4xl">
              About Lanyard Construction Services
            </h1>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              We serve multifamily properties with renovation and maintenance work.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <p className="text-sm font-medium text-white">Company photo needed</p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Add a team photo or a photo of the crew at work.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="company-story-heading" className="space-y-6">
        <div className="space-y-2">
          <h2 id="company-story-heading" className="text-2xl font-semibold text-brand-ink sm:text-3xl">
            About Us
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-brand-charcoal/80 sm:text-base">
            We help with renovation and maintenance work for multifamily properties.
          </p>
        </div>
        <ol className="grid gap-4 md:grid-cols-3">
          {placeholderStoryMilestones.map((milestone, index) => (
            <li key={milestone.id} className="rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">Phase {index + 1}</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">{milestone.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="values-approach-heading" className="space-y-6">
        <div className="space-y-2">
          <h2 id="values-approach-heading" className="text-2xl font-semibold text-brand-ink sm:text-3xl">
            Our Work
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-brand-charcoal/80 sm:text-base">
            Our work includes renovations, restoration, and maintenance.
          </p>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {placeholderValues.map((value) => (
            <li key={value.id} className="rounded-2xl border border-brand-navy/10 bg-white/95 p-5 shadow-soft">
              <h3 className="text-lg font-semibold text-brand-ink">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">{value.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="team-placeholders-heading" className="space-y-6">
        <div className="space-y-2">
          <h2 id="team-placeholders-heading" className="text-2xl font-semibold text-brand-ink sm:text-3xl">
            Team Photos
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-brand-charcoal/80 sm:text-base">
            Add team photos and short bios here.
          </p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderTeam.map((member) => (
            <li key={member.id} className="overflow-hidden rounded-3xl border border-brand-navy/10 bg-white shadow-soft">
              <div className="relative aspect-[4/3]">
                <Image src={member.image} alt={`Placeholder portrait for ${member.role}.`} fill className="object-cover" />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-lg font-semibold text-brand-ink">{member.role}</h3>
                <p className="text-sm leading-relaxed text-brand-charcoal/80">{member.bio}</p>
                <p className="rounded-xl bg-brand-blue/10 px-3 py-2 text-xs font-medium text-brand-navy">Photo Needed</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="trust-oriented-heading" className="section-surface bg-gradient-to-br from-brand-navy via-brand-navy to-brand-medium p-6 text-white sm:p-10">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-4">
            <h2 id="trust-oriented-heading" className="text-2xl font-semibold sm:text-3xl">
              Contact Us
            </h2>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Call us for your next project.
            </p>
            <p className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/80">
              Phone: (469) 543-1001
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/15 bg-white/10 p-5">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <p className="text-sm leading-relaxed text-white/80">Reach out for renovation and maintenance work.</p>
            <Link href="/contact" className="btn-primary w-full justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

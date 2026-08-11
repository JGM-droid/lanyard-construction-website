import Image from 'next/image';
import Link from 'next/link';

const placeholderStoryMilestones = [
  'Placeholder company-history statement for early timeline context.',
  'Placeholder operating-growth statement pending verified company milestones.',
  'Placeholder present-day direction statement awaiting approved business narrative.',
];

const placeholderValues = [
  {
    title: 'Placeholder Value Statement 01',
    body: 'Placeholder approach language for client communication, schedule planning, and trade coordination.',
  },
  {
    title: 'Placeholder Value Statement 02',
    body: 'Placeholder approach language for occupied-site logistics, safety planning, and disruption management.',
  },
  {
    title: 'Placeholder Value Statement 03',
    body: 'Placeholder approach language for quality controls, scope transparency, and handoff standards.',
  },
];

const placeholderTeam = [
  {
    role: 'Placeholder Team Role 01',
    bio: 'Placeholder biography only. Employee name, tenure, credentials, and personal profile details are unverified.',
    image: '/images/about/team-placeholder-1.svg',
  },
  {
    role: 'Placeholder Team Role 02',
    bio: 'Placeholder biography only. Employee name, tenure, credentials, and personal profile details are unverified.',
    image: '/images/about/team-placeholder-2.svg',
  },
  {
    role: 'Placeholder Team Role 03',
    bio: 'Placeholder biography only. Employee name, tenure, credentials, and personal profile details are unverified.',
    image: '/images/about/team-placeholder-3.svg',
  },
];

export function AboutPageContent() {
  return (
    <main className="space-y-12 sm:space-y-16" aria-labelledby="about-page-heading">
      <section className="section-surface overflow-hidden">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[18rem] lg:min-h-[24rem]">
            <Image src="/images/about/hero-placeholder.svg" alt="Placeholder image for approved company story hero visual." fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/80 via-brand-navy/30 to-transparent" />
            <div className="relative z-10 flex h-full items-end p-6 sm:p-10">
              <p className="rounded-full border border-white/40 bg-brand-navy/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Placeholder hero image
              </p>
            </div>
          </div>
          <div className="space-y-5 bg-brand-navy p-6 text-white sm:p-10">
            <p className="eyebrow text-brand-blue">About</p>
            <h1 id="about-page-heading" className="text-3xl font-semibold leading-tight sm:text-4xl">
              Company story and trust framework
            </h1>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              This About page prototype uses placeholder company-history statements, placeholder values, and placeholder team content to validate page structure before factual approvals are provided.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <p className="text-sm font-medium text-white">Placeholder Notice</p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                No company milestones, team identities, certifications, or trust metrics are represented as confirmed on this prototype.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              Talk With Our Team
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="company-story-heading" className="space-y-6">
        <div className="space-y-2">
          <h2 id="company-story-heading" className="text-2xl font-semibold text-brand-ink sm:text-3xl">
            Company story structure
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-brand-charcoal/80 sm:text-base">
            Each point below is a placeholder company-history statement and should be replaced with verified milestones and approved narrative language.
          </p>
        </div>
        <ol className="grid gap-4 md:grid-cols-3">
          {placeholderStoryMilestones.map((milestone, index) => (
            <li key={milestone} className="rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">Phase {index + 1}</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">{milestone}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="values-approach-heading" className="space-y-6">
        <div className="space-y-2">
          <h2 id="values-approach-heading" className="text-2xl font-semibold text-brand-ink sm:text-3xl">
            Values and operating approach
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-brand-charcoal/80 sm:text-base">
            Every value and approach statement here is placeholder text to preserve fact integrity while still demonstrating layout intent.
          </p>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {placeholderValues.map((value) => (
            <li key={value.title} className="rounded-2xl border border-brand-navy/10 bg-white/95 p-5 shadow-soft">
              <h3 className="text-lg font-semibold text-brand-ink">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">{value.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="team-placeholders-heading" className="space-y-6">
        <div className="space-y-2">
          <h2 id="team-placeholders-heading" className="text-2xl font-semibold text-brand-ink sm:text-3xl">
            Team content placeholders
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-brand-charcoal/80 sm:text-base">
            Team portraits and biographies are placeholder-only until employee participation and publication details are confirmed.
          </p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderTeam.map((member) => (
            <li key={member.role} className="overflow-hidden rounded-3xl border border-brand-navy/10 bg-white shadow-soft">
              <div className="relative aspect-[4/3]">
                <Image src={member.image} alt={`Placeholder portrait for ${member.role}.`} fill className="object-cover" />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-lg font-semibold text-brand-ink">{member.role}</h3>
                <p className="text-sm leading-relaxed text-brand-charcoal/80">{member.bio}</p>
                <p className="rounded-xl bg-brand-blue/10 px-3 py-2 text-xs font-medium text-brand-navy">Placeholder biography content.</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="trust-oriented-heading" className="section-surface bg-gradient-to-br from-brand-navy via-brand-navy to-brand-medium p-6 text-white sm:p-10">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-4">
            <h2 id="trust-oriented-heading" className="text-2xl font-semibold sm:text-3xl">
              Trust-oriented placeholder section
            </h2>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Placeholder trust signals are presented for structure only. Certifications, awards, outcomes, testimonials, and compliance details remain unverified and intentionally unlabeled as factual claims.
            </p>
            <p className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/80">
              Placeholder trust statement: pending verified credentials and approved publication wording.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/15 bg-white/10 p-5">
            <h3 className="text-lg font-semibold text-white">Consultation CTA</h3>
            <p className="text-sm leading-relaxed text-white/80">Confirmed conversion path with placeholder adjacent trust content.</p>
            <Link href="/contact" className="btn-primary w-full justify-center">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

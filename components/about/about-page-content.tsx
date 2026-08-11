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
      <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft">
        <div className="grid lg:grid-cols-[1.1fr_1fr]">
          <div className="relative min-h-[18rem] lg:min-h-[24rem]">
            <Image
              src="/images/about/hero-placeholder.svg"
              alt="Placeholder image for approved company story hero visual."
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/70 via-stone-800/30 to-transparent" />
            <div className="relative z-10 flex h-full items-end p-6 sm:p-10">
              <p className="rounded-full border border-white/40 bg-stone-900/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Placeholder hero image
              </p>
            </div>
          </div>
          <div className="space-y-5 bg-stone-900 p-6 text-stone-100 sm:p-10">
            <h1 id="about-page-heading" className="text-3xl font-semibold leading-tight sm:text-4xl">
              Company Story and Trust Framework
            </h1>
            <p className="text-sm leading-relaxed text-stone-200 sm:text-base">
              This About page prototype uses placeholder company-history statements, placeholder values, and placeholder team content to
              validate page structure before factual approvals are provided.
            </p>
            <div className="rounded-2xl border border-stone-700 bg-stone-800/70 p-4">
              <p className="text-sm font-medium text-stone-100">Placeholder Notice</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-300">
                No company milestones, team identities, certifications, or trust metrics are represented as confirmed on this prototype.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-stone-900 transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-100"
            >
              Talk With Our Team
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="company-story-heading" className="space-y-6">
        <div className="space-y-2">
          <h2 id="company-story-heading" className="text-2xl font-semibold text-stone-900 sm:text-3xl">
            Company Story Structure
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-stone-700 sm:text-base">
            Each point below is a placeholder company-history statement and should be replaced with verified milestones and approved
            narrative language.
          </p>
        </div>
        <ol className="grid gap-4 md:grid-cols-3">
          {placeholderStoryMilestones.map((milestone, index) => (
            <li key={milestone} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">Phase {index + 1}</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">{milestone}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="values-approach-heading" className="space-y-6">
        <div className="space-y-2">
          <h2 id="values-approach-heading" className="text-2xl font-semibold text-stone-900 sm:text-3xl">
            Values and Operating Approach
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-stone-700 sm:text-base">
            Every value and approach statement here is placeholder text to preserve fact integrity while still demonstrating layout intent.
          </p>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {placeholderValues.map((value) => (
            <li key={value.title} className="rounded-2xl border border-stone-200 bg-white/95 p-5 shadow-soft">
              <h3 className="text-lg font-semibold text-stone-900">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-700">{value.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="team-placeholders-heading" className="space-y-6">
        <div className="space-y-2">
          <h2 id="team-placeholders-heading" className="text-2xl font-semibold text-stone-900 sm:text-3xl">
            Team Content Placeholders
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-stone-700 sm:text-base">
            Team portraits and biographies are placeholder-only until employee participation and publication details are confirmed.
          </p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderTeam.map((member) => (
            <li key={member.role} className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-soft">
              <div className="relative aspect-[4/3]">
                <Image src={member.image} alt={`Placeholder portrait for ${member.role}.`} fill className="object-cover" />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-lg font-semibold text-stone-900">{member.role}</h3>
                <p className="text-sm leading-relaxed text-stone-700">{member.bio}</p>
                <p className="rounded-xl bg-amber-50 px-3 py-2 text-xs font-medium text-amber-800">Placeholder biography content.</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="trust-oriented-heading"
        className="rounded-[2rem] border border-stone-200 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 p-6 text-stone-100 shadow-soft sm:p-10"
      >
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-4">
            <h2 id="trust-oriented-heading" className="text-2xl font-semibold sm:text-3xl">
              Trust-Oriented Placeholder Section
            </h2>
            <p className="text-sm leading-relaxed text-stone-200 sm:text-base">
              Placeholder trust signals are presented for structure only. Certifications, awards, outcomes, testimonials, and compliance
              details remain unverified and intentionally unlabeled as factual claims.
            </p>
            <p className="rounded-xl border border-stone-600 bg-stone-800/75 px-4 py-3 text-sm text-stone-200">
              Placeholder trust statement: pending verified credentials and approved publication wording.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-stone-600 bg-stone-800/70 p-5">
            <h3 className="text-lg font-semibold text-stone-100">Consultation CTA</h3>
            <p className="text-sm leading-relaxed text-stone-300">
              Confirmed conversion path with placeholder adjacent trust content.
            </p>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-stone-900 transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-100"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

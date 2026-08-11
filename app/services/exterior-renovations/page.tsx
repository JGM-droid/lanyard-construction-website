import { PageContainer } from '@/components/page-container';
import {
  ConsultationCta,
  ProcessOverview,
  ProjectPreviewSection,
  ServiceCategoryGrid,
  ServicesHero,
} from '@/components/services/service-sections';

export default function ExteriorRenovationsPage() {
  return (
    <PageContainer>
      <main className="flex flex-col gap-8 sm:gap-10 lg:gap-12" aria-labelledby="exterior-renovations-title">
        <ServicesHero
          headingId="exterior-renovations-title"
          title="Exterior Renovations for Commercial and Multifamily Properties"
          subtitle="This detail page demonstrates a focused renovation narrative with clear status labeling. Scope descriptions, image context, and performance language remain placeholder-safe until client confirmation."
          imageSrc="/images/services/exterior-hero.svg"
          imageAlt="Placeholder exterior renovation visual concept panel"
          ctaHref="/contact"
          ctaLabel="Request Exterior Consultation"
        />

        <ServiceCategoryGrid
          title="Renovation categories are structured for clear decision-making"
          intro="Category structure supports discovery conversations without asserting unverified methods, outcomes, or material specifications."
          items={[
            {
              title: 'Facade Renewal Scope',
              description:
                'Placeholder category for visible facade updates and modernization work. Detailed assemblies and system limits remain unverified.',
              status: 'Placeholder',
            },
            {
              title: 'Weather-Exposure Repair Paths',
              description:
                'Assumed category for addressing weather-facing exterior components. Inspection protocol and repair thresholds are pending validation.',
              status: 'Assumed',
            },
            {
              title: 'Exterior Component Upgrades',
              description:
                'Placeholder grouping for replacement or enhancement of selected exterior elements. Product selections are not yet confirmed.',
              status: 'Placeholder',
            },
            {
              title: 'Site Logistics During Active Occupancy',
              description:
                'Assumed support category for staging and communication while properties stay active. Sequencing model remains client-dependent.',
              status: 'Assumed',
            },
            {
              title: 'Finish and Appearance Refresh',
              description:
                'Open Question category for desired finish standards and visual targets across asset types.',
              status: 'Open Question',
            },
            {
              title: 'Closeout Documentation Set',
              description:
                'Placeholder category for turnover expectations, signoff criteria, and documentation package depth.',
              status: 'Placeholder',
            },
          ]}
        />

        <ProcessOverview
          title="Approach section for exterior renovation planning"
          intro="The steps below describe an implementation approach framework only. Timeline lengths, technical sequencing, and success criteria are intentionally left as Placeholder or Assumed states."
          steps={[
            {
              title: 'Exterior Condition Discovery',
              description:
                'Confirmed prototype step focused on understanding current exterior context before prescribing renovation pathways.',
              status: 'Confirmed',
            },
            {
              title: 'Assumed Scope Option Mapping',
              description:
                'Assumed step for comparing renovation options with stakeholder priorities and operational constraints.',
              status: 'Assumed',
            },
            {
              title: 'Placeholder Sequence and Logistics',
              description:
                'Placeholder step covering task sequencing, staging zones, and communication checkpoints until specific standards are provided.',
              status: 'Placeholder',
            },
            {
              title: 'Consultation and Next Decisions',
              description:
                'Confirmed conversion step that routes teams to consultation for verified project-specific recommendations.',
              status: 'Confirmed',
            },
          ]}
        />

        <ProjectPreviewSection
          title="Project preview area with clearly marked placeholders"
          intro="These previews provide layout direction only. Project names, timelines, methods, and outcomes below are placeholders and not representations of completed work."
          projects={[
            {
              title: 'Placeholder Exterior Refresh Program',
              subtitle:
                'Placeholder visual card for a multi-building exterior refresh concept. Project proof, photography provenance, and measurable outcomes are unverified.',
              imageSrc: '/images/services/project-preview-a.svg',
              imageAlt: 'Placeholder project preview graphic A for exterior renovations',
              status: 'Placeholder',
            },
            {
              title: 'Assumed Occupied-Site Phasing Example',
              subtitle:
                'Assumed card illustrating phased exterior work while maintaining active operations. Final phasing model and communication protocol are pending confirmation.',
              imageSrc: '/images/services/project-preview-b.svg',
              imageAlt: 'Placeholder project preview graphic B for exterior renovations',
              status: 'Assumed',
            },
          ]}
        />

        <ConsultationCta
          title="Discuss exterior renovation priorities with a consultation-first workflow"
          body="This prototype CTA is intentionally factual-safe: it invites project discussions without asserting unverified capabilities, statistics, certifications, guarantees, or results."
          primaryHref="/contact"
          primaryLabel="Request Exterior Consultation"
        />
      </main>
    </PageContainer>
  );
}

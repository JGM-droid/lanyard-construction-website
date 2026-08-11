import { PageContainer } from '@/components/page-container';
import {
  ConsultationCta,
  ProcessOverview,
  ServiceCategoryGrid,
  ServicesHero,
  TrustSignalSection,
} from '@/components/services/service-sections';

export default function ServicesPage() {
  return (
    <PageContainer>
      <main className="flex flex-col gap-8 sm:gap-10 lg:gap-12" aria-labelledby="services-overview-title">
        <ServicesHero
          headingId="services-overview-title"
          title="Services Overview for Commercial and Multifamily Renovation Planning"
          subtitle="This page is a polished service-hub prototype designed to guide visitors toward consultation. Service categories and delivery details below are clearly marked with Confirmed, Assumed, Placeholder, or Open Question labels where client evidence is still pending."
          imageSrc="/images/services/overview-hero.svg"
          imageAlt="Placeholder construction site image panel for services overview visual direction"
          ctaHref="/services/exterior-renovations"
          ctaLabel="Explore Exterior Renovations"
        />

        <ServiceCategoryGrid
          title="Service categories are organized for fast qualification and routing"
          intro="Category names and scope language are intentionally placeholder-safe while service taxonomy is finalized with the client."
          items={[
            {
              title: 'Exterior Renovation Packages',
              description:
                'Placeholder scope group for envelope, facade, and exterior upgrade work. Final inclusions and technical sequence remain unverified.',
              status: 'Placeholder',
            },
            {
              title: 'Occupied-Site Coordination',
              description:
                'Assumed planning category covering tenant-aware and operations-aware staging. Exact communication standards are pending approval.',
              status: 'Assumed',
            },
            {
              title: 'Capital Improvement Sequencing',
              description:
                'Placeholder category for planning multi-phase improvements. Scheduling depth and phasing models are not yet client-confirmed.',
              status: 'Placeholder',
            },
            {
              title: 'Building Envelope Refresh',
              description:
                'Assumed service family for visible exterior modernization. Materials, assemblies, and performance claims remain open for validation.',
              status: 'Assumed',
            },
            {
              title: 'Lifecycle Maintenance Integration',
              description:
                'Open Question category for how preventative and corrective work may be packaged in future service language.',
              status: 'Open Question',
            },
            {
              title: 'Project Closeout and Handover',
              description:
                'Placeholder framework for final walkthrough, documentation, and turnover expectations. Deliverable specifics are still unverified.',
              status: 'Placeholder',
            },
          ]}
        />

        <ProcessOverview
          title="Delivery process snapshot for consultation-stage conversations"
          intro="This process pattern is presented as a prototype structure. Detailed durations, methods, and responsibilities are placeholder until client verification."
          steps={[
            {
              title: 'Discovery and Scope Framing',
              description:
                'Confirmed prototype step to capture project goals, constraints, and visibility requirements before defining the work path.',
              status: 'Confirmed',
            },
            {
              title: 'Assumed Site and Risk Review',
              description:
                'Assumed planning step for evaluating existing conditions and sequencing risks. Required inputs and outputs remain under review.',
              status: 'Assumed',
            },
            {
              title: 'Placeholder Work-Plan Alignment',
              description:
                'Placeholder step where renovation scope, timeline, and communication rhythm would be aligned once evidence-backed standards are provided.',
              status: 'Placeholder',
            },
            {
              title: 'Consultation Transition',
              description:
                'Confirmed conversion step directing stakeholders to request a consultation for validated project-specific planning.',
              status: 'Confirmed',
            },
          ]}
        />

        <TrustSignalSection
          title="Trust-oriented section that protects factual accuracy"
          intro="The cards below intentionally avoid unverified metrics, certifications, and guarantees while still providing a confidence-oriented page structure."
          bullets={[
            {
              label: 'Placeholder Credentials Band',
              description:
                'Credential names, license numbers, and validity details are withheld until approved evidence is supplied by the client.',
              status: 'Placeholder',
            },
            {
              label: 'Open Question Service Boundaries',
              description:
                'Geographic reach, subcontracting boundaries, and specialized capability statements remain open questions for stakeholder confirmation.',
              status: 'Open Question',
            },
            {
              label: 'Assumed Communication Rhythm',
              description:
                'The prototype assumes proactive coordination milestones, but no specific response-time or reporting claims are asserted as facts.',
              status: 'Assumed',
            },
          ]}
        />

        <ConsultationCta
          title="Ready to plan scope with a consultation-first process"
          body="Use the consultation path to move from placeholder-safe examples to project-specific requirements. Prototype wording does not promise outcomes, warranties, or schedule guarantees."
          primaryHref="/contact"
          primaryLabel="Request a Consultation"
        />
      </main>
    </PageContainer>
  );
}

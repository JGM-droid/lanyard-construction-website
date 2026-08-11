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
          title="Exterior Renovations"
          subtitle="Lanyard Construction Services provides exterior renovation work for multifamily and other properties."
          imageSrc="/images/services/exterior-hero.svg"
          imageAlt="Service image needed: Add an approved photograph showing exterior renovation work."
          ctaHref="/contact"
          ctaLabel="Contact Lanyard"
        />

        <ServiceCategoryGrid
          title="Services"
          intro="These categories are a simple list of the work we offer."
          items={[
            {
              title: 'Exterior renovation work',
              description: 'Service photo needed. Add a photo showing this type of work.',
              status: 'Placeholder',
            },
            {
              title: 'Property coordination',
              description: 'Service photo needed. Add a photo showing this type of work.',
              status: 'Placeholder',
            },
            {
              title: 'Project scope planning',
              description: 'Service photo needed. Add a photo showing this type of work.',
              status: 'Placeholder',
            },
          ]}
        />

        <ProcessOverview
          title="How We Work"
          intro="We review each project and talk through the next step."
          steps={[
            {
              title: 'Discuss the work',
              description: 'We talk through the project and next step.',
              status: 'Confirmed',
            },
            {
              title: 'Review the property',
              description: 'We review the property and scope.',
              status: 'Placeholder',
            },
            {
              title: 'Confirm the next step',
              description: 'We help plan the next step.',
              status: 'Placeholder',
            },
            {
              title: 'Contact Us',
              description: 'Call us or visit our office.',
              status: 'Confirmed',
            },
          ]}
        />

        <ProjectPreviewSection
          title="Project Photos"
          intro="Project details and photos will be added here."
          projects={[
            {
              title: 'Project Details Needed',
              subtitle: 'Add the project name, location, work completed, and photos.',
              imageSrc: '/images/services/project-preview-a.svg',
              imageAlt: 'Project photo needed',
              status: 'Placeholder',
            },
            {
              title: 'Project Details Needed',
              subtitle: 'Add the project name, location, work completed, and photos.',
              imageSrc: '/images/services/project-preview-b.svg',
              imageAlt: 'Project photo needed',
              status: 'Placeholder',
            },
          ]}
        />

        <ConsultationCta
          title="Contact Us"
          body="Reach out for your next project."
          primaryHref="/contact"
          primaryLabel="Contact Lanyard"
        />
      </main>
    </PageContainer>
  );
}

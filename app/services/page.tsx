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
          title="Our Services"
          subtitle="Lanyard Construction Services provides exterior renovations, interior renovations, fire and flood restoration, and maintenance services."
          imageSrc="/images/services/overview-hero.svg"
          imageAlt="Service image needed: Add an approved photograph showing exterior renovation work."
          ctaHref="/services/exterior-renovations"
          ctaLabel="View Services"
        />

        <ServiceCategoryGrid
          title="Services"
          intro="These service categories are a simple list of the work we offer."
          items={[
            {
              title: 'Exterior Renovations',
              description: 'Service photo needed. Add a photo showing this type of work.',
              status: 'Placeholder',
            },
            {
              title: 'Interior Renovations',
              description: 'Service photo needed. Add a photo showing this type of work.',
              status: 'Placeholder',
            },
            {
              title: 'Fire/Flood Restoration',
              description: 'Service photo needed. Add a photo showing this type of work.',
              status: 'Placeholder',
            },
            {
              title: 'Maintenance Services',
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
              title: 'Discuss the project',
              description: 'We talk through the project and next step.',
              status: 'Confirmed',
            },
            {
              title: 'Review the work',
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

        <TrustSignalSection
          title="More to Add"
          intro="Photos and project details will be added here."
          bullets={[
            {
              label: 'Service photos',
              description: 'Add a photo showing this type of work.',
              status: 'Placeholder',
            },
            {
              label: 'Project photos',
              description: 'Add project photos and details.',
              status: 'Placeholder',
            },
            {
              label: 'Contact info',
              description: 'Call us at (469) 543-1001.',
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

import { PageContainer } from '@/components/page-container';
import { ConsultationCta, ServiceCategoryGrid, ServicesHero } from '@/components/services/service-sections';
import { assetPath } from '@/lib/asset-path';

export default function ServicesPage() {
  return (
    <PageContainer>
      <main className="flex flex-col gap-8 sm:gap-10 lg:gap-12" aria-labelledby="services-overview-title">
        <ServicesHero
          headingId="services-overview-title"
          title="Our Services"
          subtitle="Lanyard Construction Services provides exterior renovations, interior renovations, fire and flood restoration, and maintenance services."
          imageSrc={assetPath('/images/services/overview-hero.svg')}
          imageAlt="Construction service visual"
          ctaHref="/services/exterior-renovations"
          ctaLabel="Explore Exterior Renovations"
        />

        <ServiceCategoryGrid
          title="Service Categories"
          intro="Lanyard supports multifamily properties with renovation, restoration, capital improvement, and maintenance services."
          items={[
            {
              title: 'Exterior Renovations',
              description: 'Exterior renovation work for multifamily and other properties.',
            },
            {
              title: 'Interior Renovations',
              description: 'Interior renovation work for units, common areas, and shared spaces.',
            },
            {
              title: 'Fire/Flood Restoration',
              description: 'Restoration support for properties affected by fire or flood damage.',
            },
            {
              title: 'Maintenance Services',
              description: 'Maintenance support for ongoing property needs and planned repairs.',
            },
          ]}
        />

        <ConsultationCta
          title="Discuss Your Property"
          body="Contact Lanyard to talk through renovation, restoration, capital improvement, or maintenance needs for your property."
          primaryHref="/contact"
          primaryLabel="Contact Lanyard"
        />
      </main>
    </PageContainer>
  );
}

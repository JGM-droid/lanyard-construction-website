import { PageContainer } from '@/components/page-container';
import { ConsultationCta, ServiceCategoryGrid, ServicesHero } from '@/components/services/service-sections';
import { assetPath } from '@/lib/asset-path';

export default function ExteriorRenovationsPage() {
  return (
    <PageContainer>
      <main className="flex flex-col gap-8 sm:gap-10 lg:gap-12" aria-labelledby="exterior-renovations-title">
        <ServicesHero
          headingId="exterior-renovations-title"
          title="Exterior Renovations"
          subtitle="Lanyard Construction Services provides exterior renovation work for multifamily and other properties."
          imageSrc={assetPath('/images/services/exterior-hero.svg')}
          imageAlt="Exterior renovation service visual"
          ctaHref="/contact"
          ctaLabel="Contact Lanyard"
        />

        <ServiceCategoryGrid
          title="Exterior Renovation Support"
          intro="Lanyard supports exterior renovation needs for multifamily and other properties with clear communication and dependable execution."
          items={[
            {
              title: 'Exterior Renovations',
              description: 'Exterior renovation work for multifamily and other properties.',
            },
          ]}
        />

        <ConsultationCta
          title="Discuss Exterior Renovations"
          body="Contact Lanyard to discuss exterior renovation needs for your property."
          primaryHref="/contact"
          primaryLabel="Contact Lanyard"
        />
      </main>
    </PageContainer>
  );
}

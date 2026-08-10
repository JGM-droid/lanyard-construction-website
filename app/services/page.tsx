import { PageContainer } from '@/components/page-container';
import { SectionWrapper } from '@/components/section-wrapper';
import { PlaceholderContent } from '@/components/placeholder-content';

export default function ServicesPage() {
  return (
    <PageContainer>
      <SectionWrapper>
        <PlaceholderContent
          title="Services"
          eyebrow="Placeholder foundation"
          notice="This route is reserved for the services overview layout and will receive page-specific content in a later implementation pass."
        />
      </SectionWrapper>
    </PageContainer>
  );
}

import { PageContainer } from '@/components/page-container';
import { SectionWrapper } from '@/components/section-wrapper';
import { PlaceholderContent } from '@/components/placeholder-content';

export default function AboutPage() {
  return (
    <PageContainer>
      <SectionWrapper>
        <PlaceholderContent
          title="About"
          eyebrow="Placeholder foundation"
          notice="This route shell provides the shared structure for the future company story and trust-signal content."
        />
      </SectionWrapper>
    </PageContainer>
  );
}

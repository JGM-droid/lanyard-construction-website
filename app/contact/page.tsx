import { PageContainer } from '@/components/page-container';
import { SectionWrapper } from '@/components/section-wrapper';
import { PlaceholderContent } from '@/components/placeholder-content';

export default function ContactPage() {
  return (
    <PageContainer>
      <SectionWrapper>
        <PlaceholderContent
          title="Contact"
          eyebrow="Prototype mode"
          notice="The contact page remains non-submitting in this foundation phase. It is intentionally limited to placeholder guidance and layout structure."
        />
      </SectionWrapper>
    </PageContainer>
  );
}

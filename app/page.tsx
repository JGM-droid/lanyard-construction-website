import { PageContainer } from '@/components/page-container';
import { SectionWrapper } from '@/components/section-wrapper';
import { PlaceholderContent } from '@/components/placeholder-content';

export default function HomePage() {
  return (
    <PageContainer>
      <SectionWrapper>
        <PlaceholderContent
          title="Home"
          eyebrow="Placeholder foundation"
          notice="This home route shell is intentionally limited to a labeled placeholder notice while the full content plan is developed by future feature agents."
        />
      </SectionWrapper>
    </PageContainer>
  );
}

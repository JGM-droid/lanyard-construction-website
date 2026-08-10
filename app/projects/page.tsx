import { PageContainer } from '@/components/page-container';
import { SectionWrapper } from '@/components/section-wrapper';
import { PlaceholderContent } from '@/components/placeholder-content';

export default function ProjectsPage() {
  return (
    <PageContainer>
      <SectionWrapper>
        <PlaceholderContent
          title="Projects"
          eyebrow="Placeholder foundation"
          notice="This route shell is ready for project cards and portfolio grouping once the projects and about feature work begins."
        />
      </SectionWrapper>
    </PageContainer>
  );
}

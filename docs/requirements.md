# Prototype Requirements

## Status Labels (Canonical)
- Confirmed: Approved requirement or decision captured in this planning cycle.
- Assumed: Working assumption for prototype planning; must be validated by client.
- Placeholder: Temporary copy, media, or detail used only for layout/prototype; not verified fact.
- Open Question: Unresolved item requiring client decision or evidence.

## 1. Confirmed Requirements
- The deliverable for this stage is documentation-only.
- Do not create application code in this stage.
- Do not install dependencies or initialize a framework in this stage.
- Build planning for a polished, responsive commercial and multifamily construction website prototype.
- Initial page set includes:
  1. Home
  2. Services Overview
  3. Exterior Renovations
  4. Projects
  5. About
  6. Contact / Request a Consultation
- Use Guardian site as design inspiration only.
- Do not copy branding, wording, or proprietary assets from Guardian.
- Treat contact form behavior as non-submitting prototype behavior.
- Distinguish Confirmed, Assumed, Placeholder, and Open Question content.
- Include responsive design, accessibility, performance, basic SEO, and mobile navigation in requirements.

## 2. Assumed Requirements
- Assumed: Desktop-first content blocks can be adapted to mobile via stacked sections and simplified spacing.
- Assumed: The client prefers a professional, confidence-oriented tone for commercial and multifamily audiences.
- Assumed: The first prototype review prioritizes layout and hierarchy over exact final copy.
- Assumed: A small number of reusable section patterns will be sufficient across the six pages.
- Assumed: Brand assets may still evolve between prototype and production.

## 3. Placeholder Content Rules
- Placeholder: Any company history statement not explicitly confirmed by client evidence.
- Placeholder: Any claim about number of projects, years in business, team size, safety metrics, or service area reach.
- Placeholder: Any testimonial text, customer names, logos, or endorsements.
- Placeholder: Any certifications, licenses, or compliance badges unless evidence is supplied.
- Placeholder: Any project details, before/after results, budgets, timelines, and performance outcomes.
- Placeholder: All images, renderings, and videos until rights and relevance are confirmed.
- Placeholder content must be visibly labeled in drafts so reviewers can distinguish layout intent from factual content.

## 4. Open Questions
- Open Question: Which business claims can be publicly verified at prototype stage?
- Open Question: Which certifications or licenses should be showcased, and what proof is available?
- Open Question: Which projects can be displayed with client permissions and approved images?
- Open Question: What geographic service area language is approved for publication?
- Open Question: What lead-routing behavior should replace the non-submitting form in later phases?
- Open Question: What SEO keyword priorities should be targeted by page once final service language is approved?

## 5. Functional Requirements by Experience Area
### 5.1 Global
- Consistent header, footer, and navigation across all pages.
- Primary CTA visible in global nav and page hero areas.
- Clear path to Contact / Request a Consultation from every page.

### 5.2 Page-Specific
- Home: Positioning overview, key services snapshot, project proof framework, and consultation CTA.
- Services Overview: High-level service categories with links to detail pages.
- Exterior Renovations: Service depth, process outline, and relevant project examples.
- Projects: Filterable or grouped portfolio structure (prototype behavior only).
- About: Company narrative framework, values, and team/process trust signals.
- Contact / Request a Consultation: Inquiry form prototype, office/contact placeholders, and expectation-setting copy.

### 5.3 Contact Form (Prototype-Only Behavior)
- Form fields can be interacted with for demo purposes.
- Submission action must not transmit or store data.
- UI should communicate that form submission is disabled in prototype mode.

## 6. Non-Functional Requirements
### 6.1 Responsive Design
- Support mobile, tablet, and desktop layouts.
- Preserve readability, spacing rhythm, and CTA visibility at all breakpoints.
- Avoid horizontal scrolling for primary content.

### 6.2 Accessibility
- Use semantic heading structure and landmark regions.
- Ensure keyboard-accessible navigation and form controls.
- Provide visible focus states.
- Maintain sufficient color contrast for text and interactive elements.
- Provide alt text strategy for placeholder and final images.

### 6.3 Performance
- Plan for optimized image dimensions and modern formats in implementation.
- Limit above-the-fold media weight.
- Avoid heavy interaction patterns that degrade mobile performance.
- Define component/content budgets before implementation phase.

### 6.4 Basic SEO
- Each page requires unique title and meta description strategy.
- Use one clear H1 per page and logical heading hierarchy.
- Keep page URLs clean, descriptive, and human-readable.
- Include internal links between services, projects, and contact.

### 6.5 Mobile Navigation
- Navigation must be easy to open/close with touch targets sized for mobile usability.
- Include clear active-state and focus-state behavior.
- Keep consultation CTA reachable from mobile menu.

## 7. Compliance and Content Integrity Constraints
- Never present inferred details from current site review as verified facts.
- All potentially inferred business information must be labeled as Assumed, Placeholder, or Open Question until client confirms.
- Maintain explicit separation between design direction and factual claims in all project artifacts.

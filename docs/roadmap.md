# Delivery Roadmap

## Status Labels (Canonical)
- Confirmed: Approved requirement or decision captured in this planning cycle.
- Assumed: Working assumption for prototype planning; must be validated by client.
- Placeholder: Temporary copy, media, or detail used only for layout/prototype; not verified fact.
- Open Question: Unresolved item requiring client decision or evidence.

## Phase 1: Planning
### Objective
Define scope, requirements, page architecture, content intake, and team workflow before implementation begins.

### Core Outputs
- Confirmed planning docs at repository root.
- Clear separation of Confirmed, Assumed, Placeholder, and Open Question content.
- Defined inspiration boundaries and fact-integrity rules.

### Acceptance Criteria
- All eight planning documents exist and are internally consistent.
- Documentation-only scope is preserved.
- Contact form is explicitly defined as non-submitting prototype behavior.
- Non-functional requirements are documented for responsive, accessibility, performance, SEO, and mobile navigation.

### Handoff Requirements
- Product/design approval of document set.
- List of unresolved Open Questions sent to client stakeholders.
- Agreement on placeholder labeling approach.

## Phase 2: Foundation
### Objective
Create implementation foundation from approved planning docs.

### Core Outputs
- Confirmed information architecture translated into initial implementation scaffolding.
- Global layout patterns defined (header, footer, navigation, CTA behavior).
- Placeholder content framework integrated with visible markers.

### Acceptance Criteria
- Foundation reflects approved page set and navigation model.
- Placeholder markers are visible and consistently applied.
- No inferred business claim appears as verified content.
- Baseline checks for accessibility and responsiveness are in place.

### Handoff Requirements
- Foundation review sign-off from design and product stakeholders.
- Documented list of assumptions carried into feature build.
- Updated risk register for unresolved Open Questions.

## Phase 3: Parallel Feature Development
### Objective
Build page features in parallel using isolated branches or worktrees and one feature per agent.

### Core Outputs
- Individually developed feature branches/worktrees for assigned feature scopes.
- Page-specific implementation aligned to site outline.
- Placeholder-safe content implementation across feature slices.

### Acceptance Criteria
- Each feature is scoped to one owner/agent and one primary feature domain.
- No overlapping ownership conflicts at integration handoff.
- Every feature passes required checks before review.
- Review is completed before merge for each feature.

### Handoff Requirements
- Per-feature change summary and check results.
- Explicit list of remaining Placeholder items.
- Reviewer approval recorded before integration.

## Phase 4: Content Replacement
### Objective
Replace placeholder content with client-approved, evidence-backed content.

### Core Outputs
- Verified copy, images, certifications, testimonials, and project details mapped into pages.
- Deprecated placeholders removed or retained only where pending approval remains.
- Finalized page-level SEO metadata inputs.

### Acceptance Criteria
- All published claims have supporting client confirmation.
- Placeholder content is removed from launch-critical sections.
- Testimonial, credential, and project usage rights are documented.
- Content QA confirms no accidental placeholder leakage on approved pages.

### Handoff Requirements
- Client content approval log.
- Evidence references linked to each upgraded claim.
- Final content QA checklist completed.

## Phase 5: Deployment
### Objective
Prepare and release the approved website build with final checks and launch readiness.

### Core Outputs
- Production-ready build and configuration (outside this planning-only phase).
- Final QA across responsiveness, accessibility, performance, and SEO basics.
- Launch runbook and rollback notes.

### Acceptance Criteria
- End-to-end testing completed after full integration.
- Accessibility, performance, and SEO baseline checks pass agreed thresholds.
- Contact flow behavior matches approved production requirements.
- Stakeholder sign-off obtained for release.

### Handoff Requirements
- Release checklist signed by engineering and stakeholder owners.
- Post-launch monitoring and support ownership defined.
- Known issues and deferred items documented.

## Dependency Notes
- Phase 2 starts only after Phase 1 approval.
- Phase 3 starts only after Foundation acceptance criteria are met.
- Phase 4 requires confirmed client content evidence.
- Phase 5 requires full testing after integrated feature merge.

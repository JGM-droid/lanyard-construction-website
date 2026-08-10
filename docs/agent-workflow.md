# Multi-Agent Workflow (Future Implementation)

## Status Labels (Canonical)
- Confirmed: Approved requirement or decision captured in this planning cycle.
- Assumed: Working assumption for prototype planning; must be validated by client.
- Placeholder: Temporary copy, media, or detail used only for layout/prototype; not verified fact.
- Open Question: Unresolved item requiring client decision or evidence.

## Workflow Goals
- Enable parallel progress without collisions.
- Preserve factual integrity and placeholder labeling.
- Ensure review occurs before merge.
- Require full testing after integration.

## Branch and Worktree Strategy
### Confirmed
- Use isolated Git branches or worktrees for each feature effort.
- One feature per agent at a time.
- No direct integration to main without review.

### Assumed
- Team will use naming conventions that make owner and scope obvious.

### Example Naming Pattern
- Branch: feature/foundation-global-layout
- Branch: feature/homepage-hero-flow
- Branch: feature/services-structure
- Branch: feature/projects-about-content
- Branch: chore/quality-review-pass

## Future Agent Roles
Roles are defined by feature scope only. Overlapping file ownership is intentionally not assigned yet.

### 1. Foundation Agent
- Focus: global structure and shared layout patterns.
- Typical deliverables: navigation shell, footer pattern, shared CTA placement strategy.
- Must enforce: responsive baseline and accessibility-first structure.

### 2. Homepage Agent
- Focus: Home page section implementation and conversion flow.
- Typical deliverables: hero, trust-section framework, featured-project preview, CTA sections.
- Must enforce: placeholder labeling for all unverified claims/assets.

### 3. Services Agent
- Focus: Services Overview and Exterior Renovations content architecture.
- Typical deliverables: service taxonomy layout, detail page section patterns, service CTA routing.
- Must enforce: no invented technical claims or performance outcomes.

### 4. Projects/About Agent
- Focus: Projects and About page delivery.
- Typical deliverables: project card/case-study structures, about-story modules, trust-signal placements.
- Must enforce: no unapproved testimonials, credentials, or project metrics presented as confirmed.

### 5. Quality Review Agent
- Focus: cross-feature review and integration readiness.
- Typical deliverables: consistency audit, accessibility/performance/SEO baseline checks, issue list.
- Must enforce: complete testing after integration and before release recommendation.

## Standard Agent Lifecycle
1. Pick one approved feature scope.
2. Create isolated branch or worktree.
3. Implement only assigned feature scope.
4. Run required checks and document outcomes.
5. Submit for review before merge.
6. Integrate only after approval.
7. Run full test suite after integration.

## Required Checks Per Feature
- Scope boundary check (no unrelated edits).
- Placeholder and fact-integrity check.
- Requirements alignment check against docs/requirements.md.
- Accessibility/responsive smoke checks.
- Basic SEO structure check.

## Review and Merge Gate
- At least one reviewer verifies scope, quality, and factual labeling.
- Any unresolved Open Question must be listed in handoff notes.
- Features with missing required checks are not merged.

## Full Testing After Integration
After multiple features are merged, run full testing for integrated behavior.

- Responsive checks across target breakpoints.
- Accessibility checks for keyboard navigation, focus, headings, and contrast.
- Performance sanity checks for key pages and media usage.
- SEO basics verification (titles, heading hierarchy, internal links).
- Contact flow verification to ensure prototype or production mode behavior is correct for current phase.

## Handoff Package Requirements
Each agent handoff should include:
- Scope summary.
- Files touched.
- Checks run and results.
- Known limitations.
- Remaining Placeholder items.
- Open Questions requiring stakeholder confirmation.

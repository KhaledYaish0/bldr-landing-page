# BLDR Landing Page Implementation Plan

## Purpose

This document is the **strict execution plan** for the remaining BLDR landing page updates for Inova AI Solutions.

BLDR is a no-code enterprise AI operating system. The CEO has approved the main landing page direction. The items below are the approved to-do list and must be implemented through Cursor in **small, controlled phases**.

Use this file to:

- Guide Cursor prompts **one phase at a time**
- Prevent scope creep and accidental cross-phase changes
- Track progress, difficulty, and ownership
- Standardize acceptance criteria and verification after each phase

**Do not skip ahead.** Complete and verify each phase before starting the next unless the team explicitly agrees otherwise.

---

## Implementation Rules

- Follow the phases **in order**.
- Do **not** combine hard phases with unrelated tasks.
- Do **not** restructure approved sections unless the phase explicitly says so.
- Keep **SEO/AEO structure** intact (headings, section intent, crawlable copy).
- Preserve **light/dark theme** support in every coding phase.
- Keep the design **premium, smooth, enterprise-grade**, and suitable for a bank/insurance-level SaaS product.
- After each coding phase, run available checks such as `npm run build`, `npm run lint`, or the closest available project checks.
- After each coding phase, report:
  - Files changed
  - What changed
  - Verification results
  - A suggested git commit message following the **50/72 rule** (subject ≤ 50 characters; body wrapped at 72 characters)

---

## Phase 1 — Branding foundation

**Difficulty:** Easy

### Tasks

- Add BLDR icon.
- Add favicon.
- Make sure favicon appears correctly in browser tab.
- Make sure the BLDR icon is used consistently where relevant.
- Do not change layout or sections.

### Acceptance criteria

- Browser tab shows BLDR favicon.
- Navbar/icon usage remains visually consistent.
- No unrelated UI changes.

---

## Phase 2 — Navbar menu behavior

**Difficulty:** Medium

### Tasks

- Improve the navbar so menu/dropdown behavior works properly.
- On desktop, the menu should appear on **hover**.
- On mobile/tablet, it should open on **click/tap**.
- Keep keyboard accessibility where possible.
- Keep current visual style.
- Do not change landing page section order.

### Acceptance criteria

- Desktop hover works smoothly.
- Mobile click/tap works.
- Menu does not break header layout.
- Header remains responsive.

---

## Phase 3 — Light-theme background rhythm system

**Difficulty:** Medium

### Tasks

- Improve light-theme section-by-section background flow.
- The white theme should not look like one flat white page.
- Use a reusable background system with semantic section classes/tokens.
- Alternate between carefully selected light backgrounds.
- Follow a **60/30/10** color methodology:
  - **60%** dominant background
  - **30%** supporting surfaces/cards
  - **10%** accents for buttons, borders, icons, highlights
- Use a **Sanzo Wada–inspired** soft harmony palette.
- Preserve the current dark-theme rhythm.

### Suggested palette

| Role | Hex |
|------|-----|
| Main light background | `#FBFCFD` |
| Secondary light background | `#E6EDF2` |
| Soft blue-gray | `#EDF4F7` |
| Faint cyan tint | `#E7F5F8` |
| Card surface | `#FFFFFF` |
| Border | `#D4E0E7` |
| Heading navy | `#071629` |
| Muted text | `#526270` |
| Accent cyan | Keep existing BLDR cyan |

### Acceptance criteria

- Light mode has clear but subtle section contrast.
- Dark mode remains polished.
- Cards remain readable/elevated.
- Text contrast is accessible.
- No layout/content changes.

---

## Phase 4 — Gulf background image generation checkpoint

**Difficulty:** Creative asset step

> **Important:** This phase is **NOT** a Cursor coding phase yet.

Before coding the Enterprise AI Gap background, the team must **generate or approve** a background image.

### Image requirements

- Related to Arab Gulf States.
- Subtle, premium, and enterprise-focused.
- Should feel like a modern Gulf business/technology environment.
- Should fit the light-theme palette.
- Should not look like tourism advertising.
- Should not be too busy.
- Should work as a low-opacity background behind the Enterprise AI Gap section.

### Acceptance criteria

- Image is approved before implementation.
- Image visually works with `#E6EDF2` and the BLDR light palette.
- Image does not hurt readability.

---

## Phase 5 — Enterprise AI Gap section refinement

**Difficulty:** Medium

### Tasks

- Add the **approved** Arab Gulf States background image to the Enterprise AI Gap section.
- Blend it smoothly using opacity, gradient overlays, masks, or blur.
- Keep text and cards readable.
- Change the comparison order from **“Without BLDR / With BLDR”** to **“With BLDR / Without BLDR”**.
- Put **“With BLDR”** on the **left**.
- Put **“Without BLDR”** on the **right**.
- Make the **Without BLDR** triangle icon **red**.
- Preserve hover/tap expand behavior.

### Acceptance criteria

- Section has subtle Gulf-inspired background.
- With BLDR appears first on the left.
- Without BLDR appears second on the right.
- Red warning icon appears only for Without BLDR.
- No readability issues.

---

## Phase 6 — Use-case image generation checkpoint

**Difficulty:** Creative asset step

> **Important:** This phase is **NOT** a Cursor coding phase yet.

Before redesigning the Use-case Preview cards, prepare/generate the new photos.

### Image requirements

- Professional human imagery.
- Enterprise, bank/insurance/government-grade tone.
- No playful startup stock-photo feel.
- Images should work inside cards without stretching.
- Prefer images that feel relevant to business workflows, operations, support, regulated industries, or Gulf enterprise context.

### Acceptance criteria

- Final image set is approved before coding.
- All images have consistent visual tone.
- Images work in a card layout.

---

## Phase 7 — Use-case Preview redesign

**Difficulty:** Medium/Hard

### Tasks

- Replace the current photos.
- Redesign use-case cards as **vertical cards**.
- Each card should start with the **photo at the top**.
- Make sure images do not stretch.
- Use `object-cover` and fixed aspect ratio.
- Make cards responsive:
  - **1 column** on mobile
  - **2 columns** on tablet
  - **3 columns** or balanced grid on desktop
- Keep the section elegant and smooth.
- Preserve SEO/AEO headings and copy intent.

### Use cases

- Employee onboarding automation
- Policy and document assistants
- IT and internal support copilots
- Regulated workflow automation
- AI-powered service operations

### Acceptance criteria

- No stretched images.
- Cards are responsive.
- Section feels more human and relatable.
- Copy remains readable.
- Layout remains premium.

---

## Phase 8 — Industry CTA responsiveness and remove technical walkthrough

**Difficulty:** Easy/Medium

### Tasks

- Fix the **“Tailored to your industry / See BLDR for your industry”** section responsiveness.
- Remove any fixed inline widths such as `width: 800px` or `width: 300px`.
- Use responsive Tailwind classes instead.
- Container should be `w-full` with max-width.
- Form fields should be full width.
- Desktop should keep text and form balanced.
- Mobile should stack cleanly.
- Remove the **“For technical evaluators / Request a technical walkthrough”** section completely.

### Acceptance criteria

- Industry CTA works well on desktop/tablet/mobile.
- No fixed inline widths remain.
- Technical walkthrough section is removed.
- No broken spacing after removal.
- Other CTA sections remain intact.

---

## Phase 9 — Replace Platform Overview with BLDR Security Layers

**Difficulty:** Hard

> **Important:** This phase must be done **alone** in one Cursor prompt. Do not bundle with other phases.

### Tasks

- Remove the current Platform Overview section.
- Replace it with a Gumloop-inspired interactive layered security visual section.
- Adapt it fully to BLDR security messaging.
- The section should show a large rounded soft-gradient card.
- Inside it, create a **3D/isometric stack** of floating UI layers.
- **Default state:** layers are close together and almost flat.
- **Hover state:** layers separate smoothly upward using 3D transforms.
- Use `transform-style: preserve-3d`.
- Use `transition-transform duration-500 ease-out`.
- Avoid heavy external animation libraries.

### Content to include

- BLDR Security Gateway
- monitors
- audits
- protects
- AI agents, chats & clients
- enterprise internal data

### Visual meaning

The BLDR Security Gateway sits between AI interactions and internal company data. It monitors, audits, and protects every AI request before it touches sensitive enterprise data.

### Acceptance criteria

- Section feels product-visible, not brochure-like.
- Hover interaction creates a smooth exploded-layer effect.
- Works in light and dark mode.
- Works on mobile with a simplified layout.
- No heavy dependency added.
- Design remains clean, enterprise, and minimal.

---

## Phase 10 — Footer and BLDR blog legal row adjustment

**Difficulty:** Easy/Medium

### Tasks

- Move these items into the bottom of the **“From the BLDR blog”** section:
  - © 2026 Inova AI Solutions. All rights reserved.
  - Privacy
  - Terms
  - Security
  - DPA
  - Cookie settings
- Keep the blog snapshot text-based.
- Keep the blog layout as **2 columns**.
- Avoid duplicate legal links in the footer.
- Preserve SEO-friendly text links.

### Acceptance criteria

- Legal row appears at the bottom of the blog section.
- Footer does not duplicate the same legal row.
- Blog remains readable and text-based.
- Layout works on mobile.

---

## Phase 11 — Final QA and polish pass

**Difficulty:** Medium

### Tasks

- Check light/dark theme consistency.
- Check responsive layouts.
- Check navbar behavior.
- Check image stretching.
- Check hover/tap interactions.
- Check forms and CTA buttons.
- Check H1/H2 hierarchy.
- Check duplicate sections after removals.
- Check accessibility basics.
- Run available project checks.

### Commands to try

```bash
npm run build
npm run lint
npm run typecheck   # if available
npm test            # if available
```

### Acceptance criteria

- Build passes.
- Lint passes or known issues are documented.
- Page works in light and dark mode.
- No obvious responsive bugs.
- Final report includes files changed, summary, verification, and suggested git commit message.

---

## Phase tracking table

| Phase | Status | Difficulty | Owner | Notes |
|-------|--------|------------|-------|-------|
| 1 — Branding foundation | Not started | Easy | | |
| 2 — Navbar menu behavior | Not started | Medium | | |
| 3 — Light-theme background rhythm | Not started | Medium | | |
| 4 — Gulf background image checkpoint | Not started | Creative asset | | Not a coding phase |
| 5 — Enterprise AI Gap refinement | Not started | Medium | | Depends on Phase 4 approval |
| 6 — Use-case image checkpoint | Not started | Creative asset | | Not a coding phase |
| 7 — Use-case Preview redesign | Not started | Medium/Hard | | Depends on Phase 6 approval |
| 8 — Industry CTA + remove technical walkthrough | Not started | Easy/Medium | | |
| 9 — BLDR Security Layers (replace Platform Overview) | Not started | Hard | | **Single prompt only** |
| 10 — Footer / blog legal row | Not started | Easy/Medium | | |
| 11 — Final QA and polish | Not started | Medium | | |

---

## Commit message examples

Suggested commit messages per phase (50/72 rule). Adjust body lines as needed for the actual diff.

### Phase 1

```
feat(branding): add BLDR icon and favicon

Add favicon and consistent BLDR icon usage in the header.
No layout or section changes.
```

### Phase 2

```
feat(header): improve navbar hover and mobile menus

Desktop menus open on hover; mobile opens on tap.
Preserves header layout and keyboard access where possible.
```

### Phase 3

```
feat(theme): add light-mode section background rhythm

Introduce semantic section tokens and alternate light
backgrounds using Sanzo Wada–inspired palette. Dark mode unchanged.
```

### Phase 4

```
docs(assets): approve Gulf background for AI gap section

Document approved Enterprise AI Gap background image for
Phase 5 implementation. No code changes in this checkpoint.
```

### Phase 5

```
feat(sections): refine Enterprise AI Gap with Gulf bg

Add approved Gulf background, reorder With/Without BLDR columns,
and use red warning icon for Without BLDR only.
```

### Phase 6

```
docs(assets): approve use-case preview image set

Document approved photos for vertical use-case cards in Phase 7.
No code changes in this checkpoint.
```

### Phase 7

```
feat(sections): redesign use-case preview as vertical cards

Replace photos with approved assets; responsive grid with
object-cover. Preserves copy and SEO heading structure.
```

### Phase 8

```
fix(cta): responsive industry form; remove tech walkthrough

Remove fixed widths from industry CTA; drop technical
walkthrough section. Other CTAs unchanged.
```

### Phase 9

```
feat(sections): add BLDR Security Layers interactive stack

Replace Platform Overview with 3D layered security visual.
CSS-only transforms; light/dark and mobile-safe.
```

### Phase 10

```
refactor(footer): move legal links to blog section

Relocate copyright and policy links under BLDR blog snapshot.
Remove duplicate legal row from main footer.
```

### Phase 11

```
chore(qa): final landing page polish and verification

Theme, responsive, and a11y pass; build and lint verified.
Documents any known lint exceptions.
```

---

## Document history

| Date | Author | Change |
|------|--------|--------|
| 2026-05-19 | — | Initial implementation plan created |

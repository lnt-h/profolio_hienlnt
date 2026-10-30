# HIENLNT Portfolio — Development Progress

> Project: **hienlnt.id.vn** — independent personal Software Engineer portfolio  
> Last reviewed: **2026-10-31**
> Status: **Core local portfolio implemented; public GitHub activity, Spotify pick, and interaction refinements added; full responsive review pending**
> Source of requirements: [`plan.md`](./plan.md) · Codex rules: [`AGENTS.md`](./AGENTS.md) · Visual references: [`references/`](./references/)

## 1. How to use this file

This is a **handoff and progress ledger**, not a replacement for the design specification or Git history. Codex must **verify the repository state and Git diff** before trusting any status recorded here.

- Update **after each meaningful implementation task** and when a blocker materially changes.
- Keep entries factual and concise. Record **what changed, evidence of verification, known issues, and the next action**.
- Do not mark a component `Done` merely because code was written or Codex reported success.
- Allowed statuses: `Not started`, `In progress`, `Needs review`, `Blocked`, `Done`.
- `Done` requires the task's acceptance criteria to pass, relevant checks to be recorded, and visual/manual review where applicable.
- If a check could not run, write `Not run` with a reason. Never fabricate passed tests or visual reviews.
- Only change `plan.md` / approved design requirements on explicit user request; this file records **execution state**, not a new design decision.
- No automatic Git commit, push, deploy, external service creation, or DNS changes without the user's authorization.

## 2. Current snapshot

| Field | Value |
| --- | --- |
| Current phase | **Phase 1–2 local implementation; content-dependent work pending** |
| Active task | **Needs review** — F06/F09/F13/F14 cursor boundary, Skills inventory, Spotify, and Contact refinements; mobile/reduced-motion review remains |
| Last completed development task | **F09 SAA removal and F14 persistent reply indicator** |
| Repo / Git status | Inspected; current interaction cleanup is ready for an authorized Git checkpoint; no secrets or new dependencies added |
| App runtime / screenshots | Safari desktop Contact conversation and semantic Skills inventory inspected locally; Chrome/mobile cursor matrix remains pending |
| Tests / build | `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass |
| Design source | `plan.md`: 10 inspiration groups and approved layout/interaction contract |
| Next recommended action | Supply verified LinkedIn/project content, then complete mobile/browser/reduced-motion QA |

### Known inputs / open dependencies

- [x] `plan.md` and `AGENTS.md` have been prepared as documents.
- [x] Confirm that `plan.md`, `AGENTS.md`, `PROGRESS.md`, and unpacked `references/` are present in the actual Codex repository.
- [ ] Confirm final profile text, real project list, work links, contact details, and CV before publishing. Do not invent missing facts.
- [x] Owner-supplied portrait added to `references/` and integrated as the production About image.
- [ ] Verify domain registration, hosting, and deployment only when those tasks are authorized; the chosen domain is **not proof of ownership or publication**.
- [x] Check repository contents and installed toolchain before choosing package manager or commands.

## 3. Master implementation tracker

Each row names a *deliverable*, not evidence of existing code. Initial statuses below are deliberately `Not started` until the live repository is inspected.

| ID | Phase | Deliverable | Status | Acceptance evidence / outstanding work |
| --- | --- | --- | --- | --- |
| F00 | 0 | Repository intake, content inventory, reference mapping | Needs review | Repo/assets/references audited; personal content still missing from repository |
| F01 | 1 | Next.js + TypeScript + Tailwind foundation | Done | Migrated to `src/`, added Motion/content types/tokens/fonts; lint/typecheck/build pass |
| F02 | 1 | Preloader 0–100% and page reveal | Needs review | Intro and session/hash/reduced-motion bypass implemented; Safari lifecycle fix applied; full timing pass pending |
| F03 | 1 | Hero, oversized typography, gold spotlight | Needs review | Desktop Safari visual checked against references; mobile visual review pending |
| F04 | 1 | Floating centered Apple-like glass navbar | Needs review | Desktop capsule/dropdown/active pill visible; complete keyboard/mobile scrollspy review pending |
| F05 | 1 | Full-width top scroll progress, 3px | Needs review | Owner-approved contract update implemented; Safari desktop verified at top/mid/near-end positions; mobile browser review pending |
| F06 | 1 | Adaptive inverted/zooming cursor | Needs review | One theme-aware layer plus native-cursor zones for cross-origin embeds implemented; Chrome/Safari pointer-transition and touch/reduced-motion matrix pending |
| F07 | 1 | About Me / portrait / editorial layout | Needs review | Owner portrait now uses intentional matte/double-frame/vignette treatment; final biography/mobile crop review pending |
| F08 | 1 | Featured Projects | Blocked | Honest editorial empty state implemented; verified projects/media/links required |
| F09 | 1 → 2 | Skills fallback, then draggable tech carousel | Needs review | Software/engineering/DevOps/cloud grid, bounded Motion nodes, and 10-item semantic inventory implemented; owner-requested SAA learning item removed; touch/reduced-motion QA pending |
| F10 | 2 | Dark curved kinetic marquee | Needs review | Native curved SVG textPath and reduced-motion fallback implemented; visual loop QA pending |
| F11 | 2 | Behind the Curtains card layout | Needs review | Staggered three-card dark layout with live GitHub and official Spotify embed verified on Safari desktop; responsive pass pending |
| F12 | 2 | GitHub public activity integration | Needs review | Public `lnt-h` profile/events fetched server-side with one-hour revalidation and honest empty/error fallbacks; failure-path/manual rate-limit QA pending |
| F13 | 2 | Guestbook and Spotify connections | Needs review | Official lazy Spotify embed for `As It Was` added without autoplay and marked as a native-cursor zone; pointer transition still needs hands-on cross-browser confirmation |
| F14 | 1 | Minimal two-chat-bubble Contact | Needs review | Verified Email/GitHub response remains immediately available; a decorative persistent reply-wait bubble follows it; LinkedIn remains clearly pending; mobile/reduced-motion QA pending |
| F15 | 1 | Footer with Vietnam date/live time/year | Done | Safari showed correct ICT date/time; static build has no hydration/current-time error |
| F16 | 1 → 3 | Responsive, SEO, accessibility, performance | Needs review | Semantics, focus, reduced-motion CSS, metadata, breakpoints implemented; full audit pending |
| F17 | 3 | Optional blue fluid 3D orb | Not started | **Optional only**, no baseline dependency |
| F18 | 3 | CI, final review, production deployment | Not started | Test results + deployment only with explicit authorization |

**Canonical requirements:** Read the exact section specs, animation timing, visual sources, and final acceptance checklist in `plan.md`. Do not treat this table as a substitute for them.

## 4. Verification log

| Date (ICT) | Task ID | Check | Result | Evidence / notes |
| --- | --- | --- | --- | --- |
| 2026-10-31 | F06, F09, F13–F14 | `npm run lint` + `npx tsc --noEmit` + `npm run build` | Pass | ESLint/strict TypeScript pass; production build emits static `/` with one-hour revalidation |
| 2026-10-31 | F09, F14 | Safari desktop visual/semantic review | Partial pass | Contact renders question → contact response → right-aligned reply-wait bubble; decorative dots stay out of the accessibility tree; semantic Skills inventory contains 10 items with AWS retained and no SAA entry |
| 2026-10-31 | F06, F13 | Spotify cursor review | Needs review | Native-cursor zone and cleanup code verified; browser automation could not reliably retain Chrome focus and CUA cannot hover without a click, so Safari/Chrome pointer-boundary behavior remains hands-on QA |
| 2026-10-30 | F07, F11–F14 | `npm run lint` + `npx tsc --noEmit` + `npm run build` | Pass | ESLint/strict TypeScript pass; production build emits static `/` with one-hour revalidation and no required credentials |
| 2026-10-30 | F07, F11–F14 | Safari desktop visual/semantic review | Partial pass | GitHub activity, Spotify player, Contact typing→response, verified actions, and editorial portrait frame rendered; mobile/reduced-motion not verified |
| 2026-10-30 | F09 | `npm run lint` + `npx tsc --noEmit` + `npm run build` | Pass | ESLint and strict TypeScript completed; production build emitted static `/` and `/_not-found` routes |
| 2026-10-30 | F09 | Safari desktop visual/semantic review | Partial pass | Grid canvas, grouped nodes, Code→Build→Deploy→AWS cue, SAA learning card, and matching semantic inventory rendered; mobile/touch/reduced-motion remain unverified |
| 2026-10-30 | F05–F07, F13–F14 | `npm run lint` | Pass | ESLint completed after the identity refinement with no warnings/errors |
| 2026-10-30 | F05–F07, F13–F14 | `npx tsc --noEmit` | Pass | Strict TypeScript completed after the content/interface changes |
| 2026-10-30 | F05–F07, F13–F14 | `npm run build` | Pass | Next production build emitted static `/` and `/_not-found` routes |
| 2026-10-30 | F01–F16 | `npm run lint` | Pass | ESLint completed with no warnings/errors |
| 2026-10-30 | F01–F16 | `npx tsc --noEmit` | Pass | Strict TypeScript completed successfully |
| 2026-10-30 | F01–F16 | `npm run build` | Pass | Next production build emitted static `/` and `/_not-found` routes |
| 2026-10-30 | F05–F07, F13–F14 | Safari desktop visual/semantic review | Partial pass | Full-width progress, fixed download pill, portrait crop, readable signature, fallback cards, and pending contact icons inspected; mobile matrix not available in this pass |
| 2026-10-30 | F04, F06–F07 | `npm run lint` + `npx tsc --noEmit` | Pass | SVG More chevron, soft portrait shadow, and robust dark-section cursor theme completed without lint/type errors |
| 2026-10-30 | F04, F06–F07 | Chrome visual review | Not verified | Browser automation host timed out while opening the local page; reference images were inspected, but rendered desktop/mobile confirmation remains pending |
| 2026-10-30 | F02–F06, F15 | Safari desktop visual/semantic review | Partial pass | Loader, Hero, nav, progress, spotlight, headings, and live ICT clock inspected; full mobile/deeper-section review pending |
| 2026-10-30 | — | Initial code review / lint / typecheck / build / browser | Not run | Only documentation was prepared; live repo not inspected |

When work begins, record actual commands and outputs (or concise paths to logs), affected browsers/screen sizes, and whether screenshots were compared to the relevant reference image.

## 5. Session handoff (keep newest at top)

### 2026-10-31 — F06, F09, F13–F14: contact reply, Skills cleanup, and Spotify cursor boundary

- **Status:** Needs review
- **Scope:** Add the owner-approved reply-wait bubble, remove the SAA learning claim, and keep pointer interaction usable inside the cross-origin Spotify player.
- **Changed files:** `src/components/contact/ContactExperience.tsx`, `src/components/motion/AdaptiveCursor.tsx`, `src/components/sections/BehindSection.tsx`, `src/components/skills/DraggableSkillField.tsx`, `src/content/site.ts`, `src/app/globals.css`, `PROGRESS.md`
- **Implemented:** Contact content is always present and followed by a right-aligned decorative typing bubble; SAA and the unused learning state/styles were removed while AWS remains; Spotify now toggles a native-cursor root state on pointer entry/exit.
- **Verification:** `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass. Safari desktop visually confirms Contact placement and the accessibility tree confirms 10 Skills without SAA and no decorative-dot announcement.
- **Issues / deviations:** Mobile/reduced-motion visual review and hands-on Spotify cursor transition in Safari/Chrome remain pending because available UI automation could not perform a reliable hover/cross-browser pass.
- **Git checkpoint:** Pending authorized commit/push for this session.
- **Next action:** Perform a physical fine-pointer hover across the Spotify iframe boundary and complete the 320–768px viewport review.

### 2026-10-30 — F07, F11–F14: live personality cards and micro-interactions

- **Status:** Needs review
- **Scope:** Connect public GitHub activity, add the approved Spotify pick, refine Contact motion, and art-direct the existing owner portrait.
- **Changed files:** `src/lib/github.ts`, focused Behind/Contact/About components, `src/content/site.ts`, `src/app/globals.css`, `next.config.ts`, `PROGRESS.md`
- **Implemented:** Cached public GitHub profile/events with normalized fallback states; official lazy `As It Was` Spotify embed; staggered card/glow micro-interactions; one-time Contact typing reveal; editorial portrait matte, inset frame, vignette, and restrained hover movement.
- **Verification:** `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass. Safari desktop confirmed the live activity, iframe player without autoplay, typing transition, contact semantics, and portrait treatment.
- **Issues / deviations:** GitHub failure/rate-limit path is code-reviewed but not forced in browser; 320–900px and reduced-motion visual review remain pending; LinkedIn and Guestbook remain intentionally unavailable.
- **Git checkpoint:** `5ddcb26` (`feat: connect activity and personality integrations`).
- **Next action:** Run mobile/coarse-pointer/reduced-motion QA and add the verified LinkedIn URL when supplied.

### 2026-10-30 — F09: Software to Cloud/DevOps skills playground

- **Status:** Needs review
- **Scope:** Add the approved grid transition and interactive Skills direction while representing AWS SAA only as learning in progress.
- **Changed files:** `src/content/site.ts`, `src/components/sections/ProjectsSection.tsx`, `src/components/sections/SkillsSection.tsx`, `src/components/skills/DraggableSkillField.tsx`, `src/app/globals.css`, `PROGRESS.md`
- **Implemented:** Added typed groups/status/positions/accents; grouped Software, Engineering, DevOps, AWS, and SAA learning data; built a grid canvas with bounded Motion nodes, temporary flow cues, reduced-motion handling, and a semantic responsive inventory; added the Projects→Skills grid transition.
- **Verification:** `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass. Safari desktop visually confirmed the grid, grouped node hierarchy, SAA `In progress` card, and matching accessibility content.
- **Issues / deviations:** 320–900px, touch drag, fine-pointer drag physics, and reduced-motion visual behavior still require device/browser QA; no certification claim or exam date was added.
- **Git checkpoint:** `b0da62f` (`feat: expand cloud and devops skills experience`).
- **Next action:** Run the mobile/touch/reduced-motion viewport matrix and tune node positions only if observed clipping or gesture conflict appears.

### 2026-10-30 — F04, F06–F07: header, portrait, and cursor polish

- **Status:** Needs review
- **Scope:** Fix the More indicator, soften the owner portrait treatment, and ensure the adaptive cursor contrasts on every dark section.
- **Changed files:** `src/components/layout/FloatingGlassNav.tsx`, `src/components/motion/AdaptiveCursor.tsx`, `src/components/sections/KineticMarquee.tsx`, `src/app/globals.css`, `PROGRESS.md`
- **Implemented:** Replaced the font-dependent down glyph with an animated SVG chevron; replaced the heavy hard portrait shadow with a restrained layered soft shadow; made cursor theme detection recognize both `data-theme` and `.section-dark`, and marked the marquee explicitly dark.
- **Verification:** `npm run lint` and `npx tsc --noEmit` pass. Relevant navbar/About/cursor references inspected. Local Chrome visual verification was attempted but the automation host timed out before the local tab could be confirmed.
- **Issues / deviations:** Rendered desktop/mobile and fine-pointer cursor confirmation remains pending; no approved design requirement changed.
- **Git checkpoint:** None; commit/push not requested.
- **Next action:** Visually review the three refinements in a local fine-pointer browser and complete mobile/reduced-motion QA.

### 2026-10-30 — F05–F07, F13–F14: identity and interaction refinement

- **Status:** Needs review
- **Scope:** Full-width progress override, cursor alignment, owner portrait, original `hienlnt` signature, template download, compact Contact, honest integration fallbacks
- **Changed files:** `AGENTS.md`, `plan.md`, `PROGRESS.md`, `public/images/hien-portrait.jpg`, and focused files under `src/`
- **Implemented:** 3px full-width scroll progress, desktop/mobile template action, one readiness-gated section-aware cursor, real B&W portrait, animated About signature/static Guestbook mark, smaller contact bubbles, pending social icons, and unchanged Spotify unavailable state.
- **Verification:** `npm run lint`, `npx tsc --noEmit`, and production build pass. Safari desktop visually inspected at top/mid/near-end scroll positions; semantic tree confirms one H1, portrait alt, signature decoration, pending channels, and no Spotify playback control.
- **Issues / deviations:** Mobile viewport, coarse pointer, reduced motion, and Firefox/Chrome visual checks remain unverified; official social/contact URLs and project content remain absent.
- **Git checkpoint:** None; commit/push not requested for this slice.
- **Next action:** Add verified social URLs or run the remaining mobile/reduced-motion browser matrix.

### 2026-10-30 — F01–F16: local portfolio vertical slice

- **Status:** Needs review
- **Scope:** Phase 1 core plus Phase 2 signature UI/fallbacks; references 01–11
- **Changed files:** `src/`, `package.json`, `package-lock.json`, `tsconfig.json`, `PROGRESS.md`; root `app/` migrated
- **Implemented:** Typed content, responsive light/dark page, loader, Hero spotlight, glass nav, mini progress, editorial fallbacks, draggable skills, curved marquee, personality cards, chat Contact, and ICT footer.
- **Verification:** Lint/typecheck/build pass. Safari desktop inspected; loader overlay lifecycle and direct-hash restoration were corrected from observed failures.
- **Issues / deviations:** Personal content and verified links are absent; GitHub/Guestbook/Spotify remain honest unavailable states; mobile/browser/Lighthouse matrix not fully verified.
- **Git checkpoint:** `df5b670` (`feat: build portfolio experience`)
- **Next action:** Add owner-verified content, then run responsive and reduced-motion QA at the required viewport matrix.

### 2026-10-30 — Documentation baseline

- **Task:** Establish persistent progress tracking for Codex.
- **Result:** Prepared `PROGRESS.md`; added reading, updating, and verification rules to `AGENTS.md`.
- **Source of truth:** `plan.md` remains the approved design specification.
- **Changes to application code:** None.
- **Checks:** Documentation integrity only; no application lint, tests, or build run.
- **Blockers:** No live project state or personal data verified yet.
- **Next:** Inspect the actual repository, compare with the tracker, then agree on the smallest implementation task.

### Session entry template (copy for each new meaningful task)

```md
### YYYY-MM-DD — Fxx: short task name
- **Status:** In progress / Needs review / Blocked / Done
- **Scope:** approved requirement and reference images
- **Changed files:** exact paths, or None
- **Implemented:** short factual summary
- **Verification:** commands + pass/fail/not run; browser/device/screenshots if applicable
- **Issues / deviations:** what remains broken, unavailable, or different from plan
- **Git checkpoint:** commit hash if the user approved a commit; otherwise None
- **Next action:** one small, concrete task
```

## 6. Completion gate for every task

Before moving any item to `Done`:

- [ ] The implementation meets its task-specific criteria in `plan.md`.
- [ ] Relevant lint, TypeScript, tests, and build checks were run **when applicable**; failures/blockers are disclosed.
- [ ] Visual work was reviewed at a relevant desktop/mobile size against the matching `references/` image **when tooling is available**; otherwise marked `Needs review`.
- [ ] Keyboard/touch/reduced-motion and regression risks were checked when relevant.
- [ ] Git diff was reviewed and unrelated changes were not silently overwritten.
- [ ] `PROGRESS.md` reflects the actual status, evidence, remaining issues, and next action.


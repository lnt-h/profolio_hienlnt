# AGENTS.md — HIENLNT Portfolio (Codex Repository Instructions)

> Applies to the repository containing `hienlnt.id.vn`. Place this file at the **repository root**.  
> This is a personal **Software Engineer** portfolio, not a portfolio for any product or company.  
> Design specification: [`plan.md`](./plan.md). Visual references: [`references/`](./references/).

## 1. Mission and instruction boundaries

Build and maintain a fast, accessible, visually distinctive personal portfolio for **Hien Le (Lê Ngọc Tân Hiền)**, with the intended domain `hienlnt.id.vn`. Its audience is recruiters, engineers, and potential collaborators. The experience should present authentic projects and skills, not just flashy effects.

- This file describes **how Codex should work**. `plan.md` describes **what to build**. The current user task defines **which part is authorized**.
- For design, content, and interaction tasks, read the relevant sections of `plan.md` and inspect the matching images in `references/` **before making design decisions**. For a small unrelated bug fix, read only the relevant context; do not reread every reference automatically.
- Interpret `[CHỐT]` in `plan.md` as approved design requirements; `[ĐỀ XUẤT]` as implementation guidance; `[TÙY CHỌN]` as out of baseline scope; `[CẦN DỮ LIỆU]` as missing real content that must not be invented.
- Follow explicit new user decisions when they supersede the plan. Point out conflicts and update design documents **only when requested**; never silently replace a locked requirement.
- If asked to **plan/review/research only**, do not change application code, install packages, or deploy. If explicitly asked to implement, complete the authorized task/phase rather than waiting for repeated approvals; seek confirmation only for substantial scope changes or consequential external actions.
- Never invent personal projects, work history, employers, achievements, education details, certifications, CVs, contact addresses, social profiles, or performance numbers. Never introduce unrelated applications or projects into this portfolio.

## 2. Non-negotiable visual contract

These are **required outcomes** from `plan.md`; implementation choices may differ as long as the behavior and appearance are preserved.

| Order | Experience | Invariant |
| --- | --- | --- |
| 00 | Preloader | Minimal warm-light fullscreen **0–100%** count, synchronized thin line, accessible skip/reduced-motion fallback, graceful reveal. Do not pretend this is real network-download progress. |
| 01 | Hero | Cream background, enormous near-black **three-line software-engineering statement**, terminal-style eyebrow, **gold/yellow circular spotlight** that expands on text hover and preserves legibility. |
| 02 | About | Large two-tone heading, real B&W portrait area with border/offset shadow, editorial two-column bio; stack gracefully on mobile. |
| 03 | Featured Projects | Spacious editorial project previews with truthful status, role, stack, and working links only. |
| 04 | Skills & Tech Stack | **Dark** interactive round tech bubbles, with **poke / drag / flick** behavior when supported; semantic static/keyboard/touch fallback. Do not substitute only a generic grid for the approved interaction. |
| 05 | Curved Kinetic Marquee | **Dark** section with oversized white text traveling along a **curved** SVG path and `✦` separators; static fallback for reduced motion. |
| 06 | Behind the Curtains | **Dark** section, mixed bold sans + italic serif heading, three cards: **GitHub Activity**, **Guestbook**, **Spotify**; honest unavailable/loading/error states. |
| 07 | Contact | Return to light theme. **Two compact chat bubbles**, with verified Email / LinkedIn / GitHub actions. No long contact form or pretend AI chatbot. |
| 08 | Footer | Tiny minimal footer with current copyright year, date, and live **Vietnam** local time (`Asia/Ho_Chi_Minh`, UTC+7). |

### Global components (not extra sections)

- **Floating Glass Navbar**: centered near the top; compact capsule, dark translucent frosted-glass surface, contrast-safe on light/dark backgrounds, sliding active pill, `More` menu, Contact CTA; real scrollspy and mobile layout. **Do not replace with a full-width conventional header.**
- **Scroll Progress**: fixed across the viewport top, **full-width × 3px high**; tracks page scroll with a restrained gold fill and remains visually separate from the preloader and floating navbar.
- **Adaptive Cursor**: fine-pointer desktop only, one cursor layer that contrasts/inverts over light and dark surfaces, enlarges over interactive targets, and transitions to the gold Hero spotlight over Hero text. Preserve native/focus behavior and hide for touch/reduced motion. **Do not render two competing cursors.**
- **Transitions**: tasteful scroll reveals, hover transitions, and section-theme changes; readable and usable without animation.
- **Optional 3D orb**: the Achint blue fluid sphere is an **optional later enhancement**, not part of the required Contact section. Do not add Three.js or WebGL to the baseline for it.

If an animation is technically expensive, simplify its *mechanism*, not the approved design intent. Explain a visually material compromise before making it.

## 3. References and visual fidelity

- The primary index is `plan.md` §1 and §14. Source URLs include:
  - Majd: https://majd-portfolio.framer.website/
  - Achint: https://achint.vercel.app/
  - Junaid: https://www.junaidjamel.com/#process
  - Thinh: https://thinh.io.vn/portfolio
  - Sayeed Joy: https://sayeedjoy.com/
  - Ganesh: https://ganeshangadi.online/
- The numbered screenshots under `references/` are the preferred **visual source of truth** when an external site has changed or cannot be accessed. Consult only the references relevant to the component being worked on.
- Reproduce the **interaction concept, layout hierarchy, proportions, mood, and visual rhythm**, not other authors' personal copy, portraits, proprietary logos, downloadable assets, or source code.
- The proposed HEX values and fonts in `plan.md` are visual targets / estimates, **not confirmed CSS values** of reference websites. Start with `plan.md` design tokens, check contrast and rendering, and do not claim a reference's exact font unless verified.
- Use **Manrope** as the initial font candidate, with **Geist / Plus Jakarta Sans** comparison if needed; one restrained italic serif accent for the dark personality heading. Use `next/font` and ensure Vietnamese names render correctly.
- Use real screenshot comparisons at mobile and desktop breakpoints before claiming visual parity. Never describe an uninspected UI as pixel-perfect.

## 4. Stack and architecture

- **Core stack**: Next.js App Router, React, **strict TypeScript**, Tailwind CSS, and **Motion for React**. Prefer stable compatible releases at installation time. Follow the existing project's chosen package manager and lockfile; don't switch package managers casually.
- Favor **React Server Components** for static content, metadata, and server data. Use small, isolated client components only for pointer, motion, menu, interactive skills, clipboard feedback, and live clock.
- Prefer CSS/Tailwind and Motion for animations. Prefer native SVG `path` / `textPath` for the curved marquee. Add **GSAP only if a demonstrated need remains**; do not introduce multiple animation frameworks unnecessarily.
- Keep profile, projects, socials, and skill data in a clear typed content/config layer. Separate content from presentation and interaction logic.
- Organize by responsibility, e.g. `src/app`, `src/components/{layout,sections,motion,ui}`, `src/hooks`, `src/lib`, `src/content`, and `public`. Respect existing repository structure instead of creating parallel duplicates.
- Use semantic links/buttons and anchors (`#home`, `#about`, `#projects`, `#skills`, `#more`, `#contact`). Use `scroll-margin-top` so the floating navbar never covers anchor headings. No nested links or click-only `div` controls.
- Preserve working components and avoid wide, unnecessary refactors. Before adding a dependency, explain why existing platform primitives or installed tools are insufficient; obtain permission for substantial new runtime dependencies or external services.
- Do not write speculative integrations merely to make cards appear functional. Design **explicit honest fallbacks**, not fabricated data.

## 5. Animation and interaction implementation

- Prefer `transform` and `opacity` over layout-affecting animation; avoid React whole-page rerenders on `pointermove` or scroll. Use motion values, refs, or `requestAnimationFrame` as appropriate, with proper event/observer cleanup.
- Custom cursor: `pointer-events: none`, decorative `aria-hidden`, only for `(hover: hover) and (pointer: fine)`. `mix-blend-mode: difference` is an **option**, not a universal solution; test mixed backgrounds and Safari. On failure, use reliable section-aware colors. Keep keyboard focus indicators independent of cursor effects.
- Hero cursor is a **variant of the same cursor system**, with a gold highlight/mask effect. A second semantic H1 must not be exposed to assistive technology.
- Preloader must finish or skip deterministically, never trap users if JavaScript fails, and not replay unnecessarily on anchor navigation. Users must be able to skip; `prefers-reduced-motion` should bypass the animation.
- Skills drag/flick must have constrained motion, touch-friendly behavior without hijacking vertical scroll, and readable keyboard-accessible content.
- Marquee must be a seamless curved text loop when animated; stop or show static content for reduced motion and when appropriate off-screen.
- All reveals are progressive enhancement: meaningful content must remain present/readable without animation and under JavaScript failure.
- Live clock: compute using `Asia/Ho_Chi_Minh`, avoid hydration mismatches and layout shift, do not announce each second to screen readers, and clean up timers when unmounted.

## 6. Content, API, and security rules

- **Real data only**: do not guess personal email, GitHub/LinkedIn usernames, project links, work experience, user counts, awards, availability status, CV URLs, or skill proficiency percentages. Use clearly labeled draft placeholders during local mockups, never publish them as facts. A missing link should be omitted or rendered disabled with a clear explanation, not `href="#"` pretending to work.
- **GitHub Activity**: public data only, reasonably cached on the server; provide loading/empty/error behavior. Never hard-code a fictional recent commit.
- **Guestbook**: backend only when explicitly within the approved phase. Validate and limit inputs, implement spam/rate limiting and moderation, escape user-generated content, and avoid collecting unnecessary personal data.
- **Spotify**: only with valid owner authorization and correct provider terms; store refresh/access tokens in server-only environment variables; metadata/artwork/link only. Never expose credentials or stream copyrighted audio.
- Do not commit `.env*`, secrets, access tokens, private keys, service credentials, or personal sensitive information. Keep `.env.example` to non-secret names and documented usage.
- Do not claim the domain is registered, DNS is configured, or the site is deployed unless verified.
- Avoid external writes, registrations, publishing, changing DNS, creating paid services, pushing to remotes, or deployments without direct user authorization.

## 7. Accessibility, responsiveness, and performance

- Target **WCAG 2.2 AA**: proper heading order, landmarks, skip link, clear focus states, text/image contrast, alt text, keyboard navigation, and accessible menu controls. Do not rely on cursor, color, drag, or hover as the only means of using content.
- Respect `prefers-reduced-motion`, touch devices, 200% text zoom, 400% reflow, and basic no-JS behavior. No scroll hijacking or distracting infinite motion when users opt out.
- Verify layouts at **320, 375/390, 768, 1024, 1440, and 1920px** at minimum for relevant UI tasks. Ensure no accidental horizontal overflow or clipped giant H1. Desktop dark three-card row should stack gracefully on mobile.
- Prefer `next/image` for optimized content images, `next/font` for font loading, and lazy loading of below-fold / optional integrations. Do not ship reference screenshots as actual site content.
- Performance goals are in `plan.md` §10. Monitor LCP/INP/CLS, mobile Lighthouse, JavaScript budget, and especially GPU/paint cost of blending, SVG marquee, and draggable bubbles; do not claim a metric passed without measuring it.
- Aim for a functional, readable portfolio on slow devices before polishing animation.

## 8. Execution workflow for Codex

### When given a task

1. Identify whether the user requested **planning**, **implementation**, **review**, or **debugging**; do not conflate the modes.
2. Inspect the existing repo and task-relevant `plan.md` sections/references. Verify what is already implemented before editing. Do not overwrite completed work or another user's changes.
3. For a multi-section change, state a short execution outline and which approved phase it belongs to. For a small edit, proceed directly.
4. Implement the smallest coherent vertical slice, in plan order where useful. Maintain core functionality before adding optional animation or backend integration.
5. Validate the changed behavior using appropriate commands and, for visual work, actual rendered screens where a browser/simulator is available.
6. Fix regressions introduced by the change. If verification is blocked, state the blocker and do not claim tests passed.
7. Summarize work, changed files, checks and results, and remaining user decisions. Distinguish complete, partial, and not started.

### Persistent progress and handoff (`PROGRESS.md`)

- At the start of any implementation or debugging task, read the **current snapshot** and relevant tasks in [`PROGRESS.md`](./PROGRESS.md), then **inspect actual source files and Git status**. Treat the tracker as a handoff aid, not as proof that code works. For trivial documentation-only tasks, use only relevant context.
- Work on the **smallest coherent task** in the approved `plan.md` scope. Keep task IDs aligned with the `Fxx` tracker; do not redo verified completed work or edit unrelated components without a demonstrated need.
- After every meaningful code change, update `PROGRESS.md` with the task status, changed files, specific checks and outcomes, visual review results when possible, unresolved issues, and one concrete next action. Add a short **newest-first session entry**; avoid duplicating long technical notes.
- Use `Not started`, `In progress`, `Needs review`, `Blocked`, or `Done` consistently. Only mark `Done` after the relevant acceptance criteria and verification checks pass. If tests, browsers, or credentials were unavailable, say **Not run / Not verified** and use `Needs review` or `Blocked` as appropriate.
- Do **not** change approved requirements in `plan.md` merely to match incomplete code. Keep design decisions and progress reports separate; ask before materially changing scope.
- Do not automatically **commit, push, deploy, change DNS, or provision external services**. A local Git checkpoint is useful when the user approves it; record the commit hash in `PROGRESS.md` if created.
- For a new Codex session, reconcile `PROGRESS.md` with actual code and Git state **before selecting the next task**; if they disagree, document the correction transparently.

### Phase boundaries

- **Phase 0:** Confirm personal content, visual token direction, key screenshots/requirements. Missing personal info may be kept out of the UI until confirmed.
- **Phase 1:** Fully usable, responsive core portfolio, floating nav, full-width top progress, loader, Hero/spotlight, About, Projects, static Skills fallback, minimal Contact, Footer, accessible custom cursor.
- **Phase 2:** Draggable skills, curved marquee, Behind the Curtains 3-card experience; real GitHub plus Guestbook/Spotify **only if approved and credentials/data exist**.
- **Phase 3:** Optional 3D orb, deeper case studies, performance hardening, production readiness, and deployment **if explicitly requested**.

The user may explicitly authorize one phase or all phases. Do not expand a narrow task to the entire roadmap. Do not silently drop required sections because a later integration is not ready: use the plan's honest, accessible fallback strategy and report the difference.

### Validation commands

Inspect `package.json`, scripts, and lockfile **before** choosing commands. Run only those applicable to the repository, typically:

```bash
npm run lint             # if defined
npx tsc --noEmit         # if TypeScript is configured
npm test                 # if a test script exists and is relevant
npm run build            # for relevant Next.js changes, when dependencies are present
```

Use the existing package manager (`pnpm`, `yarn`, `bun`, or `npm`) rather than blindly running npm commands. For visual changes, check desktop/mobile render, interactions, keyboard focus, and reduced-motion fallbacks. Do not install heavyweight browser-testing or animation packages solely for a tiny task.

### Completion report format

- **Implemented:** what changed and how it maps to the requested plan section.
- **Files:** key changed paths.
- **Validated:** exact checks run and observed results, including visual/manual checks.
- **Open items:** missing personal data, external service setup, tradeoffs, or failed checks.
- **Next suggested phase:** only if relevant to the user's current goal.

## 9. Code review rules

Flag these as high-priority violations and suggest a safe alternative:

1. **Design drift**: replacing the compact centered navbar, full-width 3px progress, curved marquee, draggable tech bubbles, dark personality cards, or two-bubble Contact with generic layouts. **Safe path:** implement the approved component contract from `plan.md` and provide responsive fallbacks.
2. **Misleading content**: invented experiences, fake commits/tracks/messages, placeholder links shown as real. **Safe path:** use verified data or explicit unavailable/empty states.
3. **Broken a11y**: cursor hijacking focus, inaccessible drag-only interaction, unskippable loader, forced motion, hidden body content without JS. **Safe path:** semantic controls and reduced-motion/no-JS fallbacks.
4. **Security and privacy**: provider keys in client code, unsafe guestbook HTML, missing abuse protections, accidental secret commits. **Safe path:** server-only secrets, validation, moderation, caching.
5. **Performance regressions**: unnecessary WebGL/GSAP bundles, pointer updates re-rendering the whole page, unbounded animations. **Safe path:** targeted client islands, transform-based animation, lazy optional features.
6. **Unapproved external action**: deployment, DNS change, paid resource creation, remote push, or API setup without authorization. **Safe path:** prepare and explain, then request approval.

---

**Authoritative design detail:** [`plan.md`](./plan.md) (including the acceptance checklist and 10-source inspiration index). Keep this `AGENTS.md` focused on durable repository conventions; put detailed visual decisions and phase-specific changes in the plan, not duplicated here.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


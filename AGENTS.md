# UI FUSION STUDIO — Agent Design Standards

These guidelines apply to coding agents modifying the public component gallery. Complementary ChatGPT plugin: UI FUSION STUDIO v4.1.0. Design inspiration: [Anthropic Frontend Design skill](https://github.com/anthropics/skills/tree/main/skills/frontend-design), whose [upstream license is Apache 2.0](https://github.com/anthropics/skills/blob/main/skills/frontend-design/LICENSE.txt). This file is independently written and does not embed the original skill or run Claude Code.

## Art direction before a major change
- Identify audience, product purpose, user's central task, and real domain-specific UI content. Avoid generic dashboard filler.
- For a major UI redesign, compare two substantially different compositions (information architecture, hierarchy, typography, interaction), not merely different accent colors. For small fixes use one concise direction.
- Define 4–6 named color tokens, typography roles, a deliberate content hierarchy, usable spacing and one task-relevant signature visual behavior.
- Critique defaults chosen out of habit: identical rounded KPI cards, decorative glows/gradients, ALL CAPS eyebrow labels everywhere, unnecessary numbered sections, and fade animation on every card. These are not categorically forbidden; justify them against the brief.
- Make user-facing copy specific and action-oriented. Label error, empty, loading and success states with recoverable outcomes. Prefer restraint over visual clutter.
- Design for keyboard access, visible focus, readable contrast, mobile responsiveness, and reduced-motion support. Recheck with actual screenshots or devices if available.

## Repo-specific implementation
- Keep `components.json` and the gallery's embedded component data consistent. Do not inflate counts by mixing browser demos, blueprint combinations, source references and icon metadata.
- Keep editable HTML/CSS/JS isolated in sandboxed preview frames; never enable same-origin access or execute untrusted edited code in the parent page. Avoid external scripts in examples.
- Browser demos should have a functional control and visible feedback; no inert decorative buttons. Source exports should be portable and clearly platform-labelled.
- React/Next.js: semantic DOM, stateful behaviors, mobile-first layout, SSR/client boundaries and keyboard UX.
- React Native/Expo: native RN primitives, safe area, TalkBack, Android back/keyboard handling, touch sizing, dynamic text and SDK compatibility. Never paste DOM/CSS-only code into an Expo screen.
- Do not claim mobile runtime or APK success unless genuinely tested; source syntax checks are different from functional device tests.

## Quality gates
1. Review art direction and identify at least one unnecessary templated treatment revised or justified.
2. Run `node scripts/check-gallery.mjs` and other relevant source tests when available.
3. For significant visual edits, test preview controls at narrow and wide widths, capture real screenshots and fix observed defects.
4. Report what was **TESTED**, what was only **STATICALLY REVIEWED**, and what remains **NOT TESTED**.
5. Preserve published site, existing components and CI. Avoid unrelated edits.

Good design depends on actual visual and usability iteration; these instructions are not proof of exceptional quality.

## v5 Motion Lab creative quality gate

- 105 independently authored web demos including 26 Motion Lab studies; the studio's source registry has 85 research references in the private plugin. Do not imply that linked upstream libraries are bundled or that all 105 demos have native Expo parity.
- For immersive reference galleries: define a distinctive typographic/compositional route first, then choose one memorable motion signature. Use high-end 3D/shaders only when justified by the subject and device capabilities; never treat effects as a substitute for good visual design.
- Always specify interaction trigger, semantic purpose, transition timing, reduced-motion alternative, accessibility and mobile/GPU fallback. Offscreen Canvas/WebGL should be paused or capped.
- Do not copy third-party gallery screenshots, images, licensed models or fonts into the repository. Follow per-library terms and copyright notices for any actual borrowed code or assets.
- Browser source lives in both components.json and the embedded catalog in index.html; they must stay synchronized. A web preview cannot stand in for Android Expo runtime verification.
- Validate the catalog and snippets with scripts/check-gallery.mjs and additional browser/device tests when possible. Record what was genuinely tested; never invent FPS/WCAG/Android results.
# Contributing original UI components

1. Propose a distinct and useful interaction, not a clone of an existing paid/commercial design.
2. Add one object with a unique kebab-case `id`, name, category, accessible HTML, CSS, browser JS, description and tags to `components.json`.
3. Keep it fully self-contained (no remote tracking, unlicensed fonts/icons or dependencies). Use focus states, reduced-motion support and visible feedback.
4. Regenerate embedded catalog inside `index.html` from the authoritative JSON (the private authoring tool has `scripts/build_gallery_v4.py`; do **not** edit JSON and embedded data inconsistently).
5. Add real React Native/Expo TSX only if implemented independently with native components. Record concept-vs-parity limitations; never paste DOM/CSS into native.
6. Run `node scripts/check-gallery.mjs`, manually exercise all states in desktop/mobile browser, review a11y/keyboard and open a pull request.

Do not include account credentials, private code, trademarked assets, or scraped components. Contributors must have rights to submitted code.

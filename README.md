# UI FUSION STUDIO — Component Lab v4.0.0

**79 original interactive HTML/CSS/JS browser demos**, with **32 React TSX and 32 React Native/Expo TSX starter adaptations**. A React/Expo adaptation is a *starting implementation of an interaction concept*, not guaranteed pixel/behavior parity with its browser preview and not a full app. A complete offline source inspector and ZIP collection builder live in `index.html`.

## Quick start

Open `index.html` in your browser, or serve the folder with `python -m http.server 8000` and navigate to `http://localhost:8000`. No Node/npm dependency is required to view the gallery. Previews are sandboxed iframes, not Android emulators.

Choose **Inspect source** to edit HTML/CSS/JS and run it in the isolated preview. Select multiple cards and click **Download selection ZIP**. This ZIP includes `web/<id>/index.html`, React/Expo TSX when provided, a manifest, license and integration notes. It creates files in your browser, **not** a GitHub commit.

## GitHub repository integration

The static gallery lives in this repository. A connected GitHub tool can commit authorized source changes. Alternatively, edit source locally and push a PR. The GitHub connector does not permanently synchronize the separately saved private ChatGPT plugin with this public repository. Avoid pushing private app code, secrets, or third-party source without rights.

**Validation:** `node scripts/check-gallery.mjs` performs catalog integrity and JS parse checks without packages. PRs and `main` pushes run this validation in GitHub Actions via `.github/workflows/quality.yml`. This is **not** device/visual/end-to-end testing. The authoring package separately syntax-parses TSX using TypeScript when available.

## GitHub Pages deployment

`.github/workflows/pages.yml` deploys this folder on pushes to `main`. Set **Settings → Pages → Build and deployment → GitHub Actions** if required. Check **Actions** run results, then test the published URL and component interactions. A pushed workflow is not proof that Pages is enabled or that a site is live.

## Common problems

- No public site: ensure Pages source is GitHub Actions; inspect deploy job permissions and environment, then use Actions → workflow_dispatch if applicable.
- Blank catalog: check browser JS console; validate that `index.html` has the catalog embedded and matches `components.json`.
- Export fails: downloads require browser download permission; use component `Source file` action as a fallback.
- Expo code does not look identical: TSX adaptations intentionally focus on native interaction and must be integrated/tested in your Expo SDK version.

## Legal and security

Original gallery code is MIT-licensed (see LICENSE). The **70 external research source references** in the *private* plugin are not bundled third-party code. Every external library and asset has its own terms. Browser editor JavaScript runs only in sandboxed frames with a restrictive CSP; still review any code before integrating into your own project. Never add GitHub tokens/API keys to client JavaScript.

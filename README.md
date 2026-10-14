# UI FUSION STUDIO — Live Component Gallery v3.0.0

Live browser gallery containing 43 original interactive UI demos, editable HTML/CSS/JS source, and 8 React + 8 React Native/Expo TSX example ports. The web preview is not an Android emulator.

## Run locally
Open `index.html` in a browser or run `python -m http.server 8000` in this directory and visit http://localhost:8000.

## Deploy
GitHub Pages is deployed through `.github/workflows/pages.yml` on pushes to `main`. In repository Settings → Pages set **Build and deployment → Source: GitHub Actions**. A successful deploy and HTTP accessibility check are required before declaring the gallery live.

## Capabilities and limits
Search/filter 43 demos, interactive isolated previews, source inspector/editor, export runnable HTML. React/Expo examples require project integration and real build/device testing. The site is static and does not connect to private GitHub projects, ChatGPT or an MCP backend. No third-party UI source files or font binaries are bundled.

## License
Original website and demo source code: MIT. See `LICENSE`. Independently sourced GitHub UI libraries referenced in the separate ChatGPT plugin retain their own licenses.

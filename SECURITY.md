# Security model

Static site: no backend, analytics service, login, user database, third-party script CDN, or API token. Demo previews and user edits run inside `<iframe sandbox="allow-scripts">` without `allow-same-origin`, and with a restrictive embedded CSP. The editor runs local user-supplied code; never paste secrets into it or trust downloaded edited code without reviewing. `localStorage` is limited to local favorites and export selection. GitHub Pages hosting publishes the source files publicly.

Report issues using GitHub repository issues without posting secrets. Maintainers should keep Actions permissions minimal (`contents: read`; `pages: write` and `id-token: write` only for the Pages deployment job) and review dependencies/changes before merge.

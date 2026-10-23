# Magic Masters Swimming

Static rebuild of magicmastersswimming.com.au, moving it off WordPress.

| Stage | What | Where |
|---|---|---|
| 1 | Faithful static copy of the WordPress site, plugins and admin stripped | `original/` |
| 2 | 2026 refresh: modern look, old content removed | site root (coming) |
| 3 | Review with Lisa, collect feedback | — |
| 4 | Point the domain at this site, retire WordPress | — |

No build step. Serve the folder with any static host (GitHub Pages here).

`original/static-contact.js` replaces Contact Form 7: set `CONTACT_EMAIL` to switch the form on (it opens the visitor's mail app).

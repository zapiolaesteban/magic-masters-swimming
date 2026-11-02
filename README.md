# Magic Masters Swimming

The website for magicmastersswimming.com.au (Lisa Marangon's masters squads and private lessons),
rebuilt as one static page to replace the old WordPress site. No build step: GitHub Pages serves
this folder as it is.

| File | What it is |
|---|---|
| `index.html` | The whole site: markup, styles and scripts in one file |
| `assets/img/` | Photos, exported at web sizes with location data stripped |
| `404.html` | Catches old WordPress addresses and sends visitors to the home page |
| `robots.txt`, `sitemap.xml` | Search-engine basics for the real domain |

## Hosting

GitHub Pages, from the `main` branch. GoDaddy keeps the domain name and its DNS. Email for the
domain (`mail.magicmastersswimming.com.au`) is a separate record on the old GoDaddy hosting server
and is not affected by where the website lives.

## Branches kept as fallbacks

| Branch | Holds |
|---|---|
| `stage-1` | Static copy of the old WordPress site (in `original/`) |
| `stage-2` | First redesign |
| `stage-2-hero-theme` | Swimmer hero and light/dark toggle |
| `contact-email` | Contact form switched on |
| `motion-pass` | Scroll motion and tap-to-enlarge photos |

## Editing

- Contact address: `CONTACT_EMAIL` near the end of `index.html`. It is stored in two halves so spam
  scrapers can't read it from the source.
- Motion: everything sits in the "Motion" block of the stylesheet, is switched off for visitors
  who turn on reduced motion, and falls back to a still page in browsers without scroll-driven
  animations.

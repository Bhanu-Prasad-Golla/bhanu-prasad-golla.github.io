# Bhanu Prasad Golla — Portfolio

Production website. Static HTML, CSS and vanilla JavaScript.
No framework, no build step, no dependencies, no tracking, no cookies,
no third-party requests at runtime.

## Run locally

    python3 -m http.server 8080

Then open <http://localhost:8080/>.

Opening `index.html` straight from disk (`file://`) will not work — the page
loads `assets/content.js`, which browsers block over `file://`. Use the server.

## Edit your content

**Everything you will ever want to change lives in `assets/content.js`.**
Name, summary, skills, projects, journey, education, contact details. Edit that
one file, save, refresh. Nothing else needs touching.

To replace your photo, drop a new file into `assets/` and update the `photo`
or `photoOffice` path in `content.js`.

To replace the downloadable CV, overwrite `Bhanu_Prasad_Golla_CV.pdf`.

## Before you go live — one thing to change

Four files contain a placeholder domain, `https://bhanuprasadgolla.de/`.
Replace it with your real URL:

| File             | What to change                                  |
|------------------|-------------------------------------------------|
| `index.html`     | `<link rel="canonical">`, the `og:` and `twitter:` URLs |
| `sitemap.xml`    | the `<loc>` value                                |
| `robots.txt`     | the `Sitemap:` line                              |

Search and replace `bhanuprasadgolla.de` across the project and you're done.
If you skip this, the site still works — only link previews and search
indexing are affected.

## Deploying (all free)

### GitHub Pages
1. Create a repository and push these files to the `main` branch.
2. Repository → Settings → Pages → Source: `Deploy from a branch`, branch
   `main`, folder `/ (root)`.
3. Live at `https://<username>.github.io/<repo>/` in a minute or two.

For a custom domain, add a file named `CNAME` containing just your domain,
then point a `CNAME` DNS record at `<username>.github.io`.

### Netlify
Drag this whole folder onto <https://app.netlify.com/drop>. That is the entire
process. Add a custom domain afterwards under Site settings → Domain management.

### Vercel
    npx vercel --prod

Accept the defaults; it is a static site, so there is nothing to configure.

### Cloudflare Pages
Connect the repository, leave the build command empty, set the output
directory to `/`.

## What is in here

    index.html                 the whole site
    404.html                   not-found page
    assets/content.js          YOUR CONTENT — the only file you normally edit
    assets/fonts.css           self-hosted webfonts
    assets/fonts/              woff2 files (SIL Open Font License)
    assets/*.jpg               your photographs
    Bhanu_Prasad_Golla_CV.pdf  downloadable CV
    favicon.svg                browser tab icon
    apple-touch-icon.png       iOS home-screen icon
    site.webmanifest           PWA manifest
    robots.txt                 crawler rules
    sitemap.xml                search engine sitemap

## Notes on how it was built

* **Fonts are self-hosted**, not loaded from Google Fonts. One fewer
  third-party request, and no personal-data transfer to a third country —
  which matters for a site hosted in or aimed at the EU.
* **Structured data** (`schema.org/Person` JSON-LD) is embedded in the head so
  Google, LinkedIn and applicant-tracking parsers read your profile directly
  instead of guessing from page text.
* **Accessibility**: skip link, one `<h1>`, labelled landmarks and sections,
  visible focus rings, keyboard-operable project rows, focus trapped and
  restored around the project dialog, and `prefers-reduced-motion` support.
* **Print**: a dedicated print stylesheet. Ctrl/Cmd + P gives a clean paper
  version with navigation and interactive elements stripped out.
* **Performance**: around 366 KB total, 15 requests, first contentful paint
  under 150 ms in testing.

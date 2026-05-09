# jpoh.me — Personal Website

## Stack
- **SSG:** Eleventy (11ty) v1.x → upgrade to v3.x
- **Styling:** Tailwind CSS (3.x)
- **Build:** npm scripts, npm-run-all for parallel dev
- **Hosting:** Netlify

## Key Commands
```bash
npm run dev      # Start dev server (Tailwind watch + Eleventy serve)
npm run build    # Production build
```

## Project Structure
```
src/
  _includes/     # Nunjucks templates
  css/           # Tailwind source
  img/           # Images (processed by Eleventy)
  js/            # JS (inline in templates)
  index.njk      # Home page
  about.njk      # About page
static/          # Static assets (copied as-is)
public/          # Build output (gitignored)
```

## Current Issues (from Site Review 2026-05-04)

### High Priority
1. **Build:** Eleventy v1.0.0 (2022) → upgrade to v3.x
2. **Build:** Node.js v17.0.1 (EOL) → upgrade to v22 LTS
3. **Bundle:** FontAwesome Kit (50-80KB+) → replace with inline SVGs
4. **SEO:** Missing meta description, OG/Twitter tags, canonical URL, JSON-LD
5. **Accessibility:** Redundant `role="link"`, active href with `aria-disabled`, no focus rings
6. **Code:** `currentYear` shortcode has implicit global variable

### Medium Priority
- No HTML/JS minification in production
- `<blockquote>` misused for bio text
- Gravatar fetched at runtime (external RTT)
- Web manifest empty `name`/`short_name`
- Three inline `<script>` blocks to consolidate
- ESLint/Prettier unconfigured
- package.json repo URLs still point to Bitbucket

### Low Priority
- Fira Code font only used decoratively
- External links missing `rel="noopener noreferrer"`
- `<pre>` used for decorative header text
- Tailwind content glob missing `.njk` and `.md`
- Commented-out code in `index.html`

## Code Style
- Nunjucks templates (`.njk`)
- Tailwind utility classes in HTML
- Simple Icons for SVG icons (inline, not Kit)
- No frameworks beyond Tailwind
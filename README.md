# KramaTek Enterprise Pro v6

## What changed
- Bigger KramaTek brand plate with a gold background and larger logo.
- All internal navigation is rendered as real `<a href>` links. Clicking a menu item now performs a clean navigation request automatically; no manual refresh should be required.
- Vercel filesystem-first SPA fallback retained for direct routes such as `/services/ai-solutions`.
- Mega menus open when the user moves over the complete Services / Industries area; the arrow is not required.
- Client logos were trimmed to remove excess white margins, then displayed much larger.
- Added a visual second layer immediately below the hero.
- Replaced stock-photo dependencies with original KramaTek-created SVG visuals stored locally in `/public/assets/visuals`.
- Service and industry detail pages now include a large visual section, a clear "Why this matters" story, capability data, outcomes, and CTAs.
- Enterprise intelligence diagram enlarged for readability.

## Vercel settings
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Root Directory: ./

## Upload
Replace the repository contents with this package, commit to `main`, and let Vercel build the new production deployment.

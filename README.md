# KramaTek Enterprise Pro V9

This is a fresh rebuild focused on reliability and responsive layout.

Key fixes:
- No old client image files are used. Six new local SVG wordmark representations are bundled in src/assets/clients.
- All page/service/industry visuals are fresh local SVG assets bundled by Vite. No external image URLs.
- The original KramaTek horizontal logo is imported through Vite and displayed large on a plain white header. No gold background behind the logo.
- Navigation uses React Router NavLink end-to-end, so menu links change pages immediately without manual refresh.
- Vercel is configured with filesystem-first routing, then SPA fallback, so hashed JS/CSS/image assets are served before index.html fallback.
- Service cards no longer use large min-heights that cause cut-off or giant blank boxes.
- Mobile card/image/title sizes have dedicated breakpoints.

Vercel:
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Root Directory: ./

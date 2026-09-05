# KramaTek

Modern enterprise AI and technology website.

Production fixes in this release:
- All internal CTAs/navigation use standard browser href links for reliable direct navigation on Vercel.
- Insight detail routes are preserved and mapped in React Router.
- Platform and Contact routes are preserved.
- Vercel filesystem-first SPA fallback is preserved.
- Site visuals are bundled locally; no external image hotlinks are required.
- Visual assets are normalized to 3840×2160 delivery dimensions.
- Healthcare imagery was replaced with a directly healthcare-relevant visual.
- Insight detail pages use context-specific detail imagery.

Vercel:
- Framework: Vite
- Build Command: npm run build
- Output Directory: dist
- Root Directory: ./

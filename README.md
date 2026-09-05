# KramaTek Enterprise Pro v7

Key corrections:
- Homepage now auto-rotates BOTH the hero message and the hero image every 5.2 seconds (4 stories).
- Reverted to the more photographic V5 visual direction rather than the repeated V6 abstract graphic.
- Added a visual second layer directly below the hero with large photographic capability cards.
- Header brand is significantly larger. Only the favicon/icon has the gold background; the KramaTek name remains on the white header.
- Client images are trimmed and displayed much larger.
- Page hero titles and page images are larger.
- All major internal links use normal browser href navigation so a click performs a complete navigation request; no manual refresh should be needed.
- Vercel keeps a filesystem-first SPA fallback for direct URLs.

Vercel:
Framework: Vite
Build Command: npm run build
Output Directory: dist
Root Directory: ./

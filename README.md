# KramaTek Enterprise Pro v5

Production React + Vite build for Vercel.

## Key corrections in this build
- Every Services, Industries, Solutions, Why KramaTek, Insights, Insight detail, Contact and CTA link maps to a React Router route.
- Vercel config uses `handle: filesystem` before the SPA fallback, preventing the blank-page/static-asset issue on direct routes.
- Client logos are substantially larger and displayed in clean white presentation cards.
- KramaTek logo is larger and sits on white surfaces in the header and footer so the brand is clearly visible.
- Hero uses a professional workplace image instead of a plain top layer.
- Service and industry detail pages have large editorial hero images.
- The enterprise intelligence diagram is larger and explicitly explains Data & Events -> AI/Data/Rules -> Actions.
- Insights are real clickable pages with article detail routes.

## Vercel
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Root Directory: ./

# Mobile deployment checklist

1. In GitHub, delete the old repository contents first. Do not merge this package over V6/V7.
2. Upload the complete V8 package preserving `src/` and all nested folders.
3. Verify these files exist in GitHub:
   - `src/assets/brand/favicon.png`
   - `src/assets/clients/client-sira.png`
   - `src/assets/clients/client-fruges.png`
   - `src/assets/clients/client-ventley.png`
   - `src/assets/clients/client-quanteon.png`
   - `src/assets/clients/client-alphasmart.png`
   - `src/assets/clients/client-technodrive.png`
4. Vercel settings:
   - Framework: Vite
   - Build: `npm run build`
   - Output: `dist`
   - Root: `./`
5. After deploy, open the production URL in a private/incognito mobile tab once to avoid old cached assets.
6. Test `/`, `/services/ai-solutions`, `/platform`, `/why-kramatek`, `/insights`.

V8 deliberately avoids broken `<img>` placeholders for remote photography. Remote photos are rendered as CSS backgrounds with branded fallbacks. Brand and client images are Vite-imported assets so they are bundled into the build rather than relying on public-folder URL paths.

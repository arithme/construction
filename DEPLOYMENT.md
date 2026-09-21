# Deployment
## Runtime choices
The Sites preview uses Vinext to compile Next.js App Router APIs for Cloudflare Workers. Keep this distinction explicit in proposals. Native Next.js deployments use the build:next script.
## Vercel
Import repository, select Next.js, install with pnpm install --frozen-lockfile, build with pnpm build:next. Set NEXT_PUBLIC_SITE_URL to the production HTTPS origin and configure server-only lead variables. Add the domain through Vercel, follow the displayed DNS records, and wait for TLS issuance.
## Netlify
Use Netlify's Next.js runtime, pnpm install --frozen-lockfile and pnpm build:next. Use the runtime's default output settings, not a static export, because forms require API routes. Configure environment variables and the domain in the dashboard.
## AWS
Use AWS Amplify Hosting's current Next.js SSR integration for supported framework versions, or a container running the native Next.js build and start:next. Confirm framework support against provider documentation at deployment time. Store secrets in the platform secret manager, use TLS via the hosting service, and set a durable distributed rate limiter.
## Post-deploy
Verify /robots.txt and /sitemap.xml. Remove demo noindex only after content audit. Submit sitemap in Google Search Console after domain verification. Test redirects, form delivery, error handling and analytics consent. Verify every configured phone/WhatsApp link. Configure backups and incident ownership for any real lead datastore.


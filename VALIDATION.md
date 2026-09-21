# Validation record

Run these gates for every client release:

- `pnpm typecheck`
- `pnpm lint`
- `pnpm test`
- `pnpm build`
- axe on Home, Services, Projects and Contact
- Lighthouse CI on the same four pages
- a crawler/link check against the production build
- a rebranding grep after changing name, logo and colors

The repository includes type, lint, unit and production-build checks. Browser and production URL checks must be rerun after final client content and deployment because scores depend on hosting, media and third-party scripts.

The demo intentionally remains `noindex`. Do not claim Lighthouse, axe or broken-link acceptance until their reports pass on the final deployment.

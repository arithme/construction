# Construction website generator
A production-minded white-label platform for construction-company websites, supplied with a clearly labelled Aranya Buildcon demo for Bokaro, Jharkhand.
## Development
Use Node 24 and npm. Run `npm install`, then `npm run dev`. Validate with `npm run lint`, `npm run typecheck`, `npm test` and `npm run build`.
The App Router uses Next.js React/TypeScript contracts. Sites hosting uses the bundled Vinext compatibility runtime. Use `npm run build:next` for native Next.js targets.
## Create a client
Edit the six inputs in `client.config.ts`, run `npm run create-client`, or import JSON with `npm run create-client -- --from clients/aranya-buildcon.json`. Optional contact, location, analytics, rates and preset settings live in `client.advanced.config.ts`; feature switches live in `config/features.ts`.
## Architecture
`client.config.ts`: six-input company setup. `client.advanced.config.ts`: optional overrides.
`config/`: resolved identity, theme and feature toggles.
`content/demo/`: labelled fictional records.
`lib/content-provider.ts`: ContentProvider boundary. Pages compose data; UI receives props.
`components/`: reusable sections, cards, filters, forms and gallery.
`app/`: route composition and API endpoints.
## Honest demonstration
No telephone, email, credential, rating or business address is invented. Empty contact settings use the enquiry flow instead. Images depict illustrative concepts. Mock form submissions do not contact a business or persist personal information.
## Validation
`npm run typecheck`, `npm run lint`, `npm run build`, `npm test`.
See VALIDATION.md for actual results and open limitations. Performance targets are acceptance goals until measured.
## Design
[Figma references](https://www.figma.com/design/q4En5Az96dFykn9BXFgOBw).
## Handoff
See CLIENT_SETUP.md, CLIENT_ONBOARDING.md, CONFIG_REFERENCE.md, DEPLOYMENT.md, PRODUCTION_CHECKLIST.md and content-audit.md. Docker and GitHub Actions configurations are included.


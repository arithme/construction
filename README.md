# Construction website system
Fictional Aranya Buildcon demo, designed for configuration-based reuse.
## Development
Node 24 LTS; pnpm 11.19.0. Run `pnpm install`, `pnpm dev`.
The App Router uses Next.js React/TypeScript contracts. Sites hosting uses the bundled Vinext compatibility runtime. Use `pnpm build:next` for native Next.js targets.
## Architecture
`config/`: identity, theme, feature toggles and site copy.
`content/demo/`: labelled fictional records.
`lib/content-provider.ts`: ContentProvider boundary. Pages compose data; UI receives props.
`components/`: reusable sections, cards, filters, forms and gallery.
`app/`: route composition and API endpoints.
## Honest demonstration
No telephone, email, credential, rating or business address is invented. Empty contact settings use the enquiry flow instead. Images depict illustrative concepts. Mock form submissions do not contact a business or persist personal information.
## Validation
`pnpm typecheck`, `pnpm lint`, `pnpm build`, `pnpm test`.
See VALIDATION.md for actual results and open limitations. Performance targets are acceptance goals until measured.
## Design
[Figma references](https://www.figma.com/design/q4En5Az96dFykn9BXFgOBw).
## Handoff
See CLIENT_ONBOARDING.md, CONFIG_REFERENCE.md, DEPLOYMENT.md and content-audit.md.


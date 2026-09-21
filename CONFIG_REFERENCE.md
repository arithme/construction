# Configuration reference

The active client record is `config/company.ts`. Components receive this record through the content provider and do not import client data directly.

| Field | Type | Default/demo value | Purpose |
| --- | --- | --- | --- |
| `companyName` | string | `Aranya Buildcon` | Full trading name. |
| `shortName`, `descriptor` | string | `ARANYA`, `BUILDCON` | Header wordmark. |
| `tagline` | string | Demo tagline | Brand statement. |
| `phone`, `whatsapp`, `email` | string | empty | Verified lead channels. Empty values fall back to Contact. WhatsApp uses country code digits. |
| `address` | Address | Bokaro/Jharkhand with empty street/postcode | Verified postal address. An empty street prevents an office claim. |
| `businessHours` | BusinessHours[] | Mon–Sat sample | Display-ready opening ranges. Verify before launch. |
| `googleMapsUrl`, `mapsEmbedUrl` | URL string | general Bokaro map | Directions link and embed. Replace with verified business/site data. |
| `googleBusinessUrl`, `placeId` | string | empty | Verified Google Business Profile/reviews. |
| `logo` | public path | `/favicon.svg` | Brand logo/favicon. |
| `primaryColor`, `secondaryColor` | CSS color | amber/charcoal | Theme tokens passed to the layout. |
| `socialLinks` | record | empty | Verified social profile URLs. |
| `serviceAreas` | string[] | Bokaro-area samples | Areas served and schema input. |
| `stats` | Stat[] | empty | Evidence-backed figures only; samples must set `isSample`. |
| `credentials` | credential[] | empty | Only `verified: true` records render. |
| `seo` | SeoFields | demo metadata | Default title and description. |
| `isSample` | boolean | `true` | Adds `noindex` and enables honest demo treatment. Set false only after content audit. |
| `locale` | string | `en` | HTML language. Add supplied translated content before changing. |
| `theme` | string | `premium-corporate` | White-label theme identifier. |
| `hero` | object | demo text/image | Homepage headline, copy and media. |
| `features` | object | per-feature booleans | Enables calculators, careers, blog, site visits, popups and dark mode contracts. |

Content entities are defined in `lib/types.ts`; demo records live in `content/demo/data.json`. Keep `isSample: true` until each entity is replaced with approved client content.

Environment variables are documented in `.env.example`. Public variables are visible in the browser. Never put secrets in a `NEXT_PUBLIC_` variable.

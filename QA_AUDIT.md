# QA Audit

Audit date: 2026-09-24  
Starting branch: `main`  
Starting commit: `3586dcb161cfd178c6d1ddfd5e92001f07bcb6ed`

## Critical

- [x] Create, configure, preview, publish, open public site, submit quote, and view the lead in admin.
- [x] Verify published-snapshot isolation by editing a published client's draft, comparing preview/public output, publishing, and restoring the original name.
- [x] Verify two published QA tenants do not expose each other's name, phone, colors, services, projects, or lead ownership.
- [x] Remove legacy Ravi Construction shell and metadata from tenant HTML while preserving it on legacy content routes.

## High

- [x] Verify valid/invalid login, logout, protected APIs, request origin checks, password hashing, and session invalidation.
- [x] Redirect protected admin screens to login on an unauthorized response instead of rendering empty data.
- [x] Verify server validation for invalid image MIME type, size above 10 MB, and unavailable storage configuration.
- [ ] Configure an S3-compatible store and complete real PNG/JPEG/WebP upload and public rendering tests.
- [ ] Implemented project image upload UI is absent, so multi-image ordering/deletion/gallery upload cannot be tested.
- [ ] Tenant-specific analytics capture is absent even though the database table exists.
- [ ] Domain-management UI/API and host-based tenant routing are absent even though the database table exists.

## Medium

- [x] Crawl legacy public routes, sitemap, robots, invalid client, and invalid service routes.
- [x] Remove the disabled Careers route from the legacy footer and sitemap.
- [x] Verify valid quote persistence plus empty name, invalid phone/email, missing location, and overlong-message rejection.
- [x] Verify all six lead statuses persist after re-fetch.
- [x] Verify schema relationships, tenant foreign keys, indexes, and uniqueness constraints.
- [x] Verify the production bundle and a production server smoke test for `/`, admin login, a tenant site, health, and 404.
- [ ] Tenant pages do not provide tenant-specific canonical, Open Graph, JSON-LD, sitemap, or robots output.
- [ ] Tenant service/project detail routes are absent; the tenant site is a single-page site.
- [ ] Admin client list does not expose unpublish, duplicate, archive, delete, or filter controls. A server archive endpoint exists, but it was not exercised to preserve data.
- [ ] Theme variants were inspected in code; most differences are CSS typography, hero treatment, and card styling rather than complete theme-specific layouts.
- [ ] Exact viewport testing at every requested width was not completed because the browser viewport override did not apply. Existing responsive CSS breakpoints were inspected, and the normal 1440px tenant page was visually checked.

## Low

- [x] Verify form labels, skip links, focus styles, heading structure, and semantic links on the tested tenant/admin pages.
- [x] Check the tested tenant browser console; only development hot-reload warnings were observed after layout edits.
- [ ] A formal color-contrast audit, keyboard pass of every route, mobile swipe test, and performance profile remain manual checks.

## Verified Working

- [x] Development server runs at `http://localhost:5173` with PostgreSQL in Docker.
- [x] `npm ls --depth=0` reports no missing or invalid direct dependencies.
- [x] Root route is the agency homepage; legacy construction content remains available through catch-all routes.
- [x] Legacy routes return 200 for home/about/services/projects/blog/contact/quote/site visit/testimonials/FAQ/calculators/search/legal/sitemap/robots.
- [x] Unknown service and client routes return 404 without leaking another tenant.
- [x] QA Test Construction and QA Second Builders were created with different content and published through the admin APIs.
- [x] Preview reads the draft while the public tenant route reads the published snapshot.
- [x] A valid tenant quote returns 201, persists with the correct `clientId`, type, source, page URL, and appears in admin.
- [x] Browser quote submission visibly reaches the success state.
- [x] Direct unauthenticated client, lead, upload, and publish API requests fail with 401/403.
- [x] Database passwords use scrypt hashes and sessions are stored server-side with hashed tokens.
- [x] Upload validation allows only JPEG, PNG, WebP, or AVIF and limits files to 10 MB.
- [x] Lint passes with zero errors.
- [x] TypeScript passes with zero errors.
- [x] Test suite: 4 passed, 0 failed, 0 skipped.
- [x] Vinext production build passes.
- [x] Production server smoke test returns 200 for homepage, admin login, QA tenant, and health; invalid route returns 404.

## Fixed

- [x] Tenant public HTML no longer contains legacy Ravi Construction navigation, footer, phone number, schema, or title template.
- [x] Legacy pages retain their original shell and metadata through a catch-all route layout.
- [x] Tenant titles use absolute metadata and do not inherit an agency/legacy suffix.
- [x] Disabled Careers links no longer appear in the legacy footer or sitemap.
- [x] Admin dashboard, clients, leads, and client editor redirect on an expired/unauthorized session and display non-auth fetch failures.
- [x] Lead status update redirects when its session has expired and reports failed updates.
- [x] `.env.example` now uses the actual development port, 5173.

## Test Data Created

- `QA Test Construction` (`qa-test-construction`), published.
- `QA Second Builders` (`qa-second-builders`), published.
- Two QA quote leads for QA Test Construction.

These records were deliberately requested for the audit and were not deleted.

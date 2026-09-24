# Architecture

The application is a modular monolith for 5–50 construction clients. PostgreSQL is authoritative. Admin edits relational draft records; publishing validates and stores an immutable JSON snapshot. Public tenant routes read only published snapshots. The original file-configured demo remains available at `/`.

Core boundaries: `db/` schema, `lib/client-repository.ts` transactions, `lib/admin-session.ts` authorization, `lib/storage.ts` uploads, `/api/admin/*` mutations, `/client/[slug]` public tenant rendering.

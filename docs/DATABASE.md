# Database

Drizzle ORM targets portable PostgreSQL. Run `npm run db:generate`, `npm run db:migrate`, then `npm run db:seed`. Every content and conversion table carries a client relationship. Publishing and multi-record writes use transactions. Indexed fields include tenant IDs, slugs, statuses, hostnames and timestamps.

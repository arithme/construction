# Multi-tenancy

Development websites use `/client/[slug]`. Only records whose client is ACTIVE and published resolve publicly. Draft preview requires an authenticated admin session and an exact client ID. CLIENT-role sessions are scoped to their assigned client. Repository and API queries must include `clientId`; tenant-isolation helpers and regression tests guard this rule.

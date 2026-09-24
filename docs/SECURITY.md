# Security

Passwords use salted scrypt hashes. Sessions are random, stored as SHA-256 hashes, expire after eight hours and use HttpOnly, SameSite=Strict cookies with Secure in HTTPS. Admin APIs enforce roles and tenant scope. Login is rate limited per forwarded address. Mutations validate data with Zod. Uploads use short-lived S3 signatures and restricted content types.

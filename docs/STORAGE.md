# Storage

Production uploads use S3-compatible object storage through presigned PUT URLs. Accepted MIME types are JPEG, PNG, WebP and AVIF, up to 10 MB. Configure the `S3_*` variables. The application container is never permanent upload storage.

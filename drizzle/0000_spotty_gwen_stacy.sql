CREATE TYPE "public"."client_status" AS ENUM('DRAFT', 'ACTIVE', 'SUSPENDED', 'ARCHIVED');--> statement-breakpoint
CREATE TYPE "public"."domain_status" AS ENUM('PENDING', 'VERIFIED', 'FAILED');--> statement-breakpoint
CREATE TYPE "public"."domain_type" AS ENUM('SUBDOMAIN', 'CUSTOM');--> statement-breakpoint
CREATE TYPE "public"."lead_status" AS ENUM('NEW', 'CONTACTED', 'QUALIFIED', 'WON', 'LOST', 'SPAM');--> statement-breakpoint
CREATE TYPE "public"."lead_type" AS ENUM('CONTACT', 'QUOTE', 'SITE_VISIT', 'CALLBACK', 'PROJECT', 'SERVICE');--> statement-breakpoint
CREATE TYPE "public"."user_role" AS ENUM('SUPER_ADMIN', 'ADMIN', 'CLIENT');--> statement-breakpoint
CREATE TABLE "agency_users" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"password_hash" text NOT NULL,
	"name" text NOT NULL,
	"role" "user_role" DEFAULT 'ADMIN' NOT NULL,
	"client_id" text,
	"last_login_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "analytics_events" (
	"id" text PRIMARY KEY NOT NULL,
	"client_id" text NOT NULL,
	"event" text NOT NULL,
	"page" text,
	"referrer" text,
	"utm_source" text,
	"utm_medium" text,
	"utm_campaign" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "audit_logs" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text,
	"client_id" text,
	"action" text NOT NULL,
	"metadata" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "clients" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"status" "client_status" DEFAULT 'DRAFT' NOT NULL,
	"logo_url" text,
	"favicon_url" text,
	"hero_url" text,
	"phone" text,
	"whatsapp" text,
	"email" text,
	"tagline" text,
	"description" text,
	"address_line_1" text,
	"address_line_2" text,
	"city" text,
	"district" text,
	"state" text,
	"country" text DEFAULT 'India',
	"pincode" text,
	"primary_color" text DEFAULT '#F59E0B' NOT NULL,
	"secondary_color" text DEFAULT '#111827' NOT NULL,
	"accent_color" text DEFAULT '#FFFFFF' NOT NULL,
	"theme" text DEFAULT 'corporate' NOT NULL,
	"custom_domain" text,
	"subdomain" text,
	"seo_title" text,
	"seo_description" text,
	"canonical_base_url" text,
	"og_image_url" text,
	"google_business_url" text,
	"search_console_verification" text,
	"published" boolean DEFAULT false NOT NULL,
	"published_at" timestamp with time zone,
	"published_snapshot" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "domains" (
	"id" text PRIMARY KEY NOT NULL,
	"client_id" text NOT NULL,
	"hostname" text NOT NULL,
	"type" "domain_type" NOT NULL,
	"status" "domain_status" DEFAULT 'PENDING' NOT NULL,
	"verified_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "faqs" (
	"id" text PRIMARY KEY NOT NULL,
	"client_id" text NOT NULL,
	"question" text NOT NULL,
	"answer" text NOT NULL,
	"category" text,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"enabled" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "leads" (
	"id" text PRIMARY KEY NOT NULL,
	"client_id" text NOT NULL,
	"type" "lead_type" NOT NULL,
	"name" text NOT NULL,
	"phone" text NOT NULL,
	"whatsapp" text,
	"email" text,
	"project_type" text,
	"location" text,
	"area" text,
	"budget" text,
	"message" text,
	"source" text,
	"page_url" text,
	"utm_source" text,
	"utm_medium" text,
	"utm_campaign" text,
	"utm_term" text,
	"utm_content" text,
	"status" "lead_status" DEFAULT 'NEW' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "project_images" (
	"id" text PRIMARY KEY NOT NULL,
	"project_id" text NOT NULL,
	"image_url" text NOT NULL,
	"alt_text" text,
	"caption" text,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" text PRIMARY KEY NOT NULL,
	"client_id" text NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"category" text,
	"description" text,
	"location" text,
	"area" text,
	"year" integer,
	"status" text,
	"duration" text,
	"client_name" text,
	"thumbnail_url" text,
	"featured" boolean DEFAULT false NOT NULL,
	"enabled" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "service_areas" (
	"id" text PRIMARY KEY NOT NULL,
	"client_id" text NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"city" text,
	"state" text,
	"enabled" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "services" (
	"id" text PRIMARY KEY NOT NULL,
	"client_id" text NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"short_description" text,
	"description" text,
	"image_url" text,
	"enabled" boolean DEFAULT true NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"token_hash" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "social_links" (
	"id" text PRIMARY KEY NOT NULL,
	"client_id" text NOT NULL,
	"platform" text NOT NULL,
	"url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "testimonials" (
	"id" text PRIMARY KEY NOT NULL,
	"client_id" text NOT NULL,
	"name" text NOT NULL,
	"location" text,
	"project_name" text,
	"rating" integer,
	"quote" text NOT NULL,
	"photo_url" text,
	"verified" boolean DEFAULT false NOT NULL,
	"enabled" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "analytics_events" ADD CONSTRAINT "analytics_events_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_user_id_agency_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."agency_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "domains" ADD CONSTRAINT "domains_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "faqs" ADD CONSTRAINT "faqs_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "leads" ADD CONSTRAINT "leads_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_images" ADD CONSTRAINT "project_images_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "service_areas" ADD CONSTRAINT "service_areas_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "services" ADD CONSTRAINT "services_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_agency_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."agency_users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "social_links" ADD CONSTRAINT "social_links_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "agency_user_email_uq" ON "agency_users" USING btree ("email");--> statement-breakpoint
CREATE INDEX "agency_user_client_idx" ON "agency_users" USING btree ("client_id");--> statement-breakpoint
CREATE INDEX "analytics_client_idx" ON "analytics_events" USING btree ("client_id");--> statement-breakpoint
CREATE INDEX "analytics_created_idx" ON "analytics_events" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "audit_user_idx" ON "audit_logs" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "audit_client_idx" ON "audit_logs" USING btree ("client_id");--> statement-breakpoint
CREATE INDEX "audit_created_idx" ON "audit_logs" USING btree ("created_at");--> statement-breakpoint
CREATE UNIQUE INDEX "client_slug_uq" ON "clients" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "client_status_idx" ON "clients" USING btree ("status");--> statement-breakpoint
CREATE INDEX "client_published_idx" ON "clients" USING btree ("published");--> statement-breakpoint
CREATE UNIQUE INDEX "domain_hostname_uq" ON "domains" USING btree ("hostname");--> statement-breakpoint
CREATE INDEX "domain_client_idx" ON "domains" USING btree ("client_id");--> statement-breakpoint
CREATE INDEX "faq_client_idx" ON "faqs" USING btree ("client_id");--> statement-breakpoint
CREATE INDEX "lead_client_idx" ON "leads" USING btree ("client_id");--> statement-breakpoint
CREATE INDEX "lead_status_idx" ON "leads" USING btree ("status");--> statement-breakpoint
CREATE INDEX "lead_created_idx" ON "leads" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "project_image_project_idx" ON "project_images" USING btree ("project_id");--> statement-breakpoint
CREATE UNIQUE INDEX "project_client_slug_uq" ON "projects" USING btree ("client_id","slug");--> statement-breakpoint
CREATE INDEX "project_client_idx" ON "projects" USING btree ("client_id");--> statement-breakpoint
CREATE INDEX "service_area_client_idx" ON "service_areas" USING btree ("client_id");--> statement-breakpoint
CREATE UNIQUE INDEX "service_client_slug_uq" ON "services" USING btree ("client_id","slug");--> statement-breakpoint
CREATE INDEX "service_client_idx" ON "services" USING btree ("client_id");--> statement-breakpoint
CREATE UNIQUE INDEX "session_token_uq" ON "sessions" USING btree ("token_hash");--> statement-breakpoint
CREATE INDEX "session_user_idx" ON "sessions" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "social_link_client_idx" ON "social_links" USING btree ("client_id");--> statement-breakpoint
CREATE INDEX "testimonial_client_idx" ON "testimonials" USING btree ("client_id");
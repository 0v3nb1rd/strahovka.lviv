-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TYPE "public"."LeadStatus" AS ENUM('new', 'delivered', 'failed');--> statement-breakpoint
CREATE TYPE "public"."LeadType" AS ENUM('service', 'contacts', 'subscribe');--> statement-breakpoint
CREATE TABLE "Service" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"title_ua" text,
	"short_text" text,
	"full_text" text,
	"icon_url" text,
	"thumbnail_url" text,
	"image_url" text,
	"slug" text NOT NULL,
	"services_category_id" integer NOT NULL,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE "Service_category" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"title_ua" text,
	"category" text,
	"category_ua" text,
	"short_text" text,
	"full_text" text,
	"slug" text NOT NULL,
	"icon_url" text,
	"thumbnail_url" text,
	"image_url" text,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE "Post" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"title_ua" text,
	"category" text,
	"category_ua" text,
	"short_text" text,
	"full_text" text,
	"icon_url" text,
	"thumbnail_url" text,
	"image_url" text,
	"slug" text NOT NULL,
	"like_count" integer NOT NULL,
	"views" integer NOT NULL,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP,
	"author_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "User" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"name" text,
	"password" text NOT NULL,
	"role" text
);
--> statement-breakpoint
CREATE TABLE "Lead" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" "LeadType" NOT NULL,
	"payload" jsonb NOT NULL,
	"source" text,
	"env" text NOT NULL,
	"status" "LeadStatus" DEFAULT 'new' NOT NULL,
	"telegramDeliveredAt" timestamp(3),
	"emailDeliveredAt" timestamp(3),
	"attempts" integer DEFAULT 0 NOT NULL,
	"lastError" text,
	"idempotencyKey" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "Service" ADD CONSTRAINT "Service_services_category_id_fkey" FOREIGN KEY ("services_category_id") REFERENCES "public"."Service_category"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "Post" ADD CONSTRAINT "Post_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "public"."User"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
CREATE UNIQUE INDEX "Service_slug_key" ON "Service" USING btree ("slug" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "Service_category_slug_key" ON "Service_category" USING btree ("slug" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "Post_slug_key" ON "Post" USING btree ("slug" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "User_email_key" ON "User" USING btree ("email" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "Lead_idempotencyKey_key" ON "Lead" USING btree ("idempotencyKey" text_ops);--> statement-breakpoint
CREATE INDEX "Lead_status_createdAt_idx" ON "Lead" USING btree ("status" timestamp_ops,"createdAt" timestamp_ops);
*/
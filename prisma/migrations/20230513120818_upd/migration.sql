-- CreateTable
CREATE TABLE "Service_category" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "title_ua" TEXT,
    "category" TEXT,
    "category_ua" TEXT,
    "short_text" TEXT,
    "full_text" TEXT,
    "slug" TEXT NOT NULL,
    "icon_url" TEXT,
    "thumbnail_url" TEXT,
    "image_url" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Service_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "title_ua" TEXT,
    "short_text" TEXT,
    "full_text" TEXT,
    "icon_url" TEXT,
    "thumbnail_url" TEXT,
    "image_url" TEXT,
    "slug" TEXT NOT NULL,
    "services_category_id" INTEGER NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "title_ua" TEXT,
    "category" TEXT,
    "category_ua" TEXT,
    "short_text" TEXT,
    "full_text" TEXT,
    "icon_url" TEXT,
    "thumbnail_url" TEXT,
    "image_url" TEXT,
    "slug" TEXT NOT NULL,
    "like_count" INTEGER NOT NULL,
    "views" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Service_category_slug_key" ON "Service_category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Service_slug_key" ON "Service"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "News_slug_key" ON "News"("slug");

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_services_category_id_fkey" FOREIGN KEY ("services_category_id") REFERENCES "Service_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

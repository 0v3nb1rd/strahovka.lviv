-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT,
    "category_en" TEXT,
    "short_text" TEXT,
    "full_text" TEXT,
    "slug" TEXT NOT NULL,
    "thumbnail_url" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "date" TIMESTAMP(3),

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Service_slug_key" ON "Service"("slug");

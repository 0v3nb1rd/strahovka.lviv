-- CreateEnum
CREATE TYPE "LeadType" AS ENUM ('service', 'contacts', 'subscribe');

-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('new', 'delivered', 'failed');

-- CreateTable
CREATE TABLE "Lead" (
    "id" SERIAL NOT NULL,
    "type" "LeadType" NOT NULL,
    "payload" JSONB NOT NULL,
    "source" TEXT,
    "env" TEXT NOT NULL,
    "status" "LeadStatus" NOT NULL DEFAULT 'new',
    "telegramDeliveredAt" TIMESTAMP(3),
    "emailDeliveredAt" TIMESTAMP(3),
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "lastError" TEXT,
    "idempotencyKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lead_idempotencyKey_key" ON "Lead"("idempotencyKey");

-- CreateIndex
CREATE INDEX "Lead_status_createdAt_idx" ON "Lead"("status", "createdAt");

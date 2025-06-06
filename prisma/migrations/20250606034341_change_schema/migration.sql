-- DropIndex
DROP INDEX "Assessment_userId_category_idx";

-- AlterTable
ALTER TABLE "CoverLetter" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'draft';

-- AlterTable
ALTER TABLE "Resume" ADD COLUMN     "atsScore" DOUBLE PRECISION,
ADD COLUMN     "feedback" TEXT;

-- CreateIndex
CREATE INDEX "Assessment_userId_idx" ON "Assessment"("userId");

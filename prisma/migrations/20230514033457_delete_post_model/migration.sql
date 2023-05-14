/*
  Warnings:

  - You are about to alter the column `title` on the `Comment` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "title" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "content" DROP NOT NULL;

-- DropTable
DROP TABLE "Post";

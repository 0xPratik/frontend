/*
  Warnings:

  - You are about to drop the column `discount` on the `TokenGated` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `TokenGated` table. All the data in the column will be lost.
  - You are about to drop the column `uses` on the `TokenGated` table. All the data in the column will be lost.
  - Added the required column `amount` to the `TokenGated` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mint` to the `TokenGated` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TokenGated" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mint" TEXT NOT NULL,
    "amount" INTEGER NOT NULL
);
INSERT INTO "new_TokenGated" ("id") SELECT "id" FROM "TokenGated";
DROP TABLE "TokenGated";
ALTER TABLE "new_TokenGated" RENAME TO "TokenGated";
CREATE UNIQUE INDEX "TokenGated_mint_key" ON "TokenGated"("mint");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

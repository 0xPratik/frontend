/*
  Warnings:

  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "image" TEXT NOT NULL,
    "totalInventory" INTEGER NOT NULL DEFAULT 0,
    "orderId" INTEGER,
    "categoryId" INTEGER
);
INSERT INTO "new_Product" ("categoryId", "desc", "id", "image", "orderId", "price", "title", "totalInventory") SELECT "categoryId", "desc", "id", "image", "orderId", "price", "title", "totalInventory" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");
CREATE INDEX "Product_orderId_idx" ON "Product"("orderId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

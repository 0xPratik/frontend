/*
  Warnings:

  - You are about to drop the `Emails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Emails";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Email" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Email_email_key" ON "Email"("email");

/*
  Warnings:

  - You are about to drop the `Email` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Email";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "EmailList" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "EmailList_email_key" ON "EmailList"("email");

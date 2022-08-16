-- CreateTable
CREATE TABLE "Emails" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Emails_email_key" ON "Emails"("email");

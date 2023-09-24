/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Players` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `accountStatus` ON `Players`;

-- DropIndex
DROP INDEX `accountType` ON `Players`;

-- DropIndex
DROP INDEX `saveData` ON `Players`;

-- CreateIndex
CREATE UNIQUE INDEX `unique_email` ON `Players`(`email`);

-- RenameIndex
ALTER TABLE `Players` RENAME INDEX `player_username` TO `unique_username`;

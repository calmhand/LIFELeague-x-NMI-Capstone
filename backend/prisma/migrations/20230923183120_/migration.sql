-- DropForeignKey
ALTER TABLE `Players` DROP FOREIGN KEY `accountStatus`;

-- DropForeignKey
ALTER TABLE `Players` DROP FOREIGN KEY `accountType`;

-- DropForeignKey
ALTER TABLE `Players` DROP FOREIGN KEY `saveData`;

-- AlterTable
ALTER TABLE `Players` MODIFY `saveData` INTEGER UNSIGNED NULL;

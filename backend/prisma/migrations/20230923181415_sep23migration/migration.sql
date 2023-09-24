/*
  Warnings:

  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Player` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Admin`;

-- DropTable
DROP TABLE `Player`;

-- CreateTable
CREATE TABLE `AccessKeys` (
    `keyId` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `accessKeys` CHAR(6) NOT NULL,
    `description` TEXT NULL,

    PRIMARY KEY (`keyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AccountStatus` (
    `statusId` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `status` CHAR(255) NOT NULL,

    PRIMARY KEY (`statusId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AccountType` (
    `accountTypeId` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `accountType` CHAR(255) NOT NULL,

    PRIMARY KEY (`accountTypeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admins` (
    `adminId` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `username` CHAR(255) NOT NULL,
    `password` CHAR(255) NOT NULL,
    `role` CHAR(255) NOT NULL,

    UNIQUE INDEX `admin_username`(`username`),
    PRIMARY KEY (`adminId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Players` (
    `playerId` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `username` CHAR(16) NOT NULL,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `password` CHAR(255) NOT NULL,
    `email` CHAR(255) NOT NULL,
    `saveData` INTEGER UNSIGNED NOT NULL,
    `statusId` INTEGER UNSIGNED NOT NULL,
    `accountTypeId` INTEGER UNSIGNED NOT NULL,

    UNIQUE INDEX `player_username`(`username`),
    INDEX `accountStatus`(`statusId`),
    INDEX `accountType`(`accountTypeId`),
    INDEX `saveData`(`saveData`),
    PRIMARY KEY (`playerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Saves` (
    `saveId` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `gameData` JSON NULL,
    `playerData` JSON NULL,
    `playerId` INTEGER UNSIGNED NOT NULL,

    INDEX `playerId`(`playerId`),
    PRIMARY KEY (`saveId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Players` ADD CONSTRAINT `accountStatus` FOREIGN KEY (`statusId`) REFERENCES `AccountStatus`(`statusId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Players` ADD CONSTRAINT `accountType` FOREIGN KEY (`accountTypeId`) REFERENCES `AccountType`(`accountTypeId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Players` ADD CONSTRAINT `saveData` FOREIGN KEY (`saveData`) REFERENCES `Saves`(`saveId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Saves` ADD CONSTRAINT `playerId` FOREIGN KEY (`playerId`) REFERENCES `Players`(`playerId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- CreateTable
CREATE TABLE `Admin` (
    `adminID` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `username` CHAR(255) NOT NULL,
    `password` CHAR(255) NOT NULL,

    UNIQUE INDEX `admin_username`(`username`),
    PRIMARY KEY (`adminID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Player` (
    `playerID` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `username` CHAR(255) NOT NULL,
    `password` CHAR(255) NOT NULL,

    PRIMARY KEY (`playerID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

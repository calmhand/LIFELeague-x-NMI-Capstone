/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Player` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `role` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Made the column `username` on table `Admin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `Admin` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `role` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Made the column `username` on table `Player` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `Player` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Admin` ADD COLUMN `role` CHAR(255) NOT NULL,
    MODIFY `username` CHAR(255) NOT NULL,
    MODIFY `password` CHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `Player` ADD COLUMN `role` CHAR(255) NOT NULL,
    MODIFY `username` CHAR(255) NOT NULL,
    MODIFY `password` CHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `player_username` ON `Player`(`username`);

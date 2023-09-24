/*
  Warnings:

  - You are about to drop the column `accessKeys` on the `AccessKeys` table. All the data in the column will be lost.
  - Added the required column `accessKey` to the `AccessKeys` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `AccessKeys` DROP COLUMN `accessKeys`,
    ADD COLUMN `accessKey` CHAR(6) NOT NULL;

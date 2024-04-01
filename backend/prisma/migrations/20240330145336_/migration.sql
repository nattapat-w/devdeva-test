/*
  Warnings:

  - You are about to drop the column `Birthdate` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Image` on the `User` table. All the data in the column will be lost.
  - Added the required column `birthdate` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `Birthdate`,
    DROP COLUMN `Image`,
    ADD COLUMN `birthdate` DATETIME(3) NOT NULL,
    ADD COLUMN `image` VARCHAR(191) NOT NULL;

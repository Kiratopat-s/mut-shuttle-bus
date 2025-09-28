/*
  Warnings:

  - The `status` column on the `vehicle_route_schedules` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "public"."RouteStatus" AS ENUM ('UPCOMING', 'CANCELLED', 'COMPLETED');

-- AlterTable
ALTER TABLE "public"."vehicle_route_schedules" DROP COLUMN "status",
ADD COLUMN     "status" "public"."RouteStatus" NOT NULL DEFAULT 'UPCOMING';

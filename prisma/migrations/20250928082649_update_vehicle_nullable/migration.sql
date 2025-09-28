-- DropForeignKey
ALTER TABLE "public"."vehicles" DROP CONSTRAINT "vehicles_current_stop_id_fkey";

-- AlterTable
ALTER TABLE "public"."vehicles" ALTER COLUMN "current_stop_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."vehicles" ADD CONSTRAINT "vehicles_current_stop_id_fkey" FOREIGN KEY ("current_stop_id") REFERENCES "public"."bus_stops"("bus_stop_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- DropForeignKey
ALTER TABLE "public"."employees" DROP CONSTRAINT "employees_department_id_fkey";

-- AlterTable
ALTER TABLE "public"."employees" ALTER COLUMN "department_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."employees" ADD CONSTRAINT "employees_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "public"."departments"("department_id") ON DELETE SET NULL ON UPDATE CASCADE;

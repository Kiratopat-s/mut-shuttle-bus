-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_employee_id_fkey";

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "employee_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "public"."employees"("employee_id") ON DELETE SET NULL ON UPDATE CASCADE;

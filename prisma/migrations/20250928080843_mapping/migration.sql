/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `employeeId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Booking` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BusStop` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Permission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RolePermission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Route` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RouteBusStop` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vehicle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VehicleRouteSchedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VehicleType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `employee_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Booking" DROP CONSTRAINT "Booking_destinationStopId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Booking" DROP CONSTRAINT "Booking_originStopId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Booking" DROP CONSTRAINT "Booking_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Booking" DROP CONSTRAINT "Booking_vehicleRouteScheduleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Employee" DROP CONSTRAINT "Employee_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."RolePermission" DROP CONSTRAINT "RolePermission_permissionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."RolePermission" DROP CONSTRAINT "RolePermission_roleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."RouteBusStop" DROP CONSTRAINT "RouteBusStop_busStopId_fkey";

-- DropForeignKey
ALTER TABLE "public"."RouteBusStop" DROP CONSTRAINT "RouteBusStop_nextStopId_fkey";

-- DropForeignKey
ALTER TABLE "public"."RouteBusStop" DROP CONSTRAINT "RouteBusStop_routeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_roleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Vehicle" DROP CONSTRAINT "Vehicle_currentStopId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Vehicle" DROP CONSTRAINT "Vehicle_vehicleTypeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."VehicleRouteSchedule" DROP CONSTRAINT "VehicleRouteSchedule_driverId_fkey";

-- DropForeignKey
ALTER TABLE "public"."VehicleRouteSchedule" DROP CONSTRAINT "VehicleRouteSchedule_routeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."VehicleRouteSchedule" DROP CONSTRAINT "VehicleRouteSchedule_vehicleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_RouteToVehicle" DROP CONSTRAINT "_RouteToVehicle_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_RouteToVehicle" DROP CONSTRAINT "_RouteToVehicle_B_fkey";

-- AlterTable
ALTER TABLE "public"."User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "employeeId",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "roleId",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "employee_id" INTEGER NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "role_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");

-- DropTable
DROP TABLE "public"."Booking";

-- DropTable
DROP TABLE "public"."BusStop";

-- DropTable
DROP TABLE "public"."Department";

-- DropTable
DROP TABLE "public"."Employee";

-- DropTable
DROP TABLE "public"."Permission";

-- DropTable
DROP TABLE "public"."Role";

-- DropTable
DROP TABLE "public"."RolePermission";

-- DropTable
DROP TABLE "public"."Route";

-- DropTable
DROP TABLE "public"."RouteBusStop";

-- DropTable
DROP TABLE "public"."Vehicle";

-- DropTable
DROP TABLE "public"."VehicleRouteSchedule";

-- DropTable
DROP TABLE "public"."VehicleType";

-- CreateTable
CREATE TABLE "public"."roles" (
    "role_id" SERIAL NOT NULL,
    "role_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "public"."permissions" (
    "permission_id" SERIAL NOT NULL,
    "permission_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("permission_id")
);

-- CreateTable
CREATE TABLE "public"."role_permissions" (
    "role_id" INTEGER NOT NULL,
    "permission_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "role_permissions_pkey" PRIMARY KEY ("role_id","permission_id")
);

-- CreateTable
CREATE TABLE "public"."departments" (
    "department_id" SERIAL NOT NULL,
    "department_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("department_id")
);

-- CreateTable
CREATE TABLE "public"."employees" (
    "employee_id" SERIAL NOT NULL,
    "department_id" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("employee_id")
);

-- CreateTable
CREATE TABLE "public"."bus_stops" (
    "bus_stop_id" SERIAL NOT NULL,
    "stop_name" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bus_stops_pkey" PRIMARY KEY ("bus_stop_id")
);

-- CreateTable
CREATE TABLE "public"."routes" (
    "route_id" SERIAL NOT NULL,
    "route_name" TEXT NOT NULL,
    "overall_travel_time" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "routes_pkey" PRIMARY KEY ("route_id")
);

-- CreateTable
CREATE TABLE "public"."vehicle_types" (
    "vehicle_type_id" SERIAL NOT NULL,
    "vehicle_type_name" TEXT NOT NULL,
    "default_capacity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vehicle_types_pkey" PRIMARY KEY ("vehicle_type_id")
);

-- CreateTable
CREATE TABLE "public"."route_bus_stops" (
    "route_id" INTEGER NOT NULL,
    "bus_stop_id" INTEGER NOT NULL,
    "next_stop_id" INTEGER NOT NULL,
    "stop_order" INTEGER NOT NULL,
    "travel_time" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "route_bus_stops_pkey" PRIMARY KEY ("route_id","bus_stop_id")
);

-- CreateTable
CREATE TABLE "public"."vehicles" (
    "vehicle_id" SERIAL NOT NULL,
    "vehicle_type_id" INTEGER NOT NULL,
    "current_stop_id" INTEGER NOT NULL,
    "license_plate" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "status" "public"."VehicleStatus" NOT NULL DEFAULT 'INACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("vehicle_id")
);

-- CreateTable
CREATE TABLE "public"."vehicle_route_schedules" (
    "vehicle_route_schedule_id" SERIAL NOT NULL,
    "vehicle_id" INTEGER NOT NULL,
    "route_id" INTEGER NOT NULL,
    "driver_id" INTEGER NOT NULL,
    "schedule_time" TIMESTAMP(3) NOT NULL,
    "status" "public"."VehicleStatus" NOT NULL DEFAULT 'INACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vehicle_route_schedules_pkey" PRIMARY KEY ("vehicle_route_schedule_id")
);

-- CreateTable
CREATE TABLE "public"."bookings" (
    "booking_id" SERIAL NOT NULL,
    "origin_stop_id" INTEGER NOT NULL,
    "destination_stop_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "vehicle_route_schedule_id" INTEGER NOT NULL,
    "status" "public"."BookingStatus" NOT NULL DEFAULT 'BOOKED',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("booking_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_role_name_key" ON "public"."roles"("role_name");

-- CreateIndex
CREATE UNIQUE INDEX "permissions_permission_name_key" ON "public"."permissions"("permission_name");

-- CreateIndex
CREATE UNIQUE INDEX "departments_department_name_key" ON "public"."departments"("department_name");

-- CreateIndex
CREATE UNIQUE INDEX "routes_route_name_key" ON "public"."routes"("route_name");

-- CreateIndex
CREATE UNIQUE INDEX "vehicle_types_vehicle_type_name_key" ON "public"."vehicle_types"("vehicle_type_name");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_license_plate_key" ON "public"."vehicles"("license_plate");

-- AddForeignKey
ALTER TABLE "public"."role_permissions" ADD CONSTRAINT "role_permissions_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "public"."permissions"("permission_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."role_permissions" ADD CONSTRAINT "role_permissions_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."employees" ADD CONSTRAINT "employees_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "public"."departments"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."route_bus_stops" ADD CONSTRAINT "route_bus_stops_bus_stop_id_fkey" FOREIGN KEY ("bus_stop_id") REFERENCES "public"."bus_stops"("bus_stop_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."route_bus_stops" ADD CONSTRAINT "route_bus_stops_next_stop_id_fkey" FOREIGN KEY ("next_stop_id") REFERENCES "public"."routes"("route_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."route_bus_stops" ADD CONSTRAINT "route_bus_stops_route_id_fkey" FOREIGN KEY ("route_id") REFERENCES "public"."routes"("route_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."vehicles" ADD CONSTRAINT "vehicles_current_stop_id_fkey" FOREIGN KEY ("current_stop_id") REFERENCES "public"."bus_stops"("bus_stop_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."vehicles" ADD CONSTRAINT "vehicles_vehicle_type_id_fkey" FOREIGN KEY ("vehicle_type_id") REFERENCES "public"."vehicle_types"("vehicle_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."vehicle_route_schedules" ADD CONSTRAINT "vehicle_route_schedules_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "public"."User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."vehicle_route_schedules" ADD CONSTRAINT "vehicle_route_schedules_route_id_fkey" FOREIGN KEY ("route_id") REFERENCES "public"."routes"("route_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."vehicle_route_schedules" ADD CONSTRAINT "vehicle_route_schedules_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "public"."vehicles"("vehicle_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "public"."employees"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."bookings" ADD CONSTRAINT "bookings_destination_stop_id_fkey" FOREIGN KEY ("destination_stop_id") REFERENCES "public"."bus_stops"("bus_stop_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."bookings" ADD CONSTRAINT "bookings_origin_stop_id_fkey" FOREIGN KEY ("origin_stop_id") REFERENCES "public"."bus_stops"("bus_stop_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."bookings" ADD CONSTRAINT "bookings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."bookings" ADD CONSTRAINT "bookings_vehicle_route_schedule_id_fkey" FOREIGN KEY ("vehicle_route_schedule_id") REFERENCES "public"."vehicle_route_schedules"("vehicle_route_schedule_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_RouteToVehicle" ADD CONSTRAINT "_RouteToVehicle_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."routes"("route_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_RouteToVehicle" ADD CONSTRAINT "_RouteToVehicle_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."vehicles"("vehicle_id") ON DELETE CASCADE ON UPDATE CASCADE;

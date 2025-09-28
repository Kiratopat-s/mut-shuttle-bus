-- CreateEnum
CREATE TYPE "public"."VehicleStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'MAINTENANCE');

-- CreateEnum
CREATE TYPE "public"."BookingStatus" AS ENUM ('BOOKED', 'CANCELLED', 'MISSED', 'COMPLETED');

-- CreateTable
CREATE TABLE "public"."Role" (
    "roleId" SERIAL NOT NULL,
    "roleName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("roleId")
);

-- CreateTable
CREATE TABLE "public"."Permission" (
    "permissionId" SERIAL NOT NULL,
    "permissionName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("permissionId")
);

-- CreateTable
CREATE TABLE "public"."RolePermission" (
    "roleId" INTEGER NOT NULL,
    "permissionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RolePermission_pkey" PRIMARY KEY ("roleId","permissionId")
);

-- CreateTable
CREATE TABLE "public"."Department" (
    "departmentId" SERIAL NOT NULL,
    "departmentName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("departmentId")
);

-- CreateTable
CREATE TABLE "public"."Employee" (
    "employeeId" SERIAL NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "position" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("employeeId")
);

-- CreateTable
CREATE TABLE "public"."BusStop" (
    "busStopId" SERIAL NOT NULL,
    "stopName" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BusStop_pkey" PRIMARY KEY ("busStopId")
);

-- CreateTable
CREATE TABLE "public"."Route" (
    "routeId" SERIAL NOT NULL,
    "routeName" TEXT NOT NULL,
    "overallTravelTime" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Route_pkey" PRIMARY KEY ("routeId")
);

-- CreateTable
CREATE TABLE "public"."VehicleType" (
    "VehicleTypeId" SERIAL NOT NULL,
    "VehicleTypeName" TEXT NOT NULL,
    "defaultCapacity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VehicleType_pkey" PRIMARY KEY ("VehicleTypeId")
);

-- CreateTable
CREATE TABLE "public"."RouteBusStop" (
    "routeId" INTEGER NOT NULL,
    "busStopId" INTEGER NOT NULL,
    "nextStopId" INTEGER NOT NULL,
    "stopOrder" INTEGER NOT NULL,
    "travelTime" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RouteBusStop_pkey" PRIMARY KEY ("routeId","busStopId")
);

-- CreateTable
CREATE TABLE "public"."Vehicle" (
    "vehicleId" SERIAL NOT NULL,
    "vehicleTypeId" INTEGER NOT NULL,
    "currentStopId" INTEGER NOT NULL,
    "licensePlate" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "status" "public"."VehicleStatus" NOT NULL DEFAULT 'INACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("vehicleId")
);

-- CreateTable
CREATE TABLE "public"."VehicleRouteSchedule" (
    "vehicleRouteScheduleId" SERIAL NOT NULL,
    "vehicleId" INTEGER NOT NULL,
    "routeId" INTEGER NOT NULL,
    "driverId" INTEGER NOT NULL,
    "scheduleTime" TIMESTAMP(3) NOT NULL,
    "status" "public"."VehicleStatus" NOT NULL DEFAULT 'INACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VehicleRouteSchedule_pkey" PRIMARY KEY ("vehicleRouteScheduleId")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "userId" SERIAL NOT NULL,
    "roleId" INTEGER NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "public"."Booking" (
    "bookingId" SERIAL NOT NULL,
    "originStopId" INTEGER NOT NULL,
    "destinationStopId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "vehicleRouteScheduleId" INTEGER NOT NULL,
    "status" "public"."BookingStatus" NOT NULL DEFAULT 'BOOKED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("bookingId")
);

-- CreateTable
CREATE TABLE "public"."_RouteToVehicle" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_RouteToVehicle_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_roleName_key" ON "public"."Role"("roleName");

-- CreateIndex
CREATE UNIQUE INDEX "Permission_permissionName_key" ON "public"."Permission"("permissionName");

-- CreateIndex
CREATE UNIQUE INDEX "Department_departmentName_key" ON "public"."Department"("departmentName");

-- CreateIndex
CREATE UNIQUE INDEX "VehicleType_VehicleTypeName_key" ON "public"."VehicleType"("VehicleTypeName");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_licensePlate_key" ON "public"."Vehicle"("licensePlate");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "_RouteToVehicle_B_index" ON "public"."_RouteToVehicle"("B");

-- AddForeignKey
ALTER TABLE "public"."RolePermission" ADD CONSTRAINT "RolePermission_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."Role"("roleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RolePermission" ADD CONSTRAINT "RolePermission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "public"."Permission"("permissionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Employee" ADD CONSTRAINT "Employee_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "public"."Department"("departmentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RouteBusStop" ADD CONSTRAINT "RouteBusStop_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "public"."Route"("routeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RouteBusStop" ADD CONSTRAINT "RouteBusStop_busStopId_fkey" FOREIGN KEY ("busStopId") REFERENCES "public"."BusStop"("busStopId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RouteBusStop" ADD CONSTRAINT "RouteBusStop_nextStopId_fkey" FOREIGN KEY ("nextStopId") REFERENCES "public"."Route"("routeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Vehicle" ADD CONSTRAINT "Vehicle_vehicleTypeId_fkey" FOREIGN KEY ("vehicleTypeId") REFERENCES "public"."VehicleType"("VehicleTypeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Vehicle" ADD CONSTRAINT "Vehicle_currentStopId_fkey" FOREIGN KEY ("currentStopId") REFERENCES "public"."BusStop"("busStopId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VehicleRouteSchedule" ADD CONSTRAINT "VehicleRouteSchedule_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "public"."Vehicle"("vehicleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VehicleRouteSchedule" ADD CONSTRAINT "VehicleRouteSchedule_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "public"."Route"("routeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VehicleRouteSchedule" ADD CONSTRAINT "VehicleRouteSchedule_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "public"."User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."Role"("roleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."Employee"("employeeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_originStopId_fkey" FOREIGN KEY ("originStopId") REFERENCES "public"."BusStop"("busStopId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_destinationStopId_fkey" FOREIGN KEY ("destinationStopId") REFERENCES "public"."BusStop"("busStopId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_vehicleRouteScheduleId_fkey" FOREIGN KEY ("vehicleRouteScheduleId") REFERENCES "public"."VehicleRouteSchedule"("vehicleRouteScheduleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_RouteToVehicle" ADD CONSTRAINT "_RouteToVehicle_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Route"("routeId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_RouteToVehicle" ADD CONSTRAINT "_RouteToVehicle_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Vehicle"("vehicleId") ON DELETE CASCADE ON UPDATE CASCADE;

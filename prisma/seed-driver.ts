// prisma/seed-driver.ts
// prisma/seed-driver-data.ts
import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function seedDriverData() {
  try {
    console.log('🚌 Seeding driver data...');

    // Create Vehicle Types
    const busType = await prisma.vehicleType.upsert({
      where: { VehicleTypeName: 'รถบัสขนาดกลาง' },
      update: {},
      create: {
        VehicleTypeName: 'รถบัสขนาดกลาง',
        defaultCapacity: 30,
      },
    });

    const vanType = await prisma.vehicleType.upsert({
      where: { VehicleTypeName: 'รถตู้' },
      update: {},
      create: {
        VehicleTypeName: 'รถตู้',
        defaultCapacity: 15,
      },
    });

    // Create Bus Stops ตามเอกสาร
    const busStops = [];
    
    // มหาวิทยาลัยเทคโนโลยีมหานคร
    let busStop1 = await prisma.busStop.findFirst({
      where: { stopName: "มหาวิทยาลัยเทคโนโลยีมหานคร" }
    });
    if (!busStop1) {
      busStop1 = await prisma.busStop.create({
        data: {
          stopName: "มหาวิทยาลัยเทคโนโลยีมหานคร",
          lat: 13.7563,
          lng: 100.5018,
        },
      });
    }
    busStops.push(busStop1);

    // โลตัสนนทบุรี
    let busStop2 = await prisma.busStop.findFirst({
      where: { stopName: "โลตัสนนทบุรี" }
    });
    if (!busStop2) {
      busStop2 = await prisma.busStop.create({
        data: {
          stopName: "โลตัสนนทบุรี",
          lat: 13.765,
          lng: 100.538,
        },
      });
    }
    busStops.push(busStop2);

    // โรงพยาบาลนนทบุรี
    let busStop3 = await prisma.busStop.findFirst({
      where: { stopName: "โรงพยาบาลนนทบุรี" }
    });
    if (!busStop3) {
      busStop3 = await prisma.busStop.create({
        data: {
          stopName: "โรงพยาบาลนนทบุรี",
          lat: 13.75,
          lng: 100.49,
        },
      });
    }
    busStops.push(busStop3);

    // Big C นนทบุรี
    let busStop4 = await prisma.busStop.findFirst({
      where: { stopName: "Big C นนทบุรี" }
    });
    if (!busStop4) {
      busStop4 = await prisma.busStop.create({
        data: {
          stopName: "Big C นนทบุรี",
          lat: 13.74,
          lng: 100.52,
        },
      });
    }
    busStops.push(busStop4);

    // สวนสาธารณ์นนทบุรี
    let busStop5 = await prisma.busStop.findFirst({
      where: { stopName: "สวนสาธารณหนองจอก" }
    });
    if (!busStop5) {
      busStop5 = await prisma.busStop.create({
        data: {
          stopName: "สวนสาธารณหนองจอก",
          lat: 13.73,
          lng: 100.51,
        },
      });
    }
    busStops.push(busStop5);

    // ร้านสินค้าโบ้เบ้
    let busStop6 = await prisma.busStop.findFirst({
      where: { stopName: "ร้านส้มตำป้านาง" }
    });
    if (!busStop6) {
      busStop6 = await prisma.busStop.create({
        data: {
          stopName: "ร้านส้มตำป้านาง",
          lat: 13.72,
          lng: 100.50,
        },
      });
    }
    busStops.push(busStop6);

    // Create Routes ตามเอกสาร
    const routes = await Promise.all([
      // เส้นทางที่ 1 - รวม 30 นาที
      prisma.route.upsert({
        where: { routeName: 'เส้นทางที่ 1' },
        update: {},
        create: {
          routeName: 'เส้นทางที่ 1',
          overallTravelTime: 30,
        },
      }),
      // เส้นทางที่ 2 - รวม 13 นาที
      prisma.route.upsert({
        where: { routeName: 'เส้นทางที่ 2' },
        update: {},
        create: {
          routeName: 'เส้นทางที่ 2',
          overallTravelTime: 13,
        },
      }),
      // เส้นทางที่ 3 - รวม 12 นาที
      prisma.route.upsert({
        where: { routeName: 'เส้นทางที่ 3' },
        update: {},
        create: {
          routeName: 'เส้นทางที่ 3',
          overallTravelTime: 12,
        },
      }),
    ]);

    // Create Route Bus Stops ตามเอกสาร
    // ลบข้อมูลเก่าก่อน
    await prisma.routeBusStop.deleteMany({
      where: {
        routeId: {
          in: routes.map(r => r.routeId)
        }
      }
    });

    // เส้นทางที่ 1 (7 จุด)
    const route1Stops = [
      { stopIndex: 0, travelTime: 0, stopOrder: 1, nextStopIndex: 1 }, // มหาวิทยาลัยเทคโนโลยีมหานคร -> โลตัส
      { stopIndex: 1, travelTime: 5, stopOrder: 2, nextStopIndex: 2 }, // โลตัสนนทบุรี -> โรงพยาบาล
      { stopIndex: 2, travelTime: 3, stopOrder: 3, nextStopIndex: 3 }, // โรงพยาบาลนนทบุรี -> Big C
      { stopIndex: 3, travelTime: 6, stopOrder: 4, nextStopIndex: 2 }, // Big C นนทบุรี -> โรงพยาบาล
      { stopIndex: 2, travelTime: 3, stopOrder: 5, nextStopIndex: 1 }, // โรงพยาบาลนนทบุรี -> โลตัส
      { stopIndex: 1, travelTime: 3, stopOrder: 6, nextStopIndex: 0 }, // โลตัสนนทบุรี -> มหาวิทยาลัย
      { stopIndex: 0, travelTime: 10, stopOrder: 7, nextStopIndex: 0 }, // มหาวิทยาลัยเทคโนโลยีมหานคร -> จบ
    ];

    for (const stop of route1Stops) {
      await prisma.routeBusStop.create({
        data: {
          routeId: routes[0].routeId,
          busStopId: busStops[stop.stopIndex].busStopId,
          nextStopId: busStops[stop.nextStopIndex].busStopId,
          stopOrder: stop.stopOrder,
          travelTime: stop.travelTime,
        },
      });
    }

    // เส้นทางที่ 2 (4 จุด)
    const route2Stops = [
      { stopIndex: 0, travelTime: 0, stopOrder: 1, nextStopIndex: 1 }, // มหาวิทยาลัยเทคโนโลยีมหานคร -> โลตัส
      { stopIndex: 1, travelTime: 5, stopOrder: 2, nextStopIndex: 4 }, // โลตัสนนทบุรี -> สวนสาธารณ์
      { stopIndex: 4, travelTime: 3, stopOrder: 3, nextStopIndex: 5 }, // สวนสาธารณ์นนทบุรี -> ร้านสินค้า
      { stopIndex: 5, travelTime: 5, stopOrder: 4, nextStopIndex: 0 }, // ร้านสินค้าโบ้เบ้ -> มหาวิทยาลัย
    ];

    for (const stop of route2Stops) {
      await prisma.routeBusStop.create({
        data: {
          routeId: routes[1].routeId,
          busStopId: busStops[stop.stopIndex].busStopId,
          nextStopId: busStops[stop.nextStopIndex].busStopId,
          stopOrder: stop.stopOrder,
          travelTime: stop.travelTime,
        },
      });
    }

    // เส้นทางที่ 3 (5 จุด)
    const route3Stops = [
      { stopIndex: 3, travelTime: 0, stopOrder: 1, nextStopIndex: 1 }, // Big C นนทบุรี -> โลตัส
      { stopIndex: 1, travelTime: 5, stopOrder: 2, nextStopIndex: 4 }, // โลตัสนนทบุรี -> สวนสาธารณ์
      { stopIndex: 4, travelTime: 3, stopOrder: 3, nextStopIndex: 5 }, // สวนสาธารณ์นนทบุรี -> ร้านสินค้า
      { stopIndex: 5, travelTime: 5, stopOrder: 4, nextStopIndex: 0 }, // ร้านสินค้าโบ้เบ้ -> มหาวิทยาลัย
      { stopIndex: 0, travelTime: 2, stopOrder: 5, nextStopIndex: 3 }, // มหาวิทยาลัยเทคโนโลยีมหานคร -> Big C
    ];

    for (const stop of route3Stops) {
      await prisma.routeBusStop.create({
        data: {
          routeId: routes[2].routeId,
          busStopId: busStops[stop.stopIndex].busStopId,
          nextStopId: busStops[stop.nextStopIndex].busStopId,
          stopOrder: stop.stopOrder,
          travelTime: stop.travelTime,
        },
      });
    }

    // Create Vehicles
    const vehicles = await Promise.all([
      prisma.vehicle.upsert({
        where: { licensePlate: "กข-1234" },
        update: {},
        create: {
          licensePlate: "กข-1234",
          vehicleTypeId: busType.VehicleTypeId,
          capacity: 30,
          status: "ACTIVE",
          currentStopId: busStops[0].busStopId,
        },
      }),
      prisma.vehicle.upsert({
        where: { licensePlate: "กข-5678" },
        update: {},
        create: {
          licensePlate: "กข-5678",
          vehicleTypeId: busType.VehicleTypeId,
          capacity: 30,
          status: "ACTIVE",
          currentStopId: busStops[1].busStopId,
        },
      }),
      prisma.vehicle.upsert({
        where: { licensePlate: "กข-9012" },
        update: {},
        create: {
          licensePlate: "กข-9012",
          vehicleTypeId: vanType.VehicleTypeId,
          capacity: 15,
          status: "ACTIVE",
          currentStopId: busStops[2].busStopId,
        },
      }),
    ]);

    // Get existing driver user
    const driverUser = await prisma.user.findFirst({
      where: { 
        role: {
          roleName: 'driver'
        }
      },
      include: {
        role: true
      }
    });

    if (!driverUser) {
      throw new Error('Driver user not found. Please run main seed first to create driver user.');
    }

    console.log(`📧 Using existing driver: ${driverUser.firstName} ${driverUser.lastName} (${driverUser.email})`);

    // Create Vehicle Route Schedules for today and tomorrow
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const schedules = [];

    // Today's schedules
    schedules.push(
      // Morning เส้นทางที่ 1
      await prisma.vehicleRouteSchedule.create({
        data: {
          vehicleId: vehicles[0].vehicleId,
          routeId: routes[0].routeId,
          driverId: driverUser.userId,
          scheduleTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7, 0),
          status: 'UPCOMING',
        },
      }),
      // Morning เส้นทางที่ 2
      await prisma.vehicleRouteSchedule.create({
        data: {
          vehicleId: vehicles[1].vehicleId,
          routeId: routes[1].routeId,
          driverId: driverUser.userId,
          scheduleTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
          status: 'UPCOMING',
        },
      }),
      // Afternoon เส้นทางที่ 3
      await prisma.vehicleRouteSchedule.create({
        data: {
          vehicleId: vehicles[2].vehicleId,
          routeId: routes[2].routeId,
          driverId: driverUser.userId,
          scheduleTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 0),
          status: 'COMPLETED',
        },
      })
    );

    // Tomorrow's schedules
    schedules.push(
      await prisma.vehicleRouteSchedule.create({
        data: {
          vehicleId: vehicles[0].vehicleId,
          routeId: routes[0].routeId,
          driverId: driverUser.userId,
          scheduleTime: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 7, 0),
          status: 'UPCOMING',
        },
      }),
      await prisma.vehicleRouteSchedule.create({
        data: {
          vehicleId: vehicles[1].vehicleId,
          routeId: routes[1].routeId,
          driverId: driverUser.userId,
          scheduleTime: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 16, 0),
          status: 'UPCOMING',
        },
      })
    );

    // Create some sample bookings
    const studentRole = await prisma.role.findUnique({
      where: { roleName: 'student' },
    });

    if (studentRole) {
      const studentUsers = await Promise.all([
        prisma.user.upsert({
          where: { email: 'student1@example.com' },
          update: {},
          create: {
            firstName: 'นักเรียน',
            lastName: 'คนที่ 1',
            email: 'student1@example.com',
            password: '$2b$10$example',
            roleId: studentRole.roleId,
          },
        }),
        prisma.user.upsert({
          where: { email: 'student2@example.com' },
          update: {},
          create: {
            firstName: 'นักเรียน',
            lastName: 'คนที่ 2',
            email: 'student2@example.com',
            password: '$2b$10$example',
            roleId: studentRole.roleId,
          },
        }),
      ]);

      // Create bookings for today's schedules
      await Promise.all([
        prisma.booking.create({
          data: {
            userId: studentUsers[0].userId,
            vehicleRouteScheduleId: schedules[0].vehicleRouteScheduleId,
            originStopId: busStops[0].busStopId, // มหาวิทยาลัย
            destinationStopId: busStops[1].busStopId, // โลตัส
            status: 'BOOKED',
          },
        }),
        prisma.booking.create({
          data: {
            userId: studentUsers[1].userId,
            vehicleRouteScheduleId: schedules[0].vehicleRouteScheduleId,
            originStopId: busStops[0].busStopId, // มหาวิทยาลัย
            destinationStopId: busStops[3].busStopId, // Big C
            status: 'BOOKED',
          },
        }),
        prisma.booking.create({
          data: {
            userId: studentUsers[0].userId,
            vehicleRouteScheduleId: schedules[1].vehicleRouteScheduleId,
            originStopId: busStops[0].busStopId, // มหาวิทยาลัย
            destinationStopId: busStops[4].busStopId, // สวนสาธารณ์
            status: 'BOOKED',
          },
        }),
      ]);
    }

    console.log('✅ Driver data seeded successfully!');
    console.log(`📧 Driver login: ${driverUser.email}`);
    console.log(`🚌 Created ${vehicles.length} vehicles`);
    console.log(`🛣️ Created ${routes.length} routes:`);
    console.log(`   - เส้นทางที่ 1: 30 นาที (7 จุด)`);
    console.log(`   - เส้นทางที่ 2: 13 นาที (4 จุด)`);
    console.log(`   - เส้นทางที่ 3: 12 นาที (5 จุด)`);
    console.log(`📅 Created ${schedules.length} schedules`);
    console.log(`🚏 Created ${busStops.length} bus stops`);

  } catch (error) {
    console.error('❌ Error seeding driver data:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

seedDriverData();

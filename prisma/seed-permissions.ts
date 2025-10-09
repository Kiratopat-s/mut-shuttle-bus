import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function seedPermissions() {
    console.log("Seeding permissions...");

    const permissions = [
        { permissionName: "manage_users" },
        { permissionName: "manage_bookings" },
        { permissionName: "create_booking" },
        { permissionName: "cancel_booking" },
        { permissionName: "manage_vehicles" },
        { permissionName: "manage_routes" },
        { permissionName: "manage_schedules" },
        { permissionName: "view_reports" },
        { permissionName: "manage_permissions" },
        { permissionName: "drive_vehicle" },
        { permissionName: "update_vehicle_status" },
    ];

    // Create permissions
    for (const perm of permissions) {
        await prisma.permission.upsert({
            where: { permissionName: perm.permissionName },
            update: {},
            create: perm,
        });
        console.log(`✓ Permission: ${perm.permissionName}`);
    }

    // Get all roles
    const admin = await prisma.role.findUnique({ where: { roleName: "admin" } });
    const driver = await prisma.role.findUnique({
        where: { roleName: "driver" },
    });
    const student = await prisma.role.findUnique({
        where: { roleName: "student" },
    });
    const teacher = await prisma.role.findUnique({
        where: { roleName: "teacher" },
    });

    if (!admin || !driver || !student || !teacher) {
        console.error("Required roles not found. Please seed roles first.");
        return;
    }

    // Get all permissions
    const allPermissions = await prisma.permission.findMany();
    const permissionMap = new Map(
        allPermissions.map((p) => [p.permissionName, p.permissionId])
    );

    // Define role permissions
    const rolePermissions = [
        // Admin - all permissions
        {
            roleId: admin.roleId,
            permissions: [
                "manage_users",
                "manage_bookings",
                "create_booking",
                "cancel_booking",
                "manage_vehicles",
                "manage_routes",
                "manage_schedules",
                "view_reports",
                "manage_permissions",
            ],
        },
        // Driver - driving and vehicle related
        {
            roleId: driver.roleId,
            permissions: [
                "drive_vehicle",
                "update_vehicle_status",
                "manage_schedules",
            ],
        },
        // Student - booking only
        {
            roleId: student.roleId,
            permissions: ["create_booking", "cancel_booking"],
        },
        // Teacher - booking only
        {
            roleId: teacher.roleId,
            permissions: ["create_booking", "cancel_booking"],
        },
    ];

    // Create role permissions
    for (const rp of rolePermissions) {
        for (const permName of rp.permissions) {
            const permissionId = permissionMap.get(permName);
            if (permissionId) {
                await prisma.rolePermission.upsert({
                    where: {
                        roleId_permissionId: {
                            roleId: rp.roleId,
                            permissionId,
                        },
                    },
                    update: {},
                    create: {
                        roleId: rp.roleId,
                        permissionId,
                    },
                });
            }
        }
    }

    console.log("✓ Role permissions assigned");
}

seedPermissions()
    .then(() => {
        console.log("✅ Permission seeding completed!");
    })
    .catch((error) => {
        console.error("❌ Error seeding permissions:", error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

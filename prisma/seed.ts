import { PrismaClient } from '../src/generated/prisma'
import { Base64 } from 'js-base64'

const prisma = new PrismaClient()

async function main() {
    console.log('Starting seed...')

    // Create roles
    const roles = ['admin', 'teacher', 'student', 'driver']

    console.log('Creating roles...')
    for (const roleName of roles) {
        await prisma.role.upsert({
            where: { roleName },
            update: {},
            create: {
                roleName,
            },
        })
        console.log(`✓ Role "${roleName}" created/updated`)
    }

    // Create default permissions
    const permissions = [
        'manage_users',
        'manage_vehicles',
        'manage_routes',
        'manage_schedules',
        'view_reports',
        'make_bookings',
        'cancel_bookings',
        'drive_vehicle',
        'view_own_bookings',
        'view_all_bookings',
    ]

    console.log('Creating permissions...')
    for (const permissionName of permissions) {
        await prisma.permission.upsert({
            where: { permissionName },
            update: {},
            create: {
                permissionName,
            },
        })
        console.log(`✓ Permission "${permissionName}" created/updated`)
    }

    // Get created roles and permissions
    const adminRole = await prisma.role.findUnique({ where: { roleName: 'admin' } })
    const teacherRole = await prisma.role.findUnique({ where: { roleName: 'teacher' } })
    const studentRole = await prisma.role.findUnique({ where: { roleName: 'student' } })
    const driverRole = await prisma.role.findUnique({ where: { roleName: 'driver' } })

    const allPermissions = await prisma.permission.findMany()

    // Assign permissions to roles
    console.log('Assigning permissions to roles...')

    // Admin gets all permissions
    if (adminRole) {
        for (const permission of allPermissions) {
            await prisma.rolePermission.upsert({
                where: {
                    roleId_permissionId: {
                        roleId: adminRole.roleId,
                        permissionId: permission.permissionId,
                    },
                },
                update: {},
                create: {
                    roleId: adminRole.roleId,
                    permissionId: permission.permissionId,
                },
            })
        }
        console.log('✓ Admin permissions assigned')
    }

    // Teacher permissions
    if (teacherRole) {
        const teacherPermissions = ['make_bookings', 'cancel_bookings', 'view_own_bookings', 'view_reports']
        for (const permName of teacherPermissions) {
            const permission = allPermissions.find(p => p.permissionName === permName)
            if (permission) {
                await prisma.rolePermission.upsert({
                    where: {
                        roleId_permissionId: {
                            roleId: teacherRole.roleId,
                            permissionId: permission.permissionId,
                        },
                    },
                    update: {},
                    create: {
                        roleId: teacherRole.roleId,
                        permissionId: permission.permissionId,
                    },
                })
            }
        }
        console.log('✓ Teacher permissions assigned')
    }

    // Student permissions
    if (studentRole) {
        const studentPermissions = ['make_bookings', 'cancel_bookings', 'view_own_bookings']
        for (const permName of studentPermissions) {
            const permission = allPermissions.find(p => p.permissionName === permName)
            if (permission) {
                await prisma.rolePermission.upsert({
                    where: {
                        roleId_permissionId: {
                            roleId: studentRole.roleId,
                            permissionId: permission.permissionId,
                        },
                    },
                    update: {},
                    create: {
                        roleId: studentRole.roleId,
                        permissionId: permission.permissionId,
                    },
                })
            }
        }
        console.log('✓ Student permissions assigned')
    }

    // Driver permissions
    if (driverRole) {
        const driverPermissions = ['drive_vehicle', 'view_all_bookings', 'make_bookings', 'view_own_bookings']
        for (const permName of driverPermissions) {
            const permission = allPermissions.find(p => p.permissionName === permName)
            if (permission) {
                await prisma.rolePermission.upsert({
                    where: {
                        roleId_permissionId: {
                            roleId: driverRole.roleId,
                            permissionId: permission.permissionId,
                        },
                    },
                    update: {},
                    create: {
                        roleId: driverRole.roleId,
                        permissionId: permission.permissionId,
                    },
                })
            }
        }
        console.log('✓ Driver permissions assigned')
    }

    // Create default departments
    console.log('Creating default departments...')
    const departments = [
        'Information Technology',
        'Engineering',
        'Business Administration',
        'Science',
        'Arts',
        'Transportation',
    ]

    for (const departmentName of departments) {
        await prisma.department.upsert({
            where: { departmentName },
            update: {},
            create: {
                departmentName,
            },
        })
        console.log(`✓ Department "${departmentName}" created/updated`)
    }

    // Create default admin user
    console.log('Creating default admin user...')
    const hashedPassword = await Base64.encode('admin123')

    if (adminRole) {
        await prisma.user.upsert({
            where: { email: 'admin@mut.ac.th' },
            update: {},
            create: {
                firstName: 'System',
                lastName: 'Administrator',
                email: 'admin@mut.ac.th',
                password: hashedPassword,
                roleId: adminRole.roleId,
            },
        })
        console.log('✓ Default admin user created (email: admin@mut.ac.th, password: admin123)')
    }

    // Create sample users for each role
    console.log('Creating sample users...')

    // Sample teacher
    if (teacherRole) {
        const teacherPassword = await Base64.encode('teacher123')
        const itDepartment = await prisma.department.findUnique({
            where: { departmentName: 'Information Technology' }
        })

        if (itDepartment) {
            // Create employee record first
            const teacherEmployee = await prisma.employee.upsert({
                where: { employeeId: 1 },
                update: {},
                create: {
                    employeeId: 1,
                    departmentId: itDepartment.departmentId,
                    position: 'Senior Lecturer',
                },
            })

            await prisma.user.upsert({
                where: { email: 'teacher@mut.ac.th' },
                update: {},
                create: {
                    firstName: 'John',
                    lastName: 'Smith',
                    email: 'teacher@mut.ac.th',
                    password: teacherPassword,
                    roleId: teacherRole.roleId,
                    employeeId: teacherEmployee.employeeId,
                },
            })
            console.log('✓ Sample teacher created (email: teacher@mut.ac.th, password: teacher123)')
        }
    }

    // Sample student
    if (studentRole) {
        const studentPassword = await Base64.encode('student123')
        await prisma.user.upsert({
            where: { email: 'student@mut.ac.th' },
            update: {},
            create: {
                firstName: 'Jane',
                lastName: 'Doe',
                email: 'student@mut.ac.th',
                password: studentPassword,
                roleId: studentRole.roleId,
            },
        })
        console.log('✓ Sample student created (email: student@mut.ac.th, password: student123)')
    }

    // Sample driver
    if (driverRole) {
        const driverPassword = await Base64.encode('driver123')
        const transportDepartment = await prisma.department.findUnique({
            where: { departmentName: 'Transportation' }
        })

        if (transportDepartment) {
            // Create employee record first
            const driverEmployee = await prisma.employee.upsert({
                where: { employeeId: 2 },
                update: {},
                create: {
                    employeeId: 2,
                    departmentId: transportDepartment.departmentId,
                    position: 'Bus Driver',
                },
            })

            await prisma.user.upsert({
                where: { email: 'driver@mut.ac.th' },
                update: {},
                create: {
                    firstName: 'Mike',
                    lastName: 'Johnson',
                    email: 'driver@mut.ac.th',
                    password: driverPassword,
                    roleId: driverRole.roleId,
                    employeeId: driverEmployee.employeeId,
                },
            })
            console.log('✓ Sample driver created (email: driver@mut.ac.th, password: driver123)')
        }
    }

    console.log('Seed completed successfully!')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
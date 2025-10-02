import { PrismaClient } from "@/generated/prisma";

/**
 * Prisma Client Singleton
 * 
 * This prevents creating multiple Prisma Client instances during development
 * which can exhaust the database connection pool.
 * 
 * In development, hot reloading can cause multiple instances to be created.
 * This pattern ensures only one instance exists across hot reloads.
 */

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
    });

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

// Graceful shutdown
if (typeof window === "undefined") {
    process.on("beforeExit", async () => {
        await prisma.$disconnect();
    });
}

export default prisma;

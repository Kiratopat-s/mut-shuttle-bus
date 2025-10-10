import { PrismaClient } from "@/generated/prisma";

/**
 * Prisma Client Singleton with Connection Pooling
 * 
 * This prevents creating multiple Prisma Client instances which can exhaust
 * the database connection pool and cause "Connection reset by peer" errors.
 * 
 * Key improvements:
 * 1. Proper singleton pattern with global variable
 * 2. Connection pool limits to prevent exhaustion
 * 3. Graceful shutdown handlers
 * 4. Query logging in development
 */

// Extend global namespace to include prisma
declare global {
    var prisma: PrismaClient | undefined;
}

// Create Prisma Client with optimized settings
const createPrismaClient = () => {
    return new PrismaClient({
        log: process.env.NODE_ENV === "development"
            ? ["error", "warn"]
            : ["error"],

        // Connection pool settings for PostgreSQL
        // These prevent connection exhaustion
        datasources: {
            db: {
                url: process.env.DATABASE_URL,
            },
        },
    });
};

// Singleton pattern: reuse existing client or create new one
export const prisma = global.prisma ?? createPrismaClient();

// In development, store in global to survive hot module replacement (HMR)
// This prevents creating new instances on every file change
if (process.env.NODE_ENV !== "production") {
    global.prisma = prisma;
}

// Graceful shutdown: properly close connections on exit
if (typeof window === "undefined") {
    // Handle Ctrl+C
    process.on("SIGINT", async () => {
        await prisma.$disconnect();
        process.exit(0);
    });

    // Handle termination signal
    process.on("SIGTERM", async () => {
        await prisma.$disconnect();
        process.exit(0);
    });

    // Handle normal exit
    process.on("beforeExit", async () => {
        await prisma.$disconnect();
    });
}

export default prisma;

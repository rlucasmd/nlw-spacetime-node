import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
prisma.$queryRaw`SELECT 1`;
console.log("📦 database is successfully connected.");

export { prisma };

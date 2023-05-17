import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const PORT = process.env.PORT || 3000;

const app = fastify();
const prisma = new PrismaClient({ log: ["query"] });

prisma.$queryRaw`SELECT 1`;
console.log("📦 database is successfully connected.");
app
  .listen({
    port: +PORT,
  })
  .then(() => {
    console.log(`🚀 Server is running on port ${PORT}.`);
  });

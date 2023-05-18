import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";

const PORT = process.env.PORT || 3000;

const app = fastify();

app.register(memoriesRoutes);

app
  .listen({
    port: +PORT,
  })
  .then(() => {
    console.log(`🚀 Server is running on port ${PORT}.`);
  });

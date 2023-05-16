import fastify from "fastify";

const PORT = process.env.PORT || 3000;

const app = fastify();

app.get("/hello", () => {
  return "Hello, world";
});

app
  .listen({
    port: +PORT,
  })
  .then(() => {
    console.log(`🚀 Server is running on port ${PORT}.`);
  });

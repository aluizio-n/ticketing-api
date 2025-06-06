// Codigo inicial para subir o servidor
import Fastify, { type FastifyInstance, type FastifyRequest, type FastifyReply } from "fastify";

const app: FastifyInstance = Fastify({ logger: true });

app.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
  return { message: "Hello, Fastify with TypeScript!" };
});

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log("Server running at http://localhost:3000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

fastify.get("/", async function handler(request, reply) {
  return { houston: "aqui localhost, cambio..." };
});

try {
  await fastify.listen({ port: 8080 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}

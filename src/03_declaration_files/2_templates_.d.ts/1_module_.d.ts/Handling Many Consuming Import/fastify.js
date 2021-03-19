class FastifyInstance_1 {}

function fastify_1() {
	return new FastifyInstance_1();
}

fastify_1.FastifyInstance_1 = FastifyInstance_1;

// Allows for { fastify_1 }
fastify_1.fastify_1 = fastify_1;

// Allows for strict ES Module support
fastify_1.default = fastify_1;

// Sets the default export
module.exports = fastify_1;

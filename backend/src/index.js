require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const helmet = require('@fastify/helmet');
const cors = require('@fastify/cors');
const rateLimit = require('@fastify/rate-limit');

// Register security plugins
fastify.register(helmet);
fastify.register(cors, { origin: true });
fastify.register(rateLimit, { max: 100, timeWindow: '1 minute' });

// Register custom plugins
fastify.register(require('./plugins/db'));
fastify.register(require('./plugins/redis'));
fastify.register(require('./plugins/auth'));

// Register routes (to be implemented)
// fastify.register(require('./routes/auth'));
// fastify.register(require('./routes/games'));
// fastify.register(require('./routes/picks'));
// fastify.register(require('./routes/stats'));

const start = async () => {
  try {
    await fastify.listen({
      port: process.env.PORT ? Number(process.env.PORT) : 3000,
      host: '0.0.0.0'
    });
    fastify.log.info(`Server listening on port ${process.env.PORT || 3000}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start(); 
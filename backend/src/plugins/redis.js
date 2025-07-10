const fp = require('fastify-plugin');

module.exports = fp(async function (fastify, opts) {
  fastify.register(require('fastify-redis'), {
    url: process.env.REDIS_URL,
  });
}); 
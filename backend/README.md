# Fantasy Basketball Backend

This is a production-ready backend for a fantasy basketball game, built with Node.js, Fastify, PostgreSQL, and Redis.

## Features
- User registration and login (JWT auth, secure password hashing)
- Connects to NBA stats API for player/game data
- Routes for different fantasy game types (daily, weekly, monthly, season)
- Secure: helmet, CORS, rate limiting, input validation
- Redis for sessions and caching

## Stack
- Node.js + Fastify
- PostgreSQL
- Redis
- JWT Auth
- bcrypt (password hashing)
- dotenv (env config)
- axios (API requests)
- zod (validation)

## Setup
1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your `.env` file:
   ```env
   PORT=3000
   DATABASE_URL=postgres://user:password@localhost:5432/fantasy
   REDIS_URL=redis://localhost:6379
   JWT_SECRET=supersecretkey
   ```
4. Start the server:
   ```bash
   node src/index.js
   ```

## Directory Structure
```
backend/
  src/
    index.js
    plugins/
      db.js
      redis.js
      auth.js
    routes/
      ...
    utils/
      ...
    models/
      ...
  .env
  package.json
  README.md
```

## Security
- All sensitive data is stored securely (hashed passwords, JWTs)
- Helmet, CORS, and rate limiting enabled
- Input validation on all endpoints

## Next Steps
- Implement routes for auth, games, picks, and stats
- Integrate NBA stats API
- Add tests 
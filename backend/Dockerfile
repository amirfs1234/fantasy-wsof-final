# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# Copy the rest of the backend code
COPY . .

# Expose the port (default 3000)
EXPOSE 3000

# Set environment variables (can be overridden by docker-compose or env file)
ENV NODE_ENV=production

# Start the backend server
CMD ["node", "src/index.js"] 
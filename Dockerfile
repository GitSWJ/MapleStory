# Stage 1 - Build the NestJS app (production build)
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies (for production build)
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build the app for production
RUN npm run build

# Stage 2 - Production image
FROM node:18-alpine AS production

WORKDIR /app

# Install production dependencies only
COPY package*.json ./
RUN npm install --only=production

# Copy built files from previous stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Copy .env file if needed
COPY --from=builder /app/.env ./.env

# Expose port for NestJS
ENV PORT=3000
EXPOSE 3000

# Start the app in production mode
CMD ["node", "dist/main"]

# Stage 3 - Development environment with hot reload
FROM node:18-alpine AS development

WORKDIR /app

# Install development dependencies
COPY package*.json ./
RUN npm install

# Install ts-node-dev for hot reload in development
RUN npm install --save-dev ts-node-dev

# Copy source files
COPY . .

# Expose port for NestJS in development
EXPOSE 3000

# Start the app with ts-node-dev for hot reload in development
CMD ["npx", "ts-node-dev", "--respawn", "--transpile-only", "src/main.ts"]

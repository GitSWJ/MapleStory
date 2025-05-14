# Stage 1 - Build the NestJS app
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build the app
RUN npm run build

# Stage 2 - Production image
FROM node:18-alpine

WORKDIR /app

# Only production dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy built files from previous stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# If you use .env for JWT or DB credentials
COPY --from=builder /app/.env ./.env

# Expose port for NestJS
ENV PORT=3000
EXPOSE 3000

# Start the app
CMD ["node", "dist/main"]

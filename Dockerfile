FROM node:18-alpine AS builder

WORKDIR /app

# 의존성 설치
COPY package*.json ./
RUN npm install

# 소스 복사 및 빌드
COPY . .
RUN npm run build

FROM node:18-alpine AS production

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]

FROM node:18-alpine AS development

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install --save-dev ts-node-dev

COPY . .

EXPOSE 3000

CMD ["npx", "ts-node-dev", "--respawn", "--transpile-only", "src/main.ts"]

# build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json nest-cli.json ./
COPY apps ./apps
COPY libs ./libs

RUN npm install
RUN npm run build fyi-app

# run
FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist/apps/fyi-app ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000
ENV NODE_ENV=production

CMD ["node", "dist/main.js"]
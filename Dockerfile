# build
FROM node:20 AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run builder

# run
FROM node:20-slim

WORKDIR /app
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json /app/package.json
RUN npm install --omit=dev

CMD ["node", "dist/apps/fyi-app/main.js"]
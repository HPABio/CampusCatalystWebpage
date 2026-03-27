# syntax=docker/dockerfile:1

########## BUILD ##########
FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

########## RUNTIME ##########
FROM node:20-alpine AS runtime
WORKDIR /srv

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=80

COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 80

CMD ["node", "./dist/server/entry.mjs"]
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

# Copy the SSR build output
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=80
EXPOSE 80

# Run the Astro Node.js SSR server
CMD ["node", "./dist/server/entry.mjs"]

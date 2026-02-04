FROM node:22-alpine AS base

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && corepack prepare pnpm@10.4.1 --activate

COPY package.json pnpm-lock.yaml ./

FROM base AS deps

RUN pnpm install --frozen-lockfile

FROM base AS dev

COPY --from=deps /app/node_modules /app/node_modules
COPY package.json pnpm-lock.yaml ./

CMD ["pnpm", "dev", "--host", "0.0.0.0"]

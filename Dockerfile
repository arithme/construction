FROM node:24-bookworm-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --no-audit --no-fund
COPY . .
RUN npm run build
FROM node:24-bookworm-slim AS runner
ENV NODE_ENV=production
WORKDIR /app
RUN useradd --create-home --uid 10001 appuser
COPY --from=build --chown=appuser:appuser /app ./
USER appuser
EXPOSE 8787
CMD ["npm","start"]

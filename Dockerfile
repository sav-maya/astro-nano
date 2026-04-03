# Reproducible install: Node 22 LTS (avoid Node 25 + npm quirks while deps resolve)
FROM node:22-bookworm-slim

WORKDIR /app

COPY package.json ./
RUN npm install --no-audit --no-fund

COPY . .

EXPOSE 4321
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "4321"]

# Build stage
FROM public.ecr.aws/docker/library/node:20-alpine AS builder
WORKDIR /app
COPY growtrack/package*.json ./
RUN CYPRESS_INSTALL_BINARY=0 npm install
COPY growtrack/ ./
RUN npm run build

# Run stage
FROM public.ecr.aws/docker/library/node:20-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
ENV HOST=0.0.0.0
ENV PORT=80
EXPOSE 80
CMD ["npm", "start"]
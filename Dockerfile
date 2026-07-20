# Stage 1: Build the Vite React TypeScript application
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies based on lockfile
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Production Nginx environment
FROM nginx:alpine AS runner

# Copy custom nginx configuration for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose standard HTTP port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

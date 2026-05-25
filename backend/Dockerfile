FROM node:18-alpine AS builder 
ARG VERSION=1.0
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app /app
ENV NODE_ENV=production
ENV PORT=5000
EXPOSE 5000
CMD ["npm", "start"]


# Use Node.js LTS as base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files from `apps/web/` to leverage Docker caching
COPY web/package.json web/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files from `apps/web/`
COPY web/ .

# Build the Next.js application
RUN npm run build

# Expose port 3000 for Next.js
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]

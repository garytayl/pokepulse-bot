# ✅ Use the official Playwright image with everything pre-installed (Chromium only = faster)
FROM mcr.microsoft.com/playwright:v1.44.0-jammy

# Set working dir
WORKDIR /app

# Copy package.json and package-lock first (for cache layer)
COPY package*.json ./

# Install node deps
RUN npm install

# Copy rest of the code
COPY . .

# Expose web port
EXPOSE 8080

# Start the server
CMD ["npm", "start"]

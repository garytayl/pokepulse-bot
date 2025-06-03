# Use the official Playwright image (Chromium only, for lighter deploys)
FROM mcr.microsoft.com/playwright:v1.44.0-jammy

# Set working directory
WORKDIR /app

# Copy everything
COPY . .

# Install dependencies
RUN npm install

# Expose web port
EXPOSE 8080

# Start the bot server
CMD ["npm", "start"]

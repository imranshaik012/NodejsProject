# Use Node.js LTS image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port
EXPOSE 5000

# Start the app
CMD ["npm", "start"]

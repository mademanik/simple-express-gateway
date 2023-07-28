# Base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose the port on which the Express.js app will run
EXPOSE 8080

# Start the Express.js application
CMD ["node", "server.js"]

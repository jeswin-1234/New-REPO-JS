# Use Node.js 18 as the base image
FROM node:18

# Remove existing yarn binary if it exists
RUN rm -rf /usr/local/bin/yarn /usr/local/bin/yarnpkg

# Install yarn globally
RUN npm install -g yarn

# Update npm to the latest version
RUN npm install -g npm@latest

# Set the PATH environment variable
ENV PATH /usr/local/bin:$PATH

# Check Node.js, npm, and Yarn versions
RUN node --version
RUN npm --version
RUN yarn --version

WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Clear Yarn cache and install dependencies
RUN yarn cache clean
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . ./

# Copy the entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/

# Make the entrypoint script executable
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Use the entrypoint script
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]

# Define the command to run your application
CMD ["yarn", "run", "start:dev"]

#!/bin/sh
set -e

# Example: Print the Node.js and Yarn versions
node --version
yarn --version

# Execute the command passed as arguments to the entrypoint script
exec "$@"

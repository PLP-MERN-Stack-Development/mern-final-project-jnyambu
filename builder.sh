#!/bin/bash
set -e

echo "==> Building client..."
cd client
npm install
npm run build
echo "==> Build complete!"
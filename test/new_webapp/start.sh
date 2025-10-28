#!/bin/bash
# Quick start script for SecureAI Academy Training Platform

echo "🚀 Starting SecureAI Academy Training Platform..."
echo ""
echo "Opening application in your default browser..."
echo "URL: http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start a simple HTTP server
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m http.server 8000
else
    echo "Error: Python is not installed. Please install Python or open index.html directly in your browser."
    exit 1
fi


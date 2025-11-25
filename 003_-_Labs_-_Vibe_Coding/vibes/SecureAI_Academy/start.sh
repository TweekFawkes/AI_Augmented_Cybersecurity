#!/bin/bash
# Quick start script for SecureAI Academy Training Platform

echo "🚀 Starting SecureAI Academy Training Platform..."
echo ""

# Check if port 8000 is already in use
PORT=8000
PID=$(lsof -ti:$PORT 2>/dev/null)

if [ ! -z "$PID" ]; then
    echo "⚠️  Port $PORT is already in use by process $PID"
    echo "🔪 Killing existing process..."
    kill -9 $PID 2>/dev/null
    sleep 1
    echo "✅ Process killed successfully"
    echo ""
fi

echo "Opening application in your default browser..."
echo "URL: http://localhost:$PORT"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start a simple HTTP server
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    python -m http.server $PORT
else
    echo "Error: Python is not installed. Please install Python or open index.html directly in your browser."
    exit 1
fi


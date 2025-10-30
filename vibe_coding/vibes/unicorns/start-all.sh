#!/bin/bash

echo "🦄 Starting Unicorn Emporium Full Stack..."
echo "=========================================="
echo ""

# Function to cleanup background processes on exit
cleanup() {
    echo ""
    echo "🛑 Shutting down..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    exit
}

trap cleanup INT TERM

# Start backend
echo "🔨 Starting Backend..."
cd backend
mvn clean install -DskipTests > /dev/null 2>&1
mvn spring-boot:run > ../backend.log 2>&1 &
BACKEND_PID=$!
cd ..

echo "⏳ Waiting for backend to start (30 seconds)..."
sleep 30

# Start frontend
echo "🎨 Starting Frontend..."
cd frontend
if [ ! -d "node_modules" ]; then
    npm install > /dev/null 2>&1
fi
npm run dev > ../frontend.log 2>&1 &
FRONTEND_PID=$!
cd ..

echo ""
echo "✅ Both services are starting!"
echo ""
echo "📍 Backend:  http://localhost:8080"
echo "📍 Frontend: http://localhost:3000"
echo "📍 H2 Console: http://localhost:8080/h2-console"
echo ""
echo "📝 Backend logs:  tail -f backend.log"
echo "📝 Frontend logs: tail -f frontend.log"
echo ""
echo "Press Ctrl+C to stop all services"
echo ""

# Wait for both processes
wait


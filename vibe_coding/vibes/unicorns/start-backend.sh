#!/bin/bash

echo "🦄 Starting Unicorn Emporium Backend..."
echo ""

cd backend

echo "🔨 Building application..."
mvn clean install -DskipTests

echo "🚀 Starting Spring Boot application..."
mvn spring-boot:run


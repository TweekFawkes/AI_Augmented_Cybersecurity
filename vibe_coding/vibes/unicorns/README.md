# 🦄 Unicorn Emporium - E-Commerce Website

A full-stack e-commerce website for selling magical unicorns! Built with React frontend and Java Spring Boot backend.

![Unicorn Emporium](https://img.shields.io/badge/Status-Ready-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.0-green)
![Java](https://img.shields.io/badge/Java-17-orange)

## ✨ Features

- 🎨 **Beautiful Modern UI** - Responsive design with smooth animations
- 🦄 **Product Catalog** - Browse magical unicorns by category
- 🛒 **Shopping Cart** - Add, remove, and manage items
- 💳 **Checkout Flow** - Complete order processing
- 📦 **Order Management** - Track orders with unique order IDs
- 🌈 **Category Filtering** - Filter by Classic, Rainbow, Celestial, and Rare unicorns
- 🔄 **Real-time Updates** - Seamless cart and inventory management
- 💾 **Persistent Cart** - Cart saved to local storage

## 🏗️ Architecture

### Frontend (React + Vite)
- **React 18** with hooks and context API
- **React Router** for navigation
- **Axios** for API calls
- **Vite** for fast development and building
- Modern CSS with animations and gradients

### Backend (Java Spring Boot)
- **Spring Boot 3.2** with REST API
- **Spring Data JPA** for database operations
- **H2 Database** (in-memory) for development
- **Lombok** for cleaner code
- **Bean Validation** for request validation

## 📁 Project Structure

```
unicorns/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── context/         # Context providers (Cart)
│   │   ├── services/        # API service layer
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── backend/                 # Spring Boot application
│   ├── src/main/java/com/unicornemporium/
│   │   ├── config/          # Configuration classes
│   │   ├── controller/      # REST controllers
│   │   ├── dto/             # Data Transfer Objects
│   │   ├── model/           # JPA entities
│   │   ├── repository/      # Data repositories
│   │   └── service/         # Business logic
│   └── pom.xml
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Java 17** or higher
- **Maven 3.6+** (usually bundled with IDE)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Build the project:
```bash
mvn clean install
```

3. Run the Spring Boot application:
```bash
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

**H2 Console** (for database inspection):
- URL: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:unicorndb`
- Username: `sa`
- Password: (leave empty)

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will start on `http://localhost:3000`

### 🎉 Access the Application

Open your browser and go to: `http://localhost:3000`

## 🔌 API Endpoints

### Products

- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product by ID
- `GET /api/products/category/{category}` - Get products by category
- `POST /api/products` - Create a new product

### Orders

- `POST /api/orders` - Create a new order
- `GET /api/orders/{id}` - Get order by ID
- `GET /api/orders` - Get all orders
- `GET /api/orders/email/{email}` - Get orders by customer email

## 🎨 Available Unicorn Categories

- **Classic** - Traditional white unicorns with magical abilities
- **Rainbow** - Colorful unicorns that create joy and rainbows
- **Celestial** - Star and moon unicorns with cosmic powers
- **Rare** - Legendary unicorns with unique abilities

## 🛠️ Development

### Frontend Development

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

### Backend Development

Run tests:
```bash
mvn test
```

Package as JAR:
```bash
mvn package
```

Run JAR:
```bash
java -jar target/unicorn-backend-1.0.0.jar
```

## 🐛 Troubleshooting

### CORS Issues
If you encounter CORS errors, ensure:
- Backend is running on port 8080
- Frontend is running on port 3000
- CORS configuration in `CorsConfig.java` includes your frontend URL

### Port Already in Use
If ports are already in use:

**Backend (8080):**
```bash
# Change port in application.properties
server.port=8081
```

**Frontend (3000):**
```bash
# Change port in vite.config.js
server: { port: 3001 }
```

### Database Issues
The H2 database is in-memory and resets on restart. For persistent data, configure a file-based H2 database or use PostgreSQL/MySQL.

## 📝 Sample Data

The backend automatically seeds the database with 9 magical unicorns on startup:
- Sparkle Supreme (Classic)
- Rainbow Dash (Rainbow)
- Celestial Star (Celestial)
- Mystic Moon (Celestial)
- Fire Phoenix (Rare)
- Crystal Princess (Classic)
- Thunder Strike (Rare)
- Bubble Bliss (Rainbow)
- Cherry Blossom (Rainbow)

## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] Payment gateway integration
- [ ] Admin dashboard for managing products
- [ ] Order tracking and status updates
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Email notifications
- [ ] Search functionality
- [ ] Pagination for large product catalogs
- [ ] Integration tests

## 📄 License

This project is open source and available under the MIT License.

## 🦄 About

Created with 💜 for the AI Augmented Cybersecurity training program.

**Remember:** All unicorns are ethically sourced from free-range rainbow meadows! 🌈

---

Happy Shopping! ✨🦄✨


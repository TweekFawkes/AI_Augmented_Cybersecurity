# 🦄 Unicorn Emporium - Backend

Spring Boot REST API for the Unicorn Emporium e-commerce platform.

## 🛠️ Tech Stack

- **Spring Boot 3.2** - Application framework
- **Spring Data JPA** - Data persistence
- **H2 Database** - In-memory database
- **Lombok** - Reduce boilerplate code
- **Bean Validation** - Request validation
- **Maven** - Dependency management

## 📦 Installation

Build the project:
```bash
mvn clean install
```

## 🚀 Running the Application

Run with Maven:
```bash
mvn spring-boot:run
```

Or run the JAR:
```bash
java -jar target/unicorn-backend-1.0.0.jar
```

The API will be available at: `http://localhost:8080`

## 🗂️ Project Structure

```
src/main/java/com/unicornemporium/
├── config/
│   ├── CorsConfig.java       # CORS configuration
│   └── DataInitializer.java  # Database seeding
├── controller/
│   ├── ProductController.java # Product endpoints
│   └── OrderController.java   # Order endpoints
├── dto/
│   ├── OrderRequest.java     # Order creation DTO
│   ├── OrderItemRequest.java # Order item DTO
│   └── OrderResponse.java    # Order response DTO
├── model/
│   ├── Product.java          # Product entity
│   ├── Order.java            # Order entity
│   └── OrderItem.java        # Order item entity
├── repository/
│   ├── ProductRepository.java # Product data access
│   └── OrderRepository.java   # Order data access
├── service/
│   ├── ProductService.java   # Product business logic
│   └── OrderService.java     # Order business logic
└── UnicornEmporiumApplication.java # Main application class
```

## 🔌 API Endpoints

### Product Endpoints

#### Get All Products
```http
GET /api/products
```

Response:
```json
[
  {
    "id": 1,
    "name": "Sparkle Supreme",
    "price": 9999.0,
    "category": "classic",
    "image": "🦄",
    "description": "A classic white unicorn...",
    "features": ["Wish Granting", "Night Vision", "Gentle Temperament"]
  }
]
```

#### Get Product by ID
```http
GET /api/products/{id}
```

#### Get Products by Category
```http
GET /api/products/category/{category}
```

Categories: `classic`, `rainbow`, `celestial`, `rare`

#### Create Product
```http
POST /api/products
Content-Type: application/json

{
  "name": "New Unicorn",
  "price": 15000.0,
  "category": "rare",
  "image": "🦄",
  "description": "Description here",
  "features": ["Feature 1", "Feature 2"]
}
```

### Order Endpoints

#### Create Order
```http
POST /api/orders
Content-Type: application/json

{
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "deliveryAddress": "123 Rainbow Lane, Cloud City",
  "deliveryMethod": "rainbow-portal",
  "totalAmount": 9999.0,
  "items": [
    {
      "productId": 1,
      "productName": "Sparkle Supreme",
      "quantity": 1,
      "price": 9999.0
    }
  ]
}
```

Response:
```json
{
  "id": 1,
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "deliveryAddress": "123 Rainbow Lane, Cloud City",
  "deliveryMethod": "rainbow-portal",
  "totalAmount": 9999.0,
  "orderDate": "2025-10-30T10:30:00",
  "status": "PENDING"
}
```

#### Get Order by ID
```http
GET /api/orders/{id}
```

#### Get All Orders
```http
GET /api/orders
```

#### Get Orders by Email
```http
GET /api/orders/email/{email}
```

## 🗄️ Database

### H2 Console

Access the H2 database console:
- URL: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:unicorndb`
- Username: `sa`
- Password: (empty)

### Database Schema

#### Products Table
```sql
CREATE TABLE products (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  price DOUBLE NOT NULL,
  category VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  description VARCHAR(1000)
);

CREATE TABLE product_features (
  product_id BIGINT,
  feature VARCHAR(255)
);
```

#### Orders Table
```sql
CREATE TABLE orders (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  delivery_address VARCHAR(500) NOT NULL,
  delivery_method VARCHAR(255) NOT NULL,
  total_amount DOUBLE NOT NULL,
  order_date TIMESTAMP NOT NULL,
  status VARCHAR(50) NOT NULL
);

CREATE TABLE order_items (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  order_id BIGINT NOT NULL,
  product_id BIGINT NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  price DOUBLE NOT NULL
);
```

## ⚙️ Configuration

### Application Properties

Located in `src/main/resources/application.properties`:

```properties
# Server
server.port=8080

# Database
spring.datasource.url=jdbc:h2:mem:unicorndb
spring.datasource.username=sa
spring.datasource.password=

# JPA
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true

# H2 Console
spring.h2.console.enabled=true

# CORS
spring.web.cors.allowed-origins=http://localhost:3000
```

## 🔒 CORS Configuration

CORS is configured to allow requests from `http://localhost:3000`:

```java
@Configuration
public class CorsConfig {
    @Bean
    public CorsFilter corsFilter() {
        // Allow frontend at localhost:3000
    }
}
```

## 🌱 Data Initialization

The application automatically seeds the database with 9 sample unicorns on startup via `DataInitializer.java`.

To disable auto-seeding, comment out the `@Component` annotation on `DataInitializer`.

## 🧪 Testing

Run tests:
```bash
mvn test
```

## 📦 Building

Create a production JAR:
```bash
mvn clean package
```

The JAR will be created in `target/unicorn-backend-1.0.0.jar`

## 🚀 Deployment

### Running the JAR

```bash
java -jar target/unicorn-backend-1.0.0.jar
```

### Environment Variables

For production, override properties:
```bash
java -jar unicorn-backend.jar \
  --server.port=8080 \
  --spring.datasource.url=jdbc:postgresql://localhost:5432/unicorndb \
  --spring.datasource.username=myuser \
  --spring.datasource.password=mypassword
```

### Using PostgreSQL

1. Add PostgreSQL dependency to `pom.xml`:
```xml
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
</dependency>
```

2. Update `application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/unicorndb
spring.datasource.username=postgres
spring.datasource.password=password
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
```

## 🐛 Troubleshooting

### Port Already in Use

Change the port in `application.properties`:
```properties
server.port=8081
```

### Database Connection Issues

For H2:
- Ensure no other H2 instances are running
- Check H2 console for active connections

### CORS Errors

If frontend can't connect:
1. Verify CORS configuration includes frontend URL
2. Check that backend is running on port 8080
3. Ensure no firewall blocking requests

## 📝 Order Status Enum

Available order statuses:
- `PENDING` - Order created, awaiting processing
- `PROCESSING` - Order being prepared
- `SHIPPED` - Order shipped to customer
- `DELIVERED` - Order delivered
- `CANCELLED` - Order cancelled

## 🔐 Security Notes

⚠️ **This is a demo application without authentication.**

For production:
- Add Spring Security
- Implement JWT authentication
- Add rate limiting
- Validate all inputs
- Use HTTPS only
- Implement proper error handling
- Add logging and monitoring

## 🎯 Future Enhancements

- [ ] User authentication (Spring Security + JWT)
- [ ] Payment processing integration
- [ ] Inventory management
- [ ] Order status updates
- [ ] Email notifications
- [ ] Pagination and sorting
- [ ] Search functionality
- [ ] Admin endpoints
- [ ] Metrics and monitoring
- [ ] Docker containerization

---

Built with ☕ and Spring magic! ✨


# 🦄 Unicorn Emporium - Frontend

React-based frontend for the Unicorn Emporium e-commerce platform.

## 🛠️ Tech Stack

- **React 18.2** - UI library
- **React Router 6** - Client-side routing
- **Axios** - HTTP client for API calls
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling with animations

## 📦 Installation

```bash
npm install
```

## 🚀 Running the Application

Development mode with hot reload:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 🗂️ Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Hero.jsx        # Hero section
│   ├── ProductGrid.jsx # Product listing
│   ├── ProductCard.jsx # Individual product card
│   ├── Cart.jsx        # Shopping cart sidebar
│   ├── CheckoutModal.jsx # Checkout form
│   ├── SuccessModal.jsx  # Order success modal
│   ├── About.jsx       # About section
│   └── Footer.jsx      # Footer
├── context/
│   └── CartContext.jsx # Cart state management
├── services/
│   └── api.js          # API service layer
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Features

### Components

- **Navbar**: Sticky navigation with cart button and item count
- **Hero**: Eye-catching landing section with CTA
- **ProductGrid**: Displays products with category filtering
- **ProductCard**: Individual product display with add-to-cart
- **Cart**: Sliding sidebar with cart management
- **CheckoutModal**: Order form with validation
- **SuccessModal**: Order confirmation with order number

### Context

- **CartContext**: Global cart state management
  - Add/remove items
  - Update quantities
  - Calculate totals
  - Persist to localStorage
  - Modal state management

### Services

- **API Service**: Centralized API calls
  - Product endpoints
  - Order endpoints
  - Axios interceptors for error handling

## 🔄 State Management

The app uses React Context API for global state:

- Cart items
- Cart visibility
- Checkout modal state
- Success modal state
- Order information

## 🌐 API Integration

The frontend connects to the Spring Boot backend at `http://localhost:8080/api`

### Product API
- `GET /products` - Fetch all products
- `GET /products/:id` - Fetch single product
- `GET /products/category/:category` - Filter by category

### Order API
- `POST /orders` - Create new order

## 🎯 Key Features

1. **Category Filtering**: Filter unicorns by type
2. **Shopping Cart**: 
   - Add/remove items
   - Adjust quantities
   - Real-time total calculation
   - Persistent storage
3. **Responsive Design**: Mobile-first approach
4. **Smooth Animations**: CSS animations for better UX
5. **Form Validation**: Client-side validation for checkout

## 🎨 Styling

The app uses custom CSS with:
- CSS Variables for theming
- Flexbox and Grid layouts
- CSS animations and transitions
- Responsive breakpoints
- Gradient backgrounds

## 🔧 Configuration

### Vite Config (`vite.config.js`)

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      }
    }
  }
})
```

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🐛 Common Issues

### API Connection Errors

If you see "Failed to load products" errors:
1. Ensure backend is running on port 8080
2. Check CORS configuration in backend
3. Verify API endpoints are accessible

### Build Errors

Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 🚀 Deployment

For production deployment:

1. Set environment variables:
```bash
VITE_API_URL=https://your-api-url.com
```

2. Build:
```bash
npm run build
```

3. Deploy the `dist` folder to your hosting service

## 🧪 Testing

Currently, the app doesn't have tests. Future enhancements:
- Unit tests with Vitest
- Component tests with React Testing Library
- E2E tests with Playwright

## 📝 Notes

- Cart persists in localStorage
- Fallback to sample data if API is unavailable
- All emojis are actual Unicode characters
- Smooth scrolling for anchor navigation

---

Built with 💜 and magical sparkles! ✨


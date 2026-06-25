# E-Commerce Platform - Setup Instructions

## Prerequisites

Before starting, ensure you have the following installed:

- **Node.js**: v16.0.0 or higher
- **npm**: v7.0.0 or higher
- **MySQL**: v8.0 or higher
- **Git**: Latest version

### Verify Installations

```bash
node --version
npm --version
mysql --version
git --version
```

## Database Setup

### Step 1: Start MySQL Server

**Windows:**
```bash
mysql -u root -p
```

**macOS/Linux:**
```bash
mysql -u root -p
```

### Step 2: Create Database

```sql
CREATE DATABASE ecommerce;
USE ecommerce;
```

### Step 3: Import Schema

```bash
mysql -u root -p ecommerce < database/schema.sql
```

### Step 4: Verify Tables

```sql
SHOW TABLES;
```

You should see all tables created:
- users
- categories
- products
- reviews
- wishlist
- cart_items
- orders
- order_items
- order_status_history

## Backend Setup

### Step 1: Navigate to Server Directory

```bash
cd server
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Create Environment File

```bash
cp .env.example .env
```

### Step 4: Configure Environment Variables

Edit `.env` file:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_PORT=3306
DB_NAME=ecommerce

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this
JWT_EXPIRE=7d

# Cloudinary Configuration
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Payment Gateway (Optional)
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

### Step 5: Start Backend Server

```bash
npm run dev
```

Server should start on `http://localhost:5000`

## Frontend Setup

### Step 1: Navigate to Client Directory

```bash
cd ../client
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Create Environment File

```bash
cp .env.example .env.local
```

### Step 4: Configure Environment Variables

Edit `.env.local` file:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=ECommerceStore
```

### Step 5: Start Frontend Development Server

```bash
npm run dev
```

Frontend should start on `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `GET /api/categories` - Get all categories
- `GET /api/products/category/:categoryId` - Get products by category

### Cart
- `GET /api/cart` - Get cart items
- `POST /api/cart` - Add to cart
- `PUT /api/cart/:itemId` - Update cart item
- `DELETE /api/cart/:itemId` - Remove from cart

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:trackingId` - Track order
- `GET /api/orders/:id` - Get order details

### Reviews
- `POST /api/reviews` - Add review
- `GET /api/reviews/product/:productId` - Get product reviews
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review

## Development Tools

### API Testing
- **Postman**: https://www.postman.com/
- **Insomnia**: https://insomnia.rest/
- **ThunderClient**: VS Code Extension

### Database Management
- **MySQL Workbench**: GUI tool for MySQL
- **DBeaver**: Universal database tool
- **Navicat**: Premium MySQL GUI

## Running Tests

```bash
# Backend tests
cd server
npm run test

# Frontend tests
cd ../client
npm run test
```

## Build for Production

### Backend
```bash
cd server
npm run build
```

### Frontend
```bash
cd client
npm run build
```

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000
kill -9 $(lsof -ti:5000)  # macOS/Linux
netstat -ano | findstr :5000  # Windows
```

### Database Connection Error
- Verify MySQL is running
- Check credentials in `.env`
- Ensure database is created

### CORS Issues
- Check CORS configuration in Express server
- Verify frontend API base URL

## Next Steps

1. ✅ Complete database setup
2. ✅ Configure backend environment
3. ✅ Configure frontend environment
4. 📝 Start implementing authentication
5. 📝 Build product catalog
6. 📝 Implement shopping cart
7. 📝 Setup order management
8. 📝 Add order tracking

## Support & Resources

- **React Documentation**: https://react.dev
- **Express.js Guide**: https://expressjs.com/
- **Tailwind CSS**: https://tailwindcss.com/
- **Sequelize ORM**: https://sequelize.org/
- **MySQL Documentation**: https://dev.mysql.com/

## Contributing

When contributing code:
1. Create a feature branch
2. Follow existing code style
3. Write meaningful commit messages
4. Submit a pull request

## License

MIT License - See LICENSE file for details

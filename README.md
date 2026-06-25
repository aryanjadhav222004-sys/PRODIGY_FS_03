# PRODIGY_FS_03 - E-Commerce Platform

## Project Overview

A responsive full-stack e-commerce website for local stores with comprehensive product browsing, shopping cart, order management, and real-time order tracking capabilities.

## Features

### Core Features
- ✅ User Registration & Login with JWT Authentication
- ✅ Product Catalog with Search & Filter
- ✅ Shopping Cart Management
- ✅ Secure Checkout
- ✅ Order Tracking System
- ✅ Mobile-Responsive Design

### Advanced Features
- 🔄 Wishlist Functionality
- ⭐ Product Reviews & Ratings
- 🛍️ Order History
- 📱 Mobile-First UI
- 🌙 Dark Mode Support

## Tech Stack

### Frontend
- **React.js 18** (Vite)
- **Tailwind CSS** - Responsive styling
- **React Router v6** - Client-side routing
- **Axios** - HTTP client
- **React Query** - Server state management
- **React Hook Form** - Form management
- **React Toastify** - Notifications

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### Database
- **MySQL 8.0** - Database (localhost)
- **Sequelize ORM** - Database abstraction

### Additional Services
- **Cloudinary** - Image storage & CDN
- **Razorpay/Stripe** (Optional) - Payment gateway

## Project Structure

```
PRODIGY_FS_03/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   ├── Footer/
│   │   │   ├── ProductCard/
│   │   │   ├── OrderTracker/
│   │   │   ├── CartDrawer/
│   │   │   └── common/
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── Products/
│   │   │   ├── ProductDetails/
│   │   │   ├── Cart/
│   │   │   ├── Checkout/
│   │   │   ├── Orders/
│   │   │   └── Auth/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   └── reviewController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── cart.js
│   │   ├── orders.js
│   │   └── reviews.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   ├── OrderItem.js
│   │   ├── Review.js
│   │   ├── Cart.js
│   │   └── Wishlist.js
│   ├── config/
│   │   └── database.js
│   ├── migrations/
│   ├── seeders/
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── database/
│   └── ecommerce.sql
└── .gitignore
```

## Color Scheme

```
Primary:      #4F46E5 (Indigo)
Secondary:    #1E293B (Dark Slate)
Accent:       #F97316 (Orange)
Background:   #F8FAFC (Light Gray)
Success:      #22C55E (Green)
Danger:       #EF4444 (Red)
Text:         #0F172A (Dark Blue)
```

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Order Tracking System

### Order Status Flow
```
Order Placed → Processing → Packed → Shipped → Out For Delivery → Delivered
```

### Tracking ID Format
- Format: `ORD` + YYYYMM + sequence number
- Examples: ORD202600001, ORD202600002, ORD202600003

## Installation & Setup

### Prerequisites
- Node.js v16+ and npm
- MySQL 8.0
- Git

### Backend Setup
```bash
cd server
npm install
cp .env.example .env
# Configure your .env file with database credentials
npm run dev
```

### Frontend Setup
```bash
cd client
npm install
npm run dev
```

## Database Setup

```bash
mysql -u root -p < database/ecommerce.sql
```

## Environment Variables

### Server (.env)
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=ecommerce
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Development Workflow

1. Create feature branches: `git checkout -b feature/feature-name`
2. Commit changes: `git commit -m "description"`
3. Push to branch: `git push origin feature/feature-name`
4. Create Pull Request

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, please reach out to the project maintainers.

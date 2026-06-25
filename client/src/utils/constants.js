// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
export const APP_NAME = import.meta.env.VITE_APP_NAME || 'ShopHub';

// Status Messages
export const ORDER_STATUS = {
  PLACED: 'placed',
  PROCESSING: 'processing',
  PACKED: 'packed',
  SHIPPED: 'shipped',
  OUT_FOR_DELIVERY: 'out_for_delivery',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

export const ORDER_STATUS_LABELS = {
  placed: 'Order Placed',
  processing: 'Processing',
  packed: 'Packed',
  shipped: 'Shipped',
  out_for_delivery: 'Out For Delivery',
  delivered: 'Delivered',
  cancelled: 'Cancelled',
};

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
};

// Categories
export const CATEGORIES = [
  { id: 1, name: 'Electronics', slug: 'electronics' },
  { id: 2, name: 'Fashion', slug: 'fashion' },
  { id: 3, name: 'Home & Kitchen', slug: 'home-kitchen' },
  { id: 4, name: 'Sports & Outdoors', slug: 'sports-outdoors' },
  { id: 5, name: 'Books', slug: 'books' },
  { id: 6, name: 'Toys & Games', slug: 'toys-games' },
];

// Sorting Options
export const SORT_OPTIONS = [
  { value: 'popularity', label: 'Most Popular' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

// Price Range
export const PRICE_RANGES = [
  { min: 0, max: 500, label: '₹0 - ₹500' },
  { min: 500, max: 1000, label: '₹500 - ₹1000' },
  { min: 1000, max: 5000, label: '₹1000 - ₹5000' },
  { min: 5000, max: 10000, label: '₹5000 - ₹10000' },
  { min: 10000, max: Infinity, label: '₹10000+' },
];

// Demo Credentials
export const DEMO_CREDENTIALS = {
  email: 'demo@example.com',
  password: 'demo123', // Note: Update this if you change the hash
};

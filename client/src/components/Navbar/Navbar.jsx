import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">ShopHub</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary transition">
              Products
            </Link>
            <Link to="/orders" className="text-gray-700 hover:text-primary transition">
              Orders
            </Link>
          </div>

          <div className="hidden md:flex items-center bg-background rounded-lg px-4 py-2">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="ml-2 bg-transparent outline-none w-48"
            />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/cart" className="relative text-gray-700 hover:text-primary transition">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-danger text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-primary transition">
              <User size={24} />
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-background rounded"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-4 py-2 text-gray-700 hover:bg-background rounded"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/orders"
              className="block px-4 py-2 text-gray-700 hover:bg-background rounded"
              onClick={() => setIsOpen(false)}
            >
              Orders
            </Link>
            <Link
              to="/cart"
              className="block px-4 py-2 text-gray-700 hover:bg-background rounded"
              onClick={() => setIsOpen(false)}
            >
              Cart
            </Link>
            <Link
              to="/login"
              className="block px-4 py-2 text-gray-700 hover:bg-background rounded"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
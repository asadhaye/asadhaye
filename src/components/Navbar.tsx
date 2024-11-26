import React from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-indigo-600">eTail Co</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="/services" className="text-gray-700 hover:text-indigo-600">Services</a>
            <a href="/portfolio" className="text-gray-700 hover:text-indigo-600">Portfolio</a>
            <a href="/blog" className="text-gray-700 hover:text-indigo-600">Blog</a>
            <a href="/contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-indigo-600">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-indigo-600">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-indigo-600"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</a>
            <a href="/services" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Services</a>
            <a href="/portfolio" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Portfolio</a>
            <a href="/blog" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Blog</a>
            <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
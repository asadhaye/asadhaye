import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">eTail Co</h3>
            <p className="text-gray-400">
              Transforming businesses through innovative e-commerce solutions and digital marketing strategies.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/portfolio" className="text-gray-400 hover:text-white">Portfolio</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/services/web-development" className="text-gray-400 hover:text-white">Web Development</a></li>
              <li><a href="/services/ai-solutions" className="text-gray-400 hover:text-white">AI Solutions</a></li>
              <li><a href="/services/digital-marketing" className="text-gray-400 hover:text-white">Digital Marketing</a></li>
              <li><a href="/services/ecommerce" className="text-gray-400 hover:text-white">E-commerce Setup</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: contact@asadhaye.com</p>
              <p>Phone: +92 (313) 844-4321</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-indigo-400"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="hover:text-indigo-400"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="hover:text-indigo-400"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="hover:text-indigo-400"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="hover:text-indigo-400"><Mail className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} eTail Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

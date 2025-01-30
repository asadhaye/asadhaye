import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

// Constants
const CONTACT_EMAIL = 'contact@asadhaye.com';
const CONTACT_PHONE = '+92 (313) 844-4321';
const CURRENT_YEAR = new Date().getFullYear();

// Utility function for social media links
const SocialLink = ({ href, Icon }) => (
  <a href={href} className="hover:text-indigo-400">
    <Icon className="h-5 w-5" />
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <section>
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">eTail Co</h3>
            <p className="text-gray-400">
              Transforming businesses through innovative e-commerce solutions and digital marketing strategies.
            </p>
          </section>
          <nav>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </nav>
          <nav>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/web-development" className="text-gray-400 hover:text-white">Web Development</Link></li>
              <li><Link to="/services/ai-solutions" className="text-gray-400 hover:text-white">AI Solutions</Link></li>
              <li><Link to="/services/digital-marketing" className="text-gray-400 hover:text-white">Digital Marketing</Link></li>
              <li><Link to="/services/ecommerce" className="text-gray-400 hover:text-white">E-commerce Setup</Link></li>
            </ul>
          </nav>
          <section>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: {CONTACT_EMAIL}</p>
              <p>Phone: {CONTACT_PHONE}</p>
              <div className="flex space-x-4 mt-4">
                <SocialLink href="#" Icon={Facebook} />
                <SocialLink href="#" Icon={Twitter} />
                <SocialLink href="#" Icon={Instagram} />
                <SocialLink href="#" Icon={Linkedin} />
                <SocialLink href="#" Icon={Mail} />
              </div>
            </div>
          </section>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {CURRENT_YEAR} eTail Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

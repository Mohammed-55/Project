import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">WholesaleHub</h3>
            <p className="text-gray-300 text-sm">
              The leading B2B marketplace connecting suppliers and buyers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="text-gray-300 hover:text-white">Products</Link></li>
              <li><Link to="/suppliers" className="text-gray-300 hover:text-white">Suppliers</Link></li>
              <li><Link to="/categories" className="text-gray-300 hover:text-white">Categories</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-md font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-gray-300 hover:text-white">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Trust & Security */}
          <div>
            <h4 className="text-md font-semibold mb-4">Trust & Security</h4>
            <div className="flex space-x-4">
              <div className="bg-gray-800 px-3 py-2 rounded text-xs">
                Secure Payments
              </div>
              <div className="bg-gray-800 px-3 py-2 rounded text-xs">
                Verified Suppliers
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 WholesaleHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


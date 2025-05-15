import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Instait</h3>
            <p className="text-sm text-gray-600">
              Fast grocery delivery at your doorstep
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-instait-purple">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/stores" className="text-sm text-gray-600 hover:text-instait-purple">
                  Stores
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm text-gray-600 hover:text-instait-purple">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Business</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/vendor/login" className="text-sm text-gray-600 hover:text-instait-purple">
                  Vendor Login
                </Link>
              </li>
              <li>
                <Link to="/delivery/login" className="text-sm text-gray-600 hover:text-instait-purple">
                  Become a Delivery Partner
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-600">
              Email: support@instait.com
            </p>
            <p className="text-sm text-gray-600">
              Phone: +1-123-456-7890
            </p>
          </div>
        </div>
        <button></button>
        
        <div className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-sm text-center text-gray-500">
            &copy; {new Date().getFullYear()} Instait. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="social-icon">
              <Instagram />
            </a>
            <a href="#" className="social-icon">
              <Linkedin />
            </a>
            <a href="#" className="social-icon">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
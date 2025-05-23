import React from 'react';
export const Footer = () => {
  return <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Nidhi
              <span className="bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] bg-clip-text text-transparent">
                Finance
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Empowering financial growth through trusted partnerships and
              innovative solutions.
            </p>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-300 flex items-center">
                <span className="font-medium mr-2">Address:</span> 123 Finance
                Street, Mumbai, India
              </p>
              <p className="text-gray-600 dark:text-gray-300 flex items-center">
                <span className="font-medium mr-2">Email:</span>{' '}
                contact@nidhifinance.com
              </p>
              <p className="text-gray-600 dark:text-gray-300 flex items-center">
                <span className="font-medium mr-2">Phone:</span> +91 1234567890
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#4A00E0] dark:hover:text-[#8E2DE2]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#4A00E0] dark:hover:text-[#8E2DE2]">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#4A00E0] dark:hover:text-[#8E2DE2]">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#4A00E0] dark:hover:text-[#8E2DE2]">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#4A00E0] dark:hover:text-[#8E2DE2]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#4A00E0] dark:hover:text-[#8E2DE2]">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#4A00E0] dark:hover:text-[#8E2DE2]">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#4A00E0] dark:hover:text-[#8E2DE2]">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2023 Nidhi Finance. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 md:mt-0">
          <a href="https://www.bhargix.com" target='_blank'>   Made with ❤️ by Bhargix</a>
          </p>
        </div>
      </div>
    </footer>;
};
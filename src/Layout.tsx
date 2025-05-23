import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { useTheme } from './ThemeProvider';
import { MenuIcon, XIcon, BellIcon, UserIcon } from 'lucide-react';
import { Footer } from './Footer';
export const Layout = ({
  children,
  onLogout
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const {
    theme
  } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const getPageTitle = () => {
    const path = location.pathname.split('/')[1];
    return path.charAt(0).toUpperCase() + path.slice(1);
  };
  return <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      {/* Sidebar - Now properly responsive */}
      <div className={`fixed inset-y-0 left-0 z-30 transition-transform duration-300 ease-in-out transform 
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} onLogout={onLogout} />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="bg-white dark:bg-gray-800 shadow-sm z-20">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={toggleSidebar} className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
                {sidebarOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
              <h1 className="ml-4 text-xl font-semibold text-gray-800 dark:text-white">
                {getPageTitle()}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none relative">
                <BellIcon className="h-6 w-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] flex items-center justify-center cursor-pointer" onClick={() => navigate('/profile')}>
                <UserIcon className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </header>
        <main className={`flex-1 overflow-y-auto transition-all duration-200 
          ${sidebarOpen ? 'md:ml-0' : 'md:ml-0'} 
          relative`}>
          <div className="px-4 sm:px-6 lg:px-8 py-8">{children}</div>
          <Footer />
        </main>
      </div>
    </div>;
};
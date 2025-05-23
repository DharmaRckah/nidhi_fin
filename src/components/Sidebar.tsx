import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, UsersIcon, UserIcon, BriefcaseIcon, BarChartIcon, SettingsIcon, LogOutIcon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
export const Sidebar = ({
  isOpen,
  onToggle,
  onLogout
}) => {
  const {
    theme
  } = useTheme();
  const navItems = [{
    name: 'Dashboard',
    path: '/dashboard',
    icon: <HomeIcon className="h-5 w-5" />
  }, {
    name: 'Customers',
    path: '/customers',
    icon: <UsersIcon className="h-5 w-5" />
  }, {
    name: 'Staff',
    path: '/staff',
    icon: <UserIcon className="h-5 w-5" />
  }, {
    name: 'Loans',
    path: '/loans',
    icon: <BriefcaseIcon className="h-5 w-5" />
  }, {
    name: 'Reports',
    path: '/reports',
    icon: <BarChartIcon className="h-5 w-5" />
  }, {
    name: 'Profile',
    path: '/profile',
    icon: <UserIcon className="h-5 w-5" />
  }, {
    name: 'Settings',
    path: '/settings',
    icon: <SettingsIcon className="h-5 w-5" />
  }];
  return <div className="w-64 h-full bg-white dark:bg-gray-800 shadow-lg flex flex-col">
      <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Nidhi
          <span className="bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] bg-clip-text text-transparent">
            Finance
          </span>
        </h1>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {navItems.map(item => <NavLink key={item.name} to={item.path} className={({
        isActive
      }) => `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${isActive ? 'bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] text-white shadow-lg' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
            {item.icon}
            <span className="ml-3">{item.name}</span>
          </NavLink>)}
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button onClick={onLogout} className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
          <LogOutIcon className="h-5 w-5" />
          <span className="ml-3">Logout</span>
        </button>
      </div>
    </div>;
};
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Toggle } from '../components/ui/Toggle';
import { toast } from '../components/ui/Toaster';
import { useTheme } from '../components/ThemeProvider';
import { BellIcon, MoonIcon, SunIcon, SidebarIcon, LogOutIcon } from 'lucide-react';
export const SettingsPage = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const handleSaveSettings = () => {
    toast.success('Settings saved successfully');
  };
  const handleLogout = () => {
    // In a real application, this would handle logout
    toast.info('Logging out...');
    setTimeout(() => {
      window.location.href = '/login';
    }, 1000);
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Settings
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Appearance Settings */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              Appearance
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Dark Mode
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Toggle between light and dark mode
                  </p>
                </div>
                <Toggle checked={theme === 'dark'} onChange={toggleTheme} label="" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Sidebar Mode
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Toggle between expanded and collapsed sidebar
                  </p>
                </div>
                <Toggle checked={sidebarCollapsed} onChange={checked => setSidebarCollapsed(checked)} label="" />
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              Notifications
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Email Notifications
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Receive email notifications for important updates
                  </p>
                </div>
                <Toggle checked={notificationsEnabled} onChange={checked => setNotificationsEnabled(checked)} label="" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Push Notifications
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Receive push notifications for important updates
                  </p>
                </div>
                <Toggle checked={true} onChange={() => {}} label="" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Security Settings */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">
            Security
          </h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Two-Factor Authentication
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Toggle checked={false} onChange={() => {}} label="" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Session Timeout
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Automatically log out after 30 minutes of inactivity
                </p>
              </div>
              <Toggle checked={true} onChange={() => {}} label="" />
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Save Settings & Logout */}
      <div className="flex justify-between">
        <Button variant="primary" onClick={handleSaveSettings}>
          Save Settings
        </Button>
        <Button variant="outline" className="text-red-500" onClick={handleLogout}>
          <LogOutIcon className="h-4 w-4 mr-2" /> Logout
        </Button>
      </div>
    </div>;
};
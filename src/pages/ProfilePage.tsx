import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { toast } from '../components/ui/Toaster';
import { UserIcon, LockIcon, KeyIcon } from 'lucide-react';
export const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  // Sample profile data
  const [profile, setProfile] = useState({
    name: 'Dharmendra',
    email: 'dharmendra@example.com',
    phone: '6268301540',
    role: 'Administrator',
    joinedDate: 'January 15, 2022'
  });
  const handleEditProfile = () => {
    setIsEditing(true);
  };
  const handleSaveProfile = e => {
    e.preventDefault();
    // In a real application, this would save the profile data
    setIsEditing(false);
    toast.success('Profile updated successfully');
  };
  const handleChangePassword = e => {
    e.preventDefault();
    // In a real application, this would change the password
    setChangePasswordModal(false);
    toast.success('Password changed successfully');
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Profile
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                Profile Information
              </h2>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveProfile}>
                <div className="space-y-4">
                  <Input type="text" label="Name" value={profile.name} onChange={e => setProfile({
                  ...profile,
                  name: e.target.value
                })} disabled={!isEditing} fullWidth />
                  <Input type="email" label="Email" value={profile.email} onChange={e => setProfile({
                  ...profile,
                  email: e.target.value
                })} disabled={!isEditing} fullWidth />
                  <Input type="tel" label="Phone" value={profile.phone} onChange={e => setProfile({
                  ...profile,
                  phone: e.target.value
                })} disabled={!isEditing} fullWidth />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Role
                    </label>
                    <p className="text-gray-900 dark:text-white">
                      {profile.role}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Joined Date
                    </label>
                    <p className="text-gray-900 dark:text-white">
                      {profile.joinedDate}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  {isEditing ? <>
                      <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                      <Button type="submit" variant="primary">
                        Save Changes
                      </Button>
                    </> : <Button type="button" variant="primary" onClick={handleEditProfile}>
                      Edit Profile
                    </Button>}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        {/* Profile Card */}
        <div>
          <Card neumorphic>
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] flex items-center justify-center mb-4">
                <UserIcon className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {profile.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{profile.role}</p>
              <div className="w-full border-t border-gray-200 dark:border-gray-700 my-4"></div>
              <div className="w-full space-y-2">
                <div className="flex items-center">
                  <span className="text-gray-500 dark:text-gray-400 w-16">
                    Email:
                  </span>
                  <span className="text-gray-900 dark:text-white truncate">
                    {profile.email}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 dark:text-gray-400 w-16">
                    Phone:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {profile.phone}
                  </span>
                </div>
              </div>
              <Button variant="outline" className="mt-6 w-full" onClick={() => setChangePasswordModal(true)}>
                <KeyIcon className="h-4 w-4 mr-2" /> Change Password
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Activity Log */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">
            Recent Activity
          </h2>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Action
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    IP Address
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    Login
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    Today, 10:30 AM
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    192.168.1.1
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    Updated Customer Record
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    Yesterday, 3:45 PM
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    192.168.1.1
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    Generated Report
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    Yesterday, 2:30 PM
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    192.168.1.1
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      {/* Change Password Modal */}
      {changePasswordModal && <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={() => setChangePasswordModal(false)}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center">
                  <LockIcon className="h-5 w-5 mr-2" /> Change Password
                </h3>
              </div>
              <form onSubmit={handleChangePassword}>
                <div className="px-6 py-4">
                  <div className="space-y-4">
                    <Input type="password" label="Current Password" placeholder="Enter your current password" required fullWidth />
                    <Input type="password" label="New Password" placeholder="Enter new password" required fullWidth />
                    <Input type="password" label="Confirm New Password" placeholder="Confirm new password" required fullWidth />
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-3">
                  <Button type="button" variant="outline" onClick={() => setChangePasswordModal(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary">
                    Change Password
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>}
    </div>;
};
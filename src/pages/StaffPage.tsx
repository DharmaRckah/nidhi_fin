import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Modal } from '../components/ui/Modal';
import { toast } from '../components/ui/Toaster';
import { PlusIcon, SearchIcon, EditIcon, TrashIcon } from 'lucide-react';
export const StaffPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [staffModal, setStaffModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  // Sample data
  const staffMembers = [{
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '(123) 456-7890',
    role: 'Loan Officer',
    status: 'Active'
  }, {
    id: 2,
    name: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    phone: '(234) 567-8901',
    role: 'Account Manager',
    status: 'Active'
  }, {
    id: 3,
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    phone: '(345) 678-9012',
    role: 'Loan Officer',
    status: 'Inactive'
  }, {
    id: 4,
    name: 'Lisa Davis',
    email: 'lisa.davis@example.com',
    phone: '(456) 789-0123',
    role: 'Administrator',
    status: 'Active'
  }, {
    id: 5,
    name: 'Robert Wilson',
    email: 'robert.wilson@example.com',
    phone: '(567) 890-1234',
    role: 'Account Manager',
    status: 'Active'
  }];
  const filteredStaff = staffMembers.filter(staff => staff.name.toLowerCase().includes(searchTerm.toLowerCase()) || staff.email.toLowerCase().includes(searchTerm.toLowerCase()) || staff.role.toLowerCase().includes(searchTerm.toLowerCase()));
  const handleAddStaff = () => {
    setIsEditing(false);
    setSelectedStaff(null);
    setStaffModal(true);
  };
  const handleEditStaff = staff => {
    setIsEditing(true);
    setSelectedStaff(staff);
    setStaffModal(true);
  };
  const handleDeleteStaff = staff => {
    toast.success(`Staff member ${staff.name} deleted successfully`);
  };
  const handleSubmitStaff = e => {
    e.preventDefault();
    if (isEditing) {
      toast.success('Staff member updated successfully');
    } else {
      toast.success('Staff member added successfully');
    }
    setStaffModal(false);
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Staff
        </h1>
        <Button variant="primary" size="sm" onClick={handleAddStaff}>
          <PlusIcon className="h-4 w-4 mr-2" /> Add Staff
        </Button>
      </div>
      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
        <Input type="text" placeholder="Search staff..." className="pl-10" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} fullWidth />
      </div>
      {/* Staff Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredStaff.map(staff => <tr key={staff.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {staff.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {staff.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {staff.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {staff.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${staff.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:bg-opacity-20 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:bg-opacity-20 dark:text-red-400'}`}>
                        {staff.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button onClick={() => handleEditStaff(staff)} className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 mr-3">
                        <EditIcon className="h-5 w-5" />
                      </button>
                      <button onClick={() => handleDeleteStaff(staff)} className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300">
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      {/* Add/Edit Staff Modal */}
      <Modal isOpen={staffModal} onClose={() => setStaffModal(false)} title={isEditing ? 'Edit Staff Member' : 'Add Staff Member'}>
        <form onSubmit={handleSubmitStaff}>
          <div className="space-y-4">
            <Input type="text" label="Name" placeholder="Enter name" defaultValue={selectedStaff?.name || ''} required fullWidth />
            <Input type="email" label="Email" placeholder="Enter email" defaultValue={selectedStaff?.email || ''} required fullWidth />
            <Input type="tel" label="Phone" placeholder="Enter phone number" defaultValue={selectedStaff?.phone || ''} required fullWidth />
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Role
              </label>
              <select className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4A00E0] focus:border-transparent" defaultValue={selectedStaff?.role || ''} required>
                <option value="">Select a role</option>
                <option value="Administrator">Administrator</option>
                <option value="Loan Officer">Loan Officer</option>
                <option value="Account Manager">Account Manager</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Status
              </label>
              <select className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4A00E0] focus:border-transparent" defaultValue={selectedStaff?.status || 'Active'}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <Button type="button" variant="outline" onClick={() => setStaffModal(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                {isEditing ? 'Update' : 'Add'} Staff Member
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>;
};
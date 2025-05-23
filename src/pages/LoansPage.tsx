import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Modal } from '../components/ui/Modal';
import { toast } from '../components/ui/Toaster';
import { PlusIcon, SearchIcon, EditIcon, TrashIcon } from 'lucide-react';
export const LoansPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loanTypeModal, setLoanTypeModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedLoanType, setSelectedLoanType] = useState(null);
  // Sample data for loan types
  const loanTypes = [{
    id: 1,
    name: 'Personal Loan',
    interestRate: '12%',
    duration: '12-60 months',
    minAmount: '$1,000',
    maxAmount: '$50,000',
    description: 'General purpose loans for personal expenses'
  }, {
    id: 2,
    name: 'Business Loan',
    interestRate: '10%',
    duration: '12-84 months',
    minAmount: '$10,000',
    maxAmount: '$500,000',
    description: 'Financing for business growth and operations'
  }, {
    id: 3,
    name: 'Vehicle Loan',
    interestRate: '8%',
    duration: '12-72 months',
    minAmount: '$5,000',
    maxAmount: '$100,000',
    description: 'Loans for purchasing cars, trucks, and other vehicles'
  }, {
    id: 4,
    name: 'Home Loan',
    interestRate: '5%',
    duration: '60-360 months',
    minAmount: '$50,000',
    maxAmount: '$1,000,000',
    description: 'Mortgages for home purchase or renovation'
  }];
  const filteredLoanTypes = loanTypes.filter(loan => loan.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const handleAddLoanType = () => {
    setIsEditing(false);
    setSelectedLoanType(null);
    setLoanTypeModal(true);
  };
  const handleEditLoanType = loanType => {
    setIsEditing(true);
    setSelectedLoanType(loanType);
    setLoanTypeModal(true);
  };
  const handleDeleteLoanType = loanType => {
    toast.success(`Loan type ${loanType.name} deleted successfully`);
  };
  const handleSubmitLoanType = e => {
    e.preventDefault();
    if (isEditing) {
      toast.success('Loan type updated successfully');
    } else {
      toast.success('Loan type added successfully');
    }
    setLoanTypeModal(false);
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Loan Management
        </h1>
        <Button variant="primary" size="sm" onClick={handleAddLoanType}>
          <PlusIcon className="h-4 w-4 mr-2" /> Add Loan Type
        </Button>
      </div>
      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
        <Input type="text" placeholder="Search loan types..." className="pl-10" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} fullWidth />
      </div>
      {/* Loan Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredLoanTypes.map(loanType => <Card key={loanType.id} neumorphic className="overflow-hidden">
            <CardHeader className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {loanType.name}
              </h3>
              <div className="flex space-x-2">
                <button onClick={() => handleEditLoanType(loanType)} className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300">
                  <EditIcon className="h-5 w-5" />
                </button>
                <button onClick={() => handleDeleteLoanType(loanType)} className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300">
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </CardHeader>
            <CardContent className="pb-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Interest Rate
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {loanType.interestRate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Duration
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {loanType.duration}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Amount Range
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {loanType.minAmount} - {loanType.maxAmount}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                  {loanType.description}
                </p>
              </div>
            </CardContent>
          </Card>)}
      </div>
      {/* Add/Edit Loan Type Modal */}
      <Modal isOpen={loanTypeModal} onClose={() => setLoanTypeModal(false)} title={isEditing ? 'Edit Loan Type' : 'Add Loan Type'}>
        <form onSubmit={handleSubmitLoanType}>
          <div className="space-y-4">
            <Input type="text" label="Name" placeholder="Enter loan type name" defaultValue={selectedLoanType?.name || ''} required fullWidth />
            <Input type="text" label="Interest Rate" placeholder="e.g., 12%" defaultValue={selectedLoanType?.interestRate || ''} required fullWidth />
            <Input type="text" label="Duration" placeholder="e.g., 12-60 months" defaultValue={selectedLoanType?.duration || ''} required fullWidth />
            <div className="grid grid-cols-2 gap-4">
              <Input type="text" label="Minimum Amount" placeholder="e.g., $1,000" defaultValue={selectedLoanType?.minAmount || ''} required fullWidth />
              <Input type="text" label="Maximum Amount" placeholder="e.g., $50,000" defaultValue={selectedLoanType?.maxAmount || ''} required fullWidth />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4A00E0] focus:border-transparent" rows={3} placeholder="Enter a description" defaultValue={selectedLoanType?.description || ''} required></textarea>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <Button type="button" variant="outline" onClick={() => setLoanTypeModal(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                {isEditing ? 'Update' : 'Add'} Loan Type
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>;
};
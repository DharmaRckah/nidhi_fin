import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Modal } from '../components/ui/Modal';
import { toast } from '../components/ui/Toaster';
import { PlusIcon, SearchIcon, EditIcon, TrashIcon, EyeIcon } from 'lucide-react';
export const CustomersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [detailsModal, setDetailsModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [transactionId, setTransactionId] = useState('');
  // Sample data
  const customers = [{
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    loanType: 'Personal',
    loanAmount: '$5,000',
    status: 'Active'
  }, {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '(234) 567-8901',
    loanType: 'Business',
    loanAmount: '$15,000',
    status: 'Active'
  }, {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    phone: '(345) 678-9012',
    loanType: 'Vehicle',
    loanAmount: '$12,000',
    status: 'Pending'
  }, {
    id: 4,
    name: 'Sarah Williams',
    email: 'sarah.williams@example.com',
    phone: '(456) 789-0123',
    loanType: 'Home',
    loanAmount: '$200,000',
    status: 'Active'
  }, {
    id: 5,
    name: 'Robert Brown',
    email: 'robert.brown@example.com',
    phone: '(567) 890-1234',
    loanType: 'Personal',
    loanAmount: '$3,500',
    status: 'Completed'
  }, {
    id: 6,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '(678) 901-2345',
    loanType: 'Business',
    loanAmount: '$25,000',
    status: 'Active'
  }, {
    id: 7,
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    phone: '(789) 012-3456',
    loanType: 'Vehicle',
    loanAmount: '$18,000',
    status: 'Pending'
  }, {
    id: 8,
    name: 'Linda Miller',
    email: 'linda.miller@example.com',
    phone: '(890) 123-4567',
    loanType: 'Home',
    loanAmount: '$175,000',
    status: 'Active'
  }, {
    id: 9,
    name: 'James Taylor',
    email: 'james.taylor@example.com',
    phone: '(901) 234-5678',
    loanType: 'Personal',
    loanAmount: '$7,500',
    status: 'Completed'
  }, {
    id: 10,
    name: 'Patricia Anderson',
    email: 'patricia.anderson@example.com',
    phone: '(012) 345-6789',
    loanType: 'Business',
    loanAmount: '$30,000',
    status: 'Active'
  }];
  const filteredCustomers = customers.filter(customer => customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || customer.email.toLowerCase().includes(searchTerm.toLowerCase()) || customer.phone.includes(searchTerm));
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCustomers = filteredCustomers.slice(startIndex, startIndex + itemsPerPage);
  const handleViewDetails = customer => {
    setSelectedCustomer(customer);
    setDetailsModal(true);
  };
  const handleCloseDetails = () => {
    setDetailsModal(false);
    setSelectedCustomer(null);
  };
  const handleOpenPaymentModal = () => {
    setDetailsModal(false);
    setPaymentModal(true);
  };
  const handlePayment = e => {
    e.preventDefault();
    toast.success('Payment recorded successfully');
    setPaymentModal(false);
  };
  const handleDeleteCustomer = () => {
    toast.success('Customer deleted successfully');
    setDetailsModal(false);
  };
  const handleMarkPaid = () => {
    toast.success('Loan marked as paid');
    setDetailsModal(false);
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Customers
        </h1>
        <Button variant="primary" size="sm">
          <PlusIcon className="h-4 w-4 mr-2" /> Add Customer
        </Button>
      </div>
      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
        <Input type="text" placeholder="Search customers..." className="pl-10" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} fullWidth />
      </div>
      {/* Customers Table */}
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
                    Loan Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Loan Amount
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
                {paginatedCustomers.map(customer => <tr key={customer.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-150" onClick={() => handleViewDetails(customer)}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {customer.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {customer.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {customer.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {customer.loanType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {customer.loanAmount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${customer.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:bg-opacity-20 dark:text-green-400' : customer.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:bg-opacity-20 dark:text-yellow-400' : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:bg-opacity-20 dark:text-gray-400'}`}>
                        {customer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      <button onClick={e => {
                    e.stopPropagation();
                    handleViewDetails(customer);
                  }} className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 mr-3">
                        <EyeIcon className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      {/* Pagination */}
      {totalPages > 1 && <div className="flex items-center justify-between">
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className={`px-4 py-2 text-sm rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
            Previous
          </button>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className={`px-4 py-2 text-sm rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
            Next
          </button>
        </div>}
      {/* Customer Details Modal */}
      {selectedCustomer && <Modal isOpen={detailsModal} onClose={handleCloseDetails} title="Customer Details" size="lg">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Personal Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Name
                    </p>
                    <p className="text-base text-gray-900 dark:text-white">
                      {selectedCustomer.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Email
                    </p>
                    <p className="text-base text-gray-900 dark:text-white">
                      {selectedCustomer.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Phone
                    </p>
                    <p className="text-base text-gray-900 dark:text-white">
                      {selectedCustomer.phone}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Loan Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Loan Type
                    </p>
                    <p className="text-base text-gray-900 dark:text-white">
                      {selectedCustomer.loanType}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Loan Amount
                    </p>
                    <p className="text-base text-gray-900 dark:text-white">
                      {selectedCustomer.loanAmount}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Status
                    </p>
                    <p className="text-base text-gray-900 dark:text-white">
                      {selectedCustomer.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Payment History
              </h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Last payment: $500 on {new Date().toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                  Next payment due: $500 on{' '}
                  {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-end">
              <Button variant="outline" onClick={handleCloseDetails}>
                Close
              </Button>
              <Button variant="danger" onClick={handleDeleteCustomer}>
                <TrashIcon className="h-4 w-4 mr-2" /> Delete
              </Button>
              <Button variant="secondary" onClick={handleOpenPaymentModal}>
                Record Payment
              </Button>
              <Button variant="primary" onClick={handleMarkPaid}>
                Mark as Paid
              </Button>
            </div>
          </div>
        </Modal>}
      {/* Payment Modal */}
      <Modal isOpen={paymentModal} onClose={() => setPaymentModal(false)} title="Record Payment">
        <form onSubmit={handlePayment}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Customer
              </label>
              <p className="text-base text-gray-900 dark:text-white">
                {selectedCustomer?.name}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Payment Method
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio" name="paymentMethod" value="cash" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    Cash
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio" name="paymentMethod" value="online" checked={paymentMethod === 'online'} onChange={() => setPaymentMethod('online')} />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    Online
                  </span>
                </label>
              </div>
            </div>
            <Input type="text" label="Amount" placeholder="Enter amount" required fullWidth />
            {paymentMethod === 'online' && <Input type="text" label="Transaction ID" placeholder="Enter transaction ID" value={transactionId} onChange={e => setTransactionId(e.target.value)} required fullWidth />}
            <div className="flex justify-end space-x-3 mt-6">
              <Button type="button" variant="outline" onClick={() => setPaymentModal(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Record Payment
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>;
};
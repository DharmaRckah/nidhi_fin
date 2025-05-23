import React from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { UsersIcon, BriefcaseIcon, DollarSignIcon, TrendingUpIcon } from 'lucide-react';
export const Dashboard = () => {
  // Sample data
  const stats = [{
    title: 'Total Customers',
    value: '1,254',
    change: '+12%',
    icon: <UsersIcon className="h-6 w-6 text-blue-500" />
  }, {
    title: 'Active Loans',
    value: '842',
    change: '+5%',
    icon: <BriefcaseIcon className="h-6 w-6 text-purple-500" />
  }, {
    title: 'Revenue',
    value: '$125,430',
    change: '+8%',
    icon: <DollarSignIcon className="h-6 w-6 text-green-500" />
  }, {
    title: 'Loan Applications',
    value: '38',
    change: '+15%',
    icon: <TrendingUpIcon className="h-6 w-6 text-orange-500" />
  }];
  const recentActivity = [{
    customer: 'John Doe',
    type: 'Loan Payment',
    amount: '$1,200',
    date: '10 mins ago'
  }, {
    customer: 'Jane Smith',
    type: 'New Loan Application',
    amount: '$5,000',
    date: '2 hours ago'
  }, {
    customer: 'Mike Johnson',
    type: 'Account Update',
    amount: '-',
    date: '5 hours ago'
  }, {
    customer: 'Sarah Williams',
    type: 'Loan Approval',
    amount: '$10,000',
    date: 'Yesterday'
  }, {
    customer: 'Robert Brown',
    type: 'Loan Payment',
    amount: '$850',
    date: 'Yesterday'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => <Card key={index} neumorphic>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {stat.value}
                  </p>
                </div>
                <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700">
                  {stat.icon}
                </div>
              </div>
              <div className="mt-4">
                <span className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change} since last month
                </span>
              </div>
            </CardContent>
          </Card>)}
      </div>
      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">
            Recent Activity
          </h2>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {recentActivity.map((item, index) => <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {item.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {item.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {item.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {item.date}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </Card>
    </div>;
};
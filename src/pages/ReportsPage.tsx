import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { FilterIcon, DownloadIcon } from 'lucide-react';
export const ReportsPage = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reportType, setReportType] = useState('all');
  const handleGenerateReport = () => {
    // In a real application, this would generate and download a report
    console.log('Generating report:', {
      startDate,
      endDate,
      reportType
    });
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Reports
        </h1>
      </div>
      {/* Report Filters */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium text-gray-900 dark:text-white flex items-center">
            <FilterIcon className="h-5 w-5 mr-2" /> Filter Reports
          </h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Start Date
              </label>
              <Input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} fullWidth />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                End Date
              </label>
              <Input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} fullWidth />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Report Type
              </label>
              <select className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4A00E0] focus:border-transparent" value={reportType} onChange={e => setReportType(e.target.value)}>
                <option value="all">All Reports</option>
                <option value="loans">Loan Reports</option>
                <option value="payments">Payment Reports</option>
                <option value="customers">Customer Reports</option>
              </select>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button variant="primary" onClick={handleGenerateReport}>
              <DownloadIcon className="h-4 w-4 mr-2" /> Generate Report
            </Button>
          </div>
        </CardContent>
      </Card>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card neumorphic>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Total Loans
            </h3>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                842
              </p>
              <p className="text-sm text-green-500">+5% from last month</p>
            </div>
          </CardContent>
        </Card>
        <Card neumorphic>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Revenue
            </h3>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                $125,430
              </p>
              <p className="text-sm text-green-500">+8% from last month</p>
            </div>
          </CardContent>
        </Card>
        <Card neumorphic>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Active Customers
            </h3>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                1,254
              </p>
              <p className="text-sm text-green-500">+12% from last month</p>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Loan Distribution
            </h3>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center">
            <div className="text-gray-500 dark:text-gray-400 text-center">
              <p className="mb-2">Pie Chart Placeholder</p>
              <p className="text-sm">
                In a real application, this would show a pie chart of loan types
                distribution
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Monthly Revenue
            </h3>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center">
            <div className="text-gray-500 dark:text-gray-400 text-center">
              <p className="mb-2">Bar Chart Placeholder</p>
              <p className="text-sm">
                In a real application, this would show a bar chart of monthly
                revenue
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Recent Reports
          </h3>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Report Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Generated On
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    Monthly Loan Report
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    May 1, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    Loans
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    <Button variant="outline" size="sm">
                      <DownloadIcon className="h-4 w-4 mr-2" /> Download
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    Customer Activity Report
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    April 28, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    Customers
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    <Button variant="outline" size="sm">
                      <DownloadIcon className="h-4 w-4 mr-2" /> Download
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    Payment Summary
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    April 15, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    Payments
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    <Button variant="outline" size="sm">
                      <DownloadIcon className="h-4 w-4 mr-2" /> Download
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>;
};
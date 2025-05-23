import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Footer } from '../components/Footer';
import { ChevronRightIcon, ShieldIcon, CreditCardIcon, TrendingUpIcon, CheckCircleIcon, UsersIcon, BuildingIcon } from 'lucide-react';
export const LandingPage = () => {
  const navigate = useNavigate();
  const features = [{
    icon: <ShieldIcon className="h-6 w-6 text-[#4A00E0]" />,
    title: 'Secure Transactions',
    description: 'Bank-grade security for all your financial transactions'
  }, {
    icon: <CreditCardIcon className="h-6 w-6 text-[#4A00E0]" />,
    title: 'Multiple Loan Options',
    description: 'Flexible loan solutions tailored to your needs'
  }, {
    icon: <TrendingUpIcon className="h-6 w-6 text-[#4A00E0]" />,
    title: 'Quick Processing',
    description: 'Fast loan approval and disbursement process'
  }, {
    icon: <BuildingIcon className="h-6 w-6 text-[#4A00E0]" />,
    title: 'Branch Network',
    description: 'Wide network of branches for your convenience'
  }, {
    icon: <UsersIcon className="h-6 w-6 text-[#4A00E0]" />,
    title: 'Expert Support',
    description: 'Dedicated team of financial advisors'
  }, {
    icon: <CheckCircleIcon className="h-6 w-6 text-[#4A00E0]" />,
    title: 'Transparent Process',
    description: 'Clear terms and conditions with no hidden charges'
  }];
  const loanTypes = [{
    name: 'Personal Loan',
    interest: '10.99%',
    duration: '1-5 years',
    minAmount: '₹50,000',
    maxAmount: '₹5,00,000'
  }, {
    name: 'Business Loan',
    interest: '11.99%',
    duration: '2-7 years',
    minAmount: '₹2,00,000',
    maxAmount: '₹50,00,000'
  }, {
    name: 'Home Loan',
    interest: '8.99%',
    duration: '5-20 years',
    minAmount: '₹5,00,000',
    maxAmount: '₹2,00,00,000'
  }];
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Nidhi
            <span className="bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] bg-clip-text text-transparent">
              Finance
            </span>
          </h1>
          <Button variant="primary" size="sm" onClick={() => navigate('/login')}>
            Login
          </Button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Trusted Partner in
            <span className="bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2] bg-clip-text text-transparent">
              {' '}
              Financial Growth
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Experience hassle-free loans with competitive interest rates and
            flexible repayment options. Let us help you achieve your financial
            goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" onClick={() => navigate('/login')}>
              Get Started <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Nidhi Finance?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <Card key={index} neumorphic className="p-6">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>
      {/* Loan Types Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Loan Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => <Card key={index} neumorphic className="overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2]" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {loan.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">
                        Interest Rate
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {loan.interest}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">
                        Duration
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {loan.duration}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">
                        Amount Range
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {loan.minAmount} - {loan.maxAmount}
                      </span>
                    </div>
                  </div>
                  <Button variant="primary" className="w-full mt-6">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>;
};
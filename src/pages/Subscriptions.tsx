import { PageHeader } from '../components/PageHeader';
import { DataTable } from '../components/DataTable';
import { StatCard } from '../components/StatCard';
import { CreditCard, Users, TrendingUp, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const subscriptionData = [
  { id: 1, user: 'John Smith', plan: 'Premium', status: 'Active', startDate: '2024-01-15', nextBilling: '2024-02-15', amount: '$49.99' },
  { id: 2, user: 'Emma Wilson', plan: 'Basic', status: 'Active', startDate: '2024-02-01', nextBilling: '2024-03-01', amount: '$29.99' },
  { id: 3, user: 'Michael Brown', plan: 'Premium', status: 'Cancelled', startDate: '2024-01-01', nextBilling: '-', amount: '$49.99' },
];

const subscriptionTrendData = [
  { month: 'Jan', basic: 120, premium: 80 },
  { month: 'Feb', basic: 140, premium: 95 },
  { month: 'Mar', basic: 135, premium: 110 },
  { month: 'Apr', basic: 150, premium: 125 },
];

const columns = [
  { header: 'User', accessor: 'user' },
  { header: 'Plan', accessor: 'plan', render: (value: string) => (
    <span className={`px-2 py-1 text-xs rounded-full ${
      value === 'Premium' 
        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
    }`}>
      {value}
    </span>
  )},
  { header: 'Status', accessor: 'status', render: (value: string) => (
    <span className={`px-2 py-1 text-xs rounded-full ${
      value === 'Active' 
        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    }`}>
      {value}
    </span>
  )},
  { header: 'Start Date', accessor: 'startDate' },
  { header: 'Next Billing', accessor: 'nextBilling' },
  { header: 'Amount', accessor: 'amount' },
];

export function Subscriptions() {
  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-950">
      <PageHeader 
        title="Subscriptions"
        subtitle="Manage user subscriptions and plans"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Subscribers"
          value="1,234"
          subtext="+5% this month"
          icon={<Users className="w-6 h-6" />}
        />
        <StatCard
          title="Active Plans"
          value="2"
          subtext="Basic and Premium"
          icon={<CreditCard className="w-6 h-6" />}
        />
        <StatCard
          title="Monthly Revenue"
          value="$45,670"
          subtext="+12% from last month"
          icon={<DollarSign className="w-6 h-6" />}
        />
        <StatCard
          title="Conversion Rate"
          value="68%"
          subtext="+3% this week"
          icon={<TrendingUp className="w-6 h-6" />}
        />
      </div>

      <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Subscription Trend
        </h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={subscriptionTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="basic" fill="#8884d8" name="Basic Plan" />
              <Bar dataKey="premium" fill="#82ca9d" name="Premium Plan" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Active Subscriptions
        </h2>
        <DataTable columns={columns} data={subscriptionData} />
      </div>
    </div>
  );
}
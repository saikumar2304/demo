import { Car, Users, DollarSign, CreditCard } from 'lucide-react';
import { StatCard } from './StatCard';

export function Dashboard() {
  return (
    <div className="flex-1 p-8 bg-gray-50 dark:bg-gray-950 overflow-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard Overview
        </h1>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
          <span className="mr-2">Admin</span>
          <span className="mr-2">•</span>
          <span className="mr-2">Last login: Today at 10:30 AM</span>
          <span className="mr-2">•</span>
          <span className="text-green-500">System Status: Online</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Trips"
          value="8,432"
          subtext="+15% from last month"
          icon={<Car className="w-6 h-6" />}
        />
        <StatCard
          title="Active Drivers"
          value="342"
          subtext="Currently online"
          icon={<Users className="w-6 h-6" />}
        />
        <StatCard
          title="Revenue"
          value="$67,290"
          subtext="+12% from last week"
          icon={<DollarSign className="w-6 h-6" />}
        />
        <StatCard
          title="Active Subscriptions"
          value="1,234"
          subtext="+5% this month"
          icon={<CreditCard className="w-6 h-6" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Trip Statistics
          </h2>
          <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-400">
            Chart will be rendered here
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Trips
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 dark:text-gray-400">
                  <th className="pb-3">Driver</th>
                  <th className="pb-3">User</th>
                  <th className="pb-3">Distance</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className="py-3 text-gray-900 dark:text-white">John Smith</td>
                  <td className="py-3 text-gray-900 dark:text-white">Emma Wilson</td>
                  <td className="py-3 text-gray-900 dark:text-white">12.5 km</td>
                  <td className="py-3 text-gray-900 dark:text-white">$25.50</td>
                  <td className="py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
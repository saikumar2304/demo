import { PageHeader } from '../components/PageHeader';
import { StatCard } from '../components/StatCard';
import { DataTable } from '../components/DataTable';
import { Tag, Percent, Users, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const promotionData = [
  { id: 1, code: 'SUMMER2024', discount: '20%', usage: 145, status: 'Active', expires: '2024-06-30' },
  { id: 2, code: 'NEWUSER', discount: '15%', usage: 89, status: 'Active', expires: '2024-12-31' },
  { id: 3, code: 'HOLIDAY', discount: '25%', usage: 67, status: 'Expired', expires: '2024-01-01' },
];

const usageData = [
  { date: 'Mon', usage: 65 },
  { date: 'Tue', usage: 85 },
  { date: 'Wed', usage: 120 },
  { date: 'Thu', usage: 95 },
  { date: 'Fri', usage: 140 },
  { date: 'Sat', usage: 180 },
  { date: 'Sun', usage: 150 },
];

const columns = [
  { header: 'Code', accessor: 'code' },
  { header: 'Discount', accessor: 'discount' },
  { header: 'Usage', accessor: 'usage' },
  { header: 'Status', accessor: 'status', render: (value: string) => (
    <span className={`px-2 py-1 text-xs rounded-full ${
      value === 'Active' 
        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    }`}>
      {value}
    </span>
  )},
  { header: 'Expires', accessor: 'expires' },
];

export function Promotions() {
  return (
    <div className="p-8">
      <PageHeader 
        title="Promotions"
        subtitle="Manage promotional campaigns and discount codes"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Active Promotions"
          value="12"
          subtext="Currently running"
          icon={<Tag className="w-6 h-6" />}
        />
        <StatCard
          title="Average Discount"
          value="18%"
          subtext="Across all codes"
          icon={<Percent className="w-6 h-6" />}
        />
        <StatCard
          title="Total Usage"
          value="1,234"
          subtext="This month"
          icon={<Users className="w-6 h-6" />}
        />
        <StatCard
          title="Conversion Rate"
          value="24%"
          subtext="+5% from last month"
          icon={<TrendingUp className="w-6 h-6" />}
        />
      </div>

      <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Promotion Usage Trend
        </h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={usageData}>
              <defs>
                <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
              <XAxis 
                dataKey="date" 
                stroke="#6B7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#6B7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#F3F4F6'
                }}
              />
              <Area
                type="monotone"
                dataKey="usage"
                stroke="#4F46E5"
                strokeWidth={2}
                fill="url(#colorUsage)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Active Promotions
          </h2>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Create Promotion
          </button>
        </div>
        <DataTable columns={columns} data={promotionData} />
      </div>
    </div>
  );
}
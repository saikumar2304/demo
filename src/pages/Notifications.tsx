import { PageHeader } from '../components/PageHeader';
import { StatCard } from '../components/StatCard';
import { DataTable } from '../components/DataTable';
import { Bell, Send, Users, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const notificationData = [
  { id: 1, title: 'New Feature Update', segment: 'All Users', status: 'Scheduled', date: '2024-03-16', engagement: '45%' },
  { id: 2, title: 'Weekend Promotion', segment: 'Active Users', status: 'Sent', date: '2024-03-15', engagement: '62%' },
  { id: 3, title: 'System Maintenance', segment: 'Drivers', status: 'Draft', date: '2024-03-17', engagement: '-' },
];

const engagementData = [
  { time: '8 AM', opens: 450, clicks: 280 },
  { time: '10 AM', opens: 620, clicks: 400 },
  { time: '12 PM', opens: 850, clicks: 590 },
  { time: '2 PM', opens: 730, clicks: 480 },
  { time: '4 PM', opens: 890, clicks: 650 },
  { time: '6 PM', opens: 780, clicks: 520 },
];

const columns = [
  { header: 'Title', accessor: 'title' },
  { header: 'Segment', accessor: 'segment' },
  { header: 'Status', accessor: 'status', render: (value: string) => (
    <span className={`px-2 py-1 text-xs rounded-full ${
      value === 'Sent' 
        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
        : value === 'Scheduled'
        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
        : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }`}>
      {value}
    </span>
  )},
  { header: 'Date', accessor: 'date' },
  { header: 'Engagement', accessor: 'engagement' },
];

export function Notifications() {
  return (
    <div className="p-8">
      <PageHeader 
        title="Push Notifications"
        subtitle="Manage and track push notification campaigns"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Sent"
          value="12,456"
          subtext="This month"
          icon={<Bell className="w-6 h-6" />}
        />
        <StatCard
          title="Delivery Rate"
          value="98.5%"
          subtext="Last 24 hours"
          icon={<Send className="w-6 h-6" />}
        />
        <StatCard
          title="Active Subscribers"
          value="45,678"
          subtext="+2% this week"
          icon={<Users className="w-6 h-6" />}
        />
        <StatCard
          title="Avg. Engagement"
          value="32%"
          subtext="+5% from last month"
          icon={<Activity className="w-6 h-6" />}
        />
      </div>

      <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Engagement Analytics
        </h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
              <XAxis 
                dataKey="time" 
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
              <Bar dataKey="opens" fill="#4F46E5" radius={[4, 4, 0, 0]} />
              <Bar dataKey="clicks" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Notifications
          </h2>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Create Notification
          </button>
        </div>
        <DataTable columns={columns} data={notificationData} />
      </div>
    </div>
  );
}
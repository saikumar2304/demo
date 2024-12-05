import { PageHeader } from '../components/PageHeader';
import { StatCard } from '../components/StatCard';
import { DataTable } from '../components/DataTable';
import { MessageSquare, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ticketData = [
  { id: 1, user: 'John Smith', subject: 'Payment Issue', priority: 'High', status: 'Open', created: '2024-03-15' },
  { id: 2, user: 'Emma Wilson', subject: 'App Navigation', priority: 'Medium', status: 'In Progress', created: '2024-03-14' },
  { id: 3, user: 'Mike Johnson', subject: 'Account Access', priority: 'Low', status: 'Resolved', created: '2024-03-13' },
];

const responseTimeData = [
  { hour: '9 AM', time: 15 },
  { hour: '10 AM', time: 12 },
  { hour: '11 AM', time: 18 },
  { hour: '12 PM', time: 25 },
  { hour: '1 PM', time: 20 },
  { hour: '2 PM', time: 15 },
  { hour: '3 PM', time: 10 },
];

const columns = [
  { header: 'User', accessor: 'user' },
  { header: 'Subject', accessor: 'subject' },
  { header: 'Priority', accessor: 'priority', render: (value: string) => (
    <span className={`px-2 py-1 text-xs rounded-full ${
      value === 'High' 
        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
        : value === 'Medium'
        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
        : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    }`}>
      {value}
    </span>
  )},
  { header: 'Status', accessor: 'status', render: (value: string) => (
    <span className={`px-2 py-1 text-xs rounded-full ${
      value === 'Open' 
        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
        : value === 'In Progress'
        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
        : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    }`}>
      {value}
    </span>
  )},
  { header: 'Created', accessor: 'created' },
];

export function SupportTickets() {
  return (
    <div className="p-8">
      <PageHeader 
        title="Support Tickets"
        subtitle="Manage customer support requests and inquiries"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Open Tickets"
          value="23"
          subtext="Requires attention"
          icon={<MessageSquare className="w-6 h-6" />}
        />
        <StatCard
          title="Avg Response Time"
          value="2.5h"
          subtext="Last 24 hours"
          icon={<Clock className="w-6 h-6" />}
        />
        <StatCard
          title="Resolved Today"
          value="45"
          subtext="+12 from yesterday"
          icon={<CheckCircle className="w-6 h-6" />}
        />
        <StatCard
          title="Critical Issues"
          value="3"
          subtext="High priority"
          icon={<AlertTriangle className="w-6 h-6" />}
        />
      </div>

      <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Response Time Trend
        </h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={responseTimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
              <XAxis 
                dataKey="hour" 
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
                tickFormatter={(value) => `${value}min`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#F3F4F6'
                }}
              />
              <Line
                type="monotone"
                dataKey="time"
                stroke="#4F46E5"
                strokeWidth={2}
                dot={{ fill: '#4F46E5', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Tickets
          </h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              Filter
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              New Ticket
            </button>
          </div>
        </div>
        <DataTable columns={columns} data={ticketData} />
      </div>
    </div>
  );
}
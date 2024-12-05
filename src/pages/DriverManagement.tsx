import { PageHeader } from '../components/PageHeader';
import { DataTable } from '../components/DataTable';
import { StatCard } from '../components/StatCard';
import { Car, Star, Clock, AlertCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const driverData = [
  { id: 1, name: 'Mike Johnson', rating: 4.8, status: 'Online', trips: 156, earnings: '$1,234', lastActive: '2 min ago' },
  { id: 2, name: 'Sarah Williams', rating: 4.9, status: 'Offline', trips: 98, earnings: '$987', lastActive: '1 hour ago' },
  { id: 3, name: 'David Brown', rating: 4.7, status: 'On Trip', trips: 142, earnings: '$1,567', lastActive: 'Now' },
];

const performanceData = [
  { day: 'Mon', trips: 25, earnings: 150 },
  { day: 'Tue', trips: 30, earnings: 180 },
  { day: 'Wed', trips: 28, earnings: 160 },
  { day: 'Thu', trips: 35, earnings: 200 },
  { day: 'Fri', trips: 40, earnings: 250 },
];

const columns = [
  { header: 'Name', accessor: 'name' },
  { header: 'Rating', accessor: 'rating', render: (value: number) => (
    <div className="flex items-center">
      <Star className="w-4 h-4 text-yellow-400 inline mr-1" />
      {value}
    </div>
  )},
  { header: 'Status', accessor: 'status', render: (value: string) => (
    <span className={`px-2 py-1 text-xs rounded-full ${
      value === 'Online' 
        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
        : value === 'Offline'
        ? 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
    }`}>
      {value}
    </span>
  )},
  { header: 'Total Trips', accessor: 'trips' },
  { header: 'Earnings', accessor: 'earnings' },
  { header: 'Last Active', accessor: 'lastActive' },
];

export function DriverManagement() {
  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-950">
      <PageHeader 
        title="Driver Management"
        subtitle="Monitor and manage driver performance"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Active Drivers"
          value="342"
          subtext="Currently online"
          icon={<Car className="w-6 h-6" />}
        />
        <StatCard
          title="Average Rating"
          value="4.8"
          subtext="Last 30 days"
          icon={<Star className="w-6 h-6" />}
        />
        <StatCard
          title="Average Response Time"
          value="45s"
          subtext="Last 24 hours"
          icon={<Clock className="w-6 h-6" />}
        />
        <StatCard
          title="Reported Issues"
          value="3"
          subtext="Pending resolution"
          icon={<AlertCircle className="w-6 h-6" />}
        />
      </div>

      <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Driver Performance Trend
        </h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="trips" stroke="#8884d8" name="Trips" />
              <Line yAxisId="right" type="monotone" dataKey="earnings" stroke="#82ca9d" name="Earnings ($)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Driver List
        </h2>
        <DataTable columns={columns} data={driverData} />
      </div>
    </div>
  );
}
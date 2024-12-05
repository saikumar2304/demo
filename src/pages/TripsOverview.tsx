import { PageHeader } from '../components/PageHeader';
import { DataTable } from '../components/DataTable';
import { StatCard } from '../components/StatCard';
import { MapPin, Clock, DollarSign, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const tripData = [
  { id: 1, driver: 'Mike Johnson', user: 'Alice Cooper', distance: '12.5 km', amount: '$25.50', status: 'Completed', time: '15:30' },
  { id: 2, driver: 'Sarah Williams', user: 'Bob Dylan', distance: '8.2 km', amount: '$18.75', status: 'In Progress', time: '15:45' },
  { id: 3, driver: 'David Brown', user: 'Carol Smith', distance: '15.7 km', amount: '$32.20', status: 'Cancelled', time: '16:00' },
];

const tripTrendData = [
  { hour: '12 PM', trips: 25, earnings: 450 },
  { hour: '1 PM', trips: 30, earnings: 520 },
  { hour: '2 PM', trips: 35, earnings: 580 },
  { hour: '3 PM', trips: 40, earnings: 620 },
  { hour: '4 PM', trips: 38, earnings: 590 },
];

const columns = [
  { header: 'Driver', accessor: 'driver' },
  { header: 'User', accessor: 'user' },
  { header: 'Distance', accessor: 'distance' },
  { header: 'Amount', accessor: 'amount' },
  { header: 'Time', accessor: 'time' },
  { header: 'Status', accessor: 'status', render: (value: string) => (
    <span className={`px-2 py-1 text-xs rounded-full ${
      value === 'Completed' 
        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
        : value === 'In Progress'
        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    }`}>
      {value}
    </span>
  )},
];

export function TripsOverview() {
  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-950">
      <PageHeader 
        title="Trips Overview"
        subtitle="Monitor real-time trip statistics and history"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Distance"
          value="1,234 km"
          subtext="Today's trips"
          icon={<MapPin className="w-6 h-6" />}
        />
        <StatCard
          title="Average Trip Time"
          value="18 min"
          subtext="Last 24 hours"
          icon={<Clock className="w-6 h-6" />}
        />
        <StatCard
          title="Total Revenue"
          value="$3,450"
          subtext="Today's earnings"
          icon={<DollarSign className="w-6 h-6" />}
        />
        <StatCard
          title="Trip Completion Rate"
          value="95%"
          subtext="+2% from yesterday"
          icon={<TrendingUp className="w-6 h-6" />}
        />
      </div>

      <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Hourly Trip Trend
        </h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={tripTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Area yAxisId="left" type="monotone" dataKey="trips" stroke="#8884d8" fill="#8884d8" name="Trips" />
              <Area yAxisId="right" type="monotone" dataKey="earnings" stroke="#82ca9d" fill="#82ca9d" name="Earnings ($)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Recent Trips
        </h2>
        <DataTable columns={columns} data={tripData} />
      </div>
    </div>
  );
}
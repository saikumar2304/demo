import { PageHeader } from '../components/PageHeader';
import { DataTable } from '../components/DataTable';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const userData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', trips: 45, joined: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active', trips: 32, joined: '2024-02-01' },
  { id: 3, name: 'Bob Wilson', email: 'bob@example.com', status: 'Inactive', trips: 12, joined: '2024-02-15' },
];

const userActivityData = [
  { month: 'Jan', newUsers: 65, activeUsers: 400 },
  { month: 'Feb', newUsers: 45, activeUsers: 380 },
  { month: 'Mar', newUsers: 55, activeUsers: 420 },
];

const columns = [
  { header: 'Name', accessor: 'name' },
  { header: 'Email', accessor: 'email' },
  { header: 'Status', accessor: 'status', render: (value: string) => (
    <span className={`px-2 py-1 text-xs rounded-full ${
      value === 'Active' 
        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    }`}>
      {value}
    </span>
  )},
  { header: 'Total Trips', accessor: 'trips' },
  { header: 'Joined', accessor: 'joined' },
];

export function UserManagement() {
  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-950">
      <PageHeader 
        title="User Management"
        subtitle="Manage and monitor user activities"
      />

      <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          User Activity Overview
        </h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={userActivityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="newUsers" fill="#8884d8" name="New Users" />
              <Bar dataKey="activeUsers" fill="#82ca9d" name="Active Users" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          User List
        </h2>
        <DataTable columns={columns} data={userData} />
      </div>
    </div>
  );
}
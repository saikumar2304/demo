import { ThemeProvider } from './components/ThemeProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { UserManagement } from './pages/UserManagement';
import { DriverManagement } from './pages/DriverManagement';
import { TripsOverview } from './pages/TripsOverview';
import { Subscriptions } from './pages/Subscriptions';
import { Promotions } from './pages/Promotions';
import { SupportTickets } from './pages/SupportTickets';
import { Notifications } from './pages/Notifications';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users/*" element={<UserManagement />} />
            <Route path="/drivers/*" element={<DriverManagement />} />
            <Route path="/trips" element={<TripsOverview />} />
            <Route path="/subscriptions/*" element={<Subscriptions />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/support/*" element={<SupportTickets />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
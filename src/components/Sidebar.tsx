import { useState } from 'react';
import { Home, Users, Car, Calendar, Tag, Inbox, Bell, Moon, Sun, ChevronDown } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { cn } from '../lib/utils';
import { Link, useLocation } from 'react-router-dom';

type MenuItem = {
  icon: any;
  label: string;
  path: string;
  subItems?: { label: string; path: string }[];
};

const menuItems: MenuItem[] = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { 
    icon: Users, 
    label: 'User Management', 
    path: '/users',
    subItems: [
      { label: 'User List', path: '/users/list' },
      { label: 'User Analytics', path: '/users/analytics' },
    ]
  },
  { 
    icon: Car, 
    label: 'Driver Management', 
    path: '/drivers',
    subItems: [
      { label: 'Driver List', path: '/drivers/list' },
      { label: 'Driver Analytics', path: '/drivers/analytics' },
    ]
  },
  { icon: Calendar, label: 'Trips Dashboard', path: '/trips' },
  { 
    icon: Tag, 
    label: 'Subscriptions', 
    path: '/subscriptions',
    subItems: [
      { label: 'Active Plans', path: '/subscriptions/active' },
      { label: 'Plan Management', path: '/subscriptions/manage' },
    ]
  },
  { icon: Tag, label: 'Promotions', path: '/promotions' },
  { 
    icon: Inbox, 
    label: 'Support Tickets', 
    path: '/support',
    subItems: [
      { label: 'Open Tickets', path: '/support/open' },
      { label: 'Resolved Tickets', path: '/support/resolved' },
    ]
  },
  { icon: Bell, label: 'Push Notifications', path: '/notifications' },
];

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (path: string) => {
    setExpandedItems(prev => 
      prev.includes(path) 
        ? prev.filter(p => p !== path)
        : [...prev, path]
    );
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 lg:hidden z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-200 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-8">
              <Car className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-bold dark:text-white">Admin Panel</span>
            </div>

            <nav className="space-y-1">
              {menuItems.map((item) => (
                <div key={item.path}>
                  <button
                    onClick={() => item.subItems ? toggleExpanded(item.path) : undefined}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
                      "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                      location.pathname === item.path && "bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </div>
                    {item.subItems && (
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform",
                        expandedItems.includes(item.path) && "transform rotate-180"
                      )} />
                    )}
                  </button>
                  
                  {item.subItems && expandedItems.includes(item.path) && (
                    <div className="ml-9 mt-1 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={cn(
                            "block px-3 py-2 rounded-lg text-sm",
                            "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800",
                            location.pathname === subItem.path && "text-indigo-600 dark:text-indigo-400"
                          )}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 px-3 py-2 w-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-150"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
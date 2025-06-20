import React from 'react';
import { Users, MapPin, Calendar, DollarSign, TrendingUp, Clock } from 'lucide-react';
import ToursHeaders from '../ToursLayout/ToursHeaders';

const StatCard= ({ title, value, change, icon, gradient }) => (
  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        <p className="text-sm text-emerald-600 mt-1 flex items-center">
          <TrendingUp className="w-3 h-3 mr-1" />
          {change}
        </p>
      </div>
      <div className={`p-3 rounded-xl ${gradient}`}>
        {icon}
      </div>
    </div>
  </div>
);

export const TourDashboard= () => {
  const stats = [
    {
      title: 'Total Tours',
      value: '127',
      change: '+12% from last month',
      icon: <MapPin className="w-6 h-6 text-white" />,
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    {
      title: 'Active Bookings',
      value: '2,341',
      change: '+18% from last month',
      icon: <Users className="w-6 h-6 text-white" />,
      gradient: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    },
    {
      title: 'Revenue',
      value: '$89,430',
      change: '+25% from last month',
      icon: <DollarSign className="w-6 h-6 text-white" />,
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-600',
    },
    {
      title: 'Upcoming Tours',
      value: '43',
      change: '+8% from last month',
      icon: <Calendar className="w-6 h-6 text-white" />,
      gradient: 'bg-gradient-to-br from-orange-500 to-orange-600',
    },
  ];

  return (<div>
    <ToursHeaders/>
     <div className="max-w-6xl mx-auto font-usedFont space-y-8 mt-10 mb-10">
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
            <p className="text-blue-100 text-lg">
              Manage your tours and track your business performance
            </p>
          </div>
          <div className="hidden md:block">
            <Clock className="w-16 h-16 text-white opacity-20" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              {
                action: 'New tour created',
                details: 'Desert Odyssey Adventure',
                time: '2 hours ago',
                color: 'bg-green-100 text-green-800',
              },
              {
                action: 'Booking confirmed',
                details: '15 guests for Sahara Experience',
                time: '4 hours ago',
                color: 'bg-blue-100 text-blue-800',
              },
              {
                action: 'Payment received',
                details: '$2,340 for group booking',
                time: '6 hours ago',
                color: 'bg-purple-100 text-purple-800',
              },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`w-2 h-2 rounded-full ${activity.color.split(' ')[0]}`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-600">{activity.details}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Create Tour',link:'', icon: <MapPin className="w-5 h-5" />, color: 'bg-blue-500 hover:bg-blue-600' },
              { title: 'View Bookings', icon: <Users className="w-5 h-5" />, color: 'bg-emerald-500 hover:bg-emerald-600' },
              { title: 'Revenue Report', icon: <DollarSign className="w-5 h-5" />, color: 'bg-purple-500 hover:bg-purple-600' },
              { title: 'Tour Schedule', icon: <Calendar className="w-5 h-5" />, color: 'bg-orange-500 hover:bg-orange-600' },
            ].map((action, index) => (
              <button
                key={index}
                
                className={`${action.color} text-white border-none p-4 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 flex items-center space-x-2`}
              >
                {action.icon}
                <span className="text-sm font-medium">{action.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>

    </div>
   
  );
};

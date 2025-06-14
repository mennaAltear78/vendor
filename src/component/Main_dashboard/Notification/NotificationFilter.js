import React from 'react';
import { Filter, Check } from 'lucide-react';

const NotificationFilters = ({ activeFilter, onFilterChange, unreadCount }) => {
  const filters = [
    { id: 'all', label: 'All', count: null },
    { id: 'unread', label: 'Unread', count: unreadCount },
    { id: 'message', label: 'Messages', count: null },
    { id: 'like', label: 'Likes', count: null },
    // { id: 'follow', label: 'Follows', count: null },
  ];

  return (
    <div className="bg-white rounded-xl font-usedFont border border-gray-100 p-4 mb-6">
      <div className="flex items-center space-x-2 mb-3">
        <Filter size={18} className="text-gray-600" />
        <span className="text-sm font-medium text-gray-900">Filter notifications</span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeFilter === filter.id
                ? 'bg-blue-100 text-blue-700 border border-blue-200'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-transparent'
            }`}
          >
            {activeFilter === filter.id && <Check size={14} className="mr-1" />}
            {filter.label}
            {filter.count !== null && filter.count > 0 && (
              <span className="ml-1.5 bg-blue-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[18px] text-center">
                {filter.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NotificationFilters;
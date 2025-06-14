import React from 'react';
import { Bell, Settings, CheckCheck } from 'lucide-react';

const NotificationHeader = ({ unreadCount, onMarkAllAsRead, onOpenSettings }) => {
  return (
    <div className="bg-[blue] font-usedFont rounded-xl border border-gray-100 p-6 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative mt-4">
            <Bell size={30}  />
            {unreadCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center">
                {unreadCount > 99 ? '99+' : unreadCount}
              </span>
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Notifications</h1>
            <p className="text-sm text-[#fcfcfcd0] mt-[-20px]">
              {unreadCount > 0 ? `${unreadCount} unread notifications` : 'All caught up!'}
            </p>
          </div>
        </div>
        <div className="flex items-center  space-x-2">
          {unreadCount > 0 && (
            <button
              onClick={onMarkAllAsRead}
              className="inline-flex border-none  cursor-pointer items-center  py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
            >
              <CheckCheck size={16} className="mr-1" />
              Mark all as read
            </button>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default NotificationHeader;
import React, { useState, useMemo, useEffect, useContext } from 'react';
import NotificationHeader from './NotificationHeader';
import NotificationFilters from './NotificationFilter';
import NotificationItem from './NotificationItem';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../FireBase/Firebase';
import AutoUploadNotifications from '../../../FireBase/AutoUploadNotifications';
import { AuthContext } from '../../Authentication/Context/auth-context';



function NotificationPage() {
  const ctx =useContext(AuthContext)
  

  const [notifications, setNotifications] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  const unreadCount = useMemo(() => 
    notifications.filter(n => !n.read).length, 
    [notifications]
  );

  const filteredNotifications = useMemo(() => {
    switch (activeFilter) {
      case 'unread':
        return notifications.filter(n => !n.read);
      case 'message':
      case 'like':
      case 'follow':
        return notifications.filter(n => n.type === activeFilter);
      default:
        return notifications;
    }
  }, [notifications, activeFilter]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "notifications"));
      const data = querySnapshot.docs.map(doc => doc.data());
      setNotifications(data);
      ctx.setnotificationNumber(data.length)
      console.log("notifications data",data);
      // console.log(notifications[2].id);
      
    };
    fetchData();
  }, []);
  const handleMarkAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const handleDelete = (id) => {
    setNotifications(prev => 
      prev.filter(notification => notification.id !== id)
    );
  };

  const handleOpenSettings = () => {
    alert('Settings panel would open here');
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
           {/* <AutoUploadNotifications /> */}
        <NotificationHeader 
          unreadCount={unreadCount}
          onMarkAllAsRead={handleMarkAllAsRead}
          onOpenSettings={handleOpenSettings}
        />
        
        <NotificationFilters 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          unreadCount={unreadCount}
        />
        
        <div className="space-y-3">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map(notification => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onMarkAsRead={handleMarkAsRead}
                onDelete={handleDelete}
                id={notification.id}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-2">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 17h5l-5 5-5-5h5v-12h5v12z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No notifications</h3>
              <p className="text-gray-500">
                {activeFilter === 'all' 
                  ? "You're all caught up! No notifications to show."
                  : `No ${activeFilter} notifications to show.`
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NotificationPage;
import React from 'react';
import { 
  Bell, 
  MessageCircle, 
  Heart, 
  ShoppingCart, 
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../FireBase/Firebase';

const NotificationItem = ({ notification, onMarkAsRead, id }) => {
  
const deleteDocument = async (id) => {
  try {
    const docRef = doc(db, "notifications", "0EQuP9jnNkai5BT9lTh5");
    await deleteDoc(docRef);
    console.log("✅ Document deleted:", id);
  } catch (error) {
    console.error("❌ Error deleting document:", error.message);
  }
};
  
  const getIcon = (type) => {
    const iconProps = { size: 20, className: "text-gray-600" };
    
    switch (type) {
      case 'message':
        return <MessageCircle {...iconProps} className="text-blue-500" />;
      case 'like':
        return <Heart {...iconProps} className="text-red-500" />;
     case 'order':
        return <ShoppingCart {...iconProps} className="text-purple-500" />;
      case 'warning':
        return <AlertTriangle {...iconProps} className="text-yellow-500" />;
      case 'success':
        return <CheckCircle {...iconProps} className="text-green-500" />;
      case 'info':
        return <Info {...iconProps} className="text-blue-500" />;
      default:
        return <Bell {...iconProps} />;
    }
  };

  const formatTime = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInMinutes = Math.floor((now - time) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <div 
      className={`notification-card bg-white shadow-md rounded-lg px-2 py-5 font-usedFont animate-slide-in ${!notification.read ? 'unread' : ''}`}
      onClick={() => onMarkAsRead(notification.id)}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-1">
          {getIcon(notification.type)}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900 truncate">
              {notification.title}
            </p>
            {!notification.read && <div className="notification-dot ml-2" />}
          </div>
          
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {notification.message}
          </p>
          
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-gray-500">
              {formatTime(notification.timestamp)}
            </span>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteDocument("2")
              }}
              className="text-xs rounded-[3px] hover:bg-[#ff0000] cursor-pointer bg-[#ff0000a6] border-none text-[white]  transition-colors duration-200"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
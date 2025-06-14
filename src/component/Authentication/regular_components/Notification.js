import { CheckCircle, XCircle } from 'lucide-react';
const Notification= ({ type, message }) => {
  const styles = {
    success: {
      bg: 'bg-green-100',
      border: 'border-green-500',
      text: 'text-green-800',
      icon: <CheckCircle className="h-5 w-5 text-green-500" />
    },
    error: {
      bg: 'bg-red-100',
      border: 'border-red-500',
      text: 'text-red-800',
      icon: <XCircle className="h-5 w-5 text-red-500" />
    }
  };

  const currentStyle = styles[type];

  return (
    <div className={`${currentStyle.bg} ${currentStyle.border} ${currentStyle.text} border rounded-lg p-4 shadow-lg flex items-center space-x-3 animate-fade-in `}>
      {currentStyle.icon}
      <span className="font-medium text-[17px]">{message}</span>
    </div>
  );
};

export default Notification;
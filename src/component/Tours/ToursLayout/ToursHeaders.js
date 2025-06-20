import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, User } from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', path: '/TourDashboard' },
  { id: 'tours', label: 'Tour List', path: '/TourList' },
  { id: 'create', label: 'Create Tour', path: '/CreatTour' },
];

function ToursHeaders() {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('dashboard'); // القيمة الابتدائية

  const handleNavigation = (item) => {
    setCurrentView(item.id);
    navigate(item.path);
  };

  return (
    <header className="bg-[#2222c3] shadow-lg font-usedFont border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#ead8b7] to-[#ae750c] bg-clip-text text-transparent">
              TourManager Pro
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={`px-3 py-2 rounded-md border-none text-sm font-medium transition-all duration-200 ${
                  currentView === item.id
                    ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-500'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Profile Icon */}
          <div className="w-8 h-8 bg-gradient-to-br from-[#eab044] to-[#b87903]  rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default ToursHeaders;

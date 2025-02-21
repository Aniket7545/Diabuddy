import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, TrendingUp, Target, AlertTriangle, Users, Award, Settings, BookOpen } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isEmergency, setIsEmergency] = useState(false);

  const navItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Daily Breakdown', icon: Calendar, path: '/daily' },
    { name: 'Weekly Analysis', icon: TrendingUp, path: '/weekly' },
    { name: 'Personalized Plan', icon: Target, path: '/plan' },
    { name: 'Community', icon: Users, path: '/community' },
    { name: 'Rewards', icon: Award, path: '/rewards' },
    { name: 'Settings', icon: Settings, path: '/settings' },
    { name: 'Education', icon: BookOpen, path: '/education' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">DiaBuddy</span>
            </div>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  <item.icon className="h-5 w-5 mr-1" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/emergency"
            className={`${
              isEmergency ? 'animate-pulse' : ''
            } flex items-center px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-700`}
          >
            <AlertTriangle className="h-5 w-5 mr-1" />
            Emergency
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
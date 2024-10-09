import React from 'react';
import { Link } from 'react-router-dom';
import { Home, LogIn, UserPlus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-800 flex items-center">
            <Home className="mr-2" />
            Collaborative Whiteboard
          </Link>
          <div className="flex items-center">
            <Link to="/login" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium flex items-center">
              <LogIn className="mr-1" size={18} />
              Login
            </Link>
            <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium ml-4 flex items-center">
              <UserPlus className="mr-1" size={18} />
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Collaborative Whiteboard</h1>
      <p className="text-xl text-center mb-12">Create and collaborate on digital whiteboards in real-time.</p>
      <div className="flex justify-center">
        <Link to="/whiteboard/new" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium flex items-center">
          <PlusCircle className="mr-2" />
          Create New Whiteboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
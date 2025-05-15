import React from 'react';
import { useNavigate } from 'react-router-dom';

const Index: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50">
      <h1 className="text-4xl font-bold mb-6 text-eduBlue">Welcome to EduDhvani</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        Your interactive platform for personalized, AI-powered learning. Explore subjects, generate content, and stay updated with the latest in AI and EdTech!
      </p>
      <button
        onClick={() => navigate('/ai-edtech')}
        className="bg-gradient-to-r from-eduBlue to-eduPurple text-white px-8 py-4 rounded-lg shadow-lg text-xl font-semibold hover:opacity-90 mb-6"
      >
        🚀 AI Tools & EdTech News
      </button>
      <button
        onClick={() => navigate('/subjects')}
        className="bg-eduGreen text-white px-8 py-4 rounded-lg shadow-lg text-xl font-semibold hover:bg-eduGreen/90"
      >
        📚 Start Learning
      </button>
    </div>
  );
};

export default Index;

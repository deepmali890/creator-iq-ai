import { MoveRightIcon } from 'lucide-react';
import React from 'react';

const ActionPage = () => {
  return (
    <div className="relative p-10 bg-white/10 py-10 backdrop-blur-lg rounded-2xl shadow-2xl max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
        Supercharge Your Career with Creator IQ
      </h2>
      <p className="mt-5 text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
        Unlock your full potential with our AI-powered tools — build standout resumes, craft personalized cover letters, prepare for interviews with confidence, and get tailored insights to accelerate your career growth.
      </p>
      <div className="mt-8 flex justify-center gap-5 flex-wrap py-5 animate-bounce">
        <button className="px-8 py-3 flex gap-2 items-center bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out cursor-pointer">
          Start Your Journey Today <MoveRightIcon/>
        </button>
        
      </div>
    </div>
  );
};

export default ActionPage;

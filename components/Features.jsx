'use client';

import { BrainCircuit, ChartNoAxesCombined,  FileUser,  } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Features = () => {
  const cards = [
    {
      title: 'AI-Driven Skill Enhancement',
      description: 'Personalized AI-based learning paths to boost your skills and career growth.',
      icon: <BrainCircuit  className="text-violet-500 w-6 h-6" />,
    },
    {
      title: 'Mock Interview Simulator',
      description: 'CExperience AI-powered mock interviews with instant feedback and improvement suggestions.',
      icon: <BrainCircuit  className="text-pink-500 w-6 h-6" />,
    },
    {
      title: 'Smart CV Builder',
      description: 'Craft AI-enhanced, industry-specific resumes that make an impact.',
      icon: <FileUser  className="text-green-600 w-6 h-6" />,
    },
    {
        title: 'Trending Job Market Insights',
        description: 'Stay updated with job market trends, salary benchmarks, and industry demands.',
        icon: <ChartNoAxesCombined  className="text-red-600 w-6 h-6" />,
      },
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    <div className='text-5xl  space-y-6 font-semibold text-center  leading-tight bg-gradient-to-r from-gray-500 via-gray-600 to-gray-600  text-transparent bg-clip-text'>PowerFul Feature For Your Career Growth</div>
    <div className=" bg-gradient-to-br  bg-[url('/grid.svg')] bg-[length:40px_40px] bg-no-repeat bg-center flex items-center justify-center px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl ">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-2xl border border-gray-200 text-center hover:border-gray-900  p-6 bg-white/40 backdrop-blur-md shadow-sm transform transition duration-500 ease-out hover:-translate-y-1 hover:shadow-md cursor-pointer 
              ${visible ? `opacity-100 translate-y-0 delay-[${idx * 50}ms]` : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <div className="inline-flex items-center justify-center rounded-xl  bg-gray-100 p-3 mb-4">
              {card.icon}
            </div>
            <h2 className="text-lg font-semibold text-gray-900">
              {card.title}
            </h2>
            <p className="mt-2 text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Features;

import React from 'react'

const State = () => {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Empowering creators with AI-driven growth
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Join thousands of creators building, scaling, and succeeding with the power of AI.
            </p>
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col bg-white/40 backdrop-blur-md  rounded-xl p-8 shadow-sm">
              <dt className="text-sm font-semibold leading-6 text-gray-500">AI-generated words in 2024</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">18M+</dd>
            </div>
            <div className="flex flex-col bg-white/40 backdrop-blur-md  rounded-xl p-8 shadow-sm">
              <dt className="text-sm font-semibold leading-6 text-gray-500">Portfolios built</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">25k+</dd>
            </div>
            <div className="flex flex-col bg-white/40 backdrop-blur-md  rounded-xl p-8 shadow-sm">
              <dt className="text-sm font-semibold leading-6 text-gray-500">AI hours saved</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">9.4k</dd>
            </div>
            <div className="flex flex-col bg-white/40 backdrop-blur-md  rounded-xl p-8 shadow-sm">
              <dt className="text-sm font-semibold leading-6 text-gray-500">Creative tools shipped</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">3.2k</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default State;

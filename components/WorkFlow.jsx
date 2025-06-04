import React from 'react';

const WorkFlow = () => {
  return (
    <section
      id="works"
      className="relative bg-white/5 max-w-[1500px] border-[1px] rounded-2xl mx-auto backdrop-blur-sm py-10 sm:py-16 lg:py-24"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl text-gray-900 font-extrabold mx-auto md:text-6xl lg:text-5xl">
            How does it work?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base text-gray-600 leading-relaxed md:text-2xl">
            Follow these simple steps to streamline your career journey
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              alt=""
              loading="lazy"
              width="1000"
              height="500"
              decoding="async"
              data-nimg="1"
              className="w-full"
              style={{ color: 'transparent' }}
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 border-2 hover:bg-black group border-gray-300 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700 group-hover:text-white">1</span>
              </div>
              <h3 className="mt-6 text-xl text-gray-900 font-semibold leading-tight md:mt-10">
                Share Your Expertise
              </h3>
              <p className="mt-4 text-base text-gray-600 md:text-lg">
                Provide your industry background for personalized guidance.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto group bg-gray-100 hover:bg-black border-2 border-gray-300 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700 group-hover:text-white">2</span>
              </div>
              <h3 className="mt-6 text-xl text-gray-900 font-semibold leading-tight md:mt-10">
                Create Impactful Documents
              </h3>
              <p className="mt-4 text-base text-gray-600 md:text-lg">
                Generate ATS-optimized resumes and persuasive cover letters.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 border-2 group hover:bg-black border-gray-300 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700 group-hover:text-white">3</span>
              </div>
              <h3 className="mt-6 text-xl text-gray-900 font-semibold leading-tight md:mt-10">
                Prepare with AI Interviews
              </h3>
              <p className="mt-4 text-base text-gray-600 md:text-lg">
                Practice interview sessions with real-time AI feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;

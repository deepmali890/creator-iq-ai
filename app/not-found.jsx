'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen flex items-center justify-center bg-white/30 backdrop-blur-md dark:bg-gray-900/30">
      <div className="container px-6 py-12 mx-auto text-center max-w-md">
        <div className="inline-flex p-3 rounded-full bg-blue-100 dark:bg-gray-800 text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>

        <h1 className="mt-4 text-3xl font-bold text-gray-800 dark:text-white">
          Page not found
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          The page you are looking for doesn&apos;t exist.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go back
          </button>

          <a
            href="/"
            className="inline-block px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-md transition"
          >
            Take me home
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;

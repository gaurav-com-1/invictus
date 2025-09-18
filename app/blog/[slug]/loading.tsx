import React from 'react';
import { FaSpinner } from 'react-icons/fa';

export default function LoadingPost() {
  return (
    <div className="bg-secondary py-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center justify-center text-center">
        <FaSpinner className="text-4xl text-accent animate-spin mb-6" />
        <h1 className="md:text-6xl">Loading Post...</h1>
        <p className="mt-4">Please wait while we fetch the article.</p>
      </div>
    </div>
  );
}
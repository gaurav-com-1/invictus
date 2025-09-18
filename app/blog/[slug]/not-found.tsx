import React from 'react';
import Link from 'next/link';

export default function BlogPostNotFound() {
  return (
    <div className="bg-secondary py-40 text-center min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-6">
        <h1 className="text-accent">404</h1>
        <h2 className="mt-4">Post Not Found</h2>
        <p className="mt-4">Sorry, we couldn't find the blog post you were looking for.</p>
        <Link href="/blog" className="mt-8 inline-block bg-accent text-primary font-bold py-3 px-8 rounded-full text-lg hover:brightness-110 transition-all duration-300">
          &larr; Back to All Posts
        </Link>
      </div>
    </div>
  );
}
"use client";

import React from 'react';

type Blog = {
    id: number;
    Title: string;
    Summary: string;
}

type PaginatedBlogsProps = {
    currentPage: number;
    paginate: (pageNumber: number) => void;
    blogs: Blog[];
}

const Pagination: React.FC<PaginatedBlogsProps> = ({ paginate, currentPage, blogs }) => {
  const blogsPerPage = 1;

  return (
    <div>

      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={`px-3 py-1 rounded ${
              pageNumber === currentPage
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;

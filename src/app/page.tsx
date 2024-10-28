
"use client"

import Pagination from '@/components/pagination';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useFetchBlogs } from './hooks/hooks';

const Home = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 1; 
  const { blogs, error } = useFetchBlogs();

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs?.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Articles</h1>
      <ul className="space-y-4">
        {currentBlogs?.map((blog: any) => (
          <li key={blog.id}>
            <Link className="text-blue-500 hover:underline text-lg font-medium" href={`/blogs/${blog.documentId}`}>
                {blog.Title}
            </Link>
          </li>
        ))}
      </ul>
      {blogs && <Pagination blogs={blogs} paginate={paginate} currentPage={currentPage}/>}
      
    </div>
  );
};

export default Home;




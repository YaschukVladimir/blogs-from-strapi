
"use client"

import Pagination from '@/components/pagination';
import Link from 'next/link';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const Home = () => {

  async function fetchBlogs() {
    const res = await fetch('http://localhost:1337/api/blogs/');
    const data = await res.json();
    return data.data;
  }

  const { data, isLoading, isError, isSuccess} = useQuery<BlogType[]>({queryKey: ['blogs'], queryFn: fetchBlogs});
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 1; 

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = data?.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (isError) {
    return <div>some error!</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Articles</h1>
      <ul className="space-y-4">
        {currentBlogs?.map((blog) => (
          <li key={blog.id}>
            <Link className="text-blue-500 hover:underline text-lg font-medium" href={`/blogs/${blog.documentId}`}>
                {blog.Title}
            </Link>
          </li>
        ))}
      </ul>
      {isSuccess && <Pagination blogs={data} paginate={paginate} currentPage={currentPage}/>}
      
    </div>
  );
};

export default Home;




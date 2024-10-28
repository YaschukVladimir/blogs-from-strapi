
"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { use } from "react";


export default function Blog({ params }: BlogPageProps) {
    const { blogsId } = use(params);

    async function fetchBlog() {
        const res = await fetch(`http://localhost:1337/api/blogs/${blogsId}`);
        const data = await res.json();
        return data.data;
      }
    
      const { data, isLoading, isError, isSuccess} = useQuery<BlogType>({queryKey: ['blog'], queryFn: fetchBlog});

    if (isError) {
        return <div className="text-center text-red-500">some error!</div>;
    }

    if (isLoading) {
        return <div className="text-center text-blue-500">Loading...</div>
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
                {data?.Title}
            </h1>
            {data?.imageSrc && (
                <div className="w-full h-96 mb-6">
                    <img
                        src={data.imageSrc}
                        alt="Blog Image"
                        className="object-cover w-full h-full rounded-lg shadow-lg"
                    />
                </div>
            )}
            <p className="text-lg font-medium text-gray-600 mb-4 text-center">
                {data?.Summary}
            </p>
            <div className="prose max-w-3xl mx-auto text-gray-700 leading-relaxed mt-6">
                <p>{data?.Content[0].children[0].text}</p>
            </div>
            <Link className="text-lg font-medium text-gray-600 mb-4 text-center" href="/">Go home</Link>
        </div>
    );
}

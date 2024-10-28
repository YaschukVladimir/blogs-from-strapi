
"use client";

import { useFetchBlog } from "@/app/hooks/hooks";
import Link from "next/link";
import { use } from "react";


export default function Blog({ params }: BlogPageProps) {
    const { blogsId } = use(params);
    const {blog, error} = useFetchBlog(blogsId);

    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
                {blog?.Title}
            </h1>
            {blog?.imageSrc && (
                <div className="w-full h-96 mb-6">
                    <img
                        src={blog.imageSrc}
                        alt="Blog Image"
                        className="object-cover w-full h-full rounded-lg shadow-lg"
                    />
                </div>
            )}
            <p className="text-lg font-medium text-gray-600 mb-4 text-center">
                {blog?.Summary}
            </p>
            <div className="prose max-w-3xl mx-auto text-gray-700 leading-relaxed mt-6">
                <p>{blog?.Content[0].children[0].text}</p>
            </div>
            <Link className="text-lg font-medium text-gray-600 mb-4 text-center" href="/">Go home</Link>
        </div>
    );
}

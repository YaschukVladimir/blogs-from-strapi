import { useEffect, useState } from 'react';

export const useFetchBlog = (blogsId: string) => {
  const [blog, setBlog] = useState<BlogType | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStrapiData = async () => {
      const url = `http://localhost:1337/api/blogs/${blogsId}`

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setBlog(data.data);
      } catch (error: any) {
        setError(error.message);
        console.log("Fetch error:", error);
      }
    };

    fetchStrapiData();
  }, [blogsId]);

  return { blog, error };
};

export const useFetchBlogs = () => {
    const [blogs, setBlogs] = useState<BlogType[] | undefined>(undefined);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchStrapiData = async () => {
        const url = `http://localhost:1337/api/blogs/`
  
        try {
          const res = await fetch(url);
          if (!res.ok) throw new Error("Network response was not ok");
          const data = await res.json();
          setBlogs(data.data);
        } catch (error: any) {
          setError(error.message);
          console.log("Fetch error:", error);
        }
      };
  
      fetchStrapiData();
    }, []);
  
    return { blogs, error };
  };
  

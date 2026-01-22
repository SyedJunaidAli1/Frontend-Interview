const BASE_URL = import.meta.env.VITE_BASE_URL
;

export type Blog = {
  id: number;
  title: string;
  content: string;
  author: string;
};

export const fetchBlogs = async (): Promise<Blog[]> => {
  const res = await fetch(`${BASE_URL}/blogs`);
  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
  return res.json();
};

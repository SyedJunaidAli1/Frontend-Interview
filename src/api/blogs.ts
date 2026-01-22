const BASE_URL = "http://localhost:3001";

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

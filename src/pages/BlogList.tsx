import { useQuery } from "@tanstack/react-query";
import { fetchBlogs, Blog } from "../api/blogs";
import { Link } from "react-router-dom";

export default function BlogList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  if (isLoading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4">Error loading blogs</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>

      <div className="space-y-4">
        {data?.map((blog: Blog) => (
          <Link
            key={blog.id}
            to={`/blogs/${blog.id}`}
            className="block border rounded-lg p-4 hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.content}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

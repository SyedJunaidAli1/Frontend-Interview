import { useQuery } from "@tanstack/react-query";
import { fetchBlogs, Blog } from "./api/blogs";

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  if (isLoading) return <p className="flex item-center justi">Loading...</p>;
  if (error) return <p className="p-4">Something went wrong</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>

      <div className="space-y-4">
        {data?.map((blog: Blog) => (
          <div key={blog.id} className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.content}</p>
            <p className="text-sm text-gray-400 mt-2">Author: {blog.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

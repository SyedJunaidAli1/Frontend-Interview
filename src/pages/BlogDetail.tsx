import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = "http://localhost:3001";

export default function BlogDetail() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/blogs/${id}`);
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
    enabled: !!id,
  });

  if (isLoading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4">Error loading blog</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-600 mb-4">{data.content}</p>
      <p className="text-sm text-gray-400">Author: {data.author}</p>
    </div>
  );
}

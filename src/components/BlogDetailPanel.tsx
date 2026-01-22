import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function BlogDetailPanel() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/blogs/${id}`);
      return res.json();
    },
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Error loading blog
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Select a blog to read
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      {/* Cover */}
      <img src={data.coverImage} className="rounded-xl w-full object-cover" />

      {/* Title */}
      <h1 className="text-3xl font-bold">{data.title}</h1>

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex gap-2">
          {data.category.map((cat: string) => (
            <Badge key={cat}>{cat}</Badge>
          ))}
        </div>
        <span>{new Date(data.date).toDateString()}</span>
      </div>

      {/* Description */}
      <p className="text-lg text-gray-600">{data.description}</p>

      {/* Content */}
      <div className="prose max-w-none">{data.content}</div>
    </div>
  );
}

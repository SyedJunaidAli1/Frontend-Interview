import { useQuery } from "@tanstack/react-query";
import { fetchBlogs, Blog } from "@/api/blogs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


export default function BlogListPanel() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
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
        Error loading blogs
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">Latest Articles</h2>
  
        <Link to="/create">
          <Button size="sm">+ Create</Button>
        </Link>
      </div>
  
      {/* Blog list */}
      {data?.map((blog: Blog) => (
        <Link key={blog.id} to={`/blogs/${blog.id}`}>
          <Card className="hover:shadow cursor-pointer mb-4">
            <CardContent className="p-4 space-y-2">
              <div className="flex gap-2">
                {blog.category.map((cat) => (
                  <Badge key={cat} variant="secondary">
                    {cat}
                  </Badge>
                ))}
              </div>
  
              <h3 className="font-semibold">{blog.title}</h3>
  
              <p className="text-sm text-muted-foreground line-clamp-2">
                {blog.description}
              </p>
  
              <p className="text-xs text-gray-400">
                {new Date(blog.date).toDateString()}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );

}

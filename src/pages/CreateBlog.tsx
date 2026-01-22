import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/api/blogs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(""); // comma separated
  const [coverImage, setCoverImage] = useState("");

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      navigate("/");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutation.mutate({
      title,
      description,
      content,
      coverImage,
      category: category.split(",").map((c) => c.trim()),
      date: new Date().toISOString(),
    });
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Card>
        <CardContent className="p-6 space-y-6">
          <h1 className="text-2xl font-bold">Create Blog</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div className="space-y-1">
              <Label>Title</Label>
              <Input
                placeholder="Blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-1">
              <Label>Description</Label>
              <Textarea
                placeholder="Short summary of the blog"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            {/* Cover Image */}
            <div className="space-y-1">
              <Label>Cover Image URL</Label>
              <Input
                placeholder="https://image-url"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                required
              />
            </div>

            {/* Categories */}
            <div className="space-y-1">
              <Label>Categories</Label>
              <Input
                placeholder="FINANCE, TECH"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>

            {/* Content */}
            <div className="space-y-1">
              <Label>Content</Label>
              <Textarea
                placeholder="Full blog content"
                className="min-h-[160px]"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>

            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? "Creating..." : "Create Blog"}
            </Button>

            {mutation.isError && (
              <p className="text-sm text-red-500">Failed to create blog</p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

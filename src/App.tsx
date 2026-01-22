import { Routes, Route } from "react-router-dom";
import BlogLayout from "@/components/BlogLayout";
import BlogListPanel from "@/components/BlogListPanel";
import BlogDetailPanel from "@/components/BlogDetailPanel";
import CreateBlog from "./pages/CreateBlog";

function App() {
  return (
    <Routes>
      {/* Main blog layout */}
      <Route
        path="/"
        element={
          <BlogLayout
            left={<BlogListPanel />}
            right={<BlogDetailPanel />}
          />
        }
      />

      {/* Blog detail route (same layout, URL changes) */}
      <Route
        path="/blogs/:id"
        element={
          <BlogLayout
            left={<BlogListPanel />}
            right={<BlogDetailPanel />}
          />
        }
      />

      {/* Create blog page */}
      <Route path="/create" element={<CreateBlog />} />
    </Routes>
  );
}

export default App;

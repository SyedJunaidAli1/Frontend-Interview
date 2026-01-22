import CreateBlog from "./pages/CreateBlog";
import { Routes, Route } from "react-router-dom";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/blogs/:id" element={<BlogDetail />} />
      <Route path="/create" element={<CreateBlog />} />
    </Routes>
  );
}

export default App;

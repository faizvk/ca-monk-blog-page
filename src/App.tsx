import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import CreateBlogForm from "./components/CreateBlogForm";
import { Button } from "./components/ui/Button";

export default function App() {
  const [selectedId, setSelectedId] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white px-4 py-4 mb-6">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">
            CA Monk
          </Link>
          <Link to="/create">
            <Button size="sm">Create Post</Button>
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4">
        <Routes>
          <Route
            path="/"
            element={
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <aside className="lg:col-span-1">
                  <BlogList onSelect={setSelectedId} />
                </aside>
                <main className="lg:col-span-2">
                  <BlogDetail id={selectedId} />
                </main>
              </div>
            }
          />
          <Route
            path="/create"
            element={
              <div className="max-w-2xl mx-auto">
                <CreateBlogForm />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

import { useBlogs } from "../hooks/useBlogs";
import BlogCard from "./BlogCard";

import { SkeletonCard } from "./BlogSkeleton";

export default function BlogList({
  onSelect,
}: {
  onSelect: (id: number) => void;
}) {
  const { data, isLoading, isError } = useBlogs();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-5">
        {[...Array(4)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-slate-200 rounded-2xl">
        <p className="text-sm font-medium text-slate-500">
          Failed to load articles
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 text-xs text-blue-600 hover:underline"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 max-h-[85vh] overflow-y-auto pr-3 custom-scrollbar">
      {data?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} onSelect={onSelect} />
      ))}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </div>
  );
}

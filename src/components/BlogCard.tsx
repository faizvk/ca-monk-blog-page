import { Card } from "./ui/Card";
import type { Blog } from "../api/Blogs";

export default function BlogCard({
  blog,
  onSelect,
}: {
  blog: Blog;
  onSelect: (id: number) => void;
}) {
  return (
    <Card
      variant="hover"
      onClick={() => onSelect(blog.id)}
      className="cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-2 mb-3">
          {blog.category.map((cat) => (
            <span
              key={cat}
              className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[10px] font-bold uppercase tracking-wider text-blue-600 border border-blue-100"
            >
              {cat}
            </span>
          ))}
        </div>

        <h3 className="font-bold text-lg leading-tight text-slate-900 group-hover:text-blue-600 transition-colors">
          {blog.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-3">
          {blog.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-medium text-slate-400">
        <span>
          {new Date(blog.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
          Read more
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </Card>
  );
}

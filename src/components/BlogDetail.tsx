import { useBlogById } from "../hooks/useBlogs";
import { DetailSkeleton } from "./BlogSkeleton";

export default function BlogDetail({ id }: { id: number }) {
  const { data, isLoading } = useBlogById(id);

  if (!id) {
    return (
      <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-slate-100 rounded-3xl bg-slate-50/50">
        <p className="text-slate-400 font-medium italic">
          Select an article to start reading
        </p>
      </div>
    );
  }

  if (isLoading) {
    return <DetailSkeleton />;
  }

  if (!data) return null;

  return (
    <article className="max-w-4xl mx-auto pb-20">
      <div className="relative mb-10">
        <img
          src={data.coverImage}
          alt={data.title}
          className="w-full h-64 md:h-[450px] object-cover rounded-[2rem] shadow-xl"
        />
      </div>

      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          {data.category.map((cat) => (
            <span
              key={cat}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-600"
            >
              {cat}
            </span>
          ))}
          <span className="text-slate-300">•</span>
          <time className="text-sm font-medium text-slate-400">
            {new Date(data.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          {data.title}
        </h1>

        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light italic border-l-4 border-blue-500 pl-6">
          {data.description}
        </p>
      </header>

      <div className="mt-12 prose prose-slate prose-lg max-w-none">
        <div className="whitespace-pre-line text-slate-700 leading-extra-relaxed font-serif text-lg md:text-xl">
          {data.content}
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-slate-100">
        <div className="flex flex-wrap gap-2">
          {data.category.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 text-xs font-semibold rounded-full bg-slate-50 text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              #{tag.toLowerCase().replace(/\s+/g, "")}
            </span>
          ))}
        </div>
      </footer>
    </article>
  );
}

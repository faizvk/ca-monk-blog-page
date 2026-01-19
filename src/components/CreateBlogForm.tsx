import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { useCreateBlog } from "../hooks/useBlogs";

export default function CreateBlogForm() {
  const mutation = useCreateBlog();
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const newBlog = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      content: formData.get("content") as string,
      coverImage: formData.get("coverImage") as string,
      category: ["TECH"],
      date: new Date().toISOString(),
    };

    toast.promise(mutation.mutateAsync(newBlog), {
      loading: "Publishing your story...",
      success: () => {
        form.reset();
        navigate("/");
        return "Article published successfully!";
      },
      error: "Failed to publish article. Please try again.",
    });
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <Button
        variant="secondary"
        onClick={() => navigate("/")}
        className="mb-6 text-slate-500 hover:text-slate-900"
      >
        ← Back to Feed
      </Button>

      <form
        onSubmit={submit}
        className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-xl shadow-slate-200/60 space-y-6"
      >
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight text-center">
            Write Story
          </h2>
          <p className="text-sm text-slate-500 text-center">
            Share your thoughts with the world.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
              Title
            </label>
            <Input
              name="title"
              placeholder="Give your blog a catchy name..."
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
              Preview
            </label>
            <Input
              name="description"
              placeholder="A short snippet for the feed"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
              Cover Image URL
            </label>
            <Input
              name="coverImage"
              placeholder="https://images.unsplash.com/..."
              type="url"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
              Content
            </label>
            <Input
              name="content"
              type="textarea"
              placeholder="Tell your story..."
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full mt-4"
          size="lg"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Publishing..." : "Publish Article"}
        </Button>
      </form>
    </div>
  );
}

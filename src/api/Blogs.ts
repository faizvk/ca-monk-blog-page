export interface Blog {
  id: number;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
}

const BASE_URL = "http://localhost:3001/blogs";

export const fetchBlogs = async (): Promise<Blog[]> => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};

export const fetchBlogById = async (id: number): Promise<Blog> => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
};

export const createBlog = async (blog: Omit<Blog, "id">) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  });
  if (!res.ok) throw new Error("Failed to create blog");
  return res.json();
};

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchBlogs, fetchBlogById, createBlog } from "../api/Blogs.ts";
import type { Blog } from "../api/Blogs.ts";

export const useBlogs = () => {
  return useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });
};

export const useBlogById = (id: number) => {
  return useQuery<Blog>({
    queryKey: ["blogs", id],
    queryFn: () => fetchBlogById(id),
    enabled: !!id,
  });
};

export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};

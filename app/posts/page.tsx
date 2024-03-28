import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts.util";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "This is just a dummy blog, don't get it seriously",
};

export default function AllPostsPage() {
  const allPosts = getAllPosts();
  return <AllPosts posts={allPosts}></AllPosts>;
}

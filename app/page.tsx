import FeaturedPosts from "@/components/home/featured-posts";
import { Hero } from "@/components/home/hero";
import { getFeaturedPosts } from "@/lib/posts.util";
import { Post } from "@/models/posts";

export default function HomePage() {
  const data = getFeaturedPosts();
  return (
    <>
      <Hero></Hero>
      <FeaturedPosts posts={data}></FeaturedPosts>
    </>
  );
}

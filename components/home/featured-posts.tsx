import { Post } from "@/models/posts";
import PostsGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";

type Props = {
  posts: Post[];
};
export default function FeaturedPosts(props: Props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts}></PostsGrid>
    </section>
  );
}

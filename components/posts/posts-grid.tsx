import { Post } from "@/models/posts";
import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

type Props = {
  posts: Post[];
};
export default function PostsGrid(props: Props) {
  return (
    <ul className={classes.grid}>
      {props.posts.map((post: any) => (
        <PostItem key={post.id} post={post}></PostItem>
      ))}
    </ul>
  );
}

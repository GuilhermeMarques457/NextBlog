import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";
import { Post } from "@/models/posts";

type Props = {
  post: Post;
};
export default function PostItem(props: Props) {
  const formattedDate = new Date(props.post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${props.post.id}/${props.post.image}`;

  return (
    <li className={classes.post}>
      <Link href={"/posts/" + props.post.id}>
        <div>
          <Image
            layout="responsive"
            src={imagePath}
            width={300}
            height={200}
            alt={props.post.title}
            className={classes.image}
          ></Image>
        </div>
        <div className={classes.content}>
          <p> {props.post.title}</p>

          <time>{formattedDate}</time>
          <p>{props.post.excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

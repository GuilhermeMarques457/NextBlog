import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/models/posts";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostData(id: string) {
  const postId = id.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postId}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData: Post | any = {
    id: postId,
    ...data,
    content: content,
  };

  return postData;
}

export function getAllPosts(): Post[] {
  const postsFiles = fs.readdirSync(postsDirectory);

  const allPosts = postsFiles.map((postFile) => getPostData(postFile));

  return allPosts;
}

export function getFeaturedPosts(): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post: Post) => post);
}

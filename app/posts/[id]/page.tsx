import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData } from "@/lib/posts.util";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const post = getPostData(id);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostDetailPage({ params }: Props) {
  const post = getPostData(params.id);
  return <PostContent post={post}></PostContent>;
}

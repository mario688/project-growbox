import React from "react";
import { useRouter } from "next/router";
import PostDetails from "../../components/forum/PostDetails";
export default function () {
  const router = useRouter();

  return <PostDetails postId={router.query.postId} />;
}

import React from "react";
import CreatePost from "./CreatePost";
import PostsList from "./PostsList";

export default function Forum() {
  return (
    <div>
      <CreatePost />
      <PostsList />
    </div>
  );
}

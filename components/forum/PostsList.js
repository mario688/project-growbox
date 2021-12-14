import React, { useState, useEffect, useCallback } from "react";
import Posts from "./Posts";
export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = useCallback(async () => {
    const response = await fetch("/api/get-posts");
    const responseJson = await response.json();
    setPosts(responseJson);
  }, []);
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <Posts postsList={posts} />
    </div>
  );
}

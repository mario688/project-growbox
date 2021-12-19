import React, { useState, useEffect, useCallback } from "react";
import Posts from "./Posts";
import Style from "./PostsList.module.css";
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
    <div className={Style.postList}>
      <Posts postsList={posts} />
    </div>
  );
}

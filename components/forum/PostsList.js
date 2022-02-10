import React, { useState, useEffect, useCallback, useContext } from "react";
import Posts from "./Posts";
import Style from "./PostsList.module.css";
import PostContext from "../../contexts/post-context";
export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const postCtx = useContext(PostContext);
  const fetchPosts = useCallback(async () => {
    const response = await fetch("/api/get-posts");
    const responseJson = await response.json();
    const postsArr = [];
    for (var key in responseJson) {
      responseJson[key].id = key;
      postsArr.push(responseJson[key]);
    }

    setPosts(postsArr);
    if (postsArr.length > 0) {
      postCtx.setPosts(postsArr);
    }
  }, []);
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className={Style.postList}>
      {posts.map((post) => (
        <Posts
          key={post.id}
          id={post.id}
          images={post.images}
          owner={post.owner}
          text={post.text}
          title={post.title}
        />
      ))}
    </div>
  );
}

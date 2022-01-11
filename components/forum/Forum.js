import React, { useContext } from "react";
import CreatePost from "./CreatePost";
import PostsList from "./PostsList";
import AuthContext from "../../contexts/auth-context";
export default function Forum() {
  const userCtx = useContext(AuthContext);
  const { isLoggedIn } = userCtx;
  return (
    <>
      {isLoggedIn && <CreatePost />}
      <PostsList />
    </>
  );
}

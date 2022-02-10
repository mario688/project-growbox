import React, { useState } from "react";
const PostContext = React.createContext({
  posts: [
    {
      images: [],
      owner: "",
      text: "",
      title: "",
    },
  ],
  getPostById: (postId) => {},
  setPosts: (posts) => {},
});

export const PostContextProvider = (props) => {
  const [postsList, setPostsList] = useState([]);
  const setPostHandler = (posts) => {
    setPostsList(posts);
  };
  const getPostByIdHandler = (postId) => {
    const post = postsList.filter((post) => post.id === postId);
    return post;
  };

  const contextValue = {
    posts: postsList,
    setPosts: setPostHandler,
    getPostById: getPostByIdHandler,
  };

  return (
    <PostContext.Provider value={contextValue}>
      {props.children}
    </PostContext.Provider>
  );
};
export default PostContext;

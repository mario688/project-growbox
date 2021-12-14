import React from "react";

export default function Posts(props) {
  const PostsForDisplay = [];
  for (let key in props.postsList) {
    let post = props.postsList[key];
    let images = [];
    for (let picture in post.images) {
      console.log(picture);
      images.push(
        <img key={picture} src={post.images[picture]} alt="Post Pic" />
      );
    }
    PostsForDisplay.push(
      <div key={key}>
        <div>{images}</div>
        <div>{post.title}</div>
        <div>{post.text}</div>
      </div>
    );
  }

  return <div>{PostsForDisplay}</div>;
}

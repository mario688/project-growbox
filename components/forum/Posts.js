import React from "react";
import useUserData from "../hooks/fetchUserPersonals-hook";
import Style from "./Posts.module.css";
export default function Posts(props) {
  const PostsForDisplay = [];
  for (let key in props.postsList) {
    let post = props.postsList[key];
    const { avatar, bio, username, isLoading } = useUserData(post.owner);
    let images = [];
    for (let picture in post.images) {
      images.push(
        <img key={picture} src={post.images[picture]} alt="Post Pic" />
      );
    }
    PostsForDisplay.push(
      <div className={Style.singlePost} key={key}>
        <div className={Style.ownerPost}>
          <div>
            <h2>{username}</h2>
          </div>
          <div className={Style.ownerPostAvatar}>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={Style.barInfo}>
            <div className={`${Style.barInfoItem} ${Style.amountOfPhotos}`}>
              {images.length}
            </div>
            <div className={`${Style.barInfoItem} ${Style.amountOfComments}`}>
              0
            </div>
          </div>
        </div>
        <div className={Style.postContent}>
          <div className={Style.postTitle}>{post.title}</div>
          <div>{post.text}</div>
          <div className={Style.preViewImages}>{images}</div>
        </div>
      </div>
    );
  }

  return <>{PostsForDisplay}</>;
}

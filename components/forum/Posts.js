import React from "react";
import { useRouter } from "next/router";
import Style from "./Posts.module.css";
import useUserData from "../hooks/fetchUserPersonals-hook";
import PostDetails from "./PostDetails";
export default function Posts({ title, images, owner, text, id }) {
  const { avatar, bio, username, isLoading } = useUserData(owner);
  const router = useRouter();
  const photos = images.map((photo) => {
    return <img key={photo} src={photo} alt="photo" />;
  });
  const showDetailsHandler = (params) => {
    router.push("/forum/" + id);
  };

  return (
    <div className={Style.singlePost} key={id} onClick={showDetailsHandler}>
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
        </div>
      </div>
      <div className={Style.postContent}>
        <div className={Style.postTitle}>{title}</div>
        <div>{text}</div>
        <div className={Style.preViewImages}>{photos.slice(0, 2)}</div>
      </div>
    </div>
  );
}

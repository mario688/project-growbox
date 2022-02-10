import React, { useCallback, useContext } from "react";
import PostContext from "../../contexts/post-context";
import Style from "./PostDetails.module.css";
import { useRouter } from "next/router";
export default function PostDetails(props) {
  const router = useRouter();
  const postCtx = useContext(PostContext);
  const goBackHandler = (params) => {
    router.push("/forum");
  };
  const post = postCtx.getPostById(props.postId);

  const images = post[0].images.map((photo) => {
    return (
      <li className={Style.photoItem}>
        <img className={Style.photo} src={photo} alt="photo" />
      </li>
    );
  });

  console.log(post);
  return (
    <>
      <div className={Style.backButton} onClick={goBackHandler}></div>
      <div className={Style.postContainer}>
        <div className={Style.postTitle}>{post[0].title}</div>
        <ul className={Style.imagesList}>{images}</ul>
      </div>
    </>
  );
}

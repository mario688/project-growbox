import React, { useContext, useState, useRef } from "react";
import useUploadImage from "../hooks/uploadFile-hook";
import AuthContext from "../../contexts/auth-context";
import Style from "./CreatePost.module.css";

export default function CreatePost() {
  const [addPost, setAddPost] = useState(false);
  const userCtx = useContext(AuthContext);
  const titleRef = useRef();
  const textRef = useRef();
  const { userId } = userCtx.user;
  const { image, setUploadFile } = useUploadImage();

  const addPostHandler = (params) => {
    setAddPost((prevState) => !prevState);
  };

  const imageUploadHandler = (e) => {
    setUploadFile({
      type: "photoRelation",
      files: e.target.files,
      user: userId,
    });
  };
  const saveChangeHandler = async (e) => {
    e.preventDefault();

    console.log(textRef.current.value);
    const post = {
      images: image,
      owner: userId,
      title: titleRef.current.value,
      text: textRef.current.value,
    };
    const response = await fetch("/api/send-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    window.location.reload();
  };
  return (
    <div className={Style.createPostContainer}>
      {addPost ? (
        <>
          <div onClick={addPostHandler} className={Style.backDrop}></div>
          <div className={Style.createPost}>
            <form onSubmit={saveChangeHandler}>
              <input
                ref={titleRef}
                type="text"
                placeholder="Title"
                required
              ></input>
              <input ref={textRef} type="textarea" name="textValue" required />
              <input
                onChange={imageUploadHandler}
                multiple
                type="file"
                required
              />
              <button>Save data</button>
            </form>
          </div>
        </>
      ) : (
        <button onClick={addPostHandler}>Add photo relation</button>
      )}
    </div>
  );
}

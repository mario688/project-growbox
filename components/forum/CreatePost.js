import React, { useState, useRef } from "react";
import useUploadImage from "../hooks/uploadFile-hook";
import useUser from "../hooks/fetchUser-hook";
export default function CreatePost() {
  const titleRef = useRef();
  const textRef = useRef();
  const { userId } = useUser();
  const { image, setUploadFile } = useUploadImage();
  const imageUploadHandler = (e) => {
    setUploadFile({
      type: "photoRelation",
      files: e.target.files,
      user: userId,
    });
  };
  const saveChangeHandler = async (e) => {
    e.preventDefault();
    console.log("xd");
    console.log(textRef.current.value);
    const post = {
      images: image,
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
    <div>
      <div>
        <form onSubmit={saveChangeHandler}>
          <input
            ref={titleRef}
            type="text"
            placeholder="Title"
            required
          ></input>
          <input ref={textRef} type="textarea" name="textValue" required />
          <input onChange={imageUploadHandler} multiple type="file" required />
          <button>Save data</button>
        </form>
      </div>
    </div>
  );
}

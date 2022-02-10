import React, { useState, useContext, useRef } from "react";
import useUploadImage from "../hooks/uploadFile-hook";
import AuthContext from "../../contexts/auth-context";
import Style from "./SetUserPersonalData.module.css";
export default function SetUserPersonalData(props) {
  const userCtx = useContext(AuthContext);
  const userId = userCtx.user.userId;
  const { image, setUploadFile } = useUploadImage();
  const nameRef = useRef();
  const bioRef = useRef();
  const lastRef = useRef();

  const AvatarHandler = (e) => {
    setUploadFile({ type: "avatars", files: e.target.files, user: userId });
  };

  const saveChangeHandler = async (e) => {
    e.preventDefault();
    const user = {
      avatar: image,
      userId,
      username: nameRef.current.value,
      lastname: lastRef.current.value,
      bio: bioRef.current.value,
    };
    const response = await fetch("/api/update-userData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    window.location.reload();
  };

  return (
    <>
      <div
        className={Style.backDrop}
        onClick={() => {
          props.onClickHandler();
        }}
      ></div>
      <div className={Style.editData}>
        <form onSubmit={saveChangeHandler}>
          <input
            className={Style.fileUpload}
            onChange={AvatarHandler}
            type="file"
          />
          <input ref={nameRef} type="text" placeholder="name"></input>
          <input ref={lastRef} type="text" placeholder="last name"></input>
          <input ref={bioRef} type="text" placeholder="bio"></input>
          <button>Save data</button>
        </form>
      </div>
    </>
  );
}

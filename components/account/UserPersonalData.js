import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../contexts/auth-context";
import Style from "./UserPersonalData.module.css";
import useUserData from "../hooks/fetchUserPersonals-hook";
import LoadingSpinner from "../layout/LoadingSpinner";
export default function UserPersonalData() {
  const userCtx = useContext(AuthContext);
  const { email, userId } = userCtx.user;

  const { username, lastname, bio, avatar, isLoading } = useUserData(userId);

  return (
    <div className={Style.userContainer}>
      {isLoading && <LoadingSpinner />}

      <div className={Style.userProfile}>
        <img src={avatar} />
      </div>
      <div className={Style.userData}>
        <span>
          <h4>Name:</h4> {username}
        </span>
        <span>
          <h4>Last Name:</h4> {lastname}
        </span>
        <span>
          <h4>Bio:</h4> {bio}
        </span>
        <span>
          <h4>Email:</h4> {email}
        </span>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import useUser from "../hooks/fetchUser-hook";
import { UserMap } from "./mapUser";
import Style from "./UserPersonalData.module.css";
import SetUserPersonalData from "./SetUserPersonalData";
export default function UserPersonalData() {
  const { userId, email } = useUser();
  const [user, setUser] = useState({
    avatar: "",
    bio: "",
    email: "",
    lastname: "",
    username: "",
  });

  const fetchUserData = async (params) => {
    const response = await fetch(`/api/fetch-deviceId?userId=${userId}`);
    const responseJson = await response.json();
    if (responseJson) {
      const userData = UserMap(responseJson);
      userData.email = email;
      setUser(userData);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userId]);
  return (
    <>
      <div className={Style.userProfile}>
        <img src={user.avatar} />
      </div>
      <div>Name: {user.username}</div>
      <div>Last Name: {user.lastname}</div>
      <div>Bio :{user.bio}</div>
      <div>Email :{user.email}</div>
    </>
  );
}

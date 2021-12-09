import React from "react";

export function UserMap(user) {
  let mapedUser = {
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/sturdy-dragon-299320.appspot.com/o/files%2Favatars%2FuserProfile.png?alt=media&token=1f3fdc2a-4253-4ec3-bfcc-5bc4339dcd01",
    bio: "",
    email: "",
    lastname: "",
    username: "",
  };
  if (user.personal) {
    const { avatar, bio, lastname, username } = user.personal;
    mapedUser = {
      avatar,
      bio,
      lastname,
      username,
    };
  }
  return mapedUser;
}

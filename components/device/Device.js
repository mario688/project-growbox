import React from "react";
import RegisterDevice from "./RegisterDevice";
import useUser from "../hooks/fetchUser-hook";
import FetchDevice from "./FetchDevice";

export default function Device() {
  const user = useUser();

  return (
    <div>
      <h1>Your Device</h1>
      {user.userId && <FetchDevice userId={user.userId} />}
      {!user.userId && <RegisterDevice userId={user.userId} />}
    </div>
  );
}

import React from "react";
import RegisterDevice from "./RegisterDevice";
import useUser from "../hooks/fetchUser-hook";
import FetchDevice from "./FetchDevice";
import Style from "./Device.module.css";
export default function Device() {
  const { isLoading, userId } = useUser();

  return (
    <div className={Style.container}>
      <h1>Your Device</h1>

      {isLoading && <div className={Style.loadingSpinner}></div>}
      {userId && <FetchDevice userId={userId} />}
      {!userId && !isLoading && <RegisterDevice userId={userId} />}
    </div>
  );
}

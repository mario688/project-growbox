import React, { useContext } from "react";
import FetchDevice from "./FetchDevice";
import Style from "./Device.module.css";
import AuthContext from "../../contexts/auth-context";
import LoadingSpinner from "../layout/LoadingSpinner";
export default function Device() {
  const userCtx = useContext(AuthContext);
  const userId = userCtx.user.userId;

  return (
    <div className={Style.container}>
      <h1>Twoje urządzenie</h1>
      <FetchDevice userId={userId} />
    </div>
  );
}

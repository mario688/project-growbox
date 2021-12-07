import React, { useContext, useState } from "react";
import useUser from "../hooks/fetchUser-hook";
import AuthContext from "../../contexts/auth-context";
import Style from "./Account.module.css";
export default function Account() {
  const AuthCtx = useContext(AuthContext);
  const { email } = useUser();
  const [userProfile, setUserProfile] = useState();
  const profileSelectedHandler = (e) => {
    setUserProfile(e.target.files[0]);
  };

  return (
    <div className={Style.accountContainer}>
      <div className={Style.account}>
        <h1>Account</h1>
        <div className={Style.userProfile}></div>

        <h3>{email}</h3>
        <button
          onClick={() => {
            AuthCtx.logout();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

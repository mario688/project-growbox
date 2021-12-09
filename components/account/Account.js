import React, { useContext, useState } from "react";
import useUser from "../hooks/fetchUser-hook";
import AuthContext from "../../contexts/auth-context";
import Style from "./Account.module.css";
import SetUserPersonalData from "./SetUserPersonalData";
import UserPersonalData from "./UserPersonalData";
export default function Account() {
  const AuthCtx = useContext(AuthContext);
  const [editAccount, setEditAccount] = useState(false);
  return (
    <div className={Style.accountContainer}>
      <div className={Style.account}>
        <h1>Account</h1>
        <button
          onClick={() => {
            setEditAccount((prevState) => !prevState);
          }}
        >
          Edit account
        </button>
        <UserPersonalData />
        {editAccount && <SetUserPersonalData />}
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

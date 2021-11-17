import React, { useContext } from "react";
import useUser from "../hooks/fetchUser-hook";
import AuthContext from "../../contexts/auth-context";
export default function Account() {
  const AuthCtx = useContext(AuthContext);
  const { email } = useUser();

  return (
    <>
      <h1>Account</h1>
      <h3>{email}</h3>
      <button
        onClick={() => {
          AuthCtx.logout();
        }}
      >
        Logout
      </button>
    </>
  );
}

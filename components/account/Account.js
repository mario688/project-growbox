import React from "react";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/auth-context";
import { useRouter } from "next/router";
export default function Account() {
  const route = useRouter();
  const AuthCtx = useContext(AuthContext);
  const [user, setUser] = useState({ email: "" });
  const fetchUserData = async (params) => {
    const response = await fetch(`/api/user?token=${AuthCtx.token}`);
    const responseJson = await response.json();
    const userData = responseJson.users[0];
    setUser({ email: userData.email });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <h1>Account</h1>
      <h3>{user.email}</h3>
      <button
        onClick={() => {
          route.replace("/");
          AuthCtx.logout();
        }}
      >
        Logout
      </button>
    </>
  );
}

import React from "react";
import useUser from "../hooks/fetchUser-hook";
import { useRouter } from "next/router";
export default function Account() {
  const route = useRouter();
  const { email } = useUser();

  return (
    <>
      <h1>Account</h1>
      <h3>{email}</h3>
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

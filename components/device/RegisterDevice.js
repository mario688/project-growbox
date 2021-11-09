import React from "react";

import useUser from "../hooks/fetchUser-hook";
import { useRef } from "react";
export default function RegisterDevice() {
  const idDeviceRef = useRef();
  const { userId } = useUser();

  const registerDeviceHandler = async (e) => {
    const idDevice = idDeviceRef.current.value;
    e.preventDefault();
    await fetch(`/api/device?userId=${userId}&idDevice=${idDevice}`);
  };

  return (
    <div>
      <form onSubmit={registerDeviceHandler}>
        <input ref={idDeviceRef} type="text"></input>
        <button>Register</button>
      </form>
    </div>
  );
}

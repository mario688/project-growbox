import React, { useRef } from "react";

export default function RegisterDevice(data) {
  const idDeviceRef = useRef();
  const userId = data.userId;
  const registerDeviceHandler = async (e) => {
    const idDevice = idDeviceRef.current.value;
    e.preventDefault();
    await fetch(`/api/register-device?userId=${userId}&idDevice=${idDevice}`);
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

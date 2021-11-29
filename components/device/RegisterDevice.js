import React, { useRef, useState } from "react";
import Style from "./RegisterDevice.module.css";
export default function RegisterDevice(data) {
  const idDeviceRef = useRef();

  const userId = data.userId;
  const [isValid, setIsValid] = useState(false);
  const [idDevice, setIdDevice] = useState("");

  const inputTextHandler = (params) => {
    let deviceId = idDeviceRef.current.value.trim();

    if (deviceId.length > 8) {
      setIsValid(true);
      setIdDevice(deviceId);
    } else {
      setIsValid(false);
    }
  };

  const registerDeviceHandler = async (e) => {
    e.preventDefault();
    await fetch(`/api/register-device?userId=${userId}&idDevice=${idDevice}`);
    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={registerDeviceHandler} className={Style.form}>
        <h3>Register your device</h3>

        <input
          onChange={inputTextHandler}
          ref={idDeviceRef}
          type="text"
        ></input>
        <button disabled={!isValid}>Register</button>
      </form>
    </div>
  );
}

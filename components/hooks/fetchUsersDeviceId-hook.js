import { useState, useEffect } from "react";
const useDevice = (user) => {
  const [deviceId, setDeviceId] = useState("");
  const fetchUserDeviceId = async (params) => {
    const response = await fetch(`api/fetch-deviceId?userId=${user}`);

    const dataJson = await response.json();

    setDeviceId(dataJson.device);
  };
  useEffect(() => {
    fetchUserDeviceId();
  }, []);
  return deviceId;
};
export default useDevice;

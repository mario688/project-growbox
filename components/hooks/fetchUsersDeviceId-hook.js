import { useState, useEffect } from "react";
const useDevice = (user) => {
  const [deviceId, setDeviceId] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const fetchUserDeviceId = async (params) => {
    const response = await fetch(`api/fetch-deviceId?userId=${user}`);

    const dataJson = await response.json();

    setDeviceId(dataJson.device);
    setIsloading(false);
  };
  useEffect(() => {
    fetchUserDeviceId();
  }, []);

  return { idDevice: deviceId, isLoading };
};
export default useDevice;

import { useState, useEffect, useCallback } from "react";
const useDevice = (user) => {
  const [deviceId, setDeviceId] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const fetchUserDeviceId = useCallback(
    async (params) => {
      const response = await fetch(`api/fetch-deviceId?userId=${user}`);

      const dataJson = await response.json();

      setDeviceId(dataJson.device);
      setIsloading(false);
    },
    [user]
  );
  useEffect(() => {
    fetchUserDeviceId();
  }, [fetchUserDeviceId]);

  return { idDevice: deviceId, isLoading };
};
export default useDevice;

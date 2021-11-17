import { useState, useEffect } from "react";
import useDevice from "../hooks/fetchUsersDeviceId-hook";
import DataDevice from "./DataDevice";
const FetchDevice = (data) => {
  const { idDevice, isLoading } = useDevice(data.userId);

  const [deviceData, setDeviceData] = useState({});
  const fetchData = async (params) => {
    const response = await fetch(`/api/fetch-DataDevice?deviceId=${idDevice}`);
    const responseJson = await response.json();
    setDeviceData(responseJson);
  };

  useEffect(() => {
    if (idDevice) {
      fetchData();
    }
  }, [idDevice]);

  return (
    <>
      {idDevice && <DataDevice data={deviceData} />}
      {!idDevice && !isLoading && <h1>not found device for your account </h1>}
    </>
  );
};
export default FetchDevice;

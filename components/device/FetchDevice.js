import { useState, useEffect, useCallback } from "react";
import useDevice from "../hooks/fetchUsersDeviceId-hook";
import DataDevice from "./DataDevice";
import RegisterDevice from "./RegisterDevice";
import Style from "./FetchDevice.module.css";
const FetchDevice = (data) => {
  const { idDevice, isLoading } = useDevice(data.userId);

  const [deviceData, setDeviceData] = useState({});
  const fetchData = useCallback(
    async (params) => {
      const response = await fetch(
        `/api/fetch-DataDevice?deviceId=${idDevice}`
      );
      const responseJson = await response.json();

      const { temp, hum, lux, soil, water, etvoc, eco2 } = responseJson;

      setDeviceData({ temp, hum, lux, soil, water, eco2, etvoc });
    },
    [idDevice]
  );

  useEffect(() => {
    if (idDevice) {
      fetchData();
    }
  }, [idDevice, fetchData]);

  return (
    <>
      {idDevice && <DataDevice data={deviceData} />}
      {!idDevice && !isLoading && (
        <div className={Style.registerContainer}>
          <div>
            <h1>Nie znaleziono urządzenia dla twojego konta </h1>
          </div>
          <div>
            <RegisterDevice userId={data.userId} />
          </div>
        </div>
      )}
    </>
  );
};
export default FetchDevice;

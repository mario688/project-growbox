import React from "react";
import Style from "./DataDevice.module.css";
export default function dataDevice({ data }) {
  const { temp, hum, water } = data;

  return (
    <div className={Style.flexContainer}>
      <div className={Style.flexItem}>
        <div className={Style.title}>Temperature</div>
        <div className={`${Style.item} ${Style.temp}`}>
          <div className={Style.value}> {temp}</div>
        </div>
      </div>
      <div className={Style.flexItem}>
        <div className={Style.title}>Humiditi</div>
        <div className={`${Style.item} ${Style.hum}`}>
          <div className={Style.value}>{hum}</div>
        </div>
      </div>
      <div className={Style.flexItem}>
        <div className={Style.title}>Water Level</div>
        <div className={`${Style.item} ${Style.water}`}>
          <div className={Style.value}>{water}</div>
        </div>
      </div>
    </div>
  );
}

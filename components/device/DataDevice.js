import React from "react";
import Style from "./DataDevice.module.css";
export default function dataDevice({ data }) {
  const { temp, hum, water, soil, lux, eco2, etvoc } = data;

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
        <div className={Style.title}>soil Moisture</div>
        <div className={`${Style.item} ${Style.soil}`}>
          <div className={Style.value}>{soil}</div>
        </div>
      </div>
      <div className={Style.flexItem}>
        <div className={Style.title}>Water Level</div>
        <div className={`${Style.item} ${Style.water}`}>
          <div className={Style.value}>{water}</div>
        </div>
      </div>
      <div className={Style.flexItem}>
        <div className={Style.title}>Brightness</div>
        <div className={`${Style.item} ${Style.lux}`}>
          <div className={Style.value}>{lux}</div>
        </div>
      </div>
      <div className={Style.flexItem}>
        <div className={Style.title}>CO2</div>
        <div className={`${Style.item} ${Style.eco2}`}>
          <div className={Style.value}>{eco2}</div>
        </div>
      </div>
      <div className={Style.flexItem}>
        <div className={Style.title}>VOC</div>
        <div className={`${Style.item} ${Style.etvoc}`}>
          <div className={Style.value}>{etvoc}</div>
        </div>
      </div>
    </div>
  );
}

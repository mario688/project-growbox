import React from "react";
import Style from "./DataDevice.module.css";
export default function dataDevice({ data }) {
  const units = [
    { temperature: "C°" },
    { Humitity: "%" },
    { Brightness: "lux" },
    { "Soil Mousture": "%" },
    { water: "%" },
    { CO2: "ppm" },
    { etvoc: "ppm" },
  ];
  const valuesForDisplay = Object.keys(data).map((key, i) => {
    const unitName = Object.keys(units[i]);
    const unitSymbol = Object.values(units[i]);

    return (
      <div className={Style.flexItem} key={key}>
        <div className={`${Style.item} ${Style[key]}`}></div>
        <div className={Style.subItem}>
          <div className={Style.title}>{unitName}</div>
          <div className={Style.value}>
            <span>
              {data[key]} {unitSymbol}
            </span>
          </div>
        </div>
      </div>
    );
  });

  return <div className={Style.flexContainer}>{valuesForDisplay}</div>;
}

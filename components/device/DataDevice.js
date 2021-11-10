import React from "react";

export default function dataDevice({ data }) {
  const { temp, hum } = data;

  return (
    <div>
      <h1>Temperature: {temp}</h1>
      <h1>Humidity: {hum}</h1>
    </div>
  );
}

import React from "react";
import Style from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={Style.HomePage}>
      <div className={Style.flexContainer}>
        <div className={Style.InfoBox}>
          <h1 className={Style.InfoBoxTitle}>Fully automatic GrowBox</h1>
          <h2>monitor and control your device from all over the world</h2>
        </div>
        <div className={Style.imageGrowBox}></div>
      </div>
      <div className={Style.infoBar}>
        <h1>How it works</h1>
        <div className={Style.infoBarItems}>
          <div>
            <div className={`${Style.infoBarItem} ${Style.plant}`}></div>
            <h3>Plant</h3>
          </div>
          <div>
            <div className={`${Style.infoBarItem} ${Style.phone}`}></div>
            <h3>Monitor &amp; controll</h3>
          </div>
          <div>
            <div className={`${Style.infoBarItem} ${Style.harvest}`}></div>
            <h3>harvest</h3>
          </div>
        </div>
      </div>
      <div className={Style.flexContainerVideo}>
        <div className={Style.video}>
          <video
            src="./scene.mp4"
            width="640"
            height="480"
            loop
            autoPlay
            muted
          ></video>
        </div>
        <div className={Style.videoText}>
          <h1 className>amazing convenience</h1>
          <h2>
            A home device for growing any type of plant, now you do not have to
            worry that you will not meet the requirements of the plant.
          </h2>
        </div>
      </div>
      <div className={Style.specyficationContainer}>
        <div className={Style.specTitle}>
          <div className={Style.specTitleIMG}></div>
          <div className={Style.spec}>
            <h1>Specyfication</h1>
          </div>
        </div>
        <div className={Style.growSpecContainer}>
          <div className={Style.growSpecImg}></div>
          <div className={Style.growSpec}>
            <h1>Sensors</h1>
            <ul>
              <li>AIR TEMPERATURE</li>
              <li>AIR HUMIDITY</li>
              <li>CARBON DIOXIDE</li>
              <li>VOLATILE ORGANIC COMPOUNDS</li>
              <li>SOIL MOISTURE</li>
              <li>BRIGHTNESS</li>
              <li>WATER TANK LEVEL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

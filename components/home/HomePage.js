import React from "react";
import Style from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={Style.HomePage}>
      <div className={Style.flexContainer}>
        <div className={Style.InfoBox}>
          <h1 className={Style.InfoBoxTitle}>W pełni automatyczny GrowBox</h1>
          <h2>Dzięki aplikacji możesz w łatwy sposób :</h2>
          <ul>
            <li>
              <h3>Monitorować warunki panujące wewnątrz</h3>
            </li>
            <li>
              <h3>Kontrolować wilgotność gleby</h3>
            </li>
            <li>
              <h3>Kontrolować naświetlanie oraz wentylację </h3>
            </li>
          </ul>
        </div>
        <div className={Style.imageGrowBox}></div>
      </div>
      <div className={Style.infoBar}>
        <h1>Jak to działa</h1>
        <div className={Style.infoBarItems}>
          <div>
            <div className={`${Style.infoBarItem} ${Style.plant}`}></div>
            <h3>Zasadź</h3>
          </div>
          <div>
            <div className={`${Style.infoBarItem} ${Style.phone}`}></div>
            <h3>Monitoruj &amp; kontroluj</h3>
          </div>
          <div>
            <div className={`${Style.infoBarItem} ${Style.harvest}`}></div>
            <h3>zbieraj plony</h3>
          </div>
        </div>
      </div>
      <div className={Style.flexContainerVideo}>
        <div className={Style.video}>
          <video
            src="./scene.mp4"
            width="640"
            height="100%"
            loop
            autoPlay
            muted
          ></video>
        </div>
        <div className={Style.videoText}>
          <h1>niesamowita wygoda</h1>
          <h2>
            Domowe urządzenie do uprawy każdego rodzaju roślin, teraz nie musisz
            się martwić, że nie spełnisz wymagań rośliny.
          </h2>
        </div>
      </div>
      <div className={Style.specyficationContainer}>
        <div className={Style.specTitle}>
          <div className={Style.specTitleIMG}></div>
          <div className={Style.spec}>
            <h1>Specyfikacje</h1>
          </div>
        </div>
        <div className={Style.growSpecContainer}>
          <div className={Style.growSpecImg}></div>
          <div className={Style.growSpec}>
            <h1>Sensory</h1>
            <ul>
              <li>TEMPERATURA POWIETRZA</li>
              <li>WILGOTNOŚĆ POWIETRZA</li>
              <li>DWUTLENEK WĘGLA</li>
              <li>ZWIĄZKI ORGANICZNE</li>
              <li>WILGOTNOŚĆ GLEBY</li>
              <li>JASNOŚĆ OTOCZENIA</li>
              <li>POZIOM WODY W ZBIORNIKU</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

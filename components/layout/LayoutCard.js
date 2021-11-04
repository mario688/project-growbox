import React from "react";
import NavBar from "./NavBar";
import Style from "./LayoutCard.module.css";
export default function LayoutCard(props) {
  return (
    <div className={Style.card}>
      <NavBar />
      <div className={Style.main}>{props.children}</div>
    </div>
  );
}

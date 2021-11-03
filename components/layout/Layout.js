import React from "react";
import NavBar from "./NavBar";

export default function Layout(props) {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
}

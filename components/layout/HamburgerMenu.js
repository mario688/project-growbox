import React from "react";
import Link from "next/link";
import Style from "./HamburgerMenu.module.css";
export default function HamburgerMenu(props) {
  return (
    <>
      <div onClick={props.onHamburgerhandler} className={Style.backDrop}></div>

      <nav className={Style.menuContainer}>
        <ul className={Style.menuContainerItems}>
          <li className={Style.menuContainerItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={Style.menuContainerItem}>
            <Link href="/auth">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

import React from "react";
import Link from "next/link";
import Style from "./NavBar.module.css";
export default function NavBar() {
  return (
    <div className={Style.navbar}>
      <div className={Style.navbarItem}>
        <Link href="/">Home</Link>
      </div>
      <nav className={Style.navbarItems}>
        <ul>
          <li className={Style.navbarItem}>
            <Link href="/auth">Login</Link>
          </li>
          <li className={Style.navbarItem}>
            <Link href="/">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

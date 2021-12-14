import React, { useContext, useState } from "react";
import Link from "next/link";
import Style from "./NavBar.module.css";
import AuthContext from "../../contexts/auth-context";
import HamburgerMenu from "./HamburgerMenu";
export default function NavBar() {
  const AuthCtx = useContext(AuthContext);
  const { isLoggedIn } = AuthCtx;
  const [showMenu, setShowMenu] = useState(false);
  const hamburgerHandler = (params) => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      {showMenu && <HamburgerMenu onHamburgerhandler={hamburgerHandler} />}
      <div className={Style.navbar}>
        <div onClick={hamburgerHandler} className={Style.hamburgerIcon}></div>
        <div className={Style.homeButton}>
          <Link href="/">Home</Link>
        </div>

        <nav className={Style.navbarItems}>
          <ul>
            <li className={Style.navbarItem}>
              <Link href="/forum">Foto Relation</Link>
            </li>
            {!isLoggedIn && (
              <li className={Style.navbarItem}>
                <Link href="/auth">Login</Link>
              </li>
            )}
            {isLoggedIn && (
              <li className={Style.navbarItem}>
                <Link href="/device">Device</Link>
              </li>
            )}
            {isLoggedIn && (
              <li className={Style.navbarItem}>
                <Link href="/account">Account</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}

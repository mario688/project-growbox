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
          <Link href="/">home</Link>
        </div>

        <nav className={Style.navbarItems}>
          <ul>
            <li className={Style.navbarItem}>
              <Link href="/forum">foto relacja</Link>
            </li>
            {!isLoggedIn && (
              <li className={Style.navbarItem}>
                <Link href="/auth">zaloguj</Link>
              </li>
            )}
            {isLoggedIn && (
              <li className={Style.navbarItem}>
                <Link href="/device">urządzenie</Link>
              </li>
            )}
            {isLoggedIn && (
              <li className={`${Style.navbarItem} ${Style.accountButton} `}>
                <Link href="/account">konto</Link>
                <ul className={Style.dropmenu}>
                  <li className={Style.dropmenuItem}>
                    <Link href="/account">Ustawienia konta</Link>
                  </li>
                  <li
                    className={Style.dropmenuItem}
                    onClick={() => {
                      AuthCtx.logout();
                    }}
                  >
                    wyloguj
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}

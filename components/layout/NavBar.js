import React, { useContext } from "react";
import Link from "next/link";
import Style from "./NavBar.module.css";
import AuthContext from "../../contexts/auth-context";
export default function NavBar() {
  const AuthCtx = useContext(AuthContext);
  const { isLoggedIn } = AuthCtx;
  return (
    <div className={Style.navbar}>
      <div className={Style.navbarItem}>
        <Link href="/">Home</Link>
      </div>
      <nav className={Style.navbarItems}>
        <ul>
          {!isLoggedIn ? (
            <li className={Style.navbarItem}>
              <Link href="/auth">Login</Link>
            </li>
          ) : (
            <li className={Style.navbarItem}>
              <Link href="/account">Account</Link>
            </li>
          )}

          <li className={Style.navbarItem}>
            <Link href="/">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

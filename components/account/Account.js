import React, { useContext, useState } from "react";

import AuthContext from "../../contexts/auth-context";
import Style from "./Account.module.css";
import SetUserPersonalData from "./SetUserPersonalData";
import UserPersonalData from "./UserPersonalData";
export default function Account() {
  const AuthCtx = useContext(AuthContext);
  const [editAccount, setEditAccount] = useState(false);

  const showEditMenuHandler = (params) => {
    setEditAccount((prevState) => !prevState);
  };

  return (
    <div className={Style.accountContainer}>
      <div className={Style.account}>
        <div className={Style.editButton} onClick={showEditMenuHandler}></div>
        <UserPersonalData />

        {editAccount && (
          <SetUserPersonalData onClickHandler={showEditMenuHandler} />
        )}
      </div>
    </div>
  );
}

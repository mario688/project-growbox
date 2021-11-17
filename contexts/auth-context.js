import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
let logoutTimer;
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});
const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const timeExpiration = new Date(expirationTime).getTime();
  const reminingTime = timeExpiration - currentTime;
  return reminingTime;
};

const checkStoredToken = (params) => {
  const storedToken = localStorage.getItem("auth");
  const storedExpirationDate = localStorage.getItem("expirationTime");
  const remaningTime = calculateRemainingTime(storedExpirationDate);
  //console.log(remaningTime);
  if (remaningTime <= 6000) {
    localStorage.removeItem("auth");
    localStorage.removeItem("expirationTime");
    return null;
  }
  return { token: storedToken, time: remaningTime };
};

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const route = useRouter();
  let initialToken;
  let tokenData;
  if (typeof window !== "undefined") {
    tokenData = checkStoredToken();
    if (tokenData) {
      initialToken = tokenData.token;
    }
    useEffect(() => {
      setToken(initialToken);
    }, []);
  }

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    route.replace("/");
    setToken(null);
    localStorage.removeItem("auth");
    localStorage.removeItem("expirationTime");
    console.log("Logout user");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);
  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("auth", token);
    localStorage.setItem("expirationTime", expirationTime.toString());
    const reminingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, reminingTime);
  };
  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.time);
    }
  }, [tokenData, logoutHandler]);
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;

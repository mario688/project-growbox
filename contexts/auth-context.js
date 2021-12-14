import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
let logoutTimer;
const AuthContext = React.createContext({
  user: {
    token: "",
    userId: "",
    email: "",
  },
  isLoggedIn: false,
  login: (user) => {},
  logout: () => {},
});
const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const timeExpiration = new Date(expirationTime).getTime();
  const reminingTime = timeExpiration - currentTime;
  return reminingTime;
};

const checkStoredToken = (params) => {
  const storedData = {
    email: "",
    token: "",
    userId: "",
  };

  storedData.token = localStorage.getItem("auth");
  storedData.email = localStorage.getItem("email");
  storedData.userId = localStorage.getItem("userId");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remaningTime = calculateRemainingTime(storedExpirationDate);

  if (remaningTime <= 6000) {
    localStorage.removeItem("auth");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    localStorage.removeItem("expirationTime");
    return null;
  }
  return { storedData, time: remaningTime };
};

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState({ token: "" });

  const route = useRouter();
  let initialUser = { token: null };
  let userData;
  if (typeof window !== "undefined") {
    userData = checkStoredToken();
    if (userData) {
      initialUser = userData.storedData;
    }
    useEffect(() => {
      setUser(initialUser);
    }, []);
  }

  const userIsLoggedIn = !!user.token;

  const logoutHandler = useCallback(() => {
    route.replace("/");
    setUser({ token: null });
    localStorage.removeItem("auth");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    localStorage.removeItem("expirationTime");
    console.log("Logout user");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (user) => {
    setUser(user);
    localStorage.setItem("userId", user.userId);
    localStorage.setItem("email", user.email);
    localStorage.setItem("auth", user.token);
    localStorage.setItem("expirationTime", user.expirationTime.toString());
    const reminingTime = calculateRemainingTime(user.expirationTime);
    logoutTimer = setTimeout(logoutHandler, reminingTime);
  };
  useEffect(() => {
    if (userData) {
      logoutTimer = setTimeout(logoutHandler, userData.time);
    }
  }, [userData, logoutHandler]);
  const contextValue = {
    user: user,
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

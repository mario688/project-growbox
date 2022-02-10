import React, { useState, useEffect, useCallback } from "react";
import { UserMap } from "./mapUser";

export default function useUserData(user) {
  const [isLoading, setIsLoading] = useState(true);
  const [userObject, setUserObject] = useState({
    avatar: "",
    bio: "",
    lastname: "",
    username: "",
  });

  const fetchUserData = useCallback(async () => {
    const response = await fetch(`/api/fetch-deviceId?userId=${user}`);
    const responseJson = await response.json();

    const userData = UserMap(responseJson);
    setUserObject(userData);
    setIsLoading(false);
  }, [user, isLoading]);
  useEffect(() => {
    fetchUserData();
  }, [isLoading]);

  return {
    avatar: userObject.avatar,
    bio: userObject.bio,
    lastname: userObject.lastname,
    username: userObject.username,
    isLoading,
  };
}

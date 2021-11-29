import { useContext, useCallback } from "react";
import AuthContext from "../../contexts/auth-context";
import { useEffect, useState } from "react";
const useUser = () => {
  const AuthCtx = useContext(AuthContext);
  const [user, setUser] = useState({ email: "" });
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserData = useCallback(
    async (params) => {
      if (AuthCtx.token) {
        const response = await fetch(`/api/user?token=${AuthCtx.token}`);
        const responseJson = await response.json();
        const userData = await responseJson.users[0];
        setUser({ email: userData.email, userId: userData.localId });
        setIsLoading(false);
      }
    },
    [AuthCtx.token]
  );
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return { email: user.email, userId: user.userId, isLoading };
};
export default useUser;

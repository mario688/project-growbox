import { useContext } from "react";
import AuthContext from "../../contexts/auth-context";
import { useEffect, useState } from "react";
const useUser = () => {
  const AuthCtx = useContext(AuthContext);
  const [user, setUser] = useState({ email: "" });
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserData = async (params) => {
    const response = await fetch(`/api/user?token=${AuthCtx.token}`);
    const responseJson = await response.json();
    const userData = responseJson.users[0];
    setUser({ email: userData.email, userId: userData.localId });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return { email: user.email, userId: user.userId, isLoading };
};
export default useUser;

import { useContext } from "react";
import AuthContext from "../../contexts/auth-context";
import { useEffect, useState } from "react";
const useUser = () => {
  const AuthCtx = useContext(AuthContext);
  const [user, setUser] = useState({ email: "" });
  const fetchUserData = async (params) => {
    const response = await fetch(`/api/user?token=${AuthCtx.token}`);
    const responseJson = await response.json();
    const userData = responseJson.users[0];

    setUser({ email: userData.email, userId: userData.localId });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return { email: user.email, userId: user.userId };
};
export default useUser;

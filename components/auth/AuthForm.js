import { useState, useRef, useContext } from "react";
import { useRouter } from "next/router";
import Style from "./AuthForm.module.css";
import AuthContext from "../../contexts/auth-context";
const AuthForm = (params) => {
  const router = useRouter();
  const AuthCtx = useContext(AuthContext);
  const enteredEmail = useRef();
  const enteredPass = useRef();
  const [isLogin, setIsLogin] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = enteredEmail.current.value;
    const password = enteredPass.current.value;
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, isLogin }),
    });
    const data = await response.json();
    if (!data.error) {
      AuthCtx.login(data.idToken);
      router.replace("/");
    } else {
      console.log(data.error.message);
    }
  };
  return (
    <>
      <form onSubmit={submitHandler} className={Style.form}>
        <h1>{isLogin ? "Login" : "Sing up"}</h1>
        <label>Email</label>
        <input type="email" ref={enteredEmail} />
        <label>Haslo</label>
        <input type="password" ref={enteredPass} />
        <button type="submit">Login</button>
        <button
          type="button"
          onClick={() => {
            setIsLogin((prevState) => !prevState);
          }}
        >
          {!isLogin ? "Sing in" : "Sing up"}
        </button>
      </form>
    </>
  );
};
export default AuthForm;

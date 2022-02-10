import { useState, useRef, useContext } from "react";
import { useRouter } from "next/router";
import Style from "./AuthForm.module.css";
import AuthContext from "../../contexts/auth-context";
const AuthForm = (params) => {
  const router = useRouter();
  const AuthCtx = useContext(AuthContext);
  const enteredEmail = useRef();
  const enteredPass = useRef();
  const [isLogin, setIsLogin] = useState(true);

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
      const expirationTime = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      );

      AuthCtx.login({
        expirationTime,
        token: data.idToken,
        email: data.email,
        userId: data.localId,
      });
      router.replace("/");
    } else {
      console.log(data.error.message);
    }
  };
  return (
    <>
      <form onSubmit={submitHandler} className={Style.form}>
        <h1>{isLogin ? "Login" : "Zarejestruj się"}</h1>
        <label>Email</label>
        <input type="email" ref={enteredEmail} />
        <label>Hasło</label>
        <input type="password" ref={enteredPass} />
        <button type="submit">{isLogin ? "Zaloguj" : "Stwórz konto"}</button>
        <button
          type="button"
          onClick={() => {
            setIsLogin((prevState) => !prevState);
          }}
        >
          {!isLogin ? "Zaloguj" : "Zarejestruj się"}
        </button>
      </form>
    </>
  );
};
export default AuthForm;

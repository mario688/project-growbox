import { useState, useRef, useContext } from "react";
const AuthForm = (params) => {
  const enteredEmail = useRef();
  const enteredPass = useRef();
  const [isLogin, setIsLogin] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = enteredEmail.current.value;
    const passwd = enteredPass.current.value;
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: passwd, isLogin }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <button
        onClick={() => {
          setIsLogin((prevState) => !prevState);
        }}
      >
        {isLogin ? "Sing in" : "Sing up"}
      </button>
      <form onSubmit={submitHandler}>
        <label>Email</label>
        <input type="text" ref={enteredEmail} />
        <label>Haslo</label>
        <input type="text" ref={enteredPass} />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default AuthForm;

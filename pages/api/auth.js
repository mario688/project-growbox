async function handler(req, res) {
  const data = req.body;
  let url = "";
  if (data.isLogin) {
    console.log("login");
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDx-IYFzvwekuBFA_c49YsjHRTQ6wCZaVM";
  } else {
    console.log("sing yp");
  }
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    }),
  });

  const dataJson = await response.json();

  res.status(200).json(dataJson);
}
export default handler;

//https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
async function handler(req, res) {
  const { email, password, isLogin } = req.body;
  let url = "";
  isLogin
    ? (url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDx-IYFzvwekuBFA_c49YsjHRTQ6wCZaVM")
    : (url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDx-IYFzvwekuBFA_c49YsjHRTQ6wCZaVM");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });

  const dataJson = await response.json();

  res.status(200).json(dataJson);
}
export default handler;

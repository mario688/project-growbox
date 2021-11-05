async function handler(req, res) {
  const { token } = req.query;

  const response = await fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDx-IYFzvwekuBFA_c49YsjHRTQ6wCZaVM",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken: token,
      }),
    }
  );
  const dataJson = await response.json();
  res.status(200).json(dataJson);
}
export default handler;

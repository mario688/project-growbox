const handler = async (req, res) => {
  const { userId, idDevice } = req.query;

  try {
    const resp1 = await fetch(
      `https://sturdy-dragon-299320-default-rtdb.firebaseio.com/users/${userId}/device.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: idDevice }),
      }
    );
    const response = await resp1.json();
    if (resp1.ok) {
      console.log("ok");
      res.status(200).json("registered");
    } else {
      console.log(response);
      throw new Error(response.error);
    }
  } catch (e) {
    res.status(400).json(e);
  }
};
export default handler;

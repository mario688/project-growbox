const handler = async (req, res) => {
  const { userId, idDevice } = req.query;
  const sendData = async (url, payload) => {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const responseJson = await response.json();
  };
  const registerDevice = async (params) => {
    const resp1 = await sendData(
      `https://sturdy-dragon-299320-default-rtdb.firebaseio.com/users/${userId}.json`,
      { device: idDevice }
    );
    const resp2 = await sendData(
      `https://sturdy-dragon-299320-default-rtdb.firebaseio.com/devices/${idDevice}.json`,
      { owner: userId }
    );
  };
  registerDevice();

  res.status(200).json("OK");
};
export default handler;

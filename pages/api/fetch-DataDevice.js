const handler = async (req, res) => {
  const { deviceId } = req.query;

  const response = await fetch(
    `https://sturdy-dragon-299320-default-rtdb.firebaseio.com/devices/${deviceId}/sensors.json`
  );
  const responseJson = await response.json();

  res.status(200).json(responseJson);
};
export default handler;

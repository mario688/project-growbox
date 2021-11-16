const handler = async (req, res) => {
  const { userId } = req.query;

  try {
    const response = await fetch(
      `https://sturdy-dragon-299320-default-rtdb.firebaseio.com/users/${userId}.json`
    );
    const responseJson = await response.json();
    if (!response.ok) {
      throw new Error(responseJson.error);
    }
    if (!responseJson) {
      res.status(200).json({ device: false });
    } else {
      res.status(200).json(responseJson);
    }
  } catch (err) {
    res.status(200).json({ error: err.message });
  }
};
export default handler;

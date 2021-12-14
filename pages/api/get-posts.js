const handler = async (req, res) => {
  try {
    const response = await fetch(
      `https://sturdy-dragon-299320-default-rtdb.firebaseio.com/POSTS.json`
    );
    const responseJson = await response.json();
    if (!response.ok) {
      throw new Error(responseJson.error);
    }
    res.status(200).json(responseJson);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
export default handler;

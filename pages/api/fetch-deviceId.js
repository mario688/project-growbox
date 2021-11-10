const handler = async (req, res) => {
  const { userId } = req.query;

  const response = await fetch(
    `https://sturdy-dragon-299320-default-rtdb.firebaseio.com/users/${userId}.json`
  );
  const responseJson = await response.json();

  res.status(200).json(responseJson);
};
export default handler;

const handler = async (req, res) => {
  const { username, lastname, bio, avatar, userId, email } = req.body;

  const user = {
    ...(!!username && { username: username }),
    ...(!!lastname && { lastname: lastname }),
    ...(!!bio && { bio: bio }),
    ...(!!avatar && { avatar: avatar }),
    ...(!!username && { username: username }),
  };

  console.log(user);
  try {
    const resp = await fetch(
      `https://sturdy-dragon-299320-default-rtdb.firebaseio.com/users/${userId}/personal.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const response = await resp.json();
    if (resp.ok) {
      console.log("ok");
      res.status(200).json({ status: "updated" });
    } else {
      console.log(response);
      throw new Error(response.error);
    }
  } catch (e) {
    res.status(400).json(e);
  }
};
export default handler;

const handler = async (req, res) => {
  const { images, title, text } = req.body;
  const post = {
    title,
    text,
    images,
  };
  try {
    const resp = await fetch(
      `https://sturdy-dragon-299320-default-rtdb.firebaseio.com/POSTS.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      }
    );
    const response = await resp.json();
    if (resp.ok) {
      console.log("ok");
      res.status(200).json({ status: "Added post" });
    } else {
      console.log(response);
      throw new Error(response.error);
    }
  } catch (e) {
    res.status(400).json(e);
  }
};
export default handler;

const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.send({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log("Server up and running on port " + PORT);
});

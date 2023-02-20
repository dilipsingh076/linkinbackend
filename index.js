const express = require("express");
const cors = require("cors");

const { connection } = require("./config/db");
const { postRouter } = require("./routes/post.route");
const { UserRouter } = require("./routes/auth.route");
const { authenticate } = require("./middlewares/authentication");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/users", UserRouter);

app.use(authenticate);
app.use("/posts", postRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to DB Successfully");
  } catch (err) {
    console.log(err);
    console.log("Error connecting to DB");
  }
});
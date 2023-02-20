const express = require("express");

const { PostModel } = require("../models/posts.model");

const postRouter = express.Router();

postRouter.get("/", async (req, res) => {
  const userID = req.body.userID;
  const post = await PostModel.find({ userID });
  res.send(post);
});

postRouter.post("/top", async (req, res) => {
  const { title, body, device, userID,no_if_comments } = req.body;
  console.log("userid", userID);

  try {
    const new_post = new PostModel({ title, body, device, userID,no_if_comments });
    await new_post.save();
    res.send({ post: "successfully" });
  } catch (err) {
    console.log(err);
    res.send({ err: "Something went wrong" });
  }
});

postRouter.patch("/update/:postID", async (req, res) => {
  const postID = req.params.postID;
  const userID = req.body.userID;
  const post = await PostModel.findOne({ _id: postID });
  if (userID !== post.userID) {
    res.send(" User Not authorised");
  } else {
    await PostModel.findByIdAndUpdate({ _id: postID }, payload);
    res.send({ message: "post updated successfully" });
  }
});

postRouter.delete("/delete/:postID", async (req, res) => {
  const postID = req.params.postID;
  const userID = req.body.userID;
  const post = await NoteModel.findOne({ _id: postID });
  if (userID !== post.userID) {
    res.send(" User Not authorised");
  } else {
    await TodoModel.findByIdAndDelete({ _id: postID });
    res.send({ msg: "Post deleted successfully" });
  }
});

module.exports = { postRouter };

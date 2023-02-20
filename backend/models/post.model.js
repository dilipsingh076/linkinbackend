const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: String,
  body: String,
  device: { type: String, enum: ["LAPTOP", "TABLET", "MOBILE"] },
  no_if_comments:String,
  userID: { type: String },
});

const PostModel = mongoose.model("Post", PostSchema);

module.exports = {
  PostModel,
};
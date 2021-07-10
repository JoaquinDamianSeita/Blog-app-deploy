const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  date: { type: String, required: [true, "Please set a Date"] },
  title: { type: String, required: [true, "Please set a Title"] },
  content: { type: String, required: [true, "Please set a Content"] },
});

module.exports = mongoose.model("Post", postSchema);

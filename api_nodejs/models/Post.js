const mongoose = require("mongoose");

const post = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    feeling: {
        type: String,
      },
    tags: {
        type: Array,
        default: [],
    }
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", post, "posts");

module.exports = { Post };
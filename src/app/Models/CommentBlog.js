import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  blogId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CommentBlog =
  mongoose.models.CommentBlog || mongoose.model("CommentBlog", commentSchema);

export default CommentBlog;

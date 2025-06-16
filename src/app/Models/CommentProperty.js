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
  propertyId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CommentProperty =
  mongoose.models.CommentProperty || mongoose.model("CommentProperty", commentSchema);

export default CommentProperty;

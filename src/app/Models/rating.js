import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Rating = mongoose.models.rating || mongoose.model("rating", ratingSchema);

export default Rating;

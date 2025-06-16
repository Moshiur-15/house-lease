import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    cardImage: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: String, default: "Rent" },
    propertyID: { type: String, required: true },
    userEmail: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.wishlist ||
  mongoose.model("wishlist", wishlistSchema);

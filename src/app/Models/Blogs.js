import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema(
  {
    CardDes: { type: String, required: true },
    CardTitle: { type: String, required: true },
    Date: { type: String, required: true },
    DetailDes1: { type: String },
    DetailDes2: { type: String },
    DetailDes2_1: { type: String },
    DetailTitle: { type: String },
    DetailTitle1_1: { type: String },
    Location: { type: String },
    cardImage: { type: String },
    detImg1: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Blogs || mongoose.model("Blogs", blogsSchema);

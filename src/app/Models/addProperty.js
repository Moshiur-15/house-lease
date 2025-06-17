import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    beds: { type: Number, required: true },
    baths: { type: Number, required: true },
    sqft: { type: Number, required: true },
    price: { type: Number, required: true },
    rate: { type: Number, required: true },
    category: { type: String, required: true },
    cardImage: { type: String, required: true },
    detImg1: { type: String },
    detImg2: { type: String },
    detImg3: { type: String },
    detImg4: { type: String },
    description: { type: String, required: true },
    status: { type: String, default: "Rent" },
    sellerEmail: {type: String,  required: true}
  },
  { timestamps: true }
);

export default mongoose.models.Property ||
  mongoose.model("Property", propertySchema);

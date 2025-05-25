import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    //TODO: role-> client side thaka auto set kora debo
  },
  { timestamps: true }
);

export default mongoose.models.user || mongoose.model("user", userSchema);

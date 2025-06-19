import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  PropertyName: { type: String, required: true },
  PropertyFees: { type: Number, required: true },
  email: { type: String, required: true },
  PaymentStatus: { type: String, required: true },
  ConfirmationStatus: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Payment = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);

export default Payment;

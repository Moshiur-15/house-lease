import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    PropertyName: {
      type: String,
      required: true,
      trim: true,
    },
    PropertyFees: {
      type: Number,
      required: true,
    },
    BuyerName: {
      type: String,
      required: true,
    },
    BuyerEmail: {
      type: String,
      required: true,
    },
    sellerEmail: {
      type: String,
      required: true,
    },
    PaymentStatus: {
      type: String,
      required: true,
    },
    ConfirmationStatus: {
      type: String,
      required: true,
    },
    propertyId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Booking =
  mongoose.models.Booking || mongoose.model("Booking", BookingSchema);

export default Booking;

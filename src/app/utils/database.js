const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.NEXT_DB_NAME}:${process.env.NEXT_DB_PASS}@cluster0.oxacvoq.mongodb.net/`,
      { dbName: "HouseLease" }
    );
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
  }
};

export default connectDB;
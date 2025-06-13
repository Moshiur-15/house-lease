import { getSingleProperty } from "@/app/controllers/seller/property";
import connectDB from "@/app/utils/database";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    return getSingleProperty(id);
  } catch (error) {
    console.error("API route error:", error);
  }
}

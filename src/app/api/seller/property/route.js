import { deleteProperty, getProperty, property } from "@/app/controllers/seller/property";
import connectDB from "@/app/utils/database";

// post Property
export async function POST(req) {
  await connectDB();
  return property(req);
}

// getProperty
export async function GET(req) {
  await connectDB();
  return getProperty(req);
}

// delete property
export async function DELETE(req) {
  await connectDB();
  return deleteProperty(req);
}


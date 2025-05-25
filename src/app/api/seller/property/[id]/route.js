import { getUpdateData, updateProperty } from "@/app/controllers/seller/property";
import connectDB from "@/app/utils/database";

// updated property
export async function PUT(req, { params }) {
  await connectDB();
  const { id } = await params;
  return updateProperty(req, id);
}

// updated data get
export async function GET(req, { params }) {
    await connectDB();
    const { id } = await params;
    return getUpdateData(req, id);
}

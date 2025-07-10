import addProperty from "@/app/Models/addProperty";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search");
  const searchNum = Number(search);
  const isNumSearch = !isNaN(searchNum)

  let query = {};

  if (search) {
    query = {
      $or: [
        { title: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
        { status: { $regex: search, $options: "i" } },
        ...(isNumSearch ? [{ price: searchNum }, {baths: searchNum}, {beds: searchNum}] : []),
      ],
    };
  }

  const property = await addProperty.find(query);
  return NextResponse.json({
    message: "Get property data",
    status: 200,
    property,
  });
}

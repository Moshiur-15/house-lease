import addProperty from "@/app/Models/addProperty";
import { NextResponse } from "next/server";

// Add property
export const property = async (req) => {
  const data = await req.json();
  if (!data.sellerEmail) {
    return NextResponse.json({ message: "Missing sellerEmail", status: 400 });
  }
  const property = await addProperty.create(data);
  return NextResponse.json({ message: "data post", status: 200, property });
};


// get property
export const getProperty = async (req) => {
  const { searchParams } = new URL(req.url);
  const sellerEmail = searchParams.get("sellerEmail");

  try {
    if (!sellerEmail) {
      return NextResponse.json({
        message: "Seller email is required",
        status: 400,
      });
    }
    const property = await addProperty.find({ sellerEmail });
    return NextResponse.json({
      message: "Seller's property data fetched successfully",
      status: 200,
      property,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error fetching seller's property",
      status: 500,
      error,
    });
  }
};


export const getSingleProperty = async (id) => {
  const property = await addProperty.findById(id);
  return NextResponse.json({ message: "Single post", status: 200, property });
};



// delete property
export const deleteProperty = async (req) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const property = await addProperty.findByIdAndDelete(id);

  return NextResponse.json({ message: "Deleted successfully", status: 200, property });
};


// update property
export const updateProperty = async (req, id) => {
  const body = await req.json();
  await addProperty.findByIdAndUpdate(id, body);
  return NextResponse.json({ message: "Updated post", status: 200, body });
};

//get update data
export const getUpdateData = async (req, id) => {
  const property = await addProperty.findOne({ _id: id });
  return NextResponse.json({ message: "Get updated data", property });
};

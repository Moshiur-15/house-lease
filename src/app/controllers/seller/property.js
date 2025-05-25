import addProperty from "@/app/Models/addProperty";
import { NextResponse } from "next/server";

// post property
export const property = async (req) => {
  const data = await req.json();
  const property = await addProperty.create(data)
  return NextResponse.json({message: "data post",status: 200, property,});
};

// get property
export const getProperty = async (req) => {
  const property = await addProperty.find();
  return NextResponse.json({ message: "Get post data", status: 200, property });
};

// delete property
export const deleteProperty = async (req) => {
  const id = req.nextUrl.searchParams.get("id");
  const property = await addProperty.findByIdAndDelete(id);
  return NextResponse.json({ message: "Delete post", status: 200, property });
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

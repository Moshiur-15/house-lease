import { deleteProperty, getProperty, property } from "@/app/controllers/seller/property";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

// POST: Create Property
export async function POST(req) {
  await connectDB();
  const res = await property(req);
  return res;
}

// GET: Get All Properties
export async function GET(req) {
  await connectDB();
  const res = await getProperty(req);
  return res;  
}

// DELETE: Delete Property
export async function DELETE(req) {
  await connectDB();
  const res = await deleteProperty(req);
  return res; 
}

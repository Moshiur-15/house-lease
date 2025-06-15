// File: app/api/seller/property/route.js

import { deleteProperty, getProperty, property } from "@/app/controllers/seller/property";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

// Allow CORS preflight
export async function OPTIONS(req) {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

// POST: Create Property
export async function POST(req) {
  await connectDB();
  const res = await property(req);
  return addCORS(res);
}

// GET: Get All Properties
export async function GET(req) {
  await connectDB();
  const res = await getProperty(req);
  return addCORS(res);
}

// DELETE: Delete Property
export async function DELETE(req) {
  await connectDB();
  const res = await deleteProperty(req);
  return addCORS(res);
}

// Helper function to add CORS headers to response
function addCORS(response) {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
}

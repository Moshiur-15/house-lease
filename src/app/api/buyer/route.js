import Wishlist from "@/app/Models/Wishlist";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const { userEmail, propertyID } = body;

  try {
    const alreadyExists = await Wishlist.findOne({ userEmail, propertyID });
    if (alreadyExists) {
      return NextResponse.json("You already have a wishlist", { status: 400 });
    }
    const newItem = await Wishlist.create(body);
    return NextResponse.json({
      success: true,
      message: "Property added to wishlist successfully!",
      data: newItem,
    });
  } catch (err) {
    return NextResponse.json("Failed to add to wishlist", { status: 500 });
  }
}

export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const userEmail = searchParams.get("userEmail");

  if (!userEmail) {
    return NextResponse.json("Missing user email", { status: 400 });
  }

  try {
    const wishlists = await Wishlist.find({ userEmail });
    return NextResponse.json(wishlists);
  } catch (err) {
    return NextResponse.json("Failed to fetch wishlist", { status: 500 });
  }
}


export async function DELETE(req) {
  await connectDB();

  try {
    // Get data from request body
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json("Missing wishlist item ID", { status: 400 });
    }

    // Delete the wishlist item by id
    const deleted = await Wishlist.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json("Wishlist item not found", { status: 404 });
    }

    return NextResponse.json("Wishlist item deleted successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json("Failed to delete wishlist item", { status: 500 });
  }
}
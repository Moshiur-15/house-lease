import user from "@/app/Models/user";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  await connectDB();
  const { id } =  params;
  const { role } = await req.json();
  try {
    const updatedUser = await user.findByIdAndUpdate(
      id,
      { role },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Role updated", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update role", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  await connectDB();
  const { id } = params;

  try {
    const deletedUser = await user.findByIdAndDelete(id);

    if (!deletedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: `User ${deletedUser.name} deleted successfully`,
      success: true,
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to delete user", error: err.message },
      { status: 500 }
    );
  }
}


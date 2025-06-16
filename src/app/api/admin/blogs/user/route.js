import user from "@/app/Models/user";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function DELETE(req) {
    await connectDB();
    const id = req.nextUrl.searchParams.get(id);
    const deleteUser = user.findById(id);
    return NextResponse.json({message: `Deleted User ${deleteUser}`, success:true})
}
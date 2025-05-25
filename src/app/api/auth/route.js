import { login, register } from "@/app/controllers/authContoller";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json({
    message: "Test Mongodb Connect",
  });
}

export async function POST(req) {
  await connectDB();

  try {
    const { searchParams } = new URL(req.url);
    if(searchParams.get("register")){
      return register(req);
    }
    if(searchParams.get('login')){
      return login(req);
    }
  } catch (err) {
    console.log(err);
  }
}

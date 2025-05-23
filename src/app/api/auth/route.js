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
  return register(req);
}

// export async function GET(req) {
//   await connectDB();
//   return login(req);
// }
// import { login, register } from "@/app/controllers/authContoller";
// import connectDB from "@/app/utils/database";
// import { NextResponse } from "next/server";

// // register route
// // http://localhost:3000/api/auth?signup=true
// export async function POST(req) {
//   await connectDB();
//   try {
//     const { searchParams } = new URL(req.url);
//     if (searchParams.get("register")) {
//       return register(req);
//     }

//     if (searchParams.get("login")) {
//       return login(req);
//     }
//     return NextResponse.json({
//       message: "sdfdas",
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

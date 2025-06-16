import Wishlist from "@/app/Models/Wishlist";
import connectDB from "@/app/utils/database";

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const userEmail = searchParams.get("userEmail");
  const propertyID = searchParams.get("propertyID");

  if (!userEmail || !propertyID) {
    return new Response("Missing data", { status: 400 });
  }

  const exists = await Wishlist.findOne({ userEmail, propertyID });

  return Response.json({ exists: !!exists });
}

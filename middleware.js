// middleware.js
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const roleRoutes = {
  admin: [
    "/dashboard",
    "/dashboard/AllUsers",
    "/dashboard/viewAllProperty",
    "/dashboard/addBlog",
    "/dashboard/ManageBlog",
  ],
  seller: [
    "/dashboard/seller",
    "/dashboard/add-property",
    "/dashboard/managePropertie",
    "/dashboard/manageBookings",
  ],
  buyer: [
    "/dashboard/buyer",
    "/dashboard/my-wishlist",
    "/dashboard/myBookings",
  ],
};

export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    debug: true,
  });

  if (!token) {
    return NextResponse.redirect(new URL("/Auth/Login", req.url));
  }
  console.log(token);

  const { role } = token;
  const pathname = req.nextUrl.pathname;

  for (const [key, routes] of Object.entries(roleRoutes)) {
    if (routes.includes(pathname)) {
      if (role !== key) {
        return NextResponse.redirect(new URL("/Auth/Login", req.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  // not logged in -> login page
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/Auth/Login", request.nextUrl));
  }
  
  // already logged in-> login page redirect homepage
  if (token && pathname.startsWith("/Auth/Login")) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  // role-based routes
  const adminRoutes = [
    "/dashboard/AllUsers",
    "/dashboard/viewAllProperty",
    "/dashboard/addBlog",
    "/dashboard/ManageBlog",
  ];
  const sellerRoutes = [
    "/dashboard/seller",
    "/dashboard/add-property",
    "/dashboard/managePropertie",
    "/dashboard/manageBookings",
  ];
  const buyerRoutes = [
    "/dashboard/analytics",
    "/dashboard/paymentHistory",
    "/dashboard/myBookings",
    "/dashboard/wishlist",
  ];

  // check and authorize user roles to logout
  const roleMismatch =
    (adminRoutes.some(route => pathname.startsWith(route)) && token?.role !== "admin") ||
    (sellerRoutes.some(route => pathname.startsWith(route)) && token?.role !== "seller") ||
    (buyerRoutes.some(route => pathname.startsWith(route)) && token?.role !== "buyer");

  if (roleMismatch) {
    const response = NextResponse.redirect(new URL("/Auth/Login", request.nextUrl));
    response.cookies.delete("next-auth.session-token", { path: "/" });
    response.cookies.delete("__Secure-next-auth.session-token", { path: "/" });
    response.cookies.delete("next-auth.csrf-token", { path: "/" });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/Auth/Login"],
};

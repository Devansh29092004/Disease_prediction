import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
    const cookies = getSessionCookie(request);
    if (!cookies) {
        // Redirect to the home page if the user is not logged in
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }
    // Allow the request to proceed if the user is logged in
    return NextResponse.next();
}

export const config = {
    // Apply the middleware to the /dashboard route and all its sub-routes
    matcher: ["/dashboard/:path*"],
};

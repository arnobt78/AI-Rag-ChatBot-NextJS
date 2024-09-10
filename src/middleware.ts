import { NextRequest, NextResponse } from "next/server";

// Import the crypto module from the standard library to generate a random UUID for the session ID cookie value
// Middlware function that takes a request object as a parameter and returns a response object
// To execute some ;ogic before the user access the page
// The middleware function checks if the sessionId cookie is present in the request object
// If the cookie is not present then it generates a random UUID using the crypto.randomUUID() function
export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const cookie = req.cookies.get("sessionId");

  if (!cookie) {
    res.cookies.set("sessionId", crypto.randomUUID());
  }

  return res;
}

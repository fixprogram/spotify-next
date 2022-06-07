import { NextResponse } from "next/server";

const signinedPages = ["/", "/playlist", "library"];

export default function middleware(req) {
  if (signinedPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}

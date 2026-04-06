import { withAuth } from "next-auth/middleware";
import { authSecret } from "@/lib/auth-secret";

export default withAuth({
  secret: authSecret,
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: ["/((?!api/auth|login|_next/static|_next/image|favicon.ico).*)"],
};

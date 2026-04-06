import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type AuthRouteContext = {
	params: Promise<{ nextauth: string[] }> | { nextauth: string[] };
};

async function runAuthHandler(request: NextRequest, context: AuthRouteContext) {
	const [{ default: NextAuth }, { authOptions }] = await Promise.all([
		import("next-auth"),
		import("@/lib/auth"),
	]);

	const handler = NextAuth(authOptions);
	return handler(request, context);
}

export async function GET(request: NextRequest, context: AuthRouteContext) {
	return runAuthHandler(request, context);
}

export async function POST(request: NextRequest, context: AuthRouteContext) {
	return runAuthHandler(request, context);
}

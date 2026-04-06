const developmentFallbackSecret = "local-dev-only-secret-change-before-production";

export const authSecret =
  process.env.NEXTAUTH_SECRET ??
  process.env.AUTH_SECRET ??
  (process.env.NODE_ENV !== "production" ? developmentFallbackSecret : undefined);

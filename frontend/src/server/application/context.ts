import { cookies, headers } from "next/headers";
import { demoUser } from "../data/demo-store";

export async function getCurrentUser() {
  const requestHeaders = await headers();
  const requestCookies = await cookies();
  const headerUserId = requestHeaders.get("x-atlas-user-id");
  const cookieUserId = requestCookies.get("atlas_user_id")?.value;
  const demoMode = process.env.ATLAS_DEMO_MODE !== "false";

  if (demoMode) {
    return { ...demoUser, id: headerUserId ?? cookieUserId ?? demoUser.id };
  }

  // Production auth should be backed by Clerk or Supabase Auth per SDS Milestone 1.
  // Keep this boundary narrow so downstream portfolio and intelligence code never
  // depends on a specific authentication vendor.
  if (!headerUserId && !cookieUserId) {
    return null;
  }

  return { ...demoUser, id: headerUserId ?? cookieUserId ?? demoUser.id };
}

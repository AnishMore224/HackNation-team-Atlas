import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function middleware(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const requiresAuth = (req.url ?? "").startsWith("/");

  if (requiresAuth) {
    const session = await getSession({ req });

    if (!session) {
      res.writeHead(302, { Location: "/login" });
      res.end();
      return null;
    }
  }

  return null;
}

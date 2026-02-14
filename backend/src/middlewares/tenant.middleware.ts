import type { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma.js";

export async function resolveTenant(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const host = req.headers.host;

  if (!host) {
    return res.status(400).json({ error: "Host header missing" });
  }

  const hostname = host.split(":")[0] ?? "";
  const parts = hostname.split(".");

  let slug: string | null = null;

  if (parts.length > 1 && parts[0] !== "localhost") {
    slug = parts[0];
  }

  if (!slug) {
    return next();
  }

  const establishment = await prisma.establishment.findUnique({
    where: { slug },
  });

  if (!establishment) {
    return res.status(404).json({ error: "Establishment not found" });
  }

  (req as any).tenant = establishment;

  console.log("HOST:", host);
  console.log("HOSTNAME:", hostname);
  console.log("SLUG:", slug);


  next();
}

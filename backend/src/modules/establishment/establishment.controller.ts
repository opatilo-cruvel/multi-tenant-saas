import type { Request, Response } from "express";
import { getTenantEstablishment } from "./establishment.service.js";

export async function getHomepage(req: Request, res: Response) {
  const tenant = (req as any).tenant;

  if (!tenant) {
    return res.status(404).json({ error: "Establishment not found" });
  }

  const establishment = await getTenantEstablishment(tenant.id);

  res.json(establishment);
}

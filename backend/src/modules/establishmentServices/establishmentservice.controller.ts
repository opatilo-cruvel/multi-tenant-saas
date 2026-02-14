import type { Request, Response } from "express";
import { getServicesByEstablishment } from "./establishmentservice.service.js";

export async function listServices(req: Request, res: Response) {
  const tenant = (req as any).tenant;

  if (!tenant) {
    return res.status(404).json({ error: "Tenant not resolved" });
  }

  const services = await getServicesByEstablishment(tenant.id);

  res.json(services);
}

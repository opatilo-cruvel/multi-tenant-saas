import { Router } from "express";
import { prisma } from "../lib/prisma.js";

const router = Router();

router.get("/tenant", (req, res) => {
  res.json({
    tenant: (req as any).tenantSlug || null,
  });
});

router.post("/bookings", async (req, res) => {
  const tenant = (req as any).tenant;

  if (!tenant) {
    return res.status(400).json({ error: "Tenant not resolved" });
  }

  const booking = await prisma.booking.create({
    data: {
      userEmail: req.body.userEmail,
      userName: req.body.userName,
      userPhone: req.body.userPhone,
      serviceId: req.body.serviceId,
      establishmentId: tenant.id,
      date: new Date(req.body.date),
    },
  });

  res.json(booking);
});


export default router;

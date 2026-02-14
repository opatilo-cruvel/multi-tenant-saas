import { Router } from "express";
import { listServices } from "./establishmentservice.controller.js";

const router = Router();

router.get("/", listServices);

export default router;

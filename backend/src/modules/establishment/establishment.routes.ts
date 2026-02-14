import { Router } from "express";
import { getHomepage } from "./establishment.controller.js";

const router = Router();

router.get("/", getHomepage);

export default router;

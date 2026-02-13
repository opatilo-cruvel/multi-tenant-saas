import express from "express";
import cors from "cors";
import { prisma } from "./lib/prisma.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/owners", async (req, res) => {
  try {
    const owners = await prisma.owner.findMany();
    return res.json(owners);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar owners" });
  }
});

app.get("/establishments", async (req, res) => {
  try {
    const establishments = await prisma.establishment.findMany();
    return res.json(establishments);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar establishments" });
  }
});



export default app;

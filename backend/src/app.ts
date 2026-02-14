import express from "express";
import cors from "cors";
import { resolveTenant } from "./middlewares/tenant.middleware.js";


import establishmentRoutes from "./modules/establishment/establishment.routes.js";
import servicesRoutes from "./modules/establishmentServices/establishmentservice.routes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use(resolveTenant);

// homepage do estabelecimento
app.use("/", establishmentRoutes);

// página de serviços
app.use("/services", servicesRoutes);

export default app;

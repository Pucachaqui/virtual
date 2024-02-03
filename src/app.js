import express from "express";
import path from "path";
import morgan from "morgan";

import customerRoutes from "./routes/customer.routes.js";
import customer from "./routes/customer.routes copy.js";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// settings
app.set("port", process.env.PORT || 37930);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use(customerRoutes);
app.use("/app",customer);

// static files
app.use(express.static(path.join(__dirname, "public")));

// starting the server
export default app;

import { Router } from "express";
import {
  createCustomer,
  deleteCustome,
  editCustome,
  renderCustomer,
  updateCustome,
} from "../controllers/customer2.js";
const router = Router();
router.get("/", renderCustomer);
router.post("/", createCustomer);
router.get("/:id", editCustome);
router.put("/:id", updateCustome);
router.delete("/:id", deleteCustome);
export default router;




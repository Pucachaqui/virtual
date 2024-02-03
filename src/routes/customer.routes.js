import { Router } from "express";
import {
  createCustomers,
  deleteCustomer,
  editCustomer,
  renderCustomers,
  updateCustomer,
} from "../controllers/customerController.js";
import {
  createCustomer,
  deleteCustome,
  editCustome,
  renderCustomer,
  updateCustome,
} from "../controllers/customer2.js";
const router = Router();

router.get("/", renderCustomers);
router.post("/add", createCustomers);
router.get("/update/:id", editCustomer);
router.post("/update/:id", updateCustomer);
router.get("/delete/:id", deleteCustomer);

router.get("/", renderCustomer);
router.post("/add", createCustomer);
router.get("/update/:id", editCustome);
router.post("/update/:id", updateCustome);
router.get("/delete/:id", deleteCustome);
export default router;




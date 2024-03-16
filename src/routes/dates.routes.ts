import express from "express";
import { dateController } from "../controllers/dateController";


const router = express.Router();

//User routes
router.post("/", dateController.create);
router.get("/", dateController.getAll);
router.get("/:id", dateController.getById);
router.put("/:id", dateController.update); 
router.delete("/:id", dateController.delete);

//Protected routes (Admin, Manager)

export default router; 
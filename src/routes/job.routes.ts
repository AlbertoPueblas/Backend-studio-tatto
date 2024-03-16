import express from "express";
import { jobController } from "../controllers/jobControllers";


const router = express.Router();

//User routes
router.post("/", jobController.create);
router.get("/", jobController.getAll);
router.get("/:id", jobController.getById);
router.put("/:id", jobController.update);
router.delete("/:id", jobController.delete);


export default router;
import express from "express";
import { artistController } from "../controllers/artistController";
import { auth } from "../middlewares/auth";
import { authorize } from "../middlewares/authorize";


const router = express.Router();

//Artist routes
router.get("/:id", artistController.getById);
router.put("/:id", artistController.update);
router.delete("/:id", artistController.delete);




router.post("/",auth, authorize(["admin"]), artistController.create);
router.get("/",auth, authorize(["admin"]), authorize(["manager"]), artistController.getAll);

export default router;
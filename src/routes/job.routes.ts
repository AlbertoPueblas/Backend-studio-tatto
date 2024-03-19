import express from "express";
import { jobController } from "../controllers/jobControllers";
import { authorize } from "../middlewares/authorize";
import { auth } from "../middlewares/auth";


const router = express.Router();

//User routes
router.post("/",auth,authorize((["admin"]) &&(["manager"])), jobController.create);
router.get("/:id", jobController.getById);
router.put("/:id", jobController.update);
router.delete("/:id", jobController.delete);

//protected routes
router.get("/",auth, authorize((["admin"]) &&(["manager"])),jobController.getAll);

export default router;
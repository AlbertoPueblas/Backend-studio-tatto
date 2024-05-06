import express from "express";
import { jobController } from "../controllers/jobControllers";
import { authorize } from "../middlewares/authorize";
import { auth } from "../middlewares/auth";

//-----------------------------------------------------------------------------

const router = express.Router();

//User routes
router.get("/meJob:id", jobController.getById);
router.put("/id",auth, jobController.update);
router.delete("/:id",auth, jobController.delete);

//protected routes
router.post("/",auth,authorize((["manager"])), jobController.create);
router.get("/job",auth, authorize((["admin"])),jobController.getAll);
export default router;
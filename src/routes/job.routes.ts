import express from "express";
import { jobController } from "../controllers/jobControllers";
import { authorize } from "../middlewares/authorize";
import { auth } from "../middlewares/auth";

//-----------------------------------------------------------------------------

const router = express.Router();

//User routes
router.get("/:id", jobController.getById);
router.put("/id",auth, jobController.update);
router.delete("/:id",auth, jobController.delete);

//protected routes
router.post("/",auth,authorize((["manager"])), jobController.create);
// router.get("/",auth, authorize((["admin"]) &&(["manager"])),jobController.getAll);
export default router;
import express from "express";
import { dateController } from "../controllers/dateController";
import { auth } from "../middlewares/auth";
import { authorize } from "../middlewares/authorize";

//-----------------------------------------------------------------------------

const router = express.Router();

//User routes
router.post("/",auth, dateController.create);
router.put("/:id",auth, dateController.update); 
router.delete("/:id",auth, dateController.delete);


//Protected routes
router.get("/:id",auth,auth, authorize(["admin"]), authorize(["manager"]), dateController.getById);
router.get("/",auth, authorize(["admin"]), authorize(["manager"]), dateController.getAll);
export default router; 
import express from "express";
import { userController } from "../controllers/userController";
import { auth } from "../middlewares/auth";
import { authorize } from "../middlewares/authorize";

const router = express.Router();

//Public routes
router.get("/profile", auth, userController.getProfile);
router.put("/profile", auth, userController.update);
router.get("/:id/dates",auth, userController.getDatesByUserId);

//Admin and manager routes
router.post("/",auth, authorize(["admin"]), authorize(["manager"]),  userController.create);
router.get("/", auth, authorize(["admin"]), authorize(["manager"]), userController.getAll);
router.get("/:id",auth, authorize(["admin"]), authorize(["manager"]), userController.getById);
router.put("/profile/:id",auth, authorize(["admin"]), authorize(["manager"]), userController.update);
router.delete("/profile/:id",auth, authorize(["admin"]), authorize(["manager"]), userController.delete);
router.put("/:id/role",auth, authorize(["admin"]), userController.updateRole);
router.delete("/:id", auth, authorize(["admin"]), userController.delete);

export default router;
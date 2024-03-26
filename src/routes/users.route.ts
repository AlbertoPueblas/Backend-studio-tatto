import express from "express";
import { userController } from "../controllers/userController";
import { auth } from "../middlewares/auth";
import { authorize } from "../middlewares/authorize";

const router = express.Router();

//Public routes
router.get("/profile", auth, userController.getProfile);
router.put("/profile", auth, userController.update);
router.get("/dates",auth, userController.getDatesByUsers);
router.delete("/", auth, userController.delete);

//Admin and manager routes
router.post("/",auth, authorize(["admin","manager"]),  userController.create);
router.get("/", auth, authorize((["admin","manager"])), userController.getAll);
router.get("/artists", auth, authorize((["admin"])), userController.getAllArtist);
router.get("/:id",auth, authorize((["admin","manager"])), userController.getById);
router.put("/profile/:id",auth, authorize((["admin","manager"])), userController.update);
router.delete("/profile/:id",auth, authorize((["admin","manager"])), userController.delete);
router.put("/:id/role",auth, authorize(["admin"]), userController.updateRole);

export default router;
import express from "express";
import { userController } from "../controllers/userController";
import { auth } from "../middlewares/auth";
import { authorize } from "../middlewares/authorize";

const router = express.Router();

//Public routes
router.get("/profile", auth, userController.getProfile);
router.put("/profile", auth, userController.update);
router.delete("/", auth, userController.delete);
router.get("/dates",auth, userController.getDatesByUsers);


//Admin and manager routes
router.get("/allDates",auth, authorize(["admin","manager"]), userController.getAllDates);
router.post("/",auth, authorize(["admin","manager"]),  userController.create);
router.get("/allUsers", auth, authorize((["admin","manager"])), userController.getAll);
router.get("/artists", auth, authorize((["admin"])), userController.getAllArtist);
router.get("/user/:id",auth, authorize((["admin","manager"])), userController.getById);
router.put("/profile/:id",auth, authorize((["admin","manager"])), userController.update);
router.delete("/profile/:id",auth, authorize((["admin","manager"])), userController.delete);
router.put("/:id/role",auth, authorize(["admin"]), userController.updateRole);
router.get("/dates/:id",auth,authorize(["admin"]), userController.getDatesUsersById);

export default router;
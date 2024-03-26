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
router.get("/:id",auth, authorize((["admin","manager"])), dateController.getById);
router.get("/",auth, authorize((["admin","manager"])), dateController.getAll);
router.get("/users",auth,authorize((["admin","manager"])), dateController.getDatesByArtist);
export default router; 
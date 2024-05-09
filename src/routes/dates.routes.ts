import express from "express";
import { dateController } from "../controllers/dateController";
import { auth } from "../middlewares/auth";
import { authorize } from "../middlewares/authorize";

//-----------------------------------------------------------------------------

const router = express.Router();

//User routes
router.post("/appointment",auth, dateController.create);
router.put("/changeDate/",auth, dateController.update); 


//Protected routes
router.get("/:id",auth, authorize((["admin","manager"])), dateController.getById);
router.get("/",auth, authorize((["admin","manager"])), dateController.getAll);
router.get("/users",auth,authorize((["admin","manager"])), dateController.getDatesByArtist);
router.delete("/deleteDate/:id",auth,authorize((["admin","manager"])), dateController.delete);
export default router; 
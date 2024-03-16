import express from "express";
import { User } from "../models/User";
import { userController } from "../controllers/userController";

const router = express.Router();

//User routes
router.get("/profile", (req, res) => {
    res.send("Get profile");
});

router.put("/profile", (req, res) => {
    res.send("Upgrade profile");
});

router.get("/Dates", (req, res) => {
    res.send("Get Dates");
})

//Routes
router.post("/", userController.create);
router.get("/", userController.getAll);

//Protected routes (Admin, Manager)
router.get("/:id", userController.getById);
router.put("/:id", userController.update); 
router.delete("/:id", userController.delete);
router.get("/:id/dates",userController.getDatesByUserId);
router.put("/:id/role",userController.updateRole);


export default router;
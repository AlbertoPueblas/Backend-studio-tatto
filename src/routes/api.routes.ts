import express from "express";
import userRoutes from "./users.route";
import datesRoutes from "./dates.routes";
import jobRoutes from "./job.routes";
import authRoutes from "./auth.routes"

//------------------------------------------------------------------------------

const router = express.Router();

//Api routes
router.use("/auth", authRoutes)
router.use("/users", userRoutes);
router.use("/dates", datesRoutes);
router.use("/jobs", jobRoutes)

export default router;
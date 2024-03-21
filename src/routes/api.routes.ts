import express from "express";
import userRoutes from "./users.route";
import artistsRoutes from "./artists.routes";
import datesRoutes from "./dates.routes";
import jobRoutes from "./job.routes";
import authRoutes from "./auth.routes"

//------------------------------------------------------------------------------

const router = express.Router();

//Api routes
router.use("/auth", authRoutes)
router.use("/users", userRoutes);
router.use("/artists", artistsRoutes);
router.use("/dates", datesRoutes);
router.use("/job", jobRoutes)

export default router;
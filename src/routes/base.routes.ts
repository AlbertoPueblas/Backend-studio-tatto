import express, {Request, Response} from "express";

const router = express.Router();

//Base route
router.get("/", (req: Request, res: Response) => {
    res.send(`REST API server running on port ${process.env.PORT}`)
});

export default router;
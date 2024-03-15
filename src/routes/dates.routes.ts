import express from "express";


const router = express.Router();

//User routes
router.get("/", (req, res) => {
    res.send("Get dates");
});

router.get("/:id", (req, res) => {
    res.send("Get dates by id");
});

//Protected routes (Admin, Manager)
router.post("/:id", (req, res) => {
    res.send("post job");
});

router.put("/:id", (req, res) => {
    res.send("update dates");
});

router.delete("/:id", (req, res) => {
    res.send("update dates");
});

export default router;
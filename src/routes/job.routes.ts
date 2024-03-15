import express from "express";


const router = express.Router();

//User routes
router.get("/", (req, res) => {
    res.send("Get job");
});

router.get("/:id", (req, res) => {
    res.send("Get job by id");
});

//Protected routes (Admin, Manager)
router.post("/:id", (req, res) => {
    res.send("post job");
});

router.put("/:id", (req, res) => {
    res.send("update job");
});

router.delete("/:id", (req, res) => {
    res.send("delete job");
});

export default router;
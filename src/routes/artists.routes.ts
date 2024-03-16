import express from "express";


const router = express.Router();

//User routes
router.get("/", (req, res) => {
    res.send("Get tatto Artists");
});

router.get("/:id", (req, res) => {
    res.send("Get tatto Artists by id");
});

//Protected routes (Admin, Manager)
router.post("/:id", (req, res) => {
    res.send("Post tatto artists");
});

router.put("/:id", (req, res) => {
    res.send("update tatto artists");
});

router.delete("/:id", (req, res) => {
    res.send("delete tatto artists");
});

export default router;
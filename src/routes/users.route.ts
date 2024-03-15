import express from "express";

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


//Protected routes (Admin, Manager)
router.get("/", (req, res) => {
    res.send("Get users");
});

router.get("/:id", (req, res) => {
    res.send("Get users by id");
});

router.put("/:id", (req, res) => {
    res.send("Upgrade users");
});

router.delete("/:id", (req, res) => {
    res.send("Delete users");
});

router.get("/:id/dates", (req, res) => {
    res.send("Get users dates by id");
});

router.put("/:id/role", (req, res) => {
    res.send("Put users role by id");
});


export default router;
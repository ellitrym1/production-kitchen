const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.get("/", (req, res) => {
    res.redirect("/user/all");
});

router.get("/all", userController.getAllUsers);

router.get("/add", userController.addUser);

router.get("/:userID", userController.getUser);

router.get("/:userID/edit", userController.editUser);

router.get("/:userID/delete", userController.deleteUser);

module.exports = router;

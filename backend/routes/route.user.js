const express = require("express");
const userController = require("../controllers/controller.user")
const router = express.Router();

router.get("/users", userController.getUsers);
router.get("/users/:nameSurname", userController.getUsersFromNameSurname);
router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUserById);
router.delete("/users/:id", userController.deleteUserById);


module.exports = router;
const express = require("express");
const router = express.Router();

const {
  saveUser,
  getUserBYId,
  getUsers,
  deleteUser,
  updateUser,
} = require("../controllers/user");

router.post("/save-user", saveUser);
router.get("/getUser/:id", getUserBYId);
router.get("/users", getUsers);
router.delete("/remove-user/:id", deleteUser);
router.put("/update-user/:id", updateUser);

module.exports = router;
